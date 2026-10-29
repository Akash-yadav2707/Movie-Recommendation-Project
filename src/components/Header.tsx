import { useState } from 'react';
import { Film, Compass, Disc3, GitBranch, BarChart3, Bookmark, Search, GraduationCap } from 'lucide-react';

interface HeaderProps {
  activeTab: 'explore' | 'semantic' | 'wheel' | 'graph' | 'metrics';
  setActiveTab: (tab: 'explore' | 'semantic' | 'wheel' | 'graph' | 'metrics') => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  watchlistCount: number;
  onOpenWatchlist: () => void;
  onOpenCapstoneDocs: () => void;
}

export function Header({
  activeTab,
  setActiveTab,
  searchQuery,
  setSearchQuery,
  watchlistCount,
  onOpenWatchlist,
  onOpenCapstoneDocs
}: HeaderProps) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#0e0e11]/95 backdrop-blur-md border-b border-zinc-800/80 px-4 sm:px-8 py-3.5 flex items-center justify-between gap-6">
      {/* Zone 1: Single text element wordmark */}
      <div className="flex items-center gap-3 shrink-0">
        <button
          onClick={() => {
            setActiveTab('explore');
            setSearchQuery('');
          }}
          className="flex items-center gap-2.5 text-left group transition-transform focus-visible:outline-none"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-red-600 to-amber-500 flex items-center justify-center shadow-lg shadow-red-600/20 group-hover:scale-105 transition-transform">
            <Film className="w-4 h-4 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white font-display whitespace-nowrap">
            CineVerse<span className="text-red-500">AI</span>
          </span>
        </button>
      </div>

      {/* Zone 2: Navigation Links */}
      <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-zinc-300">
        <button
          onClick={() => setActiveTab('explore')}
          className={`flex items-center gap-1.5 whitespace-nowrap shrink-0 transition-colors py-1 ${
            activeTab === 'explore' ? 'text-white border-b-2 border-red-500 font-semibold' : 'hover:text-white'
          }`}
        >
          <Compass className="w-4 h-4" />
          <span>Explore</span>
        </button>

        <button
          onClick={() => setActiveTab('semantic')}
          className={`flex items-center gap-1.5 whitespace-nowrap shrink-0 transition-colors py-1 ${
            activeTab === 'semantic' ? 'text-white border-b-2 border-red-500 font-semibold' : 'hover:text-white'
          }`}
        >
          <Film className="w-4 h-4" />
          <span>Semantic Match</span>
        </button>

        <button
          onClick={() => setActiveTab('wheel')}
          className={`flex items-center gap-1.5 whitespace-nowrap shrink-0 transition-colors py-1 ${
            activeTab === 'wheel' ? 'text-white border-b-2 border-red-500 font-semibold' : 'hover:text-white'
          }`}
        >
          <Disc3 className="w-4 h-4" />
          <span>Decision Wheel</span>
        </button>

        <button
          onClick={() => setActiveTab('graph')}
          className={`flex items-center gap-1.5 whitespace-nowrap shrink-0 transition-colors py-1 ${
            activeTab === 'graph' ? 'text-white border-b-2 border-red-500 font-semibold' : 'hover:text-white'
          }`}
        >
          <GitBranch className="w-4 h-4" />
          <span>Similarity Graph</span>
        </button>

        <button
          onClick={() => setActiveTab('metrics')}
          className={`flex items-center gap-1.5 whitespace-nowrap shrink-0 transition-colors py-1 ${
            activeTab === 'metrics' ? 'text-white border-b-2 border-red-500 font-semibold' : 'hover:text-white'
          }`}
        >
          <BarChart3 className="w-4 h-4" />
          <span>DS Lab & Metrics</span>
        </button>
      </nav>

      {/* Zone 3: Search, Watchlist, Capstone Docs */}
      <div className="flex items-center gap-3 shrink-0">
        {/* Search Bar / Input */}
        <div className="relative flex items-center">
          {isSearchOpen ? (
            <div className="relative flex items-center">
              <Search className="w-4 h-4 text-zinc-400 absolute left-3 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search movies, cast, director..."
                autoFocus
                className="w-48 sm:w-64 pl-9 pr-8 py-1.5 text-xs bg-zinc-900 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
              />
              <button
                onClick={() => {
                  setSearchQuery('');
                  setIsSearchOpen(false);
                }}
                className="absolute right-2.5 text-zinc-400 hover:text-white text-xs"
              >
                ✕
              </button>
            </div>
          ) : (
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-2 text-zinc-300 hover:text-white hover:bg-zinc-800/60 rounded-lg transition-colors"
              title="Search films"
            >
              <Search className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Watchlist Button */}
        <button
          onClick={onOpenWatchlist}
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-zinc-200 bg-zinc-800/80 hover:bg-zinc-700/80 border border-zinc-700/80 rounded-lg transition-colors whitespace-nowrap shrink-0"
        >
          <Bookmark className="w-3.5 h-3.5 text-red-400" />
          <span className="hidden sm:inline">Watchlist</span>
          {watchlistCount > 0 && (
            <span className="px-1.5 py-0.2 bg-red-600 text-white rounded text-[10px] font-mono font-bold">
              {watchlistCount}
            </span>
          )}
        </button>

        {/* Capstone Code & Documentation */}
        <button
          onClick={onOpenCapstoneDocs}
          className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-white bg-red-600 hover:bg-red-700 rounded-lg shadow-sm hover:shadow-red-600/20 transition-all whitespace-nowrap shrink-0"
        >
          <GraduationCap className="w-3.5 h-3.5" />
          <span className="hidden md:inline">Capstone Docs</span>
        </button>
      </div>
    </header>
  );
}
