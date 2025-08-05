import { Car, Phone, Mail, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Car className="h-6 w-6 text-blue-400" />
              <span className="text-xl font-bold">AutoLoc</span>
            </div>
            <p className="text-gray-300">
              Votre partenaire de confiance pour la location de véhicules. 
              Des voitures de qualité pour tous vos déplacements.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">659 35 86 78</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">jeffmbele5013@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300">123 Rue de la Location, 75001 Kondengui </span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Horaires</h3>
            <div className="text-gray-300 space-y-1">
              <p>Lundi - Vendredi: 8h - 19h</p>
              <p>Samedi: 9h - 17h</p>
              <p>Dimanche: 10h - 16h</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-4 text-center">
          <p className="text-gray-400">
            Jeffrey_© 2024 AutoLoc. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

