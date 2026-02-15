const API_BASE_URL = process.env.REACT_APP_API_URL;

async function handleResponse(response) {
  /*Son rôle :

regarder si le backend dit OK

sinon → afficher une erreur claire */
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error || data.message || "Erreur API");
  }
  return data;
}

const publicApi = {
  // Login
  login: async ({ email, password }) => {
    return handleResponse(//“Je vais envoyer une requête au backend, puis je traite la réponse avec handleResponse”.
      await fetch(`${API_BASE_URL}/login`, {//On envoie une requête à :url de backend
        method: "POST",
        headers: { "Content-Type": "application/json" },//Je t’envoie des données en format JSON”.
        body: JSON.stringify({ email, password }),//On transforme les données JavaScript en texte JSON.
        
      })
    );
  },

  // Register
  register: async ({ firstName, lastName, email, password, passwordConfirmation, role }) => {
    return handleResponse(
      await fetch(`${API_BASE_URL}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName, lastName, email, password, passwordConfirmation,
          role
        }),//On transforme les données JavaScript en texte JSON.
      })
    );
  },

  /*Quand React envoie une requête POST, il doit envoyer des données au backend.

Exemple : formulaire d’inscription

prénom

email

mot de passe

👉 Ces données sont envoyées dans le body (le “contenu” de la requête). */

  // Activate account
  activateAccount: async (token) => {
    return handleResponse(
      await fetch(`${API_BASE_URL}/activate/${token}`, { method: "GET" })
    );
  },

  // Forgot password
  forgotPassword: async (email) => {
    return handleResponse(
      await fetch(`${API_BASE_URL}/forgot-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })
    );
  },

  // Reset password
  resetPassword: async (token, password, passwordConfirmation) => {
    return handleResponse(
      await fetch(`${API_BASE_URL}/reset-password/${token}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password, passwordConfirmation }),
      })
    );
  },

  // Verify JWT token
  verifyToken: async (token) => {
    try {
      const res = await fetch(`${API_BASE_URL}/verify-token`, {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });
      return res.ok;
    } catch {
      return false;
    }
  },

  // Get current logged-in user
  getCurrentUser: async (token) => {
    return handleResponse(
      await fetch(`${API_BASE_URL}/me`, {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      })
    );
  },

  // Logout (optionnel, peut être vide côté API)
  logout: async (token) => {
    // Si ton backend ne gère pas de logout, juste supprimer le token côté frontend
    return true;
  },

  // Get Products
  getProducts: async () => {
    return handleResponse(
      await fetch(`${API_BASE_URL}/home`)
    );
  },

  // Get Product Details
  getProductDetails: async (id) => {
    return handleResponse(
      await fetch(`${API_BASE_URL}/coffees/${id}`)
    );
  }
};

export default publicApi;
