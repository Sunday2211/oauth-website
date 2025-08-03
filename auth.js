const config = {
  clientId: 'CLIENT_ID_PLACEHOLDER',  // MUST be this exact text
  authUri: 'https://accounts.google.com/o/oauth2/auth',
  redirectUri: 'https://yourusername.github.io/oauth-website/callback.html',
  scopes: 'openid email profile'
};

function initiateAuth() {
  const authUrl = new URL(config.authUri);
  authUrl.searchParams.append('client_id', config.clientId);
  authUrl.searchParams.append('redirect_uri', config.redirectUri);
  authUrl.searchParams.append('response_type', 'token');
  authUrl.searchParams.append('scope', config.scopes);
  authUrl.searchParams.append('nonce', crypto.randomUUID());
  window.location.href = authUrl.toString();
}
