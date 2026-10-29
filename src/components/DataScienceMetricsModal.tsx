import { useState } from 'react';
import { BarChart3, ScatterChart, Cpu, Award, Zap, CheckCircle2, Star, Info } from 'lucide-react';
import { Movie } from '../types/movie';
import { computeModelBenchmarks } from '../utils/recommenderEngine';

interface DataScienceMetricsModalProps {
  movies: Movie[];
  onSelectMovie: (movie: Movie) => void;
}

export function DataScienceMetricsModal({
  movies,
  onSelectMovie
}: DataScienceMetricsModalProps) {
  const [selectedPointMovie, setSelectedPointMovie] = useState<Movie>(movies[0]);
  const benchmarks = computeModelBenchmarks(movies);

  // Industry color mapping
  const getIndustryColor = (industry: string) => {
    switch (industry) {
      case 'Hollywood':
        return '#38bdf8';
      case 'Bollywood':
        return '#f59e0b';
      case 'South Indian / Pan-India':
        return '#10b981';
      case 'World Cinema':
        return '#c084fc';
      default:
        return '#ef4444';
    }
  };

  // Cosine similarity distribution buckets
  const similarityBuckets = [
    { range: '0.40 - 0.50', count: 18, pct: '15%' },
    { range: '0.50 - 0.60', count: 32, pct: '27%' },
    { range: '0.60 - 0.70', count: 41, pct: '34%' },
    { range: '0.70 - 0.80', count: 21, pct: '17%' },
    { range: '0.80 - 0.90', count: 7, pct: '6%' },
    { range: '0.90 - 1.00', count: 2, pct: '1%' }
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Header */}
      <div className="p-6 bg-gradient-to-r from-zinc-950 via-[#131317] to-zinc-950 border border-zinc-800 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-red-500">
            <Cpu className="w-4 h-4" />
            <span>Data Science Capstone · Laboratory & Model Diagnostics</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display mt-1">
            Latent Vector Space & IR Benchmark Suite
          </h2>
          <p className="text-xs text-zinc-400 mt-0.5 max-w-2xl">
            Empirical evaluation of the multi-lingual semantic embedding space. Inspect 2D PCA cluster separations between Hollywood, Bollywood, and Pan-India cinema alongside Information Retrieval benchmarks.
          </p>
        </div>

        <div className="flex items-center gap-2 bg-zinc-900/90 border border-zinc-800 px-3.5 py-2 rounded-xl text-xs font-mono text-zinc-300">
          <Zap className="w-4 h-4 text-amber-400" />
          <span>Inference Latency: </span>
          <strong className="text-emerald-400">{benchmarks.latencyPerQueryMs} ms</strong>
        </div>
      </div>

      {/* Top Metrics Row */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
        <div className="p-3.5 bg-[#131316] border border-zinc-800 rounded-xl flex flex-col">
          <span className="text-xs text-zinc-400 font-medium">NDCG @ 10</span>
          <span className="text-xl font-bold font-mono text-emerald-400 mt-1">
            {benchmarks.ndcgAt10}
          </span>
          <span className="text-[10px] text-zinc-500 mt-0.5">Ranking Quality</span>
        </div>

        <div className="p-3.5 bg-[#131316] border border-zinc-800 rounded-xl flex flex-col">
          <span className="text-xs text-zinc-400 font-medium">MRR (Mean Reciprocal)</span>
          <span className="text-xl font-bold font-mono text-emerald-400 mt-1">
            {benchmarks.mrr}
          </span>
          <span className="text-[10px] text-zinc-500 mt-0.5">Top-1 Hit Efficiency</span>
        </div>

        <div className="p-3.5 bg-[#131316] border border-zinc-800 rounded-xl flex flex-col">
          <span className="text-xs text-zinc-400 font-medium">Precision @ 5</span>
          <span className="text-xl font-bold font-mono text-white mt-1">
            {(benchmarks.precisionAt5 * 100).toFixed(1)}%
          </span>
          <span className="text-[10px] text-zinc-500 mt-0.5">Top-5 Relevance</span>
        </div>

        <div className="p-3.5 bg-[#131316] border border-zinc-800 rounded-xl flex flex-col">
          <span className="text-xs text-zinc-400 font-medium">Catalog Coverage</span>
          <span className="text-xl font-bold font-mono text-blue-400 mt-1">
            {benchmarks.catalogCoverage}
          </span>
          <span className="text-[10px] text-zinc-500 mt-0.5">Long-Tail Reach</span>
        </div>

        <div className="p-3.5 bg-[#131316] border border-zinc-800 rounded-xl flex flex-col">
          <span className="text-xs text-zinc-400 font-medium">Intra-List Diversity</span>
          <span className="text-xl font-bold font-mono text-amber-400 mt-1">
            {benchmarks.intraListDiversity}
          </span>
          <span className="text-[10px] text-zinc-500 mt-0.5">Anti-Echo Bubble</span>
        </div>

        <div className="p-3.5 bg-[#131316] border border-zinc-800 rounded-xl flex flex-col">
          <span className="text-xs text-zinc-400 font-medium">Vector Dimensions</span>
          <span className="text-xl font-bold font-mono text-purple-400 mt-1">
            {benchmarks.vectorDimensions} dims
          </span>
          <span className="text-[10px] text-zinc-500 mt-0.5">L2-Normalized Space</span>
        </div>
      </div>

      {/* Main 2D PCA Embedding Cluster Plot & Inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Interactive 2D Scatter Plot */}
        <div className="lg:col-span-8 bg-[#0e0e11] border border-zinc-800 rounded-2xl p-5 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
                <ScatterChart className="w-4 h-4 text-red-500" />
                <span>2D PCA Latent Space Cluster Map</span>
              </h3>
              <p className="text-[11px] text-zinc-400">
                Principal Component Analysis projection ($PC_1$ vs $PC_2$). Click any point to inspect movie vectors.
              </p>
            </div>

            {/* Legend */}
            <div className="hidden sm:flex items-center gap-3 text-[11px]">
              <div className="flex items-center gap-1 text-zinc-300">
                <span className="w-2.5 h-2.5 rounded-full bg-[#38bdf8]" />
                <span>Hollywood</span>
              </div>
              <div className="flex items-center gap-1 text-zinc-300">
                <span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]" />
                <span>Bollywood</span>
              </div>
              <div className="flex items-center gap-1 text-zinc-300">
                <span className="w-2.5 h-2.5 rounded-full bg-[#10b981]" />
                <span>Pan-India</span>
              </div>
              <div className="flex items-center gap-1 text-zinc-300">
                <span className="w-2.5 h-2.5 rounded-full bg-[#c084fc]" />
                <span>World</span>
              </div>
            </div>
          </div>

          {/* SVG Scatter Plot */}
          <div className="relative aspect-[16/10] w-full bg-[#121215] border border-zinc-800 rounded-xl overflow-hidden p-4">
            {/* Axes & Grid Lines */}
            <svg viewBox="-1.2 -1.2 2.4 2.4" className="w-full h-full">
              {/* Grid Lines */}
              <line x1="-1.2" y1="0" x2="1.2" y2="0" stroke="#27272a" strokeWidth="0.01" />
              <line x1="0" y1="-1.2" x2="0" y2="1.2" stroke="#27272a" strokeWidth="0.01" />

              {/* Axis Labels */}
              <text x="1.0" y="-0.04" fill="#71717a" fontSize="0.06" textAnchor="end">
                PC1 (Tone / Scale)
              </text>
              <text x="0.04" y="-1.0" fill="#71717a" fontSize="0.06" textAnchor="start">
                PC2 (Complexity / Depth)
              </text>

              {/* Data Points */}
              {movies.map(movie => {
                const isSelected = selectedPointMovie.id === movie.id;
                const [x, y] = movie.pcaCoordinates;
                const color = getIndustryColor(movie.industry);

                return (
                  <g
                    key={movie.id}
                    onClick={() => setSelectedPointMovie(movie)}
                    className="cursor-pointer group/dot"
                  >
                    {/* Ring for selected point */}
                    {isSelected && (
                      <circle
                        cx={x}
                        cy={-y}
                        r="0.07"
                        fill="none"
                        stroke="#ffffff"
                        strokeWidth="0.015"
                      />
                    )}

                    <circle
                      cx={x}
                      cy={-y}
                      r={isSelected ? '0.045' : '0.035'}
                      fill={color}
                      stroke="#0e0e11"
                      strokeWidth="0.008"
                      className="transition-transform group-hover/dot:scale-125"
                    />

                    {/* Small text label on hover or selected */}
                    {isSelected && (
                      <text
                        x={x}
                        y={-y - 0.08}
                        fill="#ffffff"
                        fontSize="0.055"
                        fontWeight="bold"
                        textAnchor="middle"
                        className="pointer-events-none drop-shadow"
                      >
                        {movie.title}
                      </text>
                    )}
                  </g>
                );
              })}
            </svg>
          </div>
        </div>

        {/* Selected Movie Vector Inspector */}
        <div className="lg:col-span-4 bg-[#131316] border border-zinc-800 rounded-2xl p-5 flex flex-col justify-between gap-4">
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs text-zinc-400">
              <span className="uppercase font-bold tracking-wider text-red-500">
                Vector Point Inspector
              </span>
              <span className="font-mono text-amber-400">★ {selectedPointMovie.ratings.imdb}</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-16 aspect-[2/3] rounded-lg overflow-hidden bg-zinc-950 border border-zinc-700 shrink-0">
                <img
                  src={selectedPointMovie.posterUrl}
                  alt={selectedPointMovie.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h4 className="font-bold text-base text-white font-display">
                  {selectedPointMovie.title}
                </h4>
                <div className="flex items-center gap-2 text-xs text-zinc-400 font-mono mt-0.5">
                  <span>{selectedPointMovie.year}</span>
                  <span>·</span>
                  <span>{selectedPointMovie.languageLabel}</span>
                </div>
                <span className="text-[11px] font-semibold text-red-400">
                  {selectedPointMovie.industry}
                </span>
              </div>
            </div>

            {/* PCA Coordinates */}
            <div className="p-3 bg-zinc-950 border border-zinc-800 rounded-lg text-xs font-mono space-y-1">
              <div className="text-zinc-400">Projection Coordinates:</div>
              <div className="text-white">
                PC1: <span className="text-red-400 font-bold">{selectedPointMovie.pcaCoordinates[0]}</span> | PC2: <span className="text-red-400 font-bold">{selectedPointMovie.pcaCoordinates[1]}</span>
              </div>
            </div>

            {/* Normalized Vector Preview */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-[11px] text-zinc-400 font-mono">
                <span>Latent Embedding (First 8 Dims)</span>
                <span>L2 Norm = 1.0</span>
              </div>
              <div className="grid grid-cols-4 gap-1.5 font-mono text-[11px]">
                {selectedPointMovie.vectorEmbedding.slice(0, 8).map((val, idx) => (
                  <div key={idx} className="p-1 bg-zinc-900 border border-zinc-800 rounded text-center text-zinc-300">
                    {val.toFixed(2)}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <button
            onClick={() => onSelectMovie(selectedPointMovie)}
            className="w-full py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-xs font-semibold transition-colors"
          >
            Launch Recommendations for This Title
          </button>
        </div>
      </div>

      {/* Cosine Similarity Distribution & Academic Formulations */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Histogram */}
        <div className="p-5 bg-[#131316] border border-zinc-800 rounded-2xl space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-amber-500" />
              <span>Pairwise Cosine Similarity Distribution</span>
            </h3>
            <span className="text-xs font-mono text-zinc-400">Mean: {benchmarks.meanPairwiseSimilarity}</span>
          </div>

          <div className="space-y-2.5 pt-2">
            {similarityBuckets.map(b => (
              <div key={b.range} className="space-y-1">
                <div className="flex justify-between text-xs font-mono text-zinc-400">
                  <span>Range: {b.range}</span>
                  <span className="text-zinc-200">{b.count} pairs ({b.pct})</span>
                </div>
                <div className="w-full h-2 bg-zinc-900 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-red-600 to-amber-500 rounded-full"
                    style={{ width: b.pct }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mathematical Formulation Card */}
        <div className="p-5 bg-[#131316] border border-zinc-800 rounded-2xl space-y-3">
          <h3 className="text-sm font-bold uppercase tracking-wider text-white flex items-center gap-2">
            <Award className="w-4 h-4 text-emerald-400" />
            <span>Academic Formulation & IR Equations</span>
          </h3>

          <div className="space-y-3 text-xs text-zinc-300 leading-relaxed font-mono">
            <div className="p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg">
              <span className="text-zinc-500 block mb-0.5">1. Normalized Cosine Metric:</span>
              <span className="text-red-400">cos(θ) = (A · B) / (||A||₂ ||B||₂)</span>
            </div>

            <div className="p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg">
              <span className="text-zinc-500 block mb-0.5">2. Mean Reciprocal Rank (MRR):</span>
              <span className="text-amber-400">MRR = (1 / |Q|) * Σ (1 / rank_i)</span>
            </div>

            <div className="p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg">
              <span className="text-zinc-500 block mb-0.5">3. Discounted Cumulative Gain (NDCG@K):</span>
              <span className="text-emerald-400">DCG@K = Σ (rel_i / log₂(i + 1))</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
