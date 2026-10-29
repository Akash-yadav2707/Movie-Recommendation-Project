"""
CineVerse AI: Multi-Lingual Hybrid Movie Recommendation Engine
Data Science Capstone Project
Module: data_preprocessing.py
"""

import os
import re
import pickle
import numpy as np
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.preprocessing import normalize
from typing import Dict, List, Tuple

class MovieDataPreprocessor:
    def __init__(self, raw_data_path: str = "data/raw_movies.json"):
        self.raw_data_path = raw_data_path
        self.tfidf_vectorizer = TfidfVectorizer(
            max_features=5000,
            stop_words='english',
            ngram_range=(1, 2)
        )
        self.processed_df = None
        self.feature_matrix = None

    def clean_text(self, text: str) -> str:
        """Removes punctuation, HTML tags, and standardizes multi-lingual spacing."""
        if not text or pd.isna(text):
            return ""
        text = re.sub(r'<.*?>', '', str(text))
        text = re.sub(r'[^a-zA-Z0-9\s]', ' ', text)
        return text.lower().strip()

    def process_metadata(self, df: pd.DataFrame) -> pd.DataFrame:
        """Extracts structured metadata, audio tags, and combined content soup."""
        print("[*] Preprocessing multi-lingual movie metadata...")
        
        # 1. Standardize language tags
        df['primary_language'] = df['primaryLanguage'].fillna('en').str.lower()
        
        # 2. HDHub4u-style Audio & Dubbing classification
        def categorize_audio(row):
            tracks = row.get('audioTracks', [])
            if len(tracks) > 2:
                return 'Multi-Audio'
            elif len(tracks) == 2:
                return 'Dual Audio'
            return 'Original'
        
        df['audio_category'] = df.apply(categorize_audio, axis=1)
        
        # 3. Construct dense weighted content soup for NLP vectorization
        def create_soup(row):
            genres = " ".join([g.replace(" ", "") for g in row.get('genres', [])]) * 3
            director = (row.get('director', '') or '').replace(" ", "") * 2
            cast = " ".join([c['name'].replace(" ", "") for c in row.get('cast', [])[:4]]) * 2
            moods = " ".join([m.replace(" ", "") for m in row.get('moodTags', [])]) * 2
            keywords = " ".join(row.get('keywords', [])) * 2
            overview = self.clean_text(row.get('overview', ''))
            return f"{genres} {director} {cast} {moods} {keywords} {overview}"

        df['content_soup'] = df.apply(create_soup, axis=1)
        return df

    def compute_embeddings(self, df: pd.DataFrame) -> np.ndarray:
        """Builds normalized TF-IDF feature vectors optimized for low RAM."""
        print("[*] Vectorizing content soup using TF-IDF...")
        tfidf_matrix = self.tfidf_vectorizer.fit_transform(df['content_soup'])
        normalized_matrix = normalize(tfidf_matrix.toarray(), norm='l2', axis=1)
        return normalized_matrix

    def export_artifacts(self, output_dir: str = "artifacts/"):
        """Exports preprocessed data and vectors for zero-latency runtime loading."""
        os.makedirs(output_dir, exist_ok=True)
        if self.processed_df is not None:
            self.processed_df.to_parquet(os.path.join(output_dir, "movies_cleaned.parquet"))
            with open(os.path.join(output_dir, "feature_matrix.pkl"), "wb") as f:
                pickle.dump(self.feature_matrix, f, protocol=pickle.HIGHEST_PROTOCOL)
            with open(os.path.join(output_dir, "tfidf_vectorizer.pkl"), "wb") as f:
                pickle.dump(self.tfidf_vectorizer, f)
            print(f"[+] Artifacts successfully exported to {output_dir}")

if __name__ == "__main__":
    preprocessor = MovieDataPreprocessor()
    print("[+] CineVerse Data Preprocessing Pipeline Initialized.")
