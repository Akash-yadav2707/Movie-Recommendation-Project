import { useState, useRef, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Disc3, Sparkles, Star, Play, RotateCw, Filter, Volume2 } from 'lucide-react';
import { Movie, FilterState } from '../types/movie';
import { soundFx } from '../utils/audioEffects';
import { ALL_LANGUAGES, ALL_MOODS } from '../data/moviesData';

interface SurpriseMeWheelProps {
  movies: Movie[];
  onOpenMovieModal: (movie: Movie) => void;
  isWatchlisted: (movieId: string) => boolean;
  onToggleWatchlist: (movie: Movie) => void;
}

export function SurpriseMeWheel({
  movies,
  onOpenMovieModal,
  isWatchlisted,
  onToggleWatchlist
}: SurpriseMeWheelProps) {
  // Constraints
  const [selectedLanguage, setSelectedLanguage] = useState<string>('all');
  const [selectedMood, setSelectedMood] = useState<string>('all');
  const [maxRuntime, setMaxRuntime] = useState<number>(180);
  const [minRating, setMinRating] = useState<number>(7.5);

  const [isSpinning, setIsSpinning] = useState(false);
  const [rotationAngle, setRotationAngle] = useState(0);
  const [winnerMovie, setWinnerMovie] = useState<Movie | null>(null);

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const spinReqRef = useRef<number | null>(null);

  // Filter candidate pool
  const candidatePool = movies.filter(m => {
    if (selectedLanguage !== 'all' && m.primaryLanguage !== selectedLanguage) return false;
    if (selectedMood !== 'all' && !m.moodTags.includes(selectedMood)) return false;
    if (m.runtime > maxRuntime) return false;
    if (m.ratings.imdb < minRating) return false;
    return true;
  });

  // Pick up to 8 candidate slices for the visual wheel
  const wheelSlices = candidatePool.length >= 4 ? candidatePool.slice(0, 8) : movies.slice(0, 8);

  // Draw wheel on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = width / 2 - 16;
    const sliceCount = wheelSlices.length;
    const sliceAngle = (2 * Math.PI) / sliceCount;

    ctx.clearRect(0, 0, width, height);

    // Color palette for slices
    const colors = [
      '#dc2626', '#b91c1c', '#7f1d1d', '#991b1b',
      '#ea580c', '#c2410c', '#d97706', '#b45309'
    ];

    ctx.save();
    ctx.translate(centerX, centerY);
    ctx.rotate((rotationAngle * Math.PI) / 180);

    // Draw slices
    for (let i = 0; i < sliceCount; i++) {
      const startAngle = i * sliceAngle;
      const endAngle = (i + 1) * sliceAngle;

      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.arc(0, 0, radius, startAngle, endAngle);
      ctx.closePath();

      ctx.fillStyle = colors[i % colors.length];
      ctx.fill();
      ctx.lineWidth = 2;
      ctx.strokeStyle = '#0e0e11';
      ctx.stroke();

      // Text label inside slice
      ctx.save();
      ctx.rotate(startAngle + sliceAngle / 2);
      ctx.textAlign = 'right';
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 12px Plus Jakarta Sans, sans-serif';
      ctx.shadowColor = 'rgba(0,0,0,0.8)';
      ctx.shadowBlur = 4;

      const title = wheelSlices[i].title;
      const truncated = title.length > 15 ? title.slice(0, 13) + '…' : title;
      ctx.fillText(truncated, radius - 20, 4);
      ctx.restore();
    }

    // Center Hub
    ctx.beginPath();
    ctx.arc(0, 0, 24, 0, 2 * Math.PI);
    ctx.fillStyle = '#0e0e11';
    ctx.fill();
    ctx.lineWidth = 3;
    ctx.strokeStyle = '#f59e0b';
    ctx.stroke();

    ctx.restore();
  }, [rotationAngle, wheelSlices]);

  // Handle Wheel Spin
  const spinWheel = () => {
    if (isSpinning || wheelSlices.length === 0) return;

    setIsSpinning(true);
    setWinnerMovie(null);

    // Random target winner
    const winningIndex = Math.floor(Math.random() * wheelSlices.length);
    const chosen = wheelSlices[winningIndex];

    const sliceAngle = 360 / wheelSlices.length;
    // Calculate final rotation so pointer at top points to chosen index
    const extraSpins = 360 * (5 + Math.floor(Math.random() * 3));
    const targetOffset = 360 - (winningIndex * sliceAngle + sliceAngle / 2) + 90;
    const finalAngle = rotationAngle + extraSpins + (targetOffset - (rotationAngle % 360));

    const startTime = performance.now();
    const duration = 4500; // ms
    const initialAngle = rotationAngle;
    let lastTickAngle = initialAngle;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(1, elapsed / duration);

      // Smooth deceleration curve
      const easeOut = 1 - Math.pow(1 - progress, 3.5);
      const currentAngle = initialAngle + (finalAngle - initialAngle) * easeOut;
      setRotationAngle(currentAngle);

      // Tick audio every slice crossing
      if (Math.abs(currentAngle - lastTickAngle) >= sliceAngle) {
        soundFx.playTick();
        lastTickAngle = currentAngle;
      }

      if (progress < 1) {
        spinReqRef.current = requestAnimationFrame(animate);
      } else {
        setIsSpinning(false);
        setWinnerMovie(chosen);
        soundFx.playFanfare();
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      }
    };

    spinReqRef.current = requestAnimationFrame(animate);
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Title Header */}
      <div className="p-6 bg-gradient-to-r from-zinc-950 via-[#15151a] to-zinc-950 border border-zinc-800 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-red-500 uppercase tracking-wider">
            <Disc3 className="w-4 h-4 animate-spin-slow" />
            <span>Movie Decider Roulette</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-display mt-1">
            "Surprise Me" Decision Wheel
          </h2>
          <p className="text-xs text-zinc-400 mt-0.5">
            Can’t decide what to watch tonight? Set your language and time constraints, spin the roulette, and let CineVerse AI pick your cinematic destiny.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 bg-zinc-900/80 px-3 py-2 rounded-lg border border-zinc-800">
          <Filter className="w-3.5 h-3.5 text-red-400" />
          <span>Candidate Pool: </span>
          <strong className="text-white font-bold">{candidatePool.length}</strong>
        </div>
      </div>

      {/* Main Wheel Split Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Custom Constraints Panel */}
        <div className="lg:col-span-4 bg-[#131316] border border-zinc-800 rounded-2xl p-5 space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-300 flex items-center gap-2">
            <Filter className="w-4 h-4 text-red-500" />
            <span>Roulette Constraints</span>
          </h3>

          {/* Language */}
          <div>
            <label className="block text-xs font-medium text-zinc-400 mb-1.5">
              Target Language
            </label>
            <select
              value={selectedLanguage}
              onChange={e => setSelectedLanguage(e.target.value)}
              className="w-full text-xs bg-zinc-900 border border-zinc-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-red-500"
            >
              {ALL_LANGUAGES.map(l => (
                <option key={l.code} value={l.code}>
                  {l.flag} {l.label}
                </option>
              ))}
            </select>
          </div>

          {/* Mood / Vibe */}
          <div>
            <label className="block text-xs font-medium text-zinc-400 mb-1.5">
              Emotional Vibe
            </label>
            <select
              value={selectedMood}
              onChange={e => setSelectedMood(e.target.value)}
              className="w-full text-xs bg-zinc-900 border border-zinc-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-red-500"
            >
              <option value="all">Any Vibe (Free Spin)</option>
              {ALL_MOODS.map(m => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
          </div>

          {/* Max Runtime */}
          <div>
            <div className="flex justify-between text-xs text-zinc-400 mb-1">
              <span>Max Runtime</span>
              <span className="font-mono font-bold text-zinc-200">{maxRuntime} mins</span>
            </div>
            <input
              type="range"
              min={90}
              max={210}
              step={15}
              value={maxRuntime}
              onChange={e => setMaxRuntime(parseInt(e.target.value, 10))}
              className="w-full accent-red-600 cursor-pointer"
            />
          </div>

          {/* Min IMDb */}
          <div>
            <div className="flex justify-between text-xs text-zinc-400 mb-1">
              <span>Minimum IMDb Rating</span>
              <span className="font-mono font-bold text-amber-400">★ {minRating}</span>
            </div>
            <input
              type="range"
              min={6.5}
              max={8.8}
              step={0.1}
              value={minRating}
              onChange={e => setMinRating(parseFloat(e.target.value))}
              className="w-full accent-amber-500 cursor-pointer"
            />
          </div>

          {candidatePool.length === 0 && (
            <p className="text-xs text-amber-400/90 italic pt-2">
              No movies match these strict constraints! Loosen runtime or rating filters to populate the wheel.
            </p>
          )}
        </div>

        {/* Center: Canvas Roulette Wheel */}
        <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 bg-[#0e0e11] border border-zinc-800 rounded-2xl relative min-h-[420px]">
          {/* Wheel Pointer Triangle at Top */}
          <div className="absolute top-5 z-20 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[20px] border-t-amber-400 drop-shadow-[0_2px_8px_rgba(251,191,36,0.8)]" />

          {/* Canvas Wheel */}
          <canvas
            ref={canvasRef}
            width={340}
            height={340}
            className="w-[280px] sm:w-[320px] h-[280px] sm:h-[320px] drop-shadow-2xl"
          />

          {/* Spin Button */}
          <button
            onClick={spinWheel}
            disabled={isSpinning || candidatePool.length === 0}
            className={`mt-6 flex items-center gap-2 px-8 py-3 rounded-xl font-bold text-sm text-white shadow-xl transition-all ${
              isSpinning || candidatePool.length === 0
                ? 'bg-zinc-800 text-zinc-500 cursor-not-allowed'
                : 'bg-red-600 hover:bg-red-700 shadow-red-600/30 hover:scale-105 active:scale-95'
            }`}
          >
            <RotateCw className={`w-4 h-4 ${isSpinning ? 'animate-spin' : ''}`} />
            <span>{isSpinning ? 'Deciding…' : 'SPIN THE WHEEL'}</span>
          </button>
        </div>

        {/* Right: Winning Movie Reveal Card */}
        <div className="lg:col-span-4 bg-[#131316] border border-zinc-800 rounded-2xl p-5 min-h-[420px] flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
              <Sparkles className="w-4 h-4" />
              <span>Decided Destination</span>
            </div>

            {winnerMovie ? (
              <div className="space-y-3 animate-in zoom-in-95 duration-300">
                <div className="aspect-[16/9] w-full rounded-xl overflow-hidden bg-zinc-950 border border-zinc-700 relative">
                  <img
                    src={winnerMovie.backdropUrl || winnerMovie.posterUrl}
                    alt={winnerMovie.title}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = winnerMovie.posterUrl;
                    }}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 left-2 px-2 py-0.5 bg-red-600 text-white font-bold text-[10px] rounded shadow">
                    WINNER
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-white font-display">
                    {winnerMovie.title}
                  </h4>
                  <div className="flex items-center gap-2 text-xs text-zinc-400 font-mono mt-1">
                    <span>{winnerMovie.year}</span>
                    <span>·</span>
                    <span>{winnerMovie.runtime} min</span>
                    <span>·</span>
                    <span className="flex items-center text-amber-400">
                      <Star className="w-3.5 h-3.5 fill-amber-400 mr-0.5" />
                      {winnerMovie.ratings.imdb}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-zinc-300 line-clamp-3 leading-relaxed">
                  {winnerMovie.overview}
                </p>

                <div className="text-xs font-semibold text-red-400 flex items-center gap-1.5">
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>{winnerMovie.audioBadgeType}: {winnerMovie.languageLabel}</span>
                </div>
              </div>
            ) : (
              <div className="h-64 flex flex-col items-center justify-center text-center p-6 text-zinc-500 space-y-2">
                <Disc3 className="w-12 h-12 text-zinc-700 animate-pulse" />
                <p className="text-xs">
                  Press <strong>"SPIN THE WHEEL"</strong> to let the decider pick your movie.
                </p>
              </div>
            )}
          </div>

          {winnerMovie && (
            <div className="pt-4 border-t border-zinc-800 space-y-2">
              <button
                onClick={() => onOpenMovieModal(winnerMovie)}
                className="w-full py-2.5 bg-red-600 hover:bg-red-700 text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                <Play className="w-3.5 h-3.5 fill-white" />
                <span>View Full Details & Streaming Options</span>
              </button>

              <a
                href={`https://www.youtube.com/watch?v=${winnerMovie.youtubeTrailerId}`}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-white rounded-lg text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                <span className="px-1 py-0.2 bg-red-600 text-[10px] font-black rounded">YT</span>
                <span>Watch Official Trailer on YouTube</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
