import React from "react";
import { PRODUCTS } from "./ProductData";
import ProductCard from "./ProductCard";

const Products: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center p-8 font-arimo tracking-tight">
      <div className="w-full text-center mb-8">
        <h1 className="text-2xl font-bold text-gray-700">Plugins</h1>
        <p className="text-gray-700 my-2 text-lg">
          Explore our suite of transformative audio plugins.
        </p>
      </div>
      {PRODUCTS.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
