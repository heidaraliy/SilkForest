import React from "react";
import { Product } from "./ProductData";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div
      className="rounded-md shadow-xl p-4 max-w-xl m-4"
      style={{ backgroundColor: product.background }}
    >
      <div className="flex items-center justify-center space-x-2">
        <img src={product.logo} alt={product.name} className="w-72 h-auto" />
      </div>
      <p className="text-zinc-50 my-4 font-arimo text-center text-lg">
        <span className="font-vidaloka">SilkGhost</span> {product.description}
      </p>
      <div className="flex space-x-4 justify-center my-8">
        <a
          href={product.documentationUrl}
          className="hover:bg-zinc-200 border-zinc-400 border-2 rounded-md bg-zinc-50 px-2 py-2 font-arimo font-bold text-gray-700 flex items-center space-x-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="material-symbols-outlined text-gray-700">
            library_books
          </span>
          <span>Documentation</span>
        </a>
        <a
          href={product.downloadUrl}
          className="hover:bg-zinc-200 border-zinc-400 border-2 rounded-md bg-zinc-50 px-2 py-2 font-arimo font-bold text-gray-700 flex items-center space-x-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="material-symbols-outlined text-gray-700">
            download
          </span>
          <span>Download</span>
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
