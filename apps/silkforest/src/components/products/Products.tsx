import React, { useState } from "react";
import { PRODUCTS, AppType, Product } from "./ProductData";
import ProductCard from "./ProductCard";
import { handleDownload } from "./DownloadModal/downloadHandler";
import DownloadModal from "./DownloadModal/DownloadModal";
import NotificationContainer from "../../../../silkverb/src/components/Notifications/NotificationContainer";
import { NotificationProvider } from "../../../../silkverb/src/components/Notifications/context/NotificationContext";

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

  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleDownloadClick = (product: Product) => {
    if (product.appType === "plugin") {
      setSelectedProduct(product);
      setShowModal(true);
    } else {
      window.location.href = product.downloadUrl || "";
    }
  };

  const handleEmailSubmit = async (email: string, product: Product) => {
    if (product.downloadUrl) {
      try {
        const saved = await handleDownload(
          email,
          product.downloadUrl,
          product.id
        );
        if (saved) {
        } else {
        }
      } catch (error) {
        throw error;
      }
    } else {
    }
  };

  return (
    <div className="flex flex-col items-center p-8 font-arimo tracking-tight mt-20 max-w-7xl mx-auto">
      <NotificationProvider>
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
                  <ProductCard
                    key={product.id}
                    product={product}
                    onDownloadClick={handleDownloadClick}
                  />
                ))}
              </div>
            </section>
          );
        })}

        <DownloadModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          onSubmit={handleEmailSubmit}
          productName={selectedProduct?.name || ""}
          product={selectedProduct}
        />
        <NotificationContainer />
      </NotificationProvider>
    </div>
  );
};

export default Products;
