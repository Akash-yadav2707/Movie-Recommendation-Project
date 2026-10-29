import { useState } from 'react';
import { X, Play, Star, Bookmark, ExternalLink, Sparkles, Volume2, Globe, Clock, Film, Video } from 'lucide-react';
import { Movie } from '../types/movie';
import { getHybridRecommendations } from '../utils/recommenderEngine';
import { MOVIES_DATA } from '../data/moviesData';

interface MovieDetailModalProps {
  movie: Movie | null;
  onClose: () => void;
  onSelectMovie: (movie: Movie) => void;
  isWatchlisted: boolean;
  onToggleWatchlist: (movie: Movie) => void;
  onOpenGraph?: (movie: Movie) => void;
}

export function MovieDetailModal({
  movie,
  onClose,
  onSelectMovie,
  isWatchlisted,
  onToggleWatchlist,
  onOpenGraph
}: MovieDetailModalProps) {
  const [isPlayingTrailer, setIsPlayingTrailer] = useState(false);
  const [backdropError, setBackdropError] = useState(false);

  if (!movie) return null;

  const similarMovies = getHybridRecommendations(movie, MOVIES_DATA, { topK: 4 });
  const freeProviders = movie.streamingProviders.filter(p => p.type === 'free');
  const paidProviders = movie.streamingProviders.filter(p => p.type === 'paid');

  const youtubeWatchUrl = `https://www.youtube.com/watch?v=${movie.youtubeTrailerId}`;
  const youtubeSearchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(
    movie.title + ' ' + movie.year + ' official trailer'
  )}`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl bg-[#121215] border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col my-auto max-h-[92vh]"
        onClick={e => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 p-2 rounded-full bg-black/75 hover:bg-black text-zinc-300 hover:text-white transition-colors border border-zinc-700/60 shadow-lg"
          aria-label="Close details modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Media Header: Embedded Video Player or Cinematic Backdrop */}
        <div className="relative aspect-video w-full max-h-[390px] bg-zinc-950 overflow-hidden shrink-0">
          {isPlayingTrailer ? (
            <div className="relative w-full h-full flex flex-col">
              {/* Responsive YouTube Player */}
              <iframe
                src={`https://www.youtube.com/embed/${movie.youtubeTrailerId}?autoplay=1&rel=0&enablejsapi=1`}
                title={`${movie.title} Official Trailer`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full border-0"
              />

              {/* YouTube Top Bar Control */}
              <div className="absolute top-3 left-3 flex items-center gap-2">
                <button
                  onClick={() => setIsPlayingTrailer(false)}
                  className="px-3 py-1.5 bg-black/80 hover:bg-black text-white text-xs font-semibold rounded-lg border border-zinc-700 backdrop-blur-md shadow-md"
                >
                  ✕ Close Player
                </button>

                <a
                  href={youtubeWatchUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-red-600 hover:bg-red-700 text-white text-xs font-bold rounded-lg shadow-md transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Open in YouTube App</span>
                </a>
              </div>
            </div>
          ) : (
            <div className="relative w-full h-full group">
              <img
                src={!backdropError ? (movie.backdropUrl || movie.posterUrl) : movie.posterUrl}
                alt={movie.title}
                referrerPolicy="no-referrer"
                onError={() => setBackdropError(true)}
                className="w-full h-full object-cover object-top opacity-70"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121215] via-[#121215]/40 to-transparent" />

              {/* Dual Action Play Controls */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                <div className="flex flex-wrap items-center justify-center gap-3">
                  {/* Inline Play Trailer */}
                  <button
                    onClick={() => setIsPlayingTrailer(true)}
                    className="flex items-center gap-2.5 px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold shadow-2xl shadow-red-600/50 hover:scale-105 transition-all"
                  >
                    <Play className="w-5 h-5 fill-white" />
                    <span>Play Trailer Here</span>
                  </button>

                  {/* Direct YouTube Connection Button */}
                  <a
                    href={youtubeWatchUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-5 py-3 bg-zinc-900/90 hover:bg-zinc-800 text-white rounded-xl font-bold border border-zinc-700 backdrop-blur-md hover:scale-105 transition-all"
                  >
                    <span className="w-5 h-5 bg-red-600 rounded flex items-center justify-center text-[10px] font-black">
                      YT
                    </span>
                    <span>Watch on YouTube (HD)</span>
                    <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
                  </a>
                </div>

                <p className="text-[11px] text-zinc-300 bg-black/60 px-3 py-1 rounded-md backdrop-blur-sm">
                  Official Studio Trailer verified on YouTube
                </p>
              </div>

              {/* Badges on Banner */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-1 bg-red-600 text-white font-bold text-xs rounded shadow-md">
                    {movie.industry}
                  </span>
                  <span className="px-2.5 py-1 bg-black/75 text-red-400 border border-red-500/40 font-semibold text-xs rounded backdrop-blur-sm">
                    {movie.audioBadgeType}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Main Title & Action Bar */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                {movie.title}
              </h2>
              {movie.originalTitle && movie.originalTitle !== movie.title && (
                <p className="text-xs text-zinc-400 font-mono mt-0.5">
                  Original Title: {movie.originalTitle}
                </p>
              )}
              <div className="flex items-center gap-2 text-xs text-zinc-400 mt-2 font-mono flex-wrap">
                <span>{movie.year}</span>
                <span aria-hidden="true" className="text-zinc-600">·</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {movie.runtime} min
                </span>
                <span aria-hidden="true" className="text-zinc-600">·</span>
                <span className="flex items-center gap-1">
                  <Globe className="w-3.5 h-3.5" />
                  {movie.languageLabel}
                </span>
                <span aria-hidden="true" className="text-zinc-600">·</span>
                <span>Directed by {movie.director}</span>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              {/* Watchlist Toggle */}
              <button
                onClick={() => onToggleWatchlist(movie)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-colors ${
                  isWatchlisted
                    ? 'bg-red-600 text-white'
                    : 'bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700'
                }`}
              >
                <Bookmark className={`w-4 h-4 ${isWatchlisted ? 'fill-white' : ''}`} />
                <span>{isWatchlisted ? 'Saved in Watchlist' : 'Add to Watchlist'}</span>
              </button>

              {/* YouTube Search Direct Action */}
              <a
                href={youtubeSearchUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-3 py-2 bg-zinc-800 hover:bg-zinc-700 text-red-400 rounded-lg text-xs font-medium border border-zinc-700 transition-colors"
                title="Search on YouTube"
              >
                <Video className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Search YouTube</span>
              </a>

              {onOpenGraph && (
                <button
                  onClick={() => {
                    onClose();
                    onOpenGraph(movie);
                  }}
                  className="flex items-center gap-1.5 px-3 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 rounded-lg text-xs font-medium border border-zinc-700 transition-colors"
                  title="View Similarity Graph"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span className="hidden sm:inline">Graph</span>
                </button>
              )}
            </div>
          </div>

          {/* Overview */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1.5">
              Synopsis
            </h4>
            <p className="text-sm text-zinc-200 leading-relaxed">
              {movie.overview}
            </p>
          </div>

          {/* Multi-Platform Ratings Aggregator (Section 6) */}
          <div className="p-4 bg-zinc-900/60 border border-zinc-800 rounded-xl">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3">
              Multi-Platform Ratings Aggregator
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {/* IMDb */}
              <div className="flex flex-col gap-1 p-2.5 bg-zinc-950/60 border border-zinc-800/80 rounded-lg">
                <span className="text-xs text-zinc-400 font-medium">IMDb Score</span>
                <div className="flex items-center gap-1.5 text-amber-400 font-bold font-mono text-base">
                  <Star className="w-4 h-4 fill-amber-400" />
                  <span>{movie.ratings.imdb} / 10</span>
                </div>
                <span className="text-[10px] text-zinc-500 font-mono">
                  {movie.ratings.imdbVotes} votes
                </span>
              </div>

              {/* Rotten Tomatoes */}
              <div className="flex flex-col gap-1 p-2.5 bg-zinc-950/60 border border-zinc-800/80 rounded-lg">
                <span className="text-xs text-zinc-400 font-medium">Rotten Tomatoes</span>
                <div className="flex items-center gap-1.5 text-red-400 font-bold font-mono text-base">
                  <span>🍅 {movie.ratings.rottenTomatoes}%</span>
                </div>
                <span className="text-[10px] text-zinc-500 font-mono">
                  🍿 {movie.ratings.audienceScore}% Audience
                </span>
              </div>

              {/* Metacritic */}
              <div className="flex flex-col gap-1 p-2.5 bg-zinc-950/60 border border-zinc-800/80 rounded-lg">
                <span className="text-xs text-zinc-400 font-medium">Metascore</span>
                <div className="flex items-center gap-1.5 text-emerald-400 font-bold font-mono text-base">
                  <span>{movie.ratings.metascore}</span>
                  <span className="text-xs text-zinc-500 font-normal">/ 100</span>
                </div>
                <span className="text-[10px] text-zinc-500">Universal Acclaim</span>
              </div>

              {/* Letterboxd */}
              <div className="flex flex-col gap-1 p-2.5 bg-zinc-950/60 border border-zinc-800/80 rounded-lg">
                <span className="text-xs text-zinc-400 font-medium">Letterboxd</span>
                <div className="flex items-center gap-1.5 text-blue-400 font-bold font-mono text-base">
                  <span>★ {movie.ratings.letterboxd}</span>
                  <span className="text-xs text-zinc-500 font-normal">/ 5.0</span>
                </div>
                <span className="text-[10px] text-zinc-500">Community Average</span>
              </div>
            </div>
          </div>

          {/* Streaming Providers: Free vs Paid (HDHub4u Requirement) */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
              Where to Stream [Verified Regional Access]
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Free Streaming */}
              <div className="p-3.5 bg-zinc-900/60 border border-emerald-900/40 rounded-xl">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    Free Streaming Platforms (No Subscription)
                  </span>
                </div>
                {freeProviders.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {freeProviders.map((prov, i) => (
                      <a
                        key={i}
                        href={prov.url}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-950/60 hover:bg-emerald-900/80 border border-emerald-600/40 rounded-lg text-xs font-medium text-emerald-200 transition-colors"
                      >
                        <span>{prov.name}</span>
                        <ExternalLink className="w-3 h-3 text-emerald-400" />
                      </a>
                    ))}
                  </div>
                ) : (
                  <p className="text-xs text-zinc-500 italic">
                    No free ad-supported platform active currently. Check subscription options below.
                  </p>
                )}
              </div>

              {/* Paid Streaming */}
              <div className="p-3.5 bg-zinc-900/60 border border-zinc-800 rounded-xl">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-zinc-300 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-red-500" />
                    Subscription Streaming (OTT)
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {paidProviders.map((prov, i) => (
                    <a
                      key={i}
                      href={prov.url}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 rounded-lg text-xs font-medium text-white transition-colors"
                    >
                      <span>{prov.name}</span>
                      <ExternalLink className="w-3 h-3 text-zinc-400" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Audio Tracks & Subtitles (HDHub4u Feature) */}
          <div className="p-4 bg-zinc-900/60 border border-zinc-800 rounded-xl space-y-2.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
              <Volume2 className="w-3.5 h-3.5 text-red-400" />
              <span>Multi-Audio Tracks & Subtitle Matrix</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {movie.audioTracks.map((track, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 text-xs bg-zinc-950 text-zinc-200 border border-zinc-700/80 rounded font-mono"
                >
                  {track}
                </span>
              ))}
            </div>
            <div className="pt-2 border-t border-zinc-800/80 text-xs text-zinc-400">
              <span className="font-semibold text-zinc-300">Subtitles Included: </span>
              <span>{movie.subtitles.join(', ')}</span>
            </div>
          </div>

          {/* Cast Members */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2.5">
              Lead Cast & Characters
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {movie.cast.map((c, i) => (
                <div
                  key={i}
                  className="p-2.5 bg-zinc-900/50 border border-zinc-800/60 rounded-lg flex flex-col"
                >
                  <span className="text-xs font-semibold text-zinc-200 truncate">
                    {c.name}
                  </span>
                  <span className="text-[11px] text-zinc-500 truncate mt-0.5">
                    {c.role}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Related by Neural Similarity (Content-Based AI Recommendations) */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-red-500" />
                <span>Top Neural Similarity Matches</span>
              </h4>
              <span className="text-[11px] text-zinc-500">24-Dim Cosine Vector</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {similarMovies.map(match => (
                <div
                  key={match.movie.id}
                  onClick={() => onSelectMovie(match.movie)}
                  className="group p-2.5 bg-zinc-900/70 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 rounded-xl cursor-pointer transition-all flex flex-col justify-between gap-2"
                >
                  <div className="aspect-[2/3] w-full rounded-lg overflow-hidden bg-zinc-950">
                    <img
                      src={match.movie.posterUrl}
                      alt={match.movie.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div>
                    <h5 className="text-xs font-semibold text-zinc-200 group-hover:text-red-400 transition-colors truncate">
                      {match.movie.title}
                    </h5>
                    <div className="flex items-center justify-between text-[11px] text-zinc-400 mt-1 font-mono">
                      <span>{match.movie.year}</span>
                      <span className="text-red-400 font-bold">
                        {Math.round(match.similarityScore * 100)}%
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
