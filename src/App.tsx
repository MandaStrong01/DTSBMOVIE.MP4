
import Header from './components/Header'
import MovieGrid from './components/MovieGrid'
import MoviePlayer from './components/MoviePlayer'
import { Movie } from './types/Movie'

function App() {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null)
  const [searchTerm, setSearchTerm] = useState('')

  const handleMovieSelect = (movie: Movie) => {
    setSelectedMovie(movie)
  }

  const handleBackToGrid = () => {
    setSelectedMovie(null)
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      
      {selectedMovie ? (
        <MoviePlayer movie={selectedMovie} onBack={handleBackToGrid} />
      ) : (
        <MovieGrid searchTerm={searchTerm} onMovieSelect={handleMovieSelect} />
      )}
    </div>
  )
}

export default App
