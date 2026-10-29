"""
CineVerse AI: Multi-Lingual Hybrid Movie Recommendation Engine
Data Science Capstone Project
Module: recommender.py
"""

import numpy as np
import pandas as pd
from typing import List, Dict, Any, Optional

try:
    import faiss
    FAISS_AVAILABLE = True
except ImportError:
    FAISS_AVAILABLE = False
    print("[!] faiss-cpu not installed, falling back to scikit-learn cosine similarity.")

class HybridRecommender:
    def __init__(self, movies_df: pd.DataFrame, feature_matrix: np.ndarray):
        self.df = movies_df.reset_index(drop=True)
        self.feature_matrix = feature_matrix.astype('float32')
        self.index = None
        self._build_index()

    def _build_index(self):
        """Builds an exact Inner Product (Cosine) FAISS Index."""
        dim = self.feature_matrix.shape[1]
        if FAISS_AVAILABLE:
            self.index = faiss.IndexFlatIP(dim)
            self.index.add(self.feature_matrix)
            print(f"[+] FAISS Index built with {self.index.ntotal} vectors of dimension {dim}.")
        else:
            self.index = None

    def get_recommendations(
        self,
        movie_id: str,
        top_k: int = 10,
        language_filter: Optional[str] = None,
        streaming_filter: Optional[str] = None
    ) -> List[Dict[str, Any]]:
        """
        Retrieves top K similar movies using Cosine Similarity on feature vectors,
        applying multi-language and streaming accessibility constraints.
        """
        match_idx = self.df.index[self.df['id'] == movie_id].tolist()
        if not match_idx:
            raise ValueError(f"Movie ID '{movie_id}' not found in dataset.")
        
        target_idx = match_idx[0]
        target_vec = self.feature_matrix[target_idx:target_idx+1]
        
        if FAISS_AVAILABLE and self.index is not None:
            scores, indices = self.index.search(target_vec, k=min(top_k * 4, len(self.df)))
            scores = scores[0]
            indices = indices[0]
        else:
            scores = np.dot(self.feature_matrix, target_vec.T).flatten()
            indices = np.argsort(scores)[::-1]
            scores = scores[indices]

        recommendations = []
        target_movie = self.df.iloc[target_idx]
        
        for idx, score in zip(indices, scores):
            if idx == target_idx:
                continue
            
            candidate = self.df.iloc[idx]
            
            if language_filter and candidate['primary_language'] != language_filter:
                continue
            if streaming_filter and streaming_filter not in str(candidate.get('streamingProviders', '')):
                continue

            shared_genres = set(target_movie.get('genres', [])).intersection(candidate.get('genres', []))
            same_director = (target_movie.get('director') == candidate.get('director'))
            
            explanation = f"{score*100:.1f}% Match"
            if same_director:
                explanation += f" (Both directed by {candidate.get('director')})"
            elif shared_genres:
                explanation += f" (Shared: {', '.join(shared_genres)})"

            recommendations.append({
                "movie_id": candidate['id'],
                "title": candidate['title'],
                "similarity_score": float(score),
                "explanation": explanation,
                "ratings": candidate.get('ratings', {}),
                "primary_language": candidate.get('primary_language', 'en')
            })

            if len(recommendations) >= top_k:
                break

        return recommendations

    @staticmethod
    def calculate_mrr(ground_truth_relevance: List[List[int]]) -> float:
        """Mean Reciprocal Rank (MRR) evaluation."""
        reciprocal_ranks = []
        for ranked_list in ground_truth_relevance:
            for rank, is_rel in enumerate(ranked_list, start=1):
                if is_rel:
                    reciprocal_ranks.append(1.0 / rank)
                    break
            else:
                reciprocal_ranks.append(0.0)
        return float(np.mean(reciprocal_ranks))

    @staticmethod
    def calculate_ndcg_at_k(actual_ranks: List[int], k: int = 10) -> float:
        """Normalized Discounted Cumulative Gain at K (NDCG@K)."""
        actual_ranks = actual_ranks[:k]
        dcg = sum([rel / np.log2(idx + 2) for idx, rel in enumerate(actual_ranks)])
        ideal_ranks = sorted(actual_ranks, reverse=True)
        idcg = sum([rel / np.log2(idx + 2) for idx, rel in enumerate(ideal_ranks)])
        return float(dcg / idcg) if idcg > 0 else 0.0

if __name__ == "__main__":
    print("[+] CineVerse Hybrid Recommender Initialized.")
