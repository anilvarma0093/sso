interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: '6RhaBO4kBD0J1JXxWAtW3KZbHDYmaVcG',
  domain: 'anilvarmap.auth0.com',
  callbackURL: 'http://localhost:3000/callback'
};
