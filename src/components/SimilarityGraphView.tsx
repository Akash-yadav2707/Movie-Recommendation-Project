import { useState } from 'react';
import { GitBranch, Sparkles, RefreshCw, Star, Info, ExternalLink } from 'lucide-react';
import { Movie } from '../types/movie';
import { generateSimilarityGraph } from '../utils/recommenderEngine';

interface SimilarityGraphViewProps {
  movies: Movie[];
  centerMovie: Movie;
  onSelectCenterMovie: (movie: Movie) => void;
  onOpenMovieModal: (movie: Movie) => void;
}

export function SimilarityGraphView({
  movies,
  centerMovie,
  onSelectCenterMovie,
  onOpenMovieModal
}: SimilarityGraphViewProps) {
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);

  const { nodes, edges } = generateSimilarityGraph(centerMovie, movies, 8);

  const centerNode = nodes[0];
  const connectedNodes = nodes.slice(1);

  // Colors per cinema industry
  const getIndustryColor = (ind: string) => {
    switch (ind) {
      case 'Hollywood':
        return '#38bdf8'; // sky blue
      case 'Bollywood':
        return '#f59e0b'; // amber / gold
      case 'South Indian / Pan-India':
        return '#10b981'; // emerald
      case 'World Cinema':
        return '#a855f7'; // purple
      default:
        return '#ef4444';
    }
  };

  const hoveredMovie = movies.find(m => m.id === hoveredNodeId) || centerMovie;

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 bg-[#131316] border border-zinc-800 rounded-2xl">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-red-500 uppercase tracking-wider">
            <GitBranch className="w-4 h-4" />
            <span>Interactive Vector Space Similarity Graph</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-white font-display mt-1">
            Network Topology: {centerMovie.title}
          </h2>
          <p className="text-xs text-zinc-400 mt-0.5">
            Nodes represent candidate films. Edge thickness and opacity represent pairwise cosine vector similarity $\cos(\theta)$. Click any node to re-center the network.
          </p>
        </div>

        {/* Change Root Movie */}
        <div className="flex items-center gap-2">
          <select
            value={centerMovie.id}
            onChange={e => {
              const m = movies.find(x => x.id === e.target.value);
              if (m) onSelectCenterMovie(m);
            }}
            className="text-xs bg-zinc-900 border border-zinc-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-red-500"
          >
            {movies.map(m => (
              <option key={m.id} value={m.id}>
                {m.title} ({m.industry})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Main Canvas & Inspector Split */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* SVG Network Graph Canvas */}
        <div className="lg:col-span-2 relative bg-[#0e0e11] border border-zinc-800 rounded-2xl overflow-hidden min-h-[480px] flex items-center justify-center p-4">
          {/* Subtle Grid Background */}
          <div className="absolute inset-0 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

          <svg viewBox="0 0 700 500" className="w-full h-full max-w-[700px] aspect-[7/5]">
            <defs>
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Edge Lines */}
            {edges.map(edge => {
              const targetNode = nodes.find(n => n.id === edge.target);
              if (!targetNode) return null;
              const isHovered = hoveredNodeId === edge.target || hoveredNodeId === edge.source;
              const strokeWidth = Math.max(1.5, edge.similarity * 5);
              const opacity = isHovered ? 0.95 : Math.max(0.25, edge.similarity * 0.7);

              return (
                <g key={`${edge.source}-${edge.target}`}>
                  <line
                    x1={centerNode.x}
                    y1={centerNode.y}
                    x2={targetNode.x}
                    y2={targetNode.y}
                    stroke={isHovered ? '#ef4444' : '#52525b'}
                    strokeWidth={strokeWidth}
                    strokeOpacity={opacity}
                    strokeDasharray={edge.similarity < 0.7 ? '4,4' : undefined}
                    className="transition-all duration-300"
                  />
                  {/* Similarity Score on Edge Midpoint */}
                  <text
                    x={(centerNode.x + targetNode.x) / 2}
                    y={(centerNode.y + targetNode.y) / 2 - 6}
                    fill={isHovered ? '#f87171' : '#71717a'}
                    fontSize="10"
                    fontFamily="monospace"
                    textAnchor="middle"
                  >
                    {Math.round(edge.similarity * 100)}%
                  </text>
                </g>
              );
            })}

            {/* Radial Nodes */}
            {connectedNodes.map(node => {
              const isHovered = hoveredNodeId === node.id;
              const color = getIndustryColor(node.industry);

              return (
                <g
                  key={node.id}
                  className="cursor-pointer transition-all duration-300"
                  onMouseEnter={() => setHoveredNodeId(node.id)}
                  onMouseLeave={() => setHoveredNodeId(null)}
                  onClick={() => onSelectCenterMovie(node.movie)}
                >
                  {/* Outer Pulsing Ring */}
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r={isHovered ? 34 : 28}
                    fill="#18181b"
                    stroke={color}
                    strokeWidth={isHovered ? 3 : 2}
                    filter={isHovered ? 'url(#glow)' : undefined}
                    className="transition-all duration-200"
                  />

                  {/* Flag / Initial */}
                  <text
                    x={node.x}
                    y={node.y + 4}
                    fill="#ffffff"
                    fontSize={isHovered ? '13' : '11'}
                    fontWeight="bold"
                    textAnchor="middle"
                    pointerEvents="none"
                  >
                    {node.movie.primaryLanguage.toUpperCase()}
                  </text>

                  {/* Node Label Below */}
                  <text
                    x={node.x}
                    y={node.y + 44}
                    fill={isHovered ? '#ffffff' : '#d4d4d8'}
                    fontSize="11"
                    fontWeight={isHovered ? '600' : '500'}
                    textAnchor="middle"
                    className="transition-colors pointer-events-none"
                  >
                    {node.title.length > 14 ? node.title.slice(0, 13) + '…' : node.title}
                  </text>
                </g>
              );
            })}

            {/* Center Node (Anchor Film) */}
            <g
              className="cursor-pointer"
              onMouseEnter={() => setHoveredNodeId(centerNode.id)}
              onClick={() => onOpenMovieModal(centerNode.movie)}
            >
              <circle
                cx={centerNode.x}
                cy={centerNode.y}
                r="44"
                fill="#b91c1c"
                stroke="#ffffff"
                strokeWidth="3"
                filter="url(#glow)"
              />
              <text
                x={centerNode.x}
                y={centerNode.y - 6}
                fill="#ffffff"
                fontSize="12"
                fontWeight="bold"
                textAnchor="middle"
                pointerEvents="none"
              >
                ANCHOR
              </text>
              <text
                x={centerNode.x}
                y={centerNode.y + 12}
                fill="#ffffff"
                fontSize="11"
                fontWeight="bold"
                textAnchor="middle"
                pointerEvents="none"
              >
                {centerNode.title.length > 12 ? centerNode.title.slice(0, 11) + '…' : centerNode.title}
              </text>
            </g>
          </svg>

          {/* Industry Legend */}
          <div className="absolute bottom-3 left-3 flex flex-wrap items-center gap-3 p-2 bg-zinc-950/80 border border-zinc-800 rounded-lg backdrop-blur-sm text-[11px]">
            <div className="flex items-center gap-1.5 text-zinc-300">
              <span className="w-2.5 h-2.5 rounded-full bg-[#38bdf8]" />
              <span>Hollywood</span>
            </div>
            <div className="flex items-center gap-1.5 text-zinc-300">
              <span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]" />
              <span>Bollywood</span>
            </div>
            <div className="flex items-center gap-1.5 text-zinc-300">
              <span className="w-2.5 h-2.5 rounded-full bg-[#10b981]" />
              <span>Pan-India</span>
            </div>
            <div className="flex items-center gap-1.5 text-zinc-300">
              <span className="w-2.5 h-2.5 rounded-full bg-[#a855f7]" />
              <span>World</span>
            </div>
          </div>
        </div>

        {/* Selected / Hovered Movie Inspector Card */}
        <div className="bg-[#131316] border border-zinc-800 rounded-2xl p-5 flex flex-col justify-between gap-4">
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs text-zinc-400">
              <span className="uppercase font-bold tracking-wider text-red-500">
                Node Inspector
              </span>
              <span className="font-mono">
                {hoveredMovie.id === centerMovie.id ? 'Center Reference' : 'Vector Neighbor'}
              </span>
            </div>

            {/* Poster + Quick details */}
            <div className="flex items-start gap-4">
              <div className="w-24 aspect-[2/3] rounded-lg overflow-hidden bg-zinc-900 border border-zinc-700 shrink-0">
                <img
                  src={hoveredMovie.posterUrl}
                  alt={hoveredMovie.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-1.5 flex-1 min-w-0">
                <h4 className="font-bold text-base text-white truncate">
                  {hoveredMovie.title}
                </h4>
                <div className="flex items-center gap-2 text-xs text-zinc-400 font-mono">
                  <span>{hoveredMovie.year}</span>
                  <span>·</span>
                  <span>{hoveredMovie.runtime}m</span>
                  <span>·</span>
                  <div className="flex items-center text-amber-400">
                    <Star className="w-3 h-3 fill-amber-400 mr-0.5" />
                    <span>{hoveredMovie.ratings.imdb}</span>
                  </div>
                </div>
                <div className="text-xs text-zinc-400 truncate">
                  Dir: {hoveredMovie.director}
                </div>
                <div className="text-xs font-semibold text-red-400">
                  {hoveredMovie.audioBadgeType}
                </div>
              </div>
            </div>

            {/* Overview */}
            <p className="text-xs text-zinc-300 leading-relaxed line-clamp-4">
              {hoveredMovie.overview}
            </p>

            {/* Latent Vector Coordinates */}
            <div className="p-3 bg-zinc-950 border border-zinc-800 rounded-lg space-y-1">
              <span className="text-[10px] uppercase font-bold text-zinc-500 font-mono">
                2D PCA Vector Projection
              </span>
              <div className="text-xs font-mono text-zinc-300">
                x: <span className="text-red-400">{hoveredMovie.pcaCoordinates[0]}</span>, y:{' '}
                <span className="text-red-400">{hoveredMovie.pcaCoordinates[1]}</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-2 pt-3 border-t border-zinc-800">
            <button
              onClick={() => onOpenMovieModal(hoveredMovie)}
              className="w-full py-2 bg-red-600 hover:bg-red-700 text-white text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Open Details & Full Streaming Sources</span>
            </button>

            <a
              href={`https://www.youtube.com/watch?v=${hoveredMovie.youtubeTrailerId}`}
              target="_blank"
              rel="noreferrer"
              className="w-full py-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-white text-xs font-semibold rounded-lg flex items-center justify-center gap-1.5 transition-colors"
            >
              <span className="px-1 py-0.2 bg-red-600 text-[10px] font-black rounded">YT</span>
              <span>Watch Official Trailer on YouTube</span>
            </a>

            {hoveredMovie.id !== centerMovie.id && (
              <button
                onClick={() => onSelectCenterMovie(hoveredMovie)}
                className="w-full py-1.5 bg-zinc-800/80 hover:bg-zinc-700 text-zinc-300 text-xs font-medium rounded-lg flex items-center justify-center gap-1.5 transition-colors border border-zinc-700/60"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Re-center Graph on This Movie</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
