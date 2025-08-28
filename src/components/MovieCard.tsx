import React from 'react'
import { Movie } from '../types/Movie'

interface MovieCardProps {
  movie: Movie
  onClick: () => void
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, onClick }) => {
  return (
    <div 
      className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
      onClick={onClick}
    >
      <div className="relative overflow-hidden rounded-lg bg-gray-800">
        <img
          src={movie.poster}
          alt={movie.title}
          className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
          <div className="flex items-center justify-between mb-1">
            <span className="text-yellow-400 text-sm">★ {movie.rating}</span>
            <span className="text-gray-300 text-sm">{movie.year}</span>
          </div>
        </div>
      </div>
      
      <div className="mt-3">
        <h3 className="font-semibold text-lg mb-1 group-hover:text-red-400 transition-colors">
          {movie.title}
        </h3>
        <p className="text-gray-400 text-sm mb-2">{movie.genre} • {movie.duration}</p>
        <p className="text-gray-500 text-sm line-clamp-2">{movie.description}</p>
      </div>
    </div>
  )
}

export default MovieCard