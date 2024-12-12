import GeneralIntroduction from "../../docs/general/Introduction.md";
import SilkGhostIntroduction from "../../docs/silkghost/SilkGhostIntroduction.md";
import SilkGhostKeyFeatures from "../../docs/silkghost/SilkGhostKeyFeatures.md";
import GettingStarted from "../../docs/silkghost/GettingStarted.md";
import InterfaceOverview from "../../docs/silkghost/InterfaceOverview.md";
import ParameterReference from "../../docs/silkghost/ParameterReference.md";
import WorkingWithPresets from "../../docs/silkghost/WorkingWithPresets.md";
import CreativeApplications from "../../docs/silkghost/CreativeApplications.md";
import TipsAndTechniques from "../../docs/silkghost/TipsAndTechniques.md";
import AdditionalResources from "../../docs/silkghost/AdditionalResources.md";

export interface DocSection {
  title: string;
  children?: DocEntry[];
}

export interface DocEntry {
  id: string; // route param or unique key.
  title: string;
  file: string; // path to the markdown file.
}

export const DOCS_SECTIONS: DocSection[] = [
  {
    title: "Getting Started",
    children: [
      {
        id: "general-introduction",
        title: "Introduction",
        file: GeneralIntroduction,
      },
    ],
  },
  {
    title: "SilkGhost",
    children: [
      {
        id: "silkghost-introduction",
        title: "Introduction",
        file: SilkGhostIntroduction,
      },
      {
        id: "silkghost-key-features",
        title: "Key Features",
        file: SilkGhostKeyFeatures,
      },
      {
        id: "getting-started",
        title: "Getting Started",
        file: GettingStarted,
      },
      {
        id: "interface-overview",
        title: "Interface Overview",
        file: InterfaceOverview,
      },
      {
        id: "parameter-reference",
        title: "Parameter Reference",
        file: ParameterReference,
      },
      {
        id: "working-with-presets",
        title: "Working with Presets",
        file: WorkingWithPresets,
      },
      {
        id: "creative-applications",
        title: "Creative Applications",
        file: CreativeApplications,
      },
      {
        id: "tips-techniques",
        title: "Tips & Techniques",
        file: TipsAndTechniques,
      },
      {
        id: "additional-resources",
        title: "Additional Resources",
        file: AdditionalResources,
      },
    ],
  },
];
