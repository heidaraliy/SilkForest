import SilkGhost from "../../assets/SilkGhost.png";
import SilkShift from "../../assets/SilkShift.png";

export interface Product {
  id: string;
  name: string;
  logo: string;
  description: string;
  documentationUrl: string;
  downloadUrl: string;
  background: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "silkghost",
    name: "SilkGhost",
    logo: SilkGhost,
    description:
      "is a reverberation engine that creates haunting, ethereal soundscapes that linger like spectral echoes in your mix.",
    documentationUrl: "https://silkforest.app/documentation/silkghost",
    downloadUrl: "https://silkforest.app/downloads/silkghost",
    background: "#71769d",
  },
  {
    id: "silkshift",
    name: "SilkShift",
    logo: SilkShift,
    description:
      "is a reverberation engine that creates haunting, ethereal soundscapes that linger like spectral echoes in your mix.",
    documentationUrl: "https://silkforest.app/documentation/silkghost",
    downloadUrl: "https://silkforest.app/downloads/silkghost",
    background: "#c14444",
  },
];
