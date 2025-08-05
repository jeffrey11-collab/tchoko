import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Calendar, Car, User, Mail, Phone, MapPin } from 'lucide-react'

const Reservation = () => {
  const location = useLocation()
  const selectedVehicle = location.state?.selectedVehicle

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    vehicle: selectedVehicle?.name || '',
    startDate: '',
    endDate: '',
    pickupLocation: '',
    comments: ''
  })

  const [totalPrice, setTotalPrice] = useState(0)
  const [days, setDays] = useState(0)

  const vehicles = [
    'Citadine Économique - 25€/jour',
    'Berline Confort - 45€/jour',
    'SUV Familial - 65€/jour',
    'Véhicule de Prestige - 120€/jour',
    'Cabriolet Sport - 95€/jour',
    'Voiture Sport - 85€/jour'
  ]

  const locations = [
    'Paris Centre',
    'Paris Orly',
    'Paris CDG',
    'Lyon',
    'Marseille',
    'Nice',
    'Toulouse',
    'Bordeaux'
  ]

  useEffect(() => {
    if (formData.startDate && formData.endDate) {
      const start = new Date(formData.startDate)
      const end = new Date(formData.endDate)
      const diffTime = Math.abs(end - start)
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
      
      if (diffDays > 0) {
        setDays(diffDays)
        
        // Calculer le prix basé sur le véhicule sélectionné
        let dailyPrice = 0
        if (selectedVehicle) {
          dailyPrice = selectedVehicle.price
        } else {
          // Extraire le prix du nom du véhicule
          const priceMatch = formData.vehicle.match(/(\d+)€/)
          if (priceMatch) {
            dailyPrice = parseInt(priceMatch[1])
          }
        }
        
        setTotalPrice(dailyPrice * diffDays)
      }
    }
  }, [formData.startDate, formData.endDate, formData.vehicle, selectedVehicle])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSelectChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Validation simple
    if (!formData.firstName || !formData.lastName || !formData.email || 
        !formData.vehicle || !formData.startDate || !formData.endDate || 
        !formData.pickupLocation) {
      alert('Veuillez remplir tous les champs obligatoires.')
      return
    }

    if (new Date(formData.endDate) <= new Date(formData.startDate)) {
      alert('La date de fin doit être postérieure à la date de début.')
      return
    }

    // Simulation d'envoi
    alert(`Réservation confirmée !\n\nDétails:\n- Véhicule: ${formData.vehicle}\n- Du ${formData.startDate} au ${formData.endDate}\n- Durée: ${days} jour(s)\n- Prix total: ${totalPrice}€\n\nUn email de confirmation vous sera envoyé.`)
    
    // Reset du formulaire
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      vehicle: '',
      startDate: '',
      endDate: '',
      pickupLocation: '',
      comments: ''
    })
  }

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Réservation de Véhicule
          </h1>
          <p className="text-xl text-gray-600">
            Remplissez le formulaire ci-dessous pour réserver votre véhicule.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Formulaire de réservation */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="h-5 w-5 mr-2" />
                  Informations de réservation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Informations personnelles */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">Prénom *</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Nom *</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Téléphone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  {/* Sélection du véhicule */}
                  <div>
                    <Label htmlFor="vehicle">Véhicule *</Label>
                    <Select 
                      value={formData.vehicle} 
                      onValueChange={(value) => handleSelectChange('vehicle', value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Choisissez un véhicule" />
                      </SelectTrigger>
                      <SelectContent>
                        {vehicles.map((vehicle, index) => (
                          <SelectItem key={index} value={vehicle}>
                            {vehicle}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Dates */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="startDate">Date de début *</Label>
                      <Input
                        id="startDate"
                        name="startDate"
                        type="date"
                        value={formData.startDate}
                        onChange={handleInputChange}
                        min={new Date().toISOString().split('T')[0]}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="endDate">Date de fin *</Label>
                      <Input
                        id="endDate"
                        name="endDate"
                        type="date"
                        value={formData.endDate}
                        onChange={handleInputChange}
                        min={formData.startDate || new Date().toISOString().split('T')[0]}
                        required
                      />
                    </div>
                  </div>

                  {/* Lieu de récupération */}
                  <div>
                    <Label htmlFor="pickupLocation">Lieu de récupération *</Label>
                    <Select 
                      value={formData.pickupLocation} 
                      onValueChange={(value) => handleSelectChange('pickupLocation', value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Choisissez un lieu de récupération" />
                      </SelectTrigger>
                      <SelectContent>
                        {locations.map((location, index) => (
                          <SelectItem key={index} value={location}>
                            {location}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Commentaires */}
                  <div>
                    <Label htmlFor="comments">Commentaires ou demandes spéciales</Label>
                    <Textarea
                      id="comments"
                      name="comments"
                      value={formData.comments}
                      onChange={handleInputChange}
                      placeholder="Ajoutez vos commentaires ou demandes spéciales..."
                      rows={4}
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Confirmer la réservation
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Résumé de la réservation */}
          <div>
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  Résumé de la réservation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {selectedVehicle && (
                  <div className="border-b pb-4">
                    <img 
                      src={selectedVehicle.image} 
                      alt={selectedVehicle.name}
                      className="w-full h-32 object-cover rounded mb-2"
                    />
                    <h3 className="font-semibold">{selectedVehicle.name}</h3>
                    <p className="text-sm text-gray-600">{selectedVehicle.description}</p>
                  </div>
                )}

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Véhicule:</span>
                    <span className="font-medium">
                      {formData.vehicle || 'Non sélectionné'}
                    </span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span>Date de début:</span>
                    <span className="font-medium">
                      {formData.startDate || 'Non définie'}
                    </span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span>Date de fin:</span>
                    <span className="font-medium">
                      {formData.endDate || 'Non définie'}
                    </span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span>Durée:</span>
                    <span className="font-medium">
                      {days > 0 ? `${days} jour(s)` : 'Non calculée'}
                    </span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span>Lieu:</span>
                    <span className="font-medium">
                      {formData.pickupLocation || 'Non défini'}
                    </span>
                  </div>
                </div>

                {totalPrice > 0 && (
                  <div className="border-t pt-4">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Prix total:</span>
                      <span className="text-blue-600">{totalPrice}€</span>
                    </div>
                  </div>
                )}

                <div className="text-sm text-gray-600 space-y-1">
                  <p>• Assurance incluse</p>
                  <p>• Kilométrage illimité</p>
                  <p>• Assistance 24/7</p>
                  <p>• Annulation gratuite 24h avant</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reservation

