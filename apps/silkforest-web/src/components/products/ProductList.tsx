import React from "react";
import ProductCard from "./ProductCard";
import { Product, AppType } from "./ProductData";

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  const categorizedProducts: Record<AppType, Product[]> = {
    plugin: [],
    webApplication: [],
  };

  products.forEach((product) => {
    categorizedProducts[product.appType].push(product);
  });

  return (
    <div className="container mx-auto p-4">
      {/* plugins section */}
      {categorizedProducts.plugin.length > 0 && (
        <section className="mb-8">
          <h2 className="font-bold mb-4">Plugins</h2>
          <div className="flex flex-wrap justify-center">
            {categorizedProducts.plugin.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}

      {/* web applications section */}
      {categorizedProducts.webApplication.length > 0 && (
        <section>
          <h2 className="font-bold mb-4">Web Applications</h2>
          <div className="flex flex-wrap justify-center">
            {categorizedProducts.webApplication.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductList;
