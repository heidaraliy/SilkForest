import SilkGhostDocumentation from "../../docs/silkghost/SilkGhostDocumentation.md";

export interface DocSection {
  title: string;
  children?: DocEntry[];
}

export interface DocEntry {
  id: string;
  title: string;
  file: string;
}

export const DOCS_SECTIONS: DocSection[] = [
  {
    title: "Getting Started",
    children: [
      {
        id: "general-introduction",
        title: "Introduction",
        file: SilkGhostDocumentation,
      },
    ],
  },
  {
    title: "SilkGhost",
    children: [
      {
        id: "silk-ghost-introduction",
        title: "Introduction",
        file: SilkGhostDocumentation,
      },
      {
        id: "silk-ghost-key-features",
        title: "Key Features",
        file: SilkGhostDocumentation,
      },
      {
        id: "getting-started",
        title: "Getting Started",
        file: SilkGhostDocumentation,
      },
      {
        id: "interface-overview",
        title: "Interface Overview",
        file: SilkGhostDocumentation,
      },
      {
        id: "parameter-reference",
        title: "Parameter Reference",
        file: SilkGhostDocumentation,
      },
      {
        id: "working-with-presets",
        title: "Working with Presets",
        file: SilkGhostDocumentation,
      },
      {
        id: "creative-applications",
        title: "Creative Applications",
        file: SilkGhostDocumentation,
      },
      {
        id: "tips-techniques",
        title: "Tips & Techniques",
        file: SilkGhostDocumentation,
      },
      {
        id: "additional-resources",
        title: "Additional Resources",
        file: SilkGhostDocumentation,
      },
    ],
  },
];
