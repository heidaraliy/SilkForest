const isDevelopment = process.env.NODE_ENV === "development";

const BASE_URL = isDevelopment
  ? "http://localhost:3000"
  : "https://silkforest.xyz";

export const URLS = {
  docs: (section: string) => `${BASE_URL}/docs#${section}`,
  home: () => BASE_URL,
};
