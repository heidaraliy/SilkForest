import React from "react";
import { PRODUCTS, AppType } from "./ProductData";
import ProductCard from "./ProductCard";

const Products: React.FC = () => {
  const categories: {
    type: AppType;
    title: string;
    description: string;
  }[] = [
    {
      type: "plugin",
      title: "Plugins",
      description: "Explore a wide range of transformative audio plugins.",
    },
    {
      type: "webApplication",
      title: "Web Applications",
      description:
        "Built directly on the web, these web applications are intuitive and easy to use.",
    },
  ];

  return (
    <div className="flex flex-col items-center p-8 font-arimo tracking-tight mt-20">
      {categories.map((category) => {
        // filter products based on the current category type.
        const filteredProducts = PRODUCTS.filter(
          (product) => product.appType === category.type
        );

        // if no products exist for the category, skip rendering.
        if (filteredProducts.length === 0) return null;

        return (
          <section key={category.type} className="w-full mb-12">
            <div className="w-full text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-700">
                {category.title}
              </h2>
              <p className="text-gray-700 my-2 text-xl">
                {category.description}
              </p>
            </div>
            <div className="flex flex-wrap justify-center">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default Products;
