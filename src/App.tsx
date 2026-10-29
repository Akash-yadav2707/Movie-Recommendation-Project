import { useState, useEffect, useMemo } from 'react';
import { Header } from './components/Header';
import { HeroBanner } from './components/HeroBanner';
import { CategoryCarousel } from './components/CategoryCarousel';
import { MovieCard } from './components/MovieCard';
import { MovieDetailModal } from './components/MovieDetailModal';
import { MovieDeciderFilter } from './components/MovieDeciderFilter';
import { SemanticMatchView } from './components/SemanticMatchView';
import { SimilarityGraphView } from './components/SimilarityGraphView';
import { SurpriseMeWheel } from './components/SurpriseMeWheel';
import { DataScienceMetricsModal } from './components/DataScienceMetricsModal';
import { WatchlistDrawer } from './components/WatchlistDrawer';
import { CapstoneDocsModal } from './components/CapstoneDocsModal';

import { Movie, FilterState } from './types/movie';
import { MOVIES_DATA, CATEGORY_CAROUSELS } from './data/moviesData';
import { filterMovies } from './utils/recommenderEngine';
import { Sparkles, Film, SlidersHorizontal } from 'lucide-react';

const INITIAL_FILTERS: FilterState = {
  searchQuery: '',
  language: 'all',
  audioBadge: 'all',
  streamingType: 'all',
  genre: 'all',
  mood: 'all',
  director: '',
  minImdb: 6.5,
  maxRuntime: 240,
  industry: 'all',
  sortBy: 'imdb'
};

export default function App() {
  const [activeTab, setActiveTab] = useState<'explore' | 'semantic' | 'wheel' | 'graph' | 'metrics'>('explore');
  const [filters, setFilters] = useState<FilterState>(INITIAL_FILTERS);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [semanticTargetMovie, setSemanticTargetMovie] = useState<Movie>(MOVIES_DATA[0]);
  const [graphCenterMovie, setGraphCenterMovie] = useState<Movie>(MOVIES_DATA[0]);

  // Modals & Drawers
  const [isWatchlistOpen, setIsWatchlistOpen] = useState(false);
  const [isCapstoneDocsOpen, setIsCapstoneDocsOpen] = useState(false);
  const [showFilterMatrix, setShowFilterMatrix] = useState(false);

  // Watchlist LocalStorage Persistence
  const [watchlistIds, setWatchlistIds] = useState<string[]>(() => {
    if (typeof window === 'undefined') return ['inception-2010', 'rrr-2022', '3-idiots-2009'];
    try {
      const saved = localStorage.getItem('cineverse_watchlist');
      return saved ? JSON.parse(saved) : ['inception-2010', 'rrr-2022', '3-idiots-2009'];
    } catch {
      return ['inception-2010', 'rrr-2022', '3-idiots-2009'];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('cineverse_watchlist', JSON.stringify(watchlistIds));
    } catch {
      // LocalStorage error handling
    }
  }, [watchlistIds]);

  const toggleWatchlist = (movie: Movie) => {
    setWatchlistIds(prev =>
      prev.includes(movie.id) ? prev.filter(id => id !== movie.id) : [...prev, movie.id]
    );
  };

  const isWatchlisted = (movieId: string) => watchlistIds.includes(movieId);

  const watchlistedMovies = useMemo(() => {
    return MOVIES_DATA.filter(m => watchlistIds.includes(m.id));
  }, [watchlistIds]);

  // Filtered movies for the search / filter grid
  const filteredMovies = useMemo(() => {
    return filterMovies(MOVIES_DATA, filters);
  }, [filters]);

  const hasActiveFilters =
    filters.searchQuery !== '' ||
    filters.language !== 'all' ||
    filters.audioBadge !== 'all' ||
    filters.streamingType !== 'all' ||
    filters.industry !== 'all' ||
    filters.mood !== 'all' ||
    filters.minImdb > 6.5 ||
    filters.maxRuntime < 240;

  const handleExploreSimilar = (movie: Movie) => {
    setSemanticTargetMovie(movie);
    setActiveTab('semantic');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenGraph = (movie: Movie) => {
    setGraphCenterMovie(movie);
    setActiveTab('graph');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0e0e11] text-zinc-100 flex flex-col font-sans selection:bg-red-600/30">
      {/* 1. Header (Top Bar Contract) */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        searchQuery={filters.searchQuery}
        setSearchQuery={q => setFilters(prev => ({ ...prev, searchQuery: q }))}
        watchlistCount={watchlistIds.length}
        onOpenWatchlist={() => setIsWatchlistOpen(true)}
        onOpenCapstoneDocs={() => setIsCapstoneDocsOpen(true)}
      />

      {/* 2. Main Content Body */}
      <main className="flex-1 w-full pb-20">
        {activeTab === 'explore' && (
          <div className="space-y-8">
            {/* Netflix-style Hero Banner (Only if not actively searching) */}
            {!filters.searchQuery && !hasActiveFilters && (
              <HeroBanner
                movies={MOVIES_DATA}
                onSelectMovie={setSelectedMovie}
                onExploreSimilar={handleExploreSimilar}
                isWatchlisted={isWatchlisted}
                onToggleWatchlist={toggleWatchlist}
              />
            )}

            {/* Quick Filter Matrix Toggle Bar */}
            <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-2 border-b border-zinc-800/80 mb-4">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setShowFilterMatrix(!showFilterMatrix)}
                    className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors border ${
                      showFilterMatrix || hasActiveFilters
                        ? 'bg-red-600 border-red-500 text-white'
                        : 'bg-zinc-900 border-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-800'
                    }`}
                  >
                    <SlidersHorizontal className="w-3.5 h-3.5" />
                    <span>Movie Decider Filter Matrix</span>
                    {hasActiveFilters && (
                      <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                    )}
                  </button>

                  <div className="hidden sm:flex items-center gap-2 text-xs text-zinc-400 font-mono">
                    <span>Catalog: <strong>{MOVIES_DATA.length}</strong> Masterpieces</span>
                    <span aria-hidden="true" className="text-zinc-600">·</span>
                    <span>8 Languages</span>
                    <span aria-hidden="true" className="text-zinc-600">·</span>
                    <span>HDHub4u Multi-Audio</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-zinc-400">
                  <span>Sort by:</span>
                  <select
                    value={filters.sortBy}
                    onChange={e =>
                      setFilters(prev => ({
                        ...prev,
                        sortBy: e.target.value as FilterState['sortBy']
                      }))
                    }
                    className="bg-zinc-900 border border-zinc-800 rounded px-2.5 py-1 text-white text-xs focus:outline-none focus:border-red-500 font-medium"
                  >
                    <option value="imdb">IMDb Rating (Highest)</option>
                    <option value="year">Release Year (Newest)</option>
                    <option value="runtime">Runtime (Shortest)</option>
                    <option value="title">Title (Alphabetical)</option>
                  </select>
                </div>
              </div>

              {/* Collapsible Movie Decider Filter Matrix */}
              {showFilterMatrix && (
                <div className="mb-8">
                  <MovieDeciderFilter
                    filters={filters}
                    setFilters={setFilters}
                    totalMatches={filteredMovies.length}
                    onReset={() => setFilters(INITIAL_FILTERS)}
                  />
                </div>
              )}
            </div>

            {/* If filters or search are active: Render Filtered Grid View */}
            {hasActiveFilters ? (
              <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl sm:text-2xl font-bold text-white font-display">
                    Filtered Discoveries ({filteredMovies.length})
                  </h2>
                  <button
                    onClick={() => setFilters(INITIAL_FILTERS)}
                    className="text-xs text-red-400 hover:text-red-300 transition-colors"
                  >
                    Clear All Filters
                  </button>
                </div>

                {filteredMovies.length > 0 ? (
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {filteredMovies.map(movie => (
                      <MovieCard
                        key={movie.id}
                        movie={movie}
                        onSelect={setSelectedMovie}
                        onFindSimilar={handleExploreSimilar}
                        isWatchlisted={isWatchlisted(movie.id)}
                        onToggleWatchlist={toggleWatchlist}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="h-64 flex flex-col items-center justify-center text-center p-6 text-zinc-400 bg-zinc-950/60 border border-zinc-800/80 rounded-2xl space-y-2">
                    <Film className="w-12 h-12 text-zinc-700" />
                    <p className="text-sm font-semibold text-white">No cinema titles found.</p>
                    <p className="text-xs text-zinc-500">
                      Try lowering the minimum rating or clearing language filters.
                    </p>
                  </div>
                )}
              </div>
            ) : (
              /* Standard Netflix-style Category Carousels */
              <div className="space-y-6">
                {CATEGORY_CAROUSELS.map(category => {
                  const categoryMovies = MOVIES_DATA.filter(category.filter);
                  return (
                    <CategoryCarousel
                      key={category.id}
                      title={category.title}
                      subtitle={category.subtitle}
                      movies={categoryMovies}
                      onSelectMovie={setSelectedMovie}
                      onFindSimilar={handleExploreSimilar}
                      isWatchlisted={isWatchlisted}
                      onToggleWatchlist={toggleWatchlist}
                    />
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* Tab 1: Content-Based Semantic Match */}
        {activeTab === 'semantic' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-6">
            <SemanticMatchView
              movies={MOVIES_DATA}
              selectedTargetMovie={semanticTargetMovie}
              onSelectTargetMovie={setSemanticTargetMovie}
              onOpenMovieModal={setSelectedMovie}
              isWatchlisted={isWatchlisted}
              onToggleWatchlist={toggleWatchlist}
            />
          </div>
        )}

        {/* Tab 2: Decision Wheel (Surprise Me) */}
        {activeTab === 'wheel' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-6">
            <SurpriseMeWheel
              movies={MOVIES_DATA}
              onOpenMovieModal={setSelectedMovie}
              isWatchlisted={isWatchlisted}
              onToggleWatchlist={toggleWatchlist}
            />
          </div>
        )}

        {/* Tab 3: Interactive Similarity Graph */}
        {activeTab === 'graph' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-6">
            <SimilarityGraphView
              movies={MOVIES_DATA}
              centerMovie={graphCenterMovie}
              onSelectCenterMovie={setGraphCenterMovie}
              onOpenMovieModal={setSelectedMovie}
            />
          </div>
        )}

        {/* Tab 4: Data Science Laboratory & Metrics Explorer */}
        {activeTab === 'metrics' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-6">
            <DataScienceMetricsModal
              movies={MOVIES_DATA}
              onSelectMovie={movie => {
                setSelectedMovie(movie);
              }}
            />
          </div>
        )}
      </main>

      {/* 3. Rich Movie Detail Modal */}
      <MovieDetailModal
        movie={selectedMovie}
        onClose={() => setSelectedMovie(null)}
        onSelectMovie={m => setSelectedMovie(m)}
        isWatchlisted={selectedMovie ? isWatchlisted(selectedMovie.id) : false}
        onToggleWatchlist={toggleWatchlist}
        onOpenGraph={handleOpenGraph}
      />

      {/* 4. Watchlist Drawer */}
      <WatchlistDrawer
        isOpen={isWatchlistOpen}
        onClose={() => setIsWatchlistOpen(false)}
        watchlist={watchlistedMovies}
        onRemoveFromWatchlist={id => setWatchlistIds(prev => prev.filter(x => x !== id))}
        onClearWatchlist={() => setWatchlistIds([])}
        onSelectMovie={setSelectedMovie}
        onImportWatchlist={movies => {
          const ids = movies.map(m => m.id);
          setWatchlistIds(prev => Array.from(new Set([...prev, ...ids])));
        }}
      />

      {/* 5. Capstone Code & Documentation Modal */}
      <CapstoneDocsModal
        isOpen={isCapstoneDocsOpen}
        onClose={() => setIsCapstoneDocsOpen(false)}
      />

      {/* 6. Footer (Anti-Slop compliant: quiet, truthful metadata) */}
      <footer className="mt-auto border-t border-zinc-900 bg-[#0a0a0d] py-6 px-4 sm:px-8 text-xs text-zinc-500 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="font-bold text-zinc-300 font-display">CineVerse AI</span>
          <span>·</span>
          <span>Data Science & NLP Capstone Project</span>
        </div>
        <div className="flex items-center gap-4 text-zinc-400">
          <button
            onClick={() => setIsCapstoneDocsOpen(true)}
            className="hover:text-white transition-colors"
          >
            Python Modules
          </button>
          <span>·</span>
          <button
            onClick={() => setActiveTab('metrics')}
            className="hover:text-white transition-colors"
          >
            IR Evaluation Metrics
          </button>
          <span>·</span>
          <span>FAISS Cosine Space (24-Dim)</span>
        </div>
      </footer>
    </div>
  );
}
