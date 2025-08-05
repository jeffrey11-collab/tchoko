# AutoLoc - Site Web de Location de Véhicules

## 📋 Description du Projet

AutoLoc est un site web MVP (Minimum Viable Product) complet pour une entreprise de location de véhicules. Le site propose une interface moderne et professionnelle développée avec React et Tailwind CSS.

## ✨ Fonctionnalités

### Pages Principales
- **Page d'Accueil** : Présentation de l'entreprise avec section hero, avantages et statistiques
- **Catalogue** : Affichage des véhicules disponibles avec filtres par catégorie
- **Réservation** : Formulaire complet de réservation avec calcul automatique des prix
- **Contact** : Formulaire de contact et informations sur les agences

### Caractéristiques Techniques
- ✅ Design responsive (mobile, tablette, desktop)
- ✅ Navigation fluide entre les pages
- ✅ Formulaires interactifs avec validation
- ✅ Calcul automatique des prix de location
- ✅ Interface utilisateur moderne avec Tailwind CSS
- ✅ Composants réutilisables avec shadcn/ui
- ✅ Images optimisées pour le web

## 🛠️ Technologies Utilisées

- **Frontend** : React 19.1.0
- **Styling** : Tailwind CSS
- **Composants UI** : shadcn/ui
- **Icônes** : Lucide React
- **Routage** : React Router DOM
- **Build Tool** : Vite
- **Package Manager** : pnpm

## 📁 Structure du Projet

```
car-rental-website/
├── public/                 # Fichiers statiques
├── src/
│   ├── assets/            # Images et ressources
│   ├── components/        # Composants React
│   │   ├── ui/           # Composants UI réutilisables
│   │   ├── Header.jsx    # En-tête de navigation
│   │   └── Footer.jsx    # Pied de page
│   ├── pages/            # Pages principales
│   │   ├── Home.jsx      # Page d'accueil
│   │   ├── Catalog.jsx   # Page catalogue
│   │   ├── Reservation.jsx # Page réservation
│   │   └── Contact.jsx   # Page contact
│   ├── lib/              # Utilitaires
│   ├── App.jsx           # Composant principal
│   ├── App.css           # Styles globaux
│   └── main.jsx          # Point d'entrée
├── package.json          # Dépendances et scripts
├── tailwind.config.js    # Configuration Tailwind
├── vite.config.js        # Configuration Vite
└── README.md             # Documentation
```

## 🚀 Installation et Lancement

### Prérequis
- Node.js (version 18 ou supérieure)
- pnpm (gestionnaire de paquets)

### Étapes d'Installation

1. **Télécharger le projet**
   ```bash
   # Si vous avez reçu une archive
   unzip car-rental-website.zip
   cd car-rental-website
   
   # Ou cloner depuis un dépôt
   git clone [URL_DU_DEPOT]
   cd car-rental-website
   ```

2. **Installer les dépendances**
   ```bash
   pnpm install
   ```

3. **Lancer le serveur de développement**
   ```bash
   pnpm run dev
   ```

4. **Accéder au site**
   - Ouvrez votre navigateur
   - Allez à l'adresse : `http://localhost:5173`

### Scripts Disponibles

```bash
# Démarrer le serveur de développement
pnpm run dev

# Construire pour la production
pnpm run build

# Prévisualiser la version de production
pnpm run preview

# Linter le code
pnpm run lint
```

## 🎨 Personnalisation

### Modifier les Couleurs
Les couleurs principales sont définies dans `src/App.css`. Vous pouvez modifier :
- `--primary` : Couleur principale (actuellement bleu)
- `--secondary` : Couleur secondaire
- `--background` : Couleur de fond

### Ajouter des Véhicules
Pour ajouter de nouveaux véhicules au catalogue :
1. Ajoutez les images dans `src/assets/`
2. Modifiez le tableau `vehicles` dans `src/pages/Catalog.jsx`
3. Suivez la structure existante pour les propriétés

### Modifier le Contenu
- **Informations de l'entreprise** : `src/pages/Home.jsx`
- **Détails de contact** : `src/components/Footer.jsx` et `src/pages/Contact.jsx`
- **Catalogue de véhicules** : `src/pages/Catalog.jsx`

## 📱 Responsive Design

Le site est entièrement responsive et s'adapte à :
- **Mobile** : < 768px
- **Tablette** : 768px - 1024px  
- **Desktop** : > 1024px

## 🔧 Dépannage

### Problèmes Courants

1. **Erreur "Module not found"**
   ```bash
   rm -rf node_modules
   pnpm install
   ```

2. **Port 5173 déjà utilisé**
   ```bash
   pnpm run dev -- --port 3000
   ```

3. **Images ne s'affichent pas**
   - Vérifiez que les images sont dans `src/assets/`
   - Vérifiez les imports dans les composants

### Support
Pour toute question ou problème :
- Vérifiez la console du navigateur pour les erreurs
- Consultez la documentation de React et Vite
- Vérifiez que toutes les dépendances sont installées

## 📄 Licence

Ce projet est fourni à des fins éducatives et de démonstration.

---

**Nom du dossier du projet** : `car-rental-website`

**Développé avec** : React + Vite + Tailwind CSS

