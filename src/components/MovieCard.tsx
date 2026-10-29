import { useState } from 'react';
import { Star, Bookmark, Play, Sparkles, Film, ExternalLink } from 'lucide-react';
import { Movie } from '../types/movie';

interface MovieCardProps {
  movie: Movie;
  onSelect: (movie: Movie) => void;
  onFindSimilar?: (movie: Movie) => void;
  onWatchTrailer?: (movie: Movie) => void;
  isWatchlisted: boolean;
  onToggleWatchlist: (movie: Movie) => void;
  similarityScore?: number;
}

export function MovieCard({
  movie,
  onSelect,
  onFindSimilar,
  onWatchTrailer,
  isWatchlisted,
  onToggleWatchlist,
  similarityScore
}: MovieCardProps) {
  const [imgError, setImgError] = useState(false);

  const hasFree = movie.streamingProviders.some(p => p.type === 'free');
  const mainPaid = movie.streamingProviders.find(p => p.type === 'paid');

  // Format audio label
  const audioText =
    movie.audioBadgeType === 'Dual Audio'
      ? 'Dual Audio [Hindi+Eng]'
      : movie.audioBadgeType === 'Multi-Audio'
      ? `${movie.audioTracks.length} Audios`
      : movie.languageLabel;

  // Background styling for image fallback based on industry
  const getIndustryGradient = (ind: string) => {
    switch (ind) {
      case 'Hollywood':
        return 'from-blue-950 via-slate-900 to-zinc-950';
      case 'Bollywood':
        return 'from-amber-950 via-red-950 to-zinc-950';
      case 'South Indian / Pan-India':
        return 'from-emerald-950 via-teal-950 to-zinc-950';
      case 'World Cinema':
        return 'from-purple-950 via-indigo-950 to-zinc-950';
      default:
        return 'from-zinc-900 via-zinc-900 to-black';
    }
  };

  return (
    <div
      onClick={() => onSelect(movie)}
      className="group relative bg-[#151518] border border-zinc-800/80 hover:border-zinc-700 rounded-xl overflow-hidden cursor-pointer flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50"
    >
      {/* Poster Image Container */}
      <div className="relative aspect-[2/3] w-full overflow-hidden bg-zinc-900">
        {!imgError ? (
          <img
            src={movie.posterUrl}
            alt={movie.title}
            referrerPolicy="no-referrer"
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={() => setImgError(true)}
          />
        ) : (
          /* High-Fidelity Styled Poster Fallback: Zero Broken Frames */
          <div className={`w-full h-full flex flex-col justify-between p-4 bg-gradient-to-b ${getIndustryGradient(movie.industry)} text-left select-none`}>
            <div className="flex items-center justify-between text-xs text-zinc-400">
              <span className="font-bold text-red-500 uppercase tracking-widest text-[10px]">
                {movie.industry}
              </span>
              <Film className="w-4 h-4 text-zinc-500" />
            </div>

            <div className="space-y-1">
              <h4 className="font-extrabold text-base text-white font-display leading-tight line-clamp-3">
                {movie.title}
              </h4>
              <p className="text-xs text-zinc-400 font-mono">
                Dir: {movie.director}
              </p>
            </div>

            <div className="pt-2 border-t border-zinc-700/40 flex items-center justify-between text-[11px] font-mono text-zinc-400">
              <span>{movie.year}</span>
              <span className="text-amber-400 font-bold">★ {movie.ratings.imdb}</span>
            </div>
          </div>
        )}

        {/* Top Badges: Similarity Score or Rating */}
        <div className="absolute top-2.5 left-2.5 right-2.5 flex items-center justify-between pointer-events-none">
          {similarityScore !== undefined ? (
            <div className="px-2 py-0.5 bg-red-600/90 text-white rounded text-[11px] font-bold font-mono shadow-md backdrop-blur-sm">
              {Math.round(similarityScore * 100)}% Match
            </div>
          ) : (
            <div className="flex items-center gap-1 px-1.5 py-0.5 bg-black/70 backdrop-blur-md text-amber-400 rounded text-[11px] font-mono font-bold">
              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
              <span>{movie.ratings.imdb}</span>
            </div>
          )}

          {/* Bookmark Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onToggleWatchlist(movie);
            }}
            className={`pointer-events-auto p-1.5 rounded-md backdrop-blur-md transition-colors ${
              isWatchlisted
                ? 'bg-red-600 text-white shadow-md'
                : 'bg-black/60 text-zinc-300 hover:text-white hover:bg-black/80'
            }`}
            title={isWatchlisted ? 'Remove from Watchlist' : 'Add to Watchlist'}
          >
            <Bookmark className={`w-3.5 h-3.5 ${isWatchlisted ? 'fill-white' : ''}`} />
          </button>
        </div>

        {/* HDHub4u Audio & Free Streaming Badges */}
        <div className="absolute bottom-2.5 left-2.5 right-2.5 flex flex-wrap items-center gap-1.5 pointer-events-none">
          {/* Audio Badge */}
          <span className="px-1.5 py-0.5 text-[10px] font-semibold bg-zinc-950/85 text-red-400 border border-red-500/30 rounded backdrop-blur-sm">
            {audioText}
          </span>

          {/* Free vs Paid streaming provider badge */}
          {hasFree ? (
            <span className="px-1.5 py-0.5 text-[10px] font-semibold bg-emerald-950/85 text-emerald-400 border border-emerald-500/30 rounded backdrop-blur-sm">
              Free Stream
            </span>
          ) : mainPaid ? (
            <span className="px-1.5 py-0.5 text-[10px] font-semibold bg-zinc-950/85 text-zinc-300 border border-zinc-700/60 rounded backdrop-blur-sm">
              {mainPaid.name}
            </span>
          ) : null}
        </div>

        {/* Hover Quick Action Overlay with YouTube Trailer Play */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2 p-3">
          <div className="w-11 h-11 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg shadow-red-600/50 transform scale-90 group-hover:scale-100 transition-transform">
            <Play className="w-5 h-5 fill-white ml-0.5" />
          </div>

          <span className="text-[11px] font-bold text-white bg-black/80 px-2.5 py-1 rounded-md border border-zinc-700 backdrop-blur-sm flex items-center gap-1">
            <span>Watch Trailer & Details</span>
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-3.5 flex flex-col flex-1 justify-between gap-2.5">
        <div>
          <h3 className="font-semibold text-sm text-zinc-100 group-hover:text-red-400 transition-colors line-clamp-1">
            {movie.title}
          </h3>

          {/* Unboxed Metadata with typographic separators */}
          <div className="flex items-center gap-1.5 text-xs text-zinc-400 mt-1 font-mono">
            <span>{movie.year}</span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span>{movie.runtime}m</span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span className="truncate">{movie.genres[0]}</span>
          </div>
        </div>

        {/* Bottom Bar: Director, Trailer & Similar CTA */}
        <div className="pt-2 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-400">
          <span className="truncate max-w-[100px] sm:max-w-[120px] text-zinc-400" title={movie.director}>
            {movie.director}
          </span>

          <div className="flex items-center gap-2">
            {/* Direct YouTube Trailer Icon Link */}
            <a
              href={`https://www.youtube.com/watch?v=${movie.youtubeTrailerId}`}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1 text-[11px] font-semibold text-red-500 hover:text-red-400 transition-colors"
              title="Watch official trailer on YouTube"
            >
              <span className="px-1 py-0.2 bg-red-600 text-white text-[9px] font-bold rounded">YT</span>
            </a>

            {onFindSimilar && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onFindSimilar(movie);
                }}
                className="flex items-center gap-1 text-[11px] font-medium text-amber-400 hover:text-amber-300 transition-colors"
                title="Find movies with similar semantic embedding"
              >
                <Sparkles className="w-3 h-3" />
                <span>Similar</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
