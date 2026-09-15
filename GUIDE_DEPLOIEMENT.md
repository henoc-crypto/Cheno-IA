# 📋 GUIDE DE DÉPLOIEMENT COMPLET

## 🎯 Vue d'Ensemble

```
Cheno IA v2.0
├─ Écran de chargement ✅
├─ Pubs auto 10 min ✅
├─ 30+ boutons cliquables ✅
├─ Détection internet ✅
└─ Design ultra-moderne ✅
```

## 📁 Fichiers Essentiels

| Fichier | Taille | Rôle |
|---------|--------|------|
| `index.html` | 17 KB | Structure HTML |
| `style.css` | 32 KB | Design moderne |
| `app.js` | 20 KB | Logique + Pubs |
| `package.json` | 0.3 KB | Config NPM |
| `vercel.json` | 0.3 KB | Config Vercel |
| `.gitignore` | 0.3 KB | Git ignore |

**TOTAL: 69 KB** (Ultra-complet!)

## 🚀 DÉPLOIEMENT ÉTAPE PAR ÉTAPE

### Phase 1: PRÉPARATION (10 min)

#### 1.1 Créer un compte GitHub
- Aller sur https://github.com
- S'inscrire (gratuit)
- Créer un repo: `cheno-ia-complet`

#### 1.2 Initialiser Git Localement
```bash
# Naviguer vers le dossier
cd /chemin/vers/cheno-ia-complet

# Initialiser Git
git init
git config user.name "Henoc"
git config user.email "henoc@example.com"

# Ajouter tous les fichiers
git add .

# Commit initial
git commit -m "🚀 Cheno IA v2 - Interface ultra-moderne avec pubs auto"

# Ajouter remote GitHub
git remote add origin https://github.com/VOTREUSERNAME/cheno-ia-complet.git

# Pousser vers GitHub
git branch -M main
git push -u origin main
```

### Phase 2: DEPLOYMENT (5 min)

#### 2.1 Créer un compte Vercel
- Aller sur https://vercel.com
- S'inscrire avec GitHub (lier le compte)
- Confirmer email

#### 2.2 Importer le Projet
1. Dashboard Vercel → "Add New" → "Project"
2. Sélectionner le repo GitHub: `cheno-ia-complet`
3. Framework: **Static Site** (ou "Other")
4. Root Directory: `.`
5. Déployer!

#### 2.3 Attendre la Build
- Vercel build automatiquement
- ~1-2 minutes
- URL générée: `https://cheno-ia-complet.vercel.app`

### Phase 3: CONFIGURATION (5 min)

#### 3.1 Variables d'Environnement (Optionnel)
Dashboard Vercel → Project Settings → Environment Variables

```
PAYDUNYA_MASTER_KEY = ckhviap7-S8Nd-FcPn-LvTU-obdTzg8gffGE
PAYDUNYA_PRIVATE_KEY = live_private_vT8XlDxikdSUvVKqMzqMNZohDOA
MONETAG_REF = tN4E
```

#### 3.2 Domaine Personnalisé (Optionnel)
Dashboard Vercel → Project Settings → Domains
- Ajouter domaine custom
- Configurer DNS (si besoin)

## 🔧 CONFIGURATION AVANCÉE

### Modifier Intervalle des Pubs

**Fichier:** `app.js` ligne 136
**Original:** 10 minutes

```javascript
// AVANT (10 min)
const AD_INTERVAL = 10 * 60 * 1000;

// Changer à:
const AD_INTERVAL = 5 * 60 * 1000;   // 5 min
const AD_INTERVAL = 15 * 60 * 1000;  // 15 min
const AD_INTERVAL = 30 * 60 * 1000;  // 30 min
const AD_INTERVAL = 1 * 60 * 1000;   // 1 min (test)
```

**Redéployer:**
```bash
git add app.js
git commit -m "Changer intervalle pubs: 10 min → 5 min"
git push
# Vercel redéploie auto!
```

### Modifier Crédits Initiaux

**Fichier:** `app.js`

```javascript
// Login (ligne ~267)
userCredits = 20;  // ← Change ici (ex: 50)

// Register (ligne ~285)
userCredits = 50;  // ← Change ici (ex: 100)

// Pub (ligne ~381)
userCredits += 10;  // ← Change ici (ex: +15)

// Invite (ligne ~385)
userCredits += 50;  // ← Change ici (ex: +100)
```

### Modifier Couleurs

**Fichier:** `style.css` ligne 13-35

```css
:root {
  /* Couleurs principales */
  --primary: #6366f1;      /* ← Indigo (change ici) */
  --primary-light: #818cf8;
  --primary-dark: #4f46e5;
  
  --accent: #ec4899;       /* ← Rose (change ici) */
  --accent-light: #f472b6;
  
  --success: #10b981;      /* Vert */
  --warning: #f59e0b;      /* Orange */
  --danger: #ef4444;       /* Rouge */
  
  /* ... autres variables ... */
}
```

**Changer à:**
```css
/* Exemple: Bleu + Violet */
--primary: #3b82f6;        /* Bleu */
--accent: #a78bfa;         /* Violet */
```

### Modifier Plans Premium

**Fichier:** `index.html` ligne ~360-420

```html
<!-- Mensuel: 2 000 FCFA -->
<div class="plan-price">2 000<span> FCFA</span></div>
                       ^^^^^ ← Change ici

<!-- Annuel: 18 000 FCFA -->
<div class="plan-price">18 000<span> FCFA</span></div>
                        ^^^^^^ ← Change ici
```

## 📊 MONITORING & LOGS

### Voir les Logs Vercel
```bash
# Terminal
vercel logs cheno-ia-complet

# Ou Dashboard:
# Project → Deployments → Click → Logs
```

### Vérifier Performance
- Dashboard Vercel → Analytics
- Metrics: Build time, Performance
- Google Lighthouse: F12 → Lighthouse

### Vérifier Errors
- Dashboard Vercel → Deployments → Errors
- Console navigateur: F12 → Console

## 🆘 TROUBLESHOOTING

### Déploiement échoue?
```bash
# Vérifier les fichiers
ls -la

# Vérifier Git status
git status

# Vérifier la config
cat vercel.json
cat package.json

# Pousser à nouveau
git push --force origin main
```

### Page blanche après déploiement?
1. Vérifier console: F12 → Console
2. Vérifier que `index.html` est à la racine
3. Vérifier que `style.css` et `app.js` sont dans le même dossier
4. Vérifier les chemins relatifs dans `index.html`

### Pubs ne s'affichent pas?
- Vérifier: `userPlan === 'premium'` (Premium = pas de pubs)
- Console: F12 → Console
- Vérifier intervalle: `AD_INTERVAL`

### Icônes Font Awesome manquent?
- CDN chargé dans `<head>`?
- Lien correct: `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css`
- Cache navigateur? F12 → Ctrl+Shift+R (Hard refresh)

### Performance lente?
- Lighthouse: F12 → Lighthouse
- Optimiser images
- Minifier CSS/JS
- Lazy load

## 📈 MISE À JOUR APRÈS DÉPLOIEMENT

### Modifier un fichier
```bash
# Éditer le fichier (ex: app.js)
nano app.js

# Commit et push
git add app.js
git commit -m "Fix: description du changement"
git push

# Vercel redéploie auto!
# Attend ~2 min
```

### Ajouter un nouveau fichier
```bash
# Créer nouveau fichier
echo "contenu" > nouveau-fichier.js

# Commit et push
git add nouveau-fichier.js
git commit -m "Add: nouveau-fichier.js"
git push
```

### Revert à une version antérieure
```bash
# Voir historique
git log --oneline

# Revert à un commit
git revert <commit-id>
git push
```

## 🔒 SÉCURITÉ

### Never commit:
- ❌ `.env` (variables sensibles)
- ❌ `node_modules/` (auto-généré)
- ❌ Clés API / Tokens
- ✅ Utiliser Vercel Environment Variables à la place

### Exemple:
```
# .env (NE PAS COMMIT)
PAYDUNYA_KEY=secret123

# À la place:
# Dashboard Vercel → Settings → Environment Variables
# Ajouter: PAYDUNYA_KEY = secret123
```

## 📋 CHECKLIST FINAL

- [ ] Fichiers copiés localement
- [ ] Git repo créé (`git init`)
- [ ] Tous fichiers ajoutés (`git add .`)
- [ ] Commit créé (`git commit`)
- [ ] GitHub repo créé
- [ ] Remote ajouté (`git remote add origin`)
- [ ] Poussé vers GitHub (`git push`)
- [ ] Compte Vercel créé
- [ ] Repo importé dans Vercel
- [ ] Build réussi (Vercel dashboard)
- [ ] URL générée
- [ ] Site accessible
- [ ] Écran de chargement visible
- [ ] Login marche
- [ ] Pubs auto fonctionnent
- [ ] Boutons cliquables
- [ ] Mobile responsive
- [ ] Pas d'erreurs console
- [ ] Performance acceptable (Lighthouse >80)

## 🎉 C'EST LIVE!

Une fois déployé sur Vercel, votre Cheno IA est:
- ✅ Online 24/7
- ✅ Accessible partout (URL publique)
- ✅ Auto-scale (millions users)
- ✅ Gratuit (plan gratuit Vercel)
- ✅ CDN global (fast worldwide)
- ✅ SSL certifikat (https)
- ✅ Domaine custom (optionnel)

---

## 📞 SUPPORT LIENS

| Problème | Ressource |
|----------|-----------|
| GitHub help | https://docs.github.com |
| Vercel docs | https://vercel.com/docs |
| HTML/CSS | https://developer.mozilla.org |
| JavaScript | https://javascript.info |
| Font Awesome | https://fontawesome.com/icons |

---

**Version:** 2.0 Ultra-Moderne  
**Date:** Septembre 2026  
**Status:** ✅ PRÊT POUR PRODUCTION  

Bon déploiement! 🚀
