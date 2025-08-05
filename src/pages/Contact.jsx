import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert('Veuillez remplir tous les champs.')
      return
    }

    // Simulation d'envoi
    alert('Votre message a été envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.')
    
    // Reset du formulaire
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Téléphone',
      content: '01 23 45 67 89',
      description: 'Lundi - Dimanche, 8h - 20h'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'contact@autoloc.fr',
      description: 'Réponse sous 24h'
    },
    {
      icon: MapPin,
      title: 'Adresse',
      content: '123 Rue de la Location',
      description: '75001 Paris, France'
    },
    {
      icon: Clock,
      title: 'Horaires',
      content: 'Lun-Ven: 8h-19h',
      description: 'Sam-Dim: 9h-17h'
    }
  ]

  const locations = [
    {
      city: 'Paris Centre',
      address: '123 Rue de la Location, 75001 Paris',
      phone: '01 23 45 67 89',
      hours: 'Lun-Ven: 8h-19h, Sam-Dim: 9h-17h'
    },
    {
      city: 'Paris Orly',
      address: 'Aéroport d\'Orly, Terminal Sud, 94390 Orly',
      phone: '01 23 45 67 90',
      hours: '24h/24, 7j/7'
    },
    {
      city: 'Paris CDG',
      address: 'Aéroport Charles de Gaulle, Terminal 2, 95700 Roissy',
      phone: '01 23 45 67 91',
      hours: '24h/24, 7j/7'
    },
    {
      city: 'Lyon',
      address: '456 Avenue de la République, 69003 Lyon',
      phone: '04 78 90 12 34',
      hours: 'Lun-Ven: 8h-19h, Sam: 9h-17h'
    }
  ]

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Contactez-nous
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Une question ? Un besoin particulier ? Notre équipe est là pour vous aider. 
            N'hésitez pas à nous contacter par téléphone, email ou via le formulaire ci-dessous.
          </p>
        </div>

        {/* Informations de contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                <p className="text-gray-800 font-medium mb-1">{info.content}</p>
                <p className="text-gray-600 text-sm">{info.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulaire de contact */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Send className="h-5 w-5 mr-2" />
                  Envoyez-nous un message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Nom complet *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

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
                    <Label htmlFor="subject">Sujet *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Ex: Demande de devis, Question sur une réservation..."
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Décrivez votre demande en détail..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    <Send className="h-4 w-4 mr-2" />
                    Envoyer le message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Nos agences */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  Nos agences
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {locations.map((location, index) => (
                    <div key={index} className="border-b border-gray-200 last:border-b-0 pb-4 last:pb-0">
                      <h3 className="text-lg font-semibold text-blue-600 mb-2">
                        {location.city}
                      </h3>
                      <div className="space-y-1 text-sm text-gray-600">
                        <p className="flex items-start">
                          <MapPin className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                          {location.address}
                        </p>
                        <p className="flex items-center">
                          <Phone className="h-4 w-4 mr-2 flex-shrink-0" />
                          {location.phone}
                        </p>
                        <p className="flex items-center">
                          <Clock className="h-4 w-4 mr-2 flex-shrink-0" />
                          {location.hours}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* FAQ rapide */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Questions fréquentes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Puis-je modifier ma réservation ?</h4>
                    <p className="text-sm text-gray-600">
                      Oui, vous pouvez modifier votre réservation jusqu'à 24h avant la prise en charge.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">Quels documents dois-je apporter ?</h4>
                    <p className="text-sm text-gray-600">
                      Permis de conduire valide, carte d'identité et carte de crédit au nom du conducteur.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">L'assurance est-elle incluse ?</h4>
                    <p className="text-sm text-gray-600">
                      Oui, tous nos véhicules incluent une assurance de base. Des options supplémentaires sont disponibles.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact

