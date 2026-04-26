Résumé i18n / react-i18next

Fichiers clés
- src/i18n/index.ts : configuration i18next (HttpBackend, LanguageDetector, react-i18next). Met à jour `document.lang` et `document.dir`.
- public/locales/{fr,en,ar}/{common,home}.json : traductions lazy-loaded via `/locales/{{lng}}/{{ns}}.json`.
- src/components/ui/LanguageSwitcher.tsx : composant UI pour changer de langue et sauvegarder en `localStorage`.
- src/components/layout/Navbar.tsx : intégration du `LanguageSwitcher` et usage de `t()` pour les labels de navigation.
- src/pages/HomePage/sections/HeroSection.tsx : exemple de composant utilisant `useTranslation('home')`.
- src/main.tsx : importe `src/i18n` et enveloppe `<App />` dans `Suspense` pour le chargement des traductions.

Comment ajouter une nouvelle langue
1. Créer `public/locales/<code>/<namespace>.json` (ex: `public/locales/es/common.json`).
2. Ajouter le code langue dans `availableLanguages` dans `src/i18n/index.ts`.
3. Ajouter les clés de traduction nécessaires.

Bonnes pratiques
- Utiliser des namespaces (`common`, `home`, ...) pour charger uniquement ce dont chaque page a besoin.
- Éviter les chaînes hardcodées dans les composants : toujours utiliser `t('path.to.key')`.
- Pour l'RTL, la direction est mise à jour automatiquement (lang `ar` définit `dir=rtl`).
- Les traductions sont lazy-loaded par HttpBackend : pas de bundle massif.

Utilisation rapide dans un composant
```tsx
import { useTranslation } from 'react-i18next'

const { t } = useTranslation('common')
return <h1>{t('nav.home')}</h1>
```

Pour la production
- Mettre `debug: false` dans `src/i18n/index.ts`.
- Précompiler ou vérifier les clés manquantes avec des outils i18n si besoin.

Si tu veux, je peux :
- Traduire d'autres composants de l'app.
- Ajouter tests unitaires pour les clés i18n.
- Ajouter un petit menu accessible pour le `LanguageSwitcher`.
