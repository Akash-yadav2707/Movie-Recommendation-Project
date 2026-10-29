export type LanguageCode = 'en' | 'hi' | 'ta' | 'te' | 'es' | 'ko' | 'ja' | 'fr' | 'ml';

export interface CastMember {
  name: string;
  role: string;
  avatarUrl?: string;
}

export interface StreamingProvider {
  name: string;
  type: 'free' | 'paid';
  url: string;
  logoUrl?: string;
  quality?: string; // '4K UHD' | '1080p'
}

export interface MovieRatings {
  imdb: number;
  imdbVotes: string;
  rottenTomatoes: number; // percentage
  audienceScore: number; // percentage
  metascore: number;
  letterboxd: number; // out of 5
}

export interface Movie {
  id: string;
  tmdbId?: number;
  title: string;
  originalTitle?: string;
  tagline: string;
  year: number;
  runtime: number; // in minutes
  primaryLanguage: LanguageCode;
  languageLabel: string;
  audioTracks: string[]; // e.g. ["Hindi [Original]", "English [Dual Audio]"]
  subtitles: string[];
  audioBadgeType: 'Dual Audio' | 'Multi-Audio' | 'Original' | 'Dubbed';
  genres: string[];
  director: string;
  cast: CastMember[];
  overview: string;
  moodTags: string[];
  ratings: MovieRatings;
  posterUrl: string;
  backdropUrl: string;
  youtubeTrailerId: string;
  streamingProviders: StreamingProvider[];
  vectorEmbedding: number[]; // 24-dimensional normalized semantic vector
  pcaCoordinates: [number, number]; // [x, y] coordinates in 2D space (-1 to 1)
  keywords: string[];
  industry: 'Hollywood' | 'Bollywood' | 'South Indian / Pan-India' | 'World Cinema';
  isTrending?: boolean;
  isFeatured?: boolean;
}

export interface RecommendationMatch {
  movie: Movie;
  similarityScore: number; // 0 to 1
  sharedGenres: string[];
  sharedKeywords: string[];
  reason: string;
}

export interface FilterState {
  searchQuery: string;
  language: 'all' | LanguageCode;
  audioBadge: 'all' | 'Dual Audio' | 'Multi-Audio' | 'Original';
  streamingType: 'all' | 'free' | 'paid';
  genre: string;
  mood: string;
  director: string;
  minImdb: number;
  maxRuntime: number;
  industry: 'all' | 'Hollywood' | 'Bollywood' | 'South Indian / Pan-India' | 'World Cinema';
  sortBy: 'similarity' | 'imdb' | 'year' | 'runtime' | 'title';
}

export interface GraphNode {
  id: string;
  title: string;
  movie: Movie;
  x: number;
  y: number;
  industry: string;
}

export interface GraphEdge {
  source: string;
  target: string;
  similarity: number;
}

export interface Playlist {
  id: string;
  name: string;
  description: string;
  movieIds: string[];
  createdAt: string;
}
