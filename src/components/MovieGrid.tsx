import React from 'react'
import MovieCard from './MovieCard'
import { Movie } from '../types/Movie'
import { movies } from '../data/movies'

interface MovieGridProps {
  searchTerm: string
  onMovieSelect: (movie: Movie) => void
}

const MovieGrid: React.FC<MovieGridProps> = ({ searchTerm, onMovieSelect }) => {
  const filteredMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    movie.genre.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-2">Featured Movies</h2>
        <p className="text-gray-400">Discover amazing movies in high quality</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {filteredMovies.map(movie => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onClick={() => onMovieSelect(movie)}
          />
        ))}
      </div>
      
      {filteredMovies.length === 0 && (
        <div className="text-center py-16">
          <p className="text-gray-400 text-lg">No movies found matching your search.</p>
        </div>
      )}
    </main>
  )
}

export default MovieGrid