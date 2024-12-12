import SilkGhost from "../../assets/SilkGhost.png";
import SilkShift from "../../assets/SilkShift.png";
import SilkAmbience from "../../assets/SilkAmbience.png";
import SilkVerb from "../../assets/SilkVerb.png";

export type AppType = "plugin" | "webApplication";

export interface Product {
  id: string;
  name: string;
  logo: string;
  logoWidth: string;
  description: string;
  documentationUrl: string;
  downloadUrl: string;
  background: string;
  appType: AppType;
}

export const PRODUCTS: Product[] = [
  {
    id: "silkghost",
    name: "SilkGhost",
    logo: SilkGhost,
    logoWidth: "18rem",
    description:
      "is a reverberation engine that creates haunting, ethereal soundscapes that linger like spectral echoes in your mix, gently enveloping each note in a surreal shimmer.",
    documentationUrl: "https://silkforest.app/documentation/silkghost",
    downloadUrl: "https://silkforest.app/downloads/silkghost",
    background: "#71769d",
    appType: "plugin",
  },
  {
    id: "silkshift",
    name: "SilkShift",
    logo: SilkShift,
    logoWidth: "18rem",
    description:
      "isn’t just a pitch shifter — it’s a way to generate complex sounds. Layer your sounds and apply pitch shift and modulation to each layer individually.",
    documentationUrl: "https://silkforest.app/documentation/silkghost",
    downloadUrl: "https://silkforest.app/downloads/silkghost",
    background: "#c14444",
    appType: "plugin",
  },
  {
    id: "silkambience",
    name: "SilkAmbience",
    logo: SilkAmbience,
    logoWidth: "22rem",
    description:
      "isolates pad-like frequencies in your sounds, splicing and transforming them into lush, textured layers of rich, evolving soundscapes that fill your mix beautifully.",
    documentationUrl: "https://silkforest.app/documentation/silkghost",
    downloadUrl: "https://silkforest.app/downloads/silkghost",
    background: "#B447C1",
    appType: "plugin",
  },
  {
    id: "silkverb",
    name: "SilkVerb",
    logo: SilkVerb,
    logoWidth: "18rem",
    description:
      "is a quick and dirty way to create slowed and reverberated tracks. Set a reverb tail, control your dry and wet mix, and shift the track to your desire.",
    documentationUrl: "https://silkforest.app/documentation/silkghost",
    downloadUrl: "https://silkforest.app/downloads/silkghost",
    background: "#3F4DA8",
    appType: "webApplication",
  },
];
