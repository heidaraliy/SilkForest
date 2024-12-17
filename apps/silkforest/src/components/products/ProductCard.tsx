import React from "react";
import { Product } from "./ProductData";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const comingSoon = false;

  return (
    <div
      className="rounded-md shadow-[15px_35px_60px_-15px_rgba(0,0,0,0.6)] p-4 max-w-3xl m-4 border-4 border-zinc-700"
      style={{ backgroundColor: product.background }}
    >
      <div className="flex items-center justify-center space-x-2">
        <img
          src={product.logo}
          alt={product.name}
          className="h-auto"
          style={{ width: product.logoWidth }}
        />
      </div>
      <p className="text-zinc-50 my-4 font-arimo text-center text-lg">
        <span className="font-vidaloka">{product.name}</span>{" "}
        {product.description}
      </p>
      <div className="flex space-x-4 justify-center my-8">
        {product.status === "available" ? (
          <>
            {product.appType !== "webApplication" ? (
              <a
                href={product.documentationUrl}
                className="hover:bg-zinc-200 border-zinc-600 border-2 rounded-md bg-zinc-50 px-2 py-2 font-arimo font-bold text-gray-700 flex items-center space-x-1"
                target="_self"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined text-gray-700">
                  library_books
                </span>
                <span>Documentation</span>
              </a>
            ) : (
              <></>
            )}
            <a
              href={product.downloadUrl}
              className="hover:bg-zinc-200 border-zinc-600 border-2 rounded-md bg-zinc-50 px-2 py-2 font-arimo font-bold text-gray-700 flex items-center space-x-1"
              target="_self"
              rel="noopener noreferrer"
            >
              <span className="material-symbols-outlined text-gray-700">
                {product.appType === "webApplication" ? "public" : "download"}
              </span>
              <span>
                {product.appType === "webApplication"
                  ? "Launch " + product.name
                  : "Download"}
              </span>
            </a>
          </>
        ) : (
          <div className="hover:bg-zinc-200 hover:cursor-not-allowed border-zinc-600 border-2 rounded-md bg-zinc-50 px-2 py-2 font-arimo font-bold text-gray-700 flex items-center space-x-1 opacity-70">
            Coming soon!
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
