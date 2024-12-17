import React, { useEffect, useState } from "react";
import ReactMarkdown, { Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import SilkForest from "../../assets/SilkForest.png";
import SilkGhost from "../../assets/SilkGhost.png";
import SilkGhostPluginWindow from "../../assets/SilkGhostPluginWindow.png";
import { DOCS_SECTIONS } from "./DocsData";
import { PRODUCTS } from "../products/ProductData";

const LOGO_MAP: Record<string, string> = {
  SilkForest,
  SilkGhost,
};

const IMAGE_MAP: Record<string, string> = {
  SilkGhostPluginWindow,
};

const BACKGROUND_MAP: Record<string, string> = PRODUCTS.reduce(
  (acc, product) => ({
    ...acc,
    [product.name]: product.background,
  }),
  {}
);

const DocsContent: React.FC = () => {
  const [combinedMarkdown, setCombinedMarkdown] = useState<string>("");

  useEffect(() => {
    // Get unique markdown files
    const uniqueFiles = new Set<string>();
    DOCS_SECTIONS.forEach((section) => {
      section.children?.forEach((entry) => {
        uniqueFiles.add(entry.file);
      });
    });

    // Combine unique markdown files
    const content = Array.from(uniqueFiles).join("\n\n---\n\n");
    setCombinedMarkdown(content);
  }, []);

  const processMarkdown = (content: string) => {
    return content.replace(
      /\[IMAGE:(.*?):(.*?)\]/g,
      (match, imageName, imageType) => {
        const imageSrc = IMAGE_MAP[imageName];
        if (!imageSrc) {
          console.warn(`Image not found: ${imageName}`);
          return "";
        }
        return `<img 
          src="${imageSrc}" 
          alt="${imageName}" 
          class="doc-image doc-image-${imageType}"
          style="border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.1);"
        />`;
      }
    );
  };

  return (
    <div className="docs-content flex-1 overflow-y-auto h-full bg-zinc-50 font-arimo tracking-tight">
      <div className="max-w-4xl mx-auto p-8 md:p-12">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          components={{
            h1: (props) => {
              const text = String(props.children);
              const logoMatch = text.match(/\[LOGO:(.*?)\]/);
              if (logoMatch) {
                const logoKey = logoMatch[1];
                const logoSrc = LOGO_MAP[logoKey];
                const bgColor = BACKGROUND_MAP[logoKey] || "#71769d";

                return (
                  <h1
                    className="text-4xl font-bold mb-8 text-zinc-800 flex justify-center"
                    {...props}
                  >
                    <div
                      className="rounded-lg p-4 shadow-2xl border-zinc-700 border-[3px]"
                      style={{ backgroundColor: bgColor }}
                    >
                      <img src={logoSrc} alt={logoKey} className="w-[24rem]" />
                    </div>
                  </h1>
                );
              }

              return (
                <h1
                  className="text-4xl font-bold mb-8 text-zinc-800"
                  {...props}
                >
                  {props.children}
                </h1>
              );
            },
            // Add custom styling for h2, h3, etc.
            h2: (props) => (
              <h2
                className="text-3xl font-semibold mb-6 text-zinc-800"
                {...props}
              >
                {props.children}
              </h2>
            ),
            h3: (props) => (
              <h3
                className="text-2xl font-semibold mb-4 text-zinc-800"
                {...props}
              >
                {props.children}
              </h3>
            ),
            h4: (props) => (
              <h4 className="text-xl font-medium mb-3 text-zinc-800" {...props}>
                {props.children}
              </h4>
            ),
            p: (props) => (
              <p
                className="mb-6 text-zinc-700 leading-relaxed text-lg"
                {...props}
              />
            ),
            ul: (props) => (
              <ul
                className="list-disc pl-8 mb-6 text-zinc-700 space-y-2"
                {...props}
              />
            ),
            ol: (props) => (
              <ol
                className="list-decimal pl-8 mb-6 text-zinc-700 space-y-2"
                {...props}
              />
            ),
            code: (props) => (
              <code
                className="bg-zinc-100 rounded px-2 py-1 text-sm text-zinc-800"
                {...props}
              />
            ),
            pre: (props) => (
              <pre
                className="bg-zinc-100 rounded-lg p-6 mb-6 overflow-x-auto text-zinc-800"
                {...props}
              />
            ),
            hr: () => <hr className="my-12 border-zinc-200" />,
          }}
        >
          {processMarkdown(combinedMarkdown)}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default DocsContent;
