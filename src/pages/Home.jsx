import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Car, Shield, Clock, Star } from 'lucide-react'

const Home = () => {
  return (
    <div>
      {/* Section Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Location de Véhicules de Qualité
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Découvrez notre flotte de véhicules modernes et fiables pour tous vos déplacements. 
            Réservation simple, tarifs transparents, service de qualité.
          </p>
          <div className="space-x-4">
            <Link to="/catalogue">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Voir nos véhicules
              </Button>
            </Link>
            <Link to="/reservation">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                Réserver maintenant
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Section Avantages */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Pourquoi choisir AutoLoc ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Car className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Flotte Moderne</h3>
              <p className="text-gray-600">
                Véhicules récents et bien entretenus pour votre confort et votre sécurité.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Assurance Incluse</h3>
              <p className="text-gray-600">
                Tous nos véhicules sont assurés pour votre tranquillité d'esprit.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Service 24/7</h3>
              <p className="text-gray-600">
                Assistance disponible à tout moment pour vous accompagner.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section À propos */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                À propos d'AutoLoc
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                Depuis plus de 10 ans, AutoLoc est votre partenaire de confiance pour la location de véhicules. 
                Nous proposons une large gamme de voitures adaptées à tous vos besoins : citadines pour la ville, 
                berlines pour les voyages d'affaires, SUV pour les familles, et véhicules de prestige pour les occasions spéciales.
              </p>
              <p className="text-gray-600 mb-6">
                Notre engagement : vous offrir un service de qualité avec des véhicules fiables, 
                des tarifs compétitifs et un service client exceptionnel.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                </div>
                <span className="text-gray-600">4.9/5 - Plus de 1000 avis clients</span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-gray-600">Véhicules disponibles</div>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">10k+</div>
                <div className="text-gray-600">Clients satisfaits</div>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                <div className="text-gray-600">Support client</div>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">15</div>
                <div className="text-gray-600">Agences en France</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Prêt à réserver votre véhicule ?
          </h2>
          <p className="text-xl mb-8">
            Découvrez notre catalogue et trouvez le véhicule parfait pour vos besoins.
          </p>
          <Link to="/catalogue">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Voir le catalogue
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home

