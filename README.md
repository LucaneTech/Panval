# Panval Consilium International — Site Web

Site vitrine professionnel développé en **React + TypeScript + Vite**, stylé avec **Tailwind CSS + DaisyUI**, animé avec **Framer Motion**.

## 🚀 Démarrage rapide

```bash
# 1. Installer les dépendances
npm install

# 2. Copier le fichier d'environnement
cp .env.example .env

# 3. Remplir les clés EmailJS dans .env (voir section Configuration)

# 4. Démarrer le serveur de développement
npm run dev
```

Le site sera disponible sur **http://localhost:5173**

---

## 📁 Structure du projet

```
src/
├── components/
│   ├── layout/        # Navbar, Footer, PageLayout, PageHero, ScrollToTop
│   ├── ui/            # PageLoader, AnimatedCounter, SectionTitle
│   └── sections/      # CtaBanner, StatsStrip, PartnerLogos (partagés)
├── data/              # Contenu statique (formations, témoignages, équipe…)
├── hooks/             # useContactForm, useCounterAnimation, useScrollAnimation
├── pages/
│   ├── HomePage/
│   ├── AboutPage/
│   ├── FormationsPage/
│   ├── EtudesPage/
│   ├── CepPage/
│   ├── ClientsPage/
│   └── ContactPage/
├── types/             # Interfaces TypeScript
└── utils/             # cn(), constants
```

---

## ⚙️ Configuration EmailJS

1. Créez un compte sur [emailjs.com](https://www.emailjs.com)
2. Créez un **Service** (Gmail, Outlook…) → copiez le `Service ID`
3. Créez un **Template** avec les variables : `from_name`, `company`, `role`, `reply_to`, `phone`, `subject`, `services`, `message`
4. Copiez votre **Public Key** depuis Account > API Keys
5. Renseignez les 3 valeurs dans votre fichier `.env`

---

## 🎨 Thème & Personnalisation

### Couleurs (tailwind.config.ts)
| Variable | Valeur | Usage |
|---|---|---|
| `primary` | `#1a3a5a` | Bleu marine — couleur principale |
| `secondary` | `#c0392b` | Rouge — couleur secondaire |
| `accent` | `#c9a227` | Or — accents et CTA |

### Changer les thèmes DaisyUI
Le site supporte 2 thèmes automatiques :
- **`panvallight`** — mode clair (défaut)
- **`panvaldark`** — mode sombre

Le choix suit la préférence système de l'utilisateur, avec un bouton de bascule dans la Navbar.

### Modifier le contenu
Tout le contenu textuel est centralisé dans `src/data/` :
- `formations.data.ts` — les 4 groupes et leurs modules
- `etudes.data.ts` — les 20 services d'études
- `cep.data.ts` — les services CEP et les étapes d'accompagnement
- `team.data.ts` — équipe, timeline, valeurs
- `testimonials.data.ts` — témoignages et partenaires
- `stats.data.ts` — chiffres clés

---

## 📦 Build production

```bash
npm run build
# Les fichiers sont générés dans dist/
```

---

## 🖼️ Images

Les images actuelles sont issues d'**Unsplash** (libres de droits). 
Remplacez-les par les vraies photos du client dans `public/images/` et mettez à jour les URLs dans les composants.

---

## 📞 Contact & Support
**RCCM :** CG-BRZ-01-A1001842  
**Email :** contact@panvalgroup.com  
**Site :** www.panvalgroupe.com
# Panval
