import { useState, useEffect } from 'react';
import { Play, Sparkles, Bookmark, ChevronLeft, ChevronRight, Star, Volume2, ExternalLink } from 'lucide-react';
import { Movie } from '../types/movie';

interface HeroBannerProps {
  movies: Movie[];
  onSelectMovie: (movie: Movie) => void;
  onExploreSimilar: (movie: Movie) => void;
  isWatchlisted: (movieId: string) => boolean;
  onToggleWatchlist: (movie: Movie) => void;
}

export function HeroBanner({
  movies,
  onSelectMovie,
  onExploreSimilar,
  isWatchlisted,
  onToggleWatchlist
}: HeroBannerProps) {
  const featuredMovies = movies.filter(m => m.isFeatured || m.ratings.imdb >= 8.5).slice(0, 5);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [backdropFailed, setBackdropFailed] = useState(false);

  const activeMovie = featuredMovies[currentIndex] || movies[0];

  useEffect(() => {
    setBackdropFailed(false);
  }, [currentIndex]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % featuredMovies.length);
    }, 9000);
    return () => clearInterval(timer);
  }, [featuredMovies.length]);

  if (!activeMovie) return null;

  const inWatchlist = isWatchlisted(activeMovie.id);
  const youtubeUrl = `https://www.youtube.com/watch?v=${activeMovie.youtubeTrailerId}`;

  return (
    <section className="relative w-full min-h-[460px] md:min-h-[540px] flex items-center justify-between overflow-hidden bg-zinc-950 border-b border-zinc-800">
      {/* Background Backdrop with Cinema Scrim */}
      <div className="absolute inset-0">
        <img
          src={!backdropFailed ? (activeMovie.backdropUrl || activeMovie.posterUrl) : activeMovie.posterUrl}
          alt={activeMovie.title}
          referrerPolicy="no-referrer"
          onError={() => setBackdropFailed(true)}
          className="w-full h-full object-cover object-top opacity-35 sm:opacity-45 scale-105 transition-all duration-1000 ease-out"
        />
        {/* Measured dark cinema gradients for WCAG AA readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0e0e11] via-[#0e0e11]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e11] via-transparent to-[#0e0e11]/50" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 py-12 md:py-16 w-full flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-2xl flex flex-col gap-4">
          {/* Metadata Row */}
          <div className="flex flex-wrap items-center gap-2.5 text-xs text-zinc-300">
            <span className="px-2 py-0.5 bg-red-600/90 text-white rounded font-bold uppercase tracking-wider text-[11px]">
              {activeMovie.industry}
            </span>

            <span className="px-2 py-0.5 bg-zinc-900/90 text-red-400 border border-red-500/30 rounded font-semibold text-[11px] flex items-center gap-1">
              <Volume2 className="w-3 h-3" />
              {activeMovie.audioBadgeType === 'Dual Audio' ? 'Dual Audio [Hindi+Eng]' : `${activeMovie.audioTracks.length} Audio Tracks`}
            </span>

            <div className="flex items-center gap-1 text-amber-400 font-bold font-mono">
              <Star className="w-3.5 h-3.5 fill-amber-400" />
              <span>{activeMovie.ratings.imdb}</span>
              <span className="text-zinc-400 font-normal">({activeMovie.ratings.imdbVotes})</span>
            </div>

            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span className="font-mono">{activeMovie.year}</span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span className="font-mono">{activeMovie.runtime} mins</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight font-display text-balance">
            {activeMovie.title}
          </h1>

          {/* Tagline */}
          {activeMovie.tagline && (
            <p className="text-sm sm:text-base font-medium text-red-400/90 italic">
              "{activeMovie.tagline}"
            </p>
          )}

          {/* Overview */}
          <p className="text-sm text-zinc-300 line-clamp-3 sm:line-clamp-4 leading-relaxed max-w-xl">
            {activeMovie.overview}
          </p>

          {/* Primary Action Controls */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {/* Modal Trailer & Details */}
            <button
              onClick={() => onSelectMovie(activeMovie)}
              className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-red-600 hover:bg-red-700 rounded-lg shadow-lg shadow-red-600/30 transition-all hover:scale-105"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>Watch Trailer & Details</span>
            </button>

            {/* Direct YouTube Connection Button */}
            <a
              href={youtubeUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 rounded-lg transition-all hover:scale-105"
            >
              <span className="px-1.5 py-0.2 bg-red-600 text-white text-[10px] font-black rounded">
                YT
              </span>
              <span>Watch on YouTube</span>
              <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
            </a>

            {/* Semantic Match */}
            <button
              onClick={() => onExploreSimilar(activeMovie)}
              className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-zinc-200 bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-700/80 rounded-lg backdrop-blur-sm transition-colors"
            >
              <Sparkles className="w-4 h-4 text-red-400" />
              <span className="hidden sm:inline">Find Similar</span>
            </button>

            {/* Watchlist Toggle */}
            <button
              onClick={() => onToggleWatchlist(activeMovie)}
              className={`p-2.5 rounded-lg border backdrop-blur-sm transition-colors ${
                inWatchlist
                  ? 'bg-red-600 border-red-500 text-white'
                  : 'bg-zinc-900/80 border-zinc-700/80 text-zinc-300 hover:text-white hover:bg-zinc-800'
              }`}
              title={inWatchlist ? 'Remove from Watchlist' : 'Add to Watchlist'}
            >
              <Bookmark className={`w-4 h-4 ${inWatchlist ? 'fill-white' : ''}`} />
            </button>
          </div>
        </div>

        {/* Right Preview Card / Carousel Indicators */}
        <div className="hidden lg:flex flex-col items-end gap-4">
          <div
            onClick={() => onSelectMovie(activeMovie)}
            className="w-64 aspect-[2/3] rounded-xl overflow-hidden border-2 border-zinc-700 shadow-2xl cursor-pointer hover:border-red-500 transition-all hover:scale-105 relative group"
          >
            <img
              src={activeMovie.posterUrl}
              alt={activeMovie.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-xs font-semibold text-white px-3 py-1.5 bg-red-600 rounded-md">
                Quick View
              </span>
            </div>
          </div>

          {/* Stepper Dots & Arrows */}
          <div className="flex items-center gap-3">
            <button
              onClick={() =>
                setCurrentIndex(prev => (prev === 0 ? featuredMovies.length - 1 : prev - 1))
              }
              className="p-1.5 rounded-md bg-zinc-900/80 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
              aria-label="Previous featured movie"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-1.5">
              {featuredMovies.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-1.5 rounded-full transition-all ${
                    idx === currentIndex ? 'w-6 bg-red-500' : 'w-2 bg-zinc-700 hover:bg-zinc-500'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() =>
                setCurrentIndex(prev => (prev + 1) % featuredMovies.length)
              }
              className="p-1.5 rounded-md bg-zinc-900/80 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
              aria-label="Next featured movie"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
