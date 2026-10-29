import { Filter, RotateCcw, Volume2, Sparkles, SlidersHorizontal } from 'lucide-react';
import { FilterState } from '../types/movie';
import { ALL_LANGUAGES, ALL_MOODS } from '../data/moviesData';

interface MovieDeciderFilterProps {
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
  totalMatches: number;
  onReset: () => void;
}

export function MovieDeciderFilter({
  filters,
  setFilters,
  totalMatches,
  onReset
}: MovieDeciderFilterProps) {
  return (
    <div className="bg-[#131316] border border-zinc-800 rounded-xl p-4 sm:p-5 flex flex-col gap-5">
      {/* Top Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-white font-semibold text-sm">
          <SlidersHorizontal className="w-4 h-4 text-red-500" />
          <span>Movie Decider Filter Matrix</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs font-mono text-zinc-400">
            <span className="text-red-400 font-bold">{totalMatches}</span> titles matched
          </span>

          <button
            onClick={onReset}
            className="flex items-center gap-1 text-xs text-zinc-400 hover:text-white px-2 py-1 rounded bg-zinc-900 hover:bg-zinc-800 transition-colors"
            title="Reset all filters"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset</span>
          </button>
        </div>
      </div>

      {/* Industry Filter Segmented Control */}
      <div>
        <label className="block text-xs font-medium text-zinc-400 mb-2">
          Cinema Industry
        </label>
        <div className="flex flex-wrap gap-1.5 p-1 bg-zinc-900/80 rounded-lg border border-zinc-800/80">
          {(['all', 'Hollywood', 'Bollywood', 'South Indian / Pan-India', 'World Cinema'] as const).map(ind => (
            <button
              key={ind}
              onClick={() => setFilters(prev => ({ ...prev, industry: ind }))}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
                filters.industry === ind
                  ? 'bg-red-600 text-white shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              {ind === 'all' ? 'All Industries' : ind}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Selectors */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Language Picker */}
        <div>
          <label className="block text-xs font-medium text-zinc-400 mb-1.5">
            Primary Language
          </label>
          <select
            value={filters.language}
            onChange={e => setFilters(prev => ({ ...prev, language: e.target.value as FilterState['language'] }))}
            className="w-full text-xs bg-zinc-900 border border-zinc-700/80 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-red-500"
          >
            {ALL_LANGUAGES.map(lang => (
              <option key={lang.code} value={lang.code}>
                {lang.flag} {lang.label}
              </option>
            ))}
          </select>
        </div>

        {/* Mood & Vibe Picker */}
        <div>
          <label className="block text-xs font-medium text-zinc-400 mb-1.5 flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-amber-400" />
            <span>Vibe / Emotional Mood</span>
          </label>
          <select
            value={filters.mood}
            onChange={e => setFilters(prev => ({ ...prev, mood: e.target.value }))}
            className="w-full text-xs bg-zinc-900 border border-zinc-700/80 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-red-500"
          >
            <option value="all">All Vibes & Moods</option>
            {ALL_MOODS.map(m => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
        </div>

        {/* Audio Format (HDHub4u) */}
        <div>
          <label className="block text-xs font-medium text-zinc-400 mb-1.5 flex items-center gap-1">
            <Volume2 className="w-3 h-3 text-red-400" />
            <span>Audio & Dubbing Tags</span>
          </label>
          <select
            value={filters.audioBadge}
            onChange={e => setFilters(prev => ({ ...prev, audioBadge: e.target.value as FilterState['audioBadge'] }))}
            className="w-full text-xs bg-zinc-900 border border-zinc-700/80 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-red-500"
          >
            <option value="all">All Audio Formats</option>
            <option value="Dual Audio">Dual Audio [Hindi + English]</option>
            <option value="Multi-Audio">Multi-Audio (3+ Languages)</option>
            <option value="Original">Original Language Track</option>
          </select>
        </div>

        {/* Streaming Availability */}
        <div>
          <label className="block text-xs font-medium text-zinc-400 mb-1.5">
            Streaming Platform Model
          </label>
          <select
            value={filters.streamingType}
            onChange={e => setFilters(prev => ({ ...prev, streamingType: e.target.value as FilterState['streamingType'] }))}
            className="w-full text-xs bg-zinc-900 border border-zinc-700/80 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-red-500"
          >
            <option value="all">All Streaming Sources</option>
            <option value="free">Free Streaming Only (Tubi / YouTube)</option>
            <option value="paid">Paid Subscription (Netflix / Prime)</option>
          </select>
        </div>
      </div>

      {/* Sliders: Min IMDb & Max Runtime */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 border-t border-zinc-800/70">
        <div>
          <div className="flex items-center justify-between text-xs text-zinc-400 mb-1.5">
            <span>Minimum IMDb Rating</span>
            <span className="font-mono font-bold text-amber-400">★ {filters.minImdb}</span>
          </div>
          <input
            type="range"
            min={6.0}
            max={9.0}
            step={0.1}
            value={filters.minImdb}
            onChange={e => setFilters(prev => ({ ...prev, minImdb: parseFloat(e.target.value) }))}
            className="w-full accent-amber-500 cursor-pointer"
          />
        </div>

        <div>
          <div className="flex items-center justify-between text-xs text-zinc-400 mb-1.5">
            <span>Maximum Runtime</span>
            <span className="font-mono font-bold text-zinc-200">{filters.maxRuntime} mins</span>
          </div>
          <input
            type="range"
            min={90}
            max={240}
            step={10}
            value={filters.maxRuntime}
            onChange={e => setFilters(prev => ({ ...prev, maxRuntime: parseInt(e.target.value, 10) }))}
            className="w-full accent-red-600 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
