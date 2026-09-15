# 🚀 DÉMARRAGE ULTRA-RAPIDE

## 5 MINUTES CHRONO! ⏱️

### Étape 1: Télécharger
```bash
# Télécharger le ZIP
# https://example.com/cheno-ia-complet.zip

# Extraire
unzip cheno-ia-complet.zip
cd cheno-ia-complet
```

### Étape 2: Tester Localement (3 min)
```bash
# Lancer serveur
python3 -m http.server 8000

# Ouvrir dans navigateur
# http://localhost:8000
```

### Étape 3: Tester les Fonctionnalités
1. ✅ Écran de chargement (2s)
2. ✅ Login / Register
3. ✅ Chat & messages
4. ✅ Regarder pub → +10 crédits
5. ✅ Premium plans
6. ✅ Mobile (F12 → Device toggle)

### Étape 4: Déployer sur Vercel (2 min)
```bash
# Initialiser Git
git init
git add .
git commit -m "Cheno IA v2 - Ultra-moderne"

# Pousser vers GitHub
git push -u origin main

# Sur Vercel.com:
# 1. Importer repo
# 2. Déployer
# 3. C'est online! 🎉
```

## 🎯 Test Checklist

- [ ] Logo 🧠 pulse animation
- [ ] Skeleton screens visible
- [ ] Progress bar (0-100%)
- [ ] Login marche
- [ ] Register marche
- [ ] Messages s'affichent
- [ ] Bouton envoyer fonctionne
- [ ] Récompenses visibles
- [ ] Regarder pub: modal affichée
- [ ] Timer 30s compte à rebours
- [ ] Réclamer +10 crédits
- [ ] Inviter: lien copié
- [ ] Monetag: redirige
- [ ] Premium: plans visibles
- [ ] S'abonner: fonctionne
- [ ] Menu profil: dropdown
- [ ] Déconnexion: logout
- [ ] Mobile sidebar: toggle
- [ ] Responsive OK (480px)

## 📊 Configuration Rapide

### Changer intervalle pubs (10 min → X)
`app.js` ligne 136:
```javascript
const AD_INTERVAL = 10 * 60 * 1000;
// 5 min: 5 * 60 * 1000
// 30 min: 30 * 60 * 1000
```

### Changer couleurs (Indigo → Autre)
`style.css` ligne 13-35:
```css
:root {
  --primary: #6366f1;  /* ← Change ici */
  --accent: #ec4899;
}
```

### Changer crédits initiaux
`app.js` ligne 267 (Login):
```javascript
userCredits = 20;  /* ← Change ici */
```

### Changer prix Premium
`index.html` ligne ~380:
```html
<div class="plan-price">2 000<span> FCFA</span></div>
<!-- ← Change 2000 -->
```

## 🔗 URLs Importantes

| Ressource | URL |
|-----------|-----|
| Vercel | https://vercel.com |
| GitHub | https://github.com |
| PayDunya | https://paydunya.com |
| Monetag | https://monetag.com |
| Font Awesome | https://fontawesome.com |

## 📱 Test Mobile

```bash
# Avec Python (Android en debug)
adb reverse tcp:8000 tcp:8000
# Accès: http://localhost:8000

# Ou avec Chrome DevTools
F12 → Ctrl+Shift+M (Toggle device)
# Test 480px, 768px, 1920px
```

## 🎉 C'est Prêt!

**Ça prend 5 minutes max:**
1. Extraire (30s)
2. Tester localement (2 min)
3. Vérifier fonctionnalités (2 min)
4. Déployer Vercel (30s)

**C'est online et live!** 🚀

---

**Problème?** Lire `GUIDE_DEPLOIEMENT.md`

**Questions?** Lire `README.md`
