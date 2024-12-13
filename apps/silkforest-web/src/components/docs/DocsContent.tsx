import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw"; // Import this to parse raw HTML
import SilkForest from "../../assets/SilkForest.png";
import SilkGhost from "../../assets/SilkGhost.png";
import { PRODUCTS } from "../products/ProductData";
import SilkGhostDocumentation from "../../docs/silkghost/SilkGhostDocumentation.md";

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
  const markdownContent = SilkGhostDocumentation;

  return (
    <div className="docs-content flex-1 overflow-y-auto h-full bg-zinc-50 font-arimo tracking-tight">
      <div className="max-w-4xl mx-auto p-8 md:p-12">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]} // Allow raw HTML
          components={{
            h1: (props) => {
              const text = String(props.children);
              const logoMatch = text.match(/\[LOGO:(.*?)\]/);
              if (logoMatch) {
                const logoKey = logoMatch[1];
                const logoSrc = LOGO_MAP[logoKey];
                const bgColor = BACKGROUND_MAP[logoKey] || "#71769d";

                // The h1 tag and id are defined in the markdown file directly.
                // To preserve that id, we rely on the raw HTML in the MD file.
                // Since we're using rehypeRaw, the id set in MD is retained.
                // So we don't need to assign an id here again.
                // Just render children and the logo block.

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

              // If there's a normal heading (without a logo),
              // the id comes from the raw HTML in the file (if provided)
              return (
                <h1
                  className="text-4xl font-bold mb-8 text-zinc-800"
                  {...props}
                >
                  {props.children}
                </h1>
              );
            },
            // For subsequent headings (h2, h3),
            // if you need IDs, add them directly in the markdown as well.
            // Otherwise, they will just be rendered as-is.
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
          {markdownContent}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default DocsContent;
