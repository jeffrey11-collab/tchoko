import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Users, Fuel, Settings, Star } from 'lucide-react'
import { Link } from 'react-router-dom'

// Import des images
import car1 from '../assets/ae3O5efPBufR.png'
import car2 from '../assets/1jA4aPo830mL.jpg'
import car3 from '../assets/HKKjh1SwfUdt.jpg'
import car4 from '../assets/hN6ReiylY6pb.webp'
import car5 from '../assets/BmHM6fItDjZ2.jpg'
import car6 from '../assets/bb9Q4oC7iSmw.jpg'

const Catalog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const vehicles = [
    {
      id: 1,
      name: 'Citadine Économique',
      category: 'citadine',
      image: car1,
      price: 25,
      passengers: 4,
      transmission: 'Manuelle',
      fuel: 'Essence',
      rating: 4.5,
      features: ['Climatisation', 'Bluetooth', 'GPS'],
      description: 'Parfaite pour la ville, économique et facile à garer.'
    },
    {
      id: 2,
      name: 'Berline Confort',
      category: 'berline',
      image: car2,
      price: 45,
      passengers: 5,
      transmission: 'Automatique',
      fuel: 'Diesel',
      rating: 4.7,
      features: ['Climatisation', 'Cuir', 'GPS', 'Caméra de recul'],
      description: 'Confort optimal pour vos voyages d\'affaires ou familiaux.'
    },
    {
      id: 3,
      name: 'SUV Familial',
      category: 'suv',
      image: car3,
      price: 65,
      passengers: 7,
      transmission: 'Automatique',
      fuel: 'Diesel',
      rating: 4.6,
      features: ['7 places', 'Climatisation', 'GPS', 'Toit ouvrant'],
      description: 'Spacieux et confortable pour toute la famille.'
    },
    {
      id: 4,
      name: 'Véhicule de Prestige',
      category: 'prestige',
      image: car4,
      price: 120,
      passengers: 4,
      transmission: 'Automatique',
      fuel: 'Essence',
      rating: 4.9,
      features: ['Cuir premium', 'Son Bose', 'GPS', 'Sièges chauffants'],
      description: 'Luxe et performance pour vos occasions spéciales.'
    },
    {
      id: 5,
      name: 'Cabriolet Sport',
      category: 'sport',
      image: car5,
      price: 95,
      passengers: 2,
      transmission: 'Automatique',
      fuel: 'Essence',
      rating: 4.8,
      features: ['Toit décapotable', 'Cuir', 'GPS', 'Son premium'],
      description: 'Sensation de liberté et style incomparable.'
    },
    {
      id: 6,
      name: 'Voiture Sport',
      category: 'sport',
      image: car6,
      price: 85,
      passengers: 4,
      transmission: 'Manuelle',
      fuel: 'Essence',
      rating: 4.7,
      features: ['Moteur puissant', 'Suspension sport', 'GPS'],
      description: 'Performance et plaisir de conduite garantis.'
    }
  ]

  const categories = [
    { id: 'all', name: 'Tous les véhicules' },
    { id: 'citadine', name: 'Citadines' },
    { id: 'berline', name: 'Berlines' },
    { id: 'suv', name: 'SUV' },
    { id: 'sport', name: 'Sport' },
    { id: 'prestige', name: 'Prestige' }
  ]

  const filteredVehicles = selectedCategory === 'all' 
    ? vehicles 
    : vehicles.filter(vehicle => vehicle.category === selectedCategory)

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Notre Catalogue de Véhicules
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez notre large gamme de véhicules adaptés à tous vos besoins. 
            Des citadines économiques aux voitures de prestige.
          </p>
        </div>

        {/* Filtres par catégorie */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map(category => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className="mb-2"
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Grille des véhicules */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVehicles.map(vehicle => (
            <Card key={vehicle.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader className="p-0">
                <div className="relative">
                  <img 
                    src={vehicle.image} 
                    alt={vehicle.name}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-2 right-2 bg-blue-600">
                    {vehicle.category}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <CardTitle className="text-xl mb-2">{vehicle.name}</CardTitle>
                <p className="text-gray-600 mb-4">{vehicle.description}</p>
                
                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${i < Math.floor(vehicle.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">({vehicle.rating})</span>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-4 text-sm">
                  <div className="flex items-center">
                    <Users className="h-4 w-4 text-gray-500 mr-1" />
                    <span>{vehicle.passengers}</span>
                  </div>
                  <div className="flex items-center">
                    <Settings className="h-4 w-4 text-gray-500 mr-1" />
                    <span className="text-xs">{vehicle.transmission}</span>
                  </div>
                  <div className="flex items-center">
                    <Fuel className="h-4 w-4 text-gray-500 mr-1" />
                    <span className="text-xs">{vehicle.fuel}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {vehicle.features.slice(0, 3).map((feature, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                    {vehicle.features.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{vehicle.features.length - 3}
                      </Badge>
                    )}
                  </div>
                </div>
              </CardContent>

              <CardFooter className="p-6 pt-0">
                <div className="w-full">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-2xl font-bold text-blue-600">{vehicle.price}€</span>
                      <span className="text-gray-600">/jour</span>
                    </div>
                  </div>
                  <Link to="/reservation" state={{ selectedVehicle: vehicle }}>
                    <Button className="w-full">
                      Réserver maintenant
                    </Button>
                  </Link>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredVehicles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              Aucun véhicule trouvé dans cette catégorie.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Catalog

