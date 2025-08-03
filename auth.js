const config = {
  clientId: '658216137263-1lp5035m6jg9sfh3m8rvngb2j9e4nrr3.apps.googleusercontent.com',
  authUri: 'https://accounts.google.com/o/oauth2/auth',
  redirectUri: 'https://username.github.io/oauth-website/callback.html', // Replace with your actual URL
  scopes: 'openid email profile' // Order matters for Google's OAuth
};

function initiateAuth() {
  const authUrl = new URL(config.authUri);
  authUrl.searchParams.append('client_id', config.clientId);
  authUrl.searchParams.append('redirect_uri', config.redirectUri);
  authUrl.searchParams.append('response_type', 'token'); // Implicit flow
  authUrl.searchParams.append('scope', config.scopes);
  authUrl.searchParams.append('nonce', crypto.randomUUID()); // Security against replay attacks
  
  window.location.href = authUrl.toString();
}
