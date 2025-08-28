import React from 'react'

interface HeaderProps {
  searchTerm: string
  onSearchChange: (term: string) => void
}

const Header: React.FC<HeaderProps> = ({ searchTerm, onSearchChange }) => {
  return (
    <header className="bg-black bg-opacity-80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-red-500">DTSBMOVIE</h1>
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="hover:text-red-400 transition-colors">Home</a>
              <a href="#" className="hover:text-red-400 transition-colors">Movies</a>
              <a href="#" className="hover:text-red-400 transition-colors">TV Shows</a>
              <a href="#" className="hover:text-red-400 transition-colors">My List</a>
            </nav>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search movies..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                className="bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 w-64"
              />
              <svg className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-sm font-bold">U</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header