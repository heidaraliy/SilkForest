import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { DOCS_SECTIONS } from "./DocsData";
import SilkForest from "../../assets/SilkForest.png";
import SilkGhost from "../../assets/SilkGhost.png";
import { PRODUCTS } from "../products/ProductData";

const LOGO_MAP: Record<string, string> = {
  SilkForest,
  SilkGhost,
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
    const content = DOCS_SECTIONS.map((section) => {
      const sectionContent = section.children
        ?.map((entry) => entry.file)
        .join("\n\n---\n\n");
      return sectionContent;
    }).join("\n\n---\n\n");

    setCombinedMarkdown(content);
  }, []);

  return (
    <div className="flex-1 overflow-y-auto h-full bg-zinc-50 font-arimo tracking-tight">
      <div className="max-w-4xl mx-auto p-8 md:p-12">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h1: (props) => {
              const text = props.children?.toString() || "";
              const logoMatch = text.match(/\[LOGO:(.*?)\]/);
              if (logoMatch) {
                const logoKey = logoMatch[1];
                const logoSrc = LOGO_MAP[logoKey];
                const bgColor = BACKGROUND_MAP[logoKey] || "#71769d";
                return (
                  <div
                    className="flex justify-center mb-12 rounded-lg p-4 shadow-2xl border-zinc-700 border-[3px]"
                    style={{ backgroundColor: bgColor }}
                  >
                    <img src={logoSrc} alt={logoKey} className="w-[24rem]" />
                  </div>
                );
              }
              return (
                <h1
                  id={props.id}
                  className="text-4xl font-bold mb-8 text-zinc-800"
                  {...props}
                />
              );
            },
            h2: (props) => (
              <h2
                id={props.id}
                className="text-3xl font-bold mb-6 mt-12 text-zinc-800"
                {...props}
              />
            ),
            h3: (props) => (
              <h3
                id={props.id}
                className="text-2xl font-bold mb-4 mt-8 text-zinc-800"
                {...props}
              />
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
          {combinedMarkdown}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default DocsContent;
