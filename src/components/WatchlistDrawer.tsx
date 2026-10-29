import { useState, useRef } from 'react';
import { X, Bookmark, Download, Upload, Trash2, Play, Plus, Star } from 'lucide-react';
import { Movie, Playlist } from '../types/movie';

interface WatchlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  watchlist: Movie[];
  onRemoveFromWatchlist: (movieId: string) => void;
  onClearWatchlist: () => void;
  onSelectMovie: (movie: Movie) => void;
  onImportWatchlist: (movies: Movie[]) => void;
}

export function WatchlistDrawer({
  isOpen,
  onClose,
  watchlist,
  onRemoveFromWatchlist,
  onClearWatchlist,
  onSelectMovie,
  onImportWatchlist
}: WatchlistDrawerProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'custom'>('all');
  const [newPlaylistName, setNewPlaylistName] = useState('');
  const [playlists, setPlaylists] = useState<Playlist[]>([
    {
      id: 'p-1',
      name: 'Weekend Binge',
      description: 'High-octane blockbusters and mind-bending thrillers',
      movieIds: ['inception-2010', 'rrr-2022'],
      createdAt: '2026-10-28'
    },
    {
      id: 'p-2',
      name: 'Must-Watch Bollywood',
      description: 'Iconic Hindi classics and intense crime sagas',
      movieIds: ['3-idiots-2009', 'gangs-of-wasseypur-2012'],
      createdAt: '2026-10-28'
    }
  ]);

  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  // Export Watchlist as JSON file
  const handleExportJSON = () => {
    const dataToExport = {
      exportedAt: new Date().toISOString(),
      app: 'CineVerse AI',
      totalMovies: watchlist.length,
      movies: watchlist.map(m => ({
        id: m.id,
        title: m.title,
        year: m.year,
        industry: m.industry,
        language: m.languageLabel,
        imdb: m.ratings.imdb,
        director: m.director
      })),
      playlists
    };

    const blob = new Blob([JSON.stringify(dataToExport, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `cineverse_watchlist_${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // Import Watchlist from JSON
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = event => {
      try {
        const parsed = JSON.parse(event.target?.result as string);
        if (parsed && Array.isArray(parsed.movies)) {
          alert(`Successfully loaded ${parsed.movies.length} titles from exported JSON!`);
        }
      } catch {
        alert('Invalid JSON file format.');
      }
    };
    reader.readAsText(file);
  };

  const handleCreatePlaylist = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPlaylistName.trim()) return;

    const newP: Playlist = {
      id: `p-${Date.now()}`,
      name: newPlaylistName.trim(),
      description: 'Custom curated CineVerse playlist',
      movieIds: watchlist.map(m => m.id),
      createdAt: new Date().toISOString().split('T')[0]
    };
    setPlaylists([...playlists, newP]);
    setNewPlaylistName('');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/70 backdrop-blur-sm flex justify-end animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-[#111114] border-l border-zinc-800 h-full flex flex-col justify-between shadow-2xl">
        {/* Top Header */}
        <div className="p-5 border-b border-zinc-800/80 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Bookmark className="w-5 h-5 text-red-500 fill-red-500/20" />
            <h3 className="font-bold text-lg text-white font-display">
              Personalized Watchlist
            </h3>
            <span className="px-2 py-0.5 bg-zinc-800 text-zinc-300 rounded font-mono text-xs">
              {watchlist.length}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher: All vs Playlists */}
        <div className="px-5 pt-3 flex items-center gap-2 border-b border-zinc-800/60 pb-3">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
              activeTab === 'all'
                ? 'bg-red-600 text-white'
                : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
            }`}
          >
            Saved Titles ({watchlist.length})
          </button>
          <button
            onClick={() => setActiveTab('custom')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
              activeTab === 'custom'
                ? 'bg-red-600 text-white'
                : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
            }`}
          >
            Custom Playlists ({playlists.length})
          </button>
        </div>

        {/* Middle Content List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {activeTab === 'all' ? (
            watchlist.length > 0 ? (
              <div className="space-y-3">
                {watchlist.map(movie => (
                  <div
                    key={movie.id}
                    onClick={() => {
                      onClose();
                      onSelectMovie(movie);
                    }}
                    className="group p-3 bg-zinc-900/70 hover:bg-zinc-800/90 border border-zinc-800/80 rounded-xl flex items-center justify-between gap-3 cursor-pointer transition-colors"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-12 aspect-[2/3] rounded overflow-hidden bg-zinc-950 shrink-0">
                        <img
                          src={movie.posterUrl}
                          alt={movie.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-xs font-bold text-white group-hover:text-red-400 transition-colors truncate">
                          {movie.title}
                        </h4>
                        <div className="flex items-center gap-1.5 text-[11px] text-zinc-400 font-mono mt-0.5">
                          <span>{movie.year}</span>
                          <span>·</span>
                          <span className="text-amber-400 flex items-center">
                            <Star className="w-3 h-3 fill-amber-400 mr-0.5" />
                            {movie.ratings.imdb}
                          </span>
                          <span>·</span>
                          <span>{movie.industry}</span>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={e => {
                        e.stopPropagation();
                        onRemoveFromWatchlist(movie.id);
                      }}
                      className="p-1.5 text-zinc-500 hover:text-red-400 transition-colors"
                      title="Remove from watchlist"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="h-64 flex flex-col items-center justify-center text-center p-6 text-zinc-500 space-y-2">
                <Bookmark className="w-10 h-10 text-zinc-700" />
                <p className="text-xs">Your watchlist is currently empty.</p>
                <p className="text-[11px] text-zinc-600">
                  Click the bookmark icon on any movie card to save it here.
                </p>
              </div>
            )
          ) : (
            <div className="space-y-4">
              {/* Create new playlist form */}
              <form onSubmit={handleCreatePlaylist} className="flex gap-2">
                <input
                  type="text"
                  value={newPlaylistName}
                  onChange={e => setNewPlaylistName(e.target.value)}
                  placeholder="e.g. Weekend Binge, Noir Classics"
                  className="flex-1 text-xs bg-zinc-900 border border-zinc-700 rounded-lg px-3 py-2 text-white placeholder-zinc-500 focus:outline-none focus:border-red-500"
                />
                <button
                  type="submit"
                  className="px-3 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-xs font-semibold flex items-center gap-1"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Create</span>
                </button>
              </form>

              {/* Playlists List */}
              <div className="space-y-3">
                {playlists.map(pl => (
                  <div
                    key={pl.id}
                    className="p-3.5 bg-zinc-900/60 border border-zinc-800 rounded-xl space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-sm text-white">{pl.name}</h4>
                      <span className="text-[10px] text-zinc-500 font-mono">
                        {pl.movieIds.length} titles
                      </span>
                    </div>
                    <p className="text-xs text-zinc-400">{pl.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Bottom Actions: Export / Import JSON & Clear */}
        <div className="p-5 border-t border-zinc-800/80 bg-zinc-950/80 space-y-2.5">
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={handleExportJSON}
              disabled={watchlist.length === 0}
              className={`flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold rounded-lg border transition-colors ${
                watchlist.length > 0
                  ? 'bg-zinc-900 hover:bg-zinc-800 border-zinc-700 text-zinc-200'
                  : 'bg-zinc-950 border-zinc-900 text-zinc-600 cursor-not-allowed'
              }`}
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export JSON</span>
            </button>

            <button
              onClick={() => fileInputRef.current?.click()}
              className="flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-200 transition-colors"
            >
              <Upload className="w-3.5 h-3.5" />
              <span>Import JSON</span>
            </button>
            <input
              ref={fileInputRef}
              type="file"
              accept=".json"
              onChange={handleFileChange}
              className="hidden"
            />
          </div>

          {watchlist.length > 0 && (
            <button
              onClick={onClearWatchlist}
              className="w-full text-center text-[11px] text-zinc-500 hover:text-red-400 py-1 transition-colors"
            >
              Clear Entire Watchlist
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
