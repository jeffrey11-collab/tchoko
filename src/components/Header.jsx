import { Link } from 'react-router-dom'
import { Car } from 'lucide-react'

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Car className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-800">AutoLoc</span>
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link 
              to="/" 
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
            >
              Accueil
            </Link>
            <Link 
              to="/catalogue" 
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
            >
              Catalogue
            </Link>
            <Link 
              to="/reservation" 
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
            >
              Réservation
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
            >
              Contact
            </Link>
          </nav>

          {/* Menu mobile */}
          <div className="md:hidden">
            <button className="text-gray-600 hover:text-blue-600">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

