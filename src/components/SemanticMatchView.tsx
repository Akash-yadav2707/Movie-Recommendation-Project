import { useState } from 'react';
import { Sparkles, ArrowRight, Star, Globe, Cpu, Info } from 'lucide-react';
import { Movie } from '../types/movie';
import { getHybridRecommendations } from '../utils/recommenderEngine';
import { MovieCard } from './MovieCard';

interface SemanticMatchViewProps {
  movies: Movie[];
  selectedTargetMovie: Movie;
  onSelectTargetMovie: (movie: Movie) => void;
  onOpenMovieModal: (movie: Movie) => void;
  isWatchlisted: (movieId: string) => boolean;
  onToggleWatchlist: (movie: Movie) => void;
}

export function SemanticMatchView({
  movies,
  selectedTargetMovie,
  onSelectTargetMovie,
  onOpenMovieModal,
  isWatchlisted,
  onToggleWatchlist
}: SemanticMatchViewProps) {
  const [crossLingualOnly, setCrossLingualOnly] = useState(false);

  // Compute recommendations
  const allRecommendations = getHybridRecommendations(selectedTargetMovie, movies, {
    topK: 12
  });

  const filteredRecs = crossLingualOnly
    ? allRecommendations.filter(r => r.movie.primaryLanguage !== selectedTargetMovie.primaryLanguage)
    : allRecommendations;

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Title & Introduction Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 p-6 bg-gradient-to-r from-zinc-950 via-[#141418] to-zinc-950 border border-zinc-800 rounded-2xl">
        <div className="max-w-2xl space-y-2">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-red-500">
            <Cpu className="w-4 h-4" />
            <span>Content-Based Semantic Recommender (24-Dimensional Vector Space)</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
            Find Thematic & Stylistic Twins
          </h2>
          <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
            Select any title from Hollywood, Bollywood, or International cinema. Our engine performs L2-normalized cosine vector similarity matching across thematic plots, directorial signatures, genres, and mood archetypes.
          </p>
        </div>

        {/* Source Movie Selector Dropdown */}
        <div className="w-full md:w-80 shrink-0">
          <label className="block text-xs font-semibold text-zinc-300 mb-1.5">
            Select Seed / Reference Movie:
          </label>
          <select
            value={selectedTargetMovie.id}
            onChange={e => {
              const found = movies.find(m => m.id === e.target.value);
              if (found) onSelectTargetMovie(found);
            }}
            className="w-full text-xs font-medium bg-zinc-900 border border-zinc-700 rounded-xl px-3.5 py-2.5 text-white focus:outline-none focus:border-red-500"
          >
            {movies.map(m => (
              <option key={m.id} value={m.id}>
                {m.title} ({m.year}) - [{m.industry}]
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Seed Movie Spotlight Card */}
      <div className="p-5 sm:p-6 bg-[#131316] border border-zinc-800 rounded-2xl flex flex-col md:flex-row items-center gap-6">
        <div className="w-28 sm:w-36 aspect-[2/3] rounded-xl overflow-hidden shadow-lg border border-zinc-700 shrink-0">
          <img
            src={selectedTargetMovie.posterUrl}
            alt={selectedTargetMovie.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="space-y-3 flex-1 text-center md:text-left">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 text-xs">
            <span className="px-2 py-0.5 bg-red-600 text-white font-bold rounded text-[11px]">
              {selectedTargetMovie.industry}
            </span>
            <span className="px-2 py-0.5 bg-zinc-800 text-zinc-300 rounded font-mono text-[11px]">
              {selectedTargetMovie.languageLabel}
            </span>
            <div className="flex items-center gap-1 text-amber-400 font-mono font-bold">
              <Star className="w-3.5 h-3.5 fill-amber-400" />
              <span>{selectedTargetMovie.ratings.imdb}</span>
            </div>
            <span className="text-zinc-500 font-mono">· {selectedTargetMovie.runtime}m</span>
          </div>

          <h3 className="text-2xl font-bold text-white font-display">
            {selectedTargetMovie.title}
          </h3>

          <p className="text-xs sm:text-sm text-zinc-300 line-clamp-2 max-w-3xl">
            {selectedTargetMovie.overview}
          </p>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-1.5 pt-1">
            {selectedTargetMovie.genres.map(g => (
              <span key={g} className="px-2 py-0.5 bg-zinc-900 border border-zinc-700/60 rounded text-[11px] text-zinc-400">
                {g}
              </span>
            ))}
            {selectedTargetMovie.moodTags.map(m => (
              <span key={m} className="px-2 py-0.5 bg-red-950/60 text-red-300 border border-red-800/40 rounded text-[11px]">
                {m}
              </span>
            ))}
          </div>
        </div>

        {/* Cross-Lingual Discovery Toggle Button */}
        <div className="shrink-0 flex flex-col items-center gap-2 p-3 bg-zinc-900/60 border border-zinc-800 rounded-xl">
          <button
            onClick={() => setCrossLingualOnly(!crossLingualOnly)}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-semibold transition-all ${
              crossLingualOnly
                ? 'bg-red-600 text-white shadow-md shadow-red-600/30'
                : 'bg-zinc-800 text-zinc-300 hover:text-white'
            }`}
          >
            <Globe className="w-3.5 h-3.5" />
            <span>Cross-Lingual Only</span>
          </button>
          <span className="text-[10px] text-zinc-400 text-center max-w-[140px]">
            {crossLingualOnly ? 'Showing other languages' : 'Bridge Hollywood & Indian Cinema'}
          </span>
        </div>
      </div>

      {/* Recommended Titles Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-red-500" />
            <h3 className="text-lg sm:text-xl font-bold text-white font-display">
              Recommended for Fans of "{selectedTargetMovie.title}"
            </h3>
          </div>
          <span className="text-xs font-mono text-zinc-400">
            {filteredRecs.length} ranked matches
          </span>
        </div>

        {/* Explainability Callout */}
        <div className="flex items-start gap-2.5 p-3.5 bg-red-950/20 border border-red-900/30 rounded-xl text-xs text-red-300">
          <Info className="w-4 h-4 shrink-0 text-red-400 mt-0.5" />
          <p>
            Ranked by <strong className="text-white">Cosine Similarity $\cos(\theta)$</strong> between 24-dimensional normalized latent feature vectors, incorporating genre Jaccard overlap and director styling bonuses.
          </p>
        </div>

        {/* Grid of Results */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
          {filteredRecs.map(({ movie, similarityScore, reason }) => (
            <div key={movie.id} className="flex flex-col gap-1.5">
              <MovieCard
                movie={movie}
                onSelect={onOpenMovieModal}
                onFindSimilar={m => onSelectTargetMovie(m)}
                isWatchlisted={isWatchlisted(movie.id)}
                onToggleWatchlist={onToggleWatchlist}
                similarityScore={similarityScore}
              />
              <span className="text-[10px] text-zinc-400 truncate px-1" title={reason}>
                {reason}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
