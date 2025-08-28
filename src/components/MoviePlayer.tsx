import React from 'react'
import { Movie } from '../types/Movie'

interface MoviePlayerProps {
  movie: Movie
  onBack: () => void
}

const MoviePlayer: React.FC<MoviePlayerProps> = ({ movie, onBack }) => {
  return (
    <div className="min-h-screen bg-black">
      <div className="relative">
        <button
          onClick={onBack}
          className="absolute top-4 left-4 z-10 bg-black bg-opacity-50 hover:bg-opacity-75 text-white px-4 py-2 rounded-lg transition-all duration-200 flex items-center space-x-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span>Back</span>
        </button>
        
        <div className="aspect-video bg-gray-900 flex items-center justify-center">
          <video
            controls
            autoPlay
            className="w-full h-full"
            poster={movie.poster}
          >
            <source src={movie.videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
          
          <div className="flex items-center space-x-6 mb-6 text-gray-300">
            <span className="flex items-center">
              <svg className="w-5 h-5 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              {movie.rating}/10
            </span>
            <span>{movie.year}</span>
            <span>{movie.duration}</span>
            <span className="bg-red-600 px-2 py-1 rounded text-sm">{movie.genre}</span>
          </div>
          
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            {movie.description}
          </p>
          
          <div className="flex space-x-4">
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center space-x-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
              <span>Play</span>
            </button>
            
            <button className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center space-x-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              <span>Add to List</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MoviePlayer