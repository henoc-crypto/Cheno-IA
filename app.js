// =========================================================================
// CHENO IA - APP MODERNE (2024) 
// Pubs auto + Tous boutons + Connexion check
// =========================================================================

// =========================================================================
// ÉLÉMENTS DU DOM
// =========================================================================

const loadingScreen = document.getElementById('loadingScreen');
const connectionStatus = document.getElementById('connectionStatus');
const statusDot = document.querySelector('.status-dot');
const noConnectionModal = document.getElementById('noConnectionModal');
const retryConnectionBtn = document.getElementById('retryConnectionBtn');

const appWrapper = document.getElementById('appWrapper');
const authModal = document.getElementById('authModal');
const adsModal = document.getElementById('adsModal');

// Sidebar
const sidebar = document.querySelector('.sidebar');
const sidebarOverlay = document.getElementById('sidebarOverlay');
const menuOpenBtn = document.getElementById('menuOpenBtn');
const menuCloseBtn = document.getElementById('menuCloseBtn');
const newChatBtn = document.getElementById('newChatBtn');

// Navigation
const navItems = document.querySelectorAll('.nav-item');
const sections = document.querySelectorAll('.section');

// Chat
const chatForm = document.getElementById('chatForm');
const messageInput = document.getElementById('messageInput');
const sendBtn = document.getElementById('sendBtn');
const messagesList = document.getElementById('messagesList');
const welcomeScreen = document.getElementById('welcomeScreen');
const messagesWrapper = document.getElementById('messagesWrapper');

// Profile
const profileCard = document.getElementById('profileCard');
const profileMenuBtn = document.getElementById('profileMenuBtn');
const profileDropdown = document.getElementById('profileDropdown');
const profileName = document.getElementById('profileName');
const profileAvatar = document.getElementById('profileAvatar');
const profileStatus = document.getElementById('profileStatus');
const creditCount = document.getElementById('creditCount');

// Rewards
const watchAdBtn = document.getElementById('watchAdBtn');
const inviteBtn = document.getElementById('inviteBtn');
const monetagBtn = document.getElementById('monetagBtn');

// Profile Menu
const logoutLink = document.getElementById('logoutLink');
const viewProfileLink = document.getElementById('viewProfileLink');
const settingsLink = document.getElementById('settingsLink');
const aboutLink = document.getElementById('aboutLink');

// Auth
const authTabs = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');
const loginBtn = document.getElementById('loginBtn');
const registerBtn = document.getElementById('registerBtn');
const loginEmail = document.getElementById('loginEmail');
const loginPassword = document.getElementById('loginPassword');
const registerName = document.getElementById('registerName');
const registerEmail = document.getElementById('registerEmail');
const registerPassword = document.getElementById('registerPassword');
const registerConfirm = document.getElementById('registerConfirm');
const closeAuthBtn = document.getElementById('closeAuthBtn');
const authMessage = document.getElementById('authMessage');

// Ads
const adsModal_ = document.getElementById('adsModal');
const closeAdsBtn = document.getElementById('closeAdsBtn');
const claimAdsBtn = document.getElementById('claimAdsBtn');
const adsTimer = document.getElementById('adsTimer');
const adsContent = document.getElementById('adsContent');

// Quick prompts
const quickPrompts = document.querySelectorAll('.quick-prompt-btn');

// Subscribe buttons
const subscribeButtons = document.querySelectorAll('.btn-subscribe');

// =========================================================================
// ÉTAT GLOBAL
// =========================================================================

let currentUser = null;
let userCredits = 0;
let userPlan = 'free'; // 'free' ou 'premium'
let isOnline = true;
let conversationHistory = [];
let adsShownToday = 0;
let lastAdTime = null;
const AD_INTERVAL = 10 * 60 * 1000; // 10 minutes

// =========================================================================
// INITIALISATION
// =========================================================================

async function init() {
  await checkConnection();
  await simulateLoading();
  
  if (isOnline) {
    showAuthModal();
  } else {
    showNoConnectionModal();
  }
}

// =========================================================================
// VÉRIFICATION DE LA CONNEXION
// =========================================================================

async function checkConnection() {
  try {
    const response = await fetch('https://www.google.com/favicon.ico', { mode: 'no-cors' });
    isOnline = true;
    updateConnectionStatus(true);
  } catch (error) {
    isOnline = false;
    updateConnectionStatus(false);
  }
}

function updateConnectionStatus(online) {
  const text = document.querySelector('.connection-status .status-text');
  if (online) {
    statusDot.classList.add('connected');
    text.textContent = 'Connexion établie ✓';
    statusDot.style.background = '#10b981';
  } else {
    statusDot.classList.remove('connected');
    text.textContent = 'Pas de connexion...';
    statusDot.style.background = '#ef4444';
  }
}

// =========================================================================
// ÉCRAN DE CHARGEMENT (FACEBOOK STYLE)
// =========================================================================

async function simulateLoading() {
  return new Promise(resolve => {
    setTimeout(() => {
      loadingScreen.style.opacity = '0';
      loadingScreen.style.pointerEvents = 'none';
      setTimeout(() => {
        loadingScreen.remove();
        resolve();
      }, 300);
    }, 2000);
  });
}

retryConnectionBtn?.addEventListener('click', async () => {
  const dot = statusDot.cloneNode(true);
  statusDot.replaceWith(dot);
  
  await checkConnection();
  
  if (isOnline) {
    noConnectionModal.setAttribute('hidden', '');
    showAuthModal();
  }
});

// =========================================================================
// GESTION DES MODALS
// =========================================================================

function showNoConnectionModal() {
  noConnectionModal.removeAttribute('hidden');
}

function showAuthModal() {
  authModal.removeAttribute('hidden');
  appWrapper.setAttribute('hidden', '');
}

function closeAuthModal() {
  authModal.setAttribute('hidden', '');
}

closeAuthBtn?.addEventListener('click', closeAuthModal);

function showApp() {
  appWrapper.removeAttribute('hidden');
  authModal.setAttribute('hidden', '');
  setupProfileUI();
  startAutoAds();
}

// =========================================================================
// AUTHENTIFICATION
// =========================================================================

// Tabs auth
authTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const tabName = tab.dataset.tab;
    
    // Update tabs
    authTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    
    // Update content
    tabContents.forEach(content => {
      if (content.dataset.tab === tabName) {
        content.classList.add('active');
      } else {
        content.classList.remove('active');
      }
    });
  });
});

// Login
loginBtn?.addEventListener('click', () => {
  const email = loginEmail?.value.trim();
  if (!email) {
    showAuthMessage('Veuillez entrer un email', 'error');
    return;
  }
  
  // Simuler connexion
  currentUser = {
    id: 'user_' + Date.now(),
    name: email.split('@')[0],
    email: email
  };
  userCredits = 20; // Crédits initiaux
  userPlan = 'free';
  
  showAuthMessage('Connexion réussie!', 'success');
  setTimeout(() => showApp(), 800);
});

// Register
registerBtn?.addEventListener('click', () => {
  const name = registerName?.value.trim();
  const email = registerEmail?.value.trim();
  const pwd = registerPassword?.value;
  const confirm = registerConfirm?.value;
  
  if (!name || !email || !pwd || !confirm) {
    showAuthMessage('Veuillez remplir tous les champs', 'error');
    return;
  }
  
  if (pwd !== confirm) {
    showAuthMessage('Les mots de passe ne correspondent pas', 'error');
    return;
  }
  
  currentUser = {
    id: 'user_' + Date.now(),
    name: name,
    email: email
  };
  userCredits = 50; // Bonus inscription
  userPlan = 'free';
  
  showAuthMessage('Inscription réussie!', 'success');
  setTimeout(() => showApp(), 800);
});

function showAuthMessage(message, type = 'error') {
  authMessage.textContent = message;
  authMessage.className = `auth-message ${type}`;
}

// =========================================================================
// PROFIL & UI
// =========================================================================

function setupProfileUI() {
  if (currentUser) {
    const initial = (currentUser.name || 'U').charAt(0).toUpperCase();
    profileAvatar.textContent = initial;
    profileName.textContent = currentUser.name || 'Utilisateur';
    profileStatus.textContent = userPlan === 'premium' ? 'Premium' : 'Gratuit';
    creditCount.textContent = `${userCredits} crédits`;
  }
}

// Menu profil
profileMenuBtn?.addEventListener('click', (e) => {
  e.stopPropagation();
  profileDropdown.toggleAttribute('hidden');
});

document.addEventListener('click', () => {
  profileDropdown.setAttribute('hidden', '');
});

// Actions du menu profil
viewProfileLink?.addEventListener('click', (e) => {
  e.preventDefault();
  showToast('Page profil (à venir)', 'info');
  profileDropdown.setAttribute('hidden', '');
});

settingsLink?.addEventListener('click', (e) => {
  e.preventDefault();
  showToast('Paramètres (à venir)', 'info');
  profileDropdown.setAttribute('hidden', '');
});

aboutLink?.addEventListener('click', (e) => {
  e.preventDefault();
  showToast('À propos (à venir)', 'info');
  profileDropdown.setAttribute('hidden', '');
});

logoutLink?.addEventListener('click', (e) => {
  e.preventDefault();
  currentUser = null;
  userCredits = 0;
  messagesList.innerHTML = '';
  welcomeScreen.style.display = 'flex';
  showAuthModal();
  profileDropdown.setAttribute('hidden', '');
});

// =========================================================================
// NAVIGATION & SECTIONS
// =========================================================================

navItems.forEach(item => {
  item.addEventListener('click', () => {
    const section = item.dataset.section;
    
    // Update nav items
    navItems.forEach(i => i.classList.remove('active'));
    item.classList.add('active');
    
    // Update sections
    sections.forEach(s => {
      if (s.id === section + 'Section') {
        s.classList.add('active');
        s.removeAttribute('hidden');
      } else {
        s.classList.remove('active');
        s.setAttribute('hidden', '');
      }
    });
    
    closeSidebar();
  });
});

// =========================================================================
// CHAT
// =========================================================================

// Auto-resize textarea
messageInput?.addEventListener('input', () => {
  messageInput.style.height = 'auto';
  messageInput.style.height = Math.min(messageInput.scrollHeight, 150) + 'px';
});

// Submit message
chatForm?.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const message = messageInput?.value.trim();
  if (!message) return;
  
  // Vérifier si crédit dispo (free)
  if (userPlan === 'free' && userCredits <= 0) {
    showToast('Crédit insuffisant. Regardez une pub!', 'error');
    return;
  }
  
  // Ajouter message user
  addMessage(message, 'user');
  messageInput.value = '';
  messageInput.style.height = 'auto';
  
  // Décrémenter crédit
  if (userPlan === 'free') {
    userCredits--;
    creditCount.textContent = `${userCredits} crédits`;
  }
  
  // Simuler réponse IA
  sendBtn.disabled = true;
  await new Promise(r => setTimeout(r, 800));
  
  const response = 'Voici une réponse assistée par IA Cheno... (À intégrer avec API)';
  addMessage(response, 'assistant');
  
  sendBtn.disabled = false;
  conversationHistory.push({ role: 'user', content: message });
  conversationHistory.push({ role: 'assistant', content: response });
});

function addMessage(text, role) {
  welcomeScreen.style.display = 'none';
  
  const messageEl = document.createElement('div');
  messageEl.className = `message ${role}`;
  
  const avatar = document.createElement('div');
  avatar.className = 'message-avatar';
  avatar.textContent = role === 'user' ? '👤' : '🤖';
  
  const content = document.createElement('div');
  content.className = 'message-content';
  content.innerHTML = escapeHtml(text);
  
  if (role === 'user') {
    messageEl.appendChild(content);
    messageEl.appendChild(avatar);
  } else {
    messageEl.appendChild(avatar);
    messageEl.appendChild(content);
  }
  
  messagesList.appendChild(messageEl);
  
  setTimeout(() => {
    messagesWrapper.scrollTop = messagesWrapper.scrollHeight;
  }, 0);
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// Quick prompts
quickPrompts.forEach(btn => {
  btn.addEventListener('click', () => {
    const prompt = btn.dataset.prompt;
    messageInput.value = prompt;
    messageInput.focus();
  });
});

// =========================================================================
// RÉCOMPENSES
// =========================================================================

watchAdBtn?.addEventListener('click', () => {
  if (userPlan === 'premium') {
    showToast('Vous êtes Premium (pas de pubs)', 'info');
    return;
  }
  
  showAdsModal();
});

inviteBtn?.addEventListener('click', () => {
  const referralLink = `https://chenoia.app/?ref=${currentUser?.id || 'friend'}`;
  
  if (navigator.share) {
    navigator.share({
      title: 'Cheno IA',
      text: 'Rejoins-moi sur Cheno IA!',
      url: referralLink
    });
  } else {
    navigator.clipboard.writeText(referralLink);
    showToast('Lien copié! Partagez-le avec vos amis!', 'success');
  }
});

monetagBtn?.addEventListener('click', () => {
  window.open('https://monetag.com/?ref_id=chenopia', '_blank');
  showToast('Redirection vers Monetag...', 'info');
});

// =========================================================================
// SYSTÈME DE PUBS AUTO (TOUTES LES 10 MIN)
// =========================================================================

function startAutoAds() {
  if (userPlan === 'premium') return; // Pas de pubs si premium
  
  setInterval(() => {
    // Vérifier si on est sur le chat
    const chatSection = document.getElementById('chatSection');
    if (chatSection?.classList.contains('active')) {
      showAdsModal();
    }
  }, AD_INTERVAL);
}

function showAdsModal() {
  if (userPlan === 'premium') return;
  
  adsModal_.removeAttribute('hidden');
  
  // Générer une pub aléatoire
  const ads = [
    '<div style="text-align:center;padding:40px;"><div style="font-size:48px;margin-bottom:16px;">📺</div><h3>Regardez cette pub</h3><p>30 secondes de contenu</p></div>',
    '<div style="text-align:center;padding:40px;"><div style="font-size:48px;margin-bottom:16px;">🎁</div><h3>Offre Spéciale</h3><p>Gagnez des crédits!</p></div>',
    '<div style="text-align:center;padding:40px;"><div style="font-size:48px;margin-bottom:16px;">⭐</div><h3>Offre Monetag</h3><p>Gagnez en ligne</p></div>'
  ];
  
  adsContent.innerHTML = ads[Math.floor(Math.random() * ads.length)];
  
  // Timer 30s
  let timeLeft = 30;
  adsTimer.textContent = timeLeft + 's';
  
  const timerInterval = setInterval(() => {
    timeLeft--;
    adsTimer.textContent = timeLeft + 's';
    
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      document.getElementById('skipAdsBtn')?.removeAttribute('hidden');
    }
  }, 1000);
  
  // Bouton réclamer
  claimAdsBtn?.addEventListener('click', () => {
    clearInterval(timerInterval);
    userCredits += 10;
    creditCount.textContent = `${userCredits} crédits`;
    adsModal_.setAttribute('hidden', '');
    showToast('✓ +10 crédits gagnés!', 'success');
  }, { once: true });
}

closeAdsBtn?.addEventListener('click', () => {
  adsModal_.setAttribute('hidden', '');
});

// =========================================================================
// ABONNEMENTS PREMIUM
// =========================================================================

subscribeButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const plan = btn.dataset.plan;
    const price = plan === 'monthly' ? '2 000' : '18 000';
    
    showToast(`Redirection PayDunya (${price} FCFA)...`, 'info');
    
    // Simuler l'abonnement
    setTimeout(() => {
      userPlan = 'premium';
      userCredits = 999999; // Crédits illimités
      profileStatus.textContent = 'Premium ⭐';
      setupProfileUI();
      showToast('✓ Abonnement Premium activé!', 'success');
    }, 1500);
  });
});

// =========================================================================
// SIDEBAR MOBILE
// =========================================================================

function openSidebar() {
  sidebar?.classList.add('open');
  sidebarOverlay?.classList.add('show');
}

function closeSidebar() {
  sidebar?.classList.remove('open');
  sidebarOverlay?.classList.remove('show');
}

menuOpenBtn?.addEventListener('click', openSidebar);
menuCloseBtn?.addEventListener('click', closeSidebar);
sidebarOverlay?.addEventListener('click', closeSidebar);

// =========================================================================
// TOAST NOTIFICATIONS
// =========================================================================

function showToast(message, type = 'info') {
  const toastContainer = document.getElementById('toastContainer');
  
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  
  const icons = {
    success: '✓',
    error: '✕',
    info: 'ℹ'
  };
  
  toast.innerHTML = `
    <div class="toast-icon">${icons[type]}</div>
    <div class="toast-message">${message}</div>
  `;
  
  toastContainer?.appendChild(toast);
  
  setTimeout(() => {
    toast.style.animation = 'slideInRight 0.3s ease reverse';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// =========================================================================
// NEW CHAT
// =========================================================================

newChatBtn?.addEventListener('click', () => {
  messagesList.innerHTML = '';
  welcomeScreen.style.display = 'flex';
  conversationHistory = [];
  messageInput.value = '';
});

// =========================================================================
// ATTACH FILE
// =========================================================================

const attachBtn = document.getElementById('attachBtn');
const fileInput = document.getElementById('fileInput');

attachBtn?.addEventListener('click', () => {
  fileInput?.click();
});

fileInput?.addEventListener('change', (e) => {
  const file = e.target.files?.[0];
  if (file) {
    showToast(`📎 ${file.name} (${(file.size / 1024).toFixed(1)} KB)`, 'info');
    addMessage(`📎 Fichier ajouté: ${file.name}`, 'user');
  }
});

// =========================================================================
// DÉMARRAGE
// =========================================================================

document.addEventListener('DOMContentLoaded', init);

// Export pour tests
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { 
    addMessage, 
    showToast, 
    setupProfileUI,
    checkConnection 
  };
}
