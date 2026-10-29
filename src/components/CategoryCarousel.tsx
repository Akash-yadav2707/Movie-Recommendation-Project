import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Movie } from '../types/movie';
import { MovieCard } from './MovieCard';

interface CategoryCarouselProps {
  title: string;
  subtitle?: string;
  movies: Movie[];
  onSelectMovie: (movie: Movie) => void;
  onFindSimilar: (movie: Movie) => void;
  isWatchlisted: (movieId: string) => boolean;
  onToggleWatchlist: (movie: Movie) => void;
}

export function CategoryCarousel({
  title,
  subtitle,
  movies,
  onSelectMovie,
  onFindSimilar,
  isWatchlisted,
  onToggleWatchlist
}: CategoryCarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const offset = direction === 'left' ? -560 : 560;
      scrollContainerRef.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  if (!movies.length) return null;

  return (
    <div className="relative py-4 group/carousel">
      {/* Header with Title and Scroll Controls */}
      <div className="flex items-end justify-between px-4 sm:px-8 mb-3.5">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white font-display">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xs text-zinc-400 mt-0.5 font-normal">
              {subtitle}
            </p>
          )}
        </div>

        {/* Desktop Carousel Arrows */}
        <div className="hidden sm:flex items-center gap-2">
          <button
            onClick={() => scroll('left')}
            className="p-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="p-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Horizontal Scroll Track */}
      <div
        ref={scrollContainerRef}
        className="flex items-stretch gap-4 overflow-x-auto no-scrollbar px-4 sm:px-8 scroll-smooth pb-3"
      >
        {movies.map(movie => (
          <div key={movie.id} className="w-[180px] sm:w-[210px] md:w-[230px] shrink-0">
            <MovieCard
              movie={movie}
              onSelect={onSelectMovie}
              onFindSimilar={onFindSimilar}
              isWatchlisted={isWatchlisted(movie.id)}
              onToggleWatchlist={onToggleWatchlist}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
