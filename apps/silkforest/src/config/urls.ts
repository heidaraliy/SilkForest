const isDevelopment = process.env.NODE_ENV === 'development';

const BASE_URL = isDevelopment 
  ? 'http://localhost:3000' 
  : 'https://silkforest.app';

export const URLS = {
  docs: (section: string) => `${BASE_URL}/docs#${section}`,
  downloads: (product: string) => `${BASE_URL}/downloads/${product}`,
  home: () => BASE_URL,
}; 