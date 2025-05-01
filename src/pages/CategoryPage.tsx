
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductCard, { Product } from "@/components/ProductCard";
import { products, categories } from "@/data/mockData";

const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [categoryProducts, setCategoryProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentCategory, setCurrentCategory] = useState<string>("All Products");

  useEffect(() => {
    setIsLoading(true);
    
    // Simulate API call delay
    const timer = setTimeout(() => {
      let filteredProducts = [...products];
      
      if (slug && slug !== "all") {
        filteredProducts = products.filter(product => 
          product.category.toLowerCase().replace(/[&\s]/g, '-') === slug
        );
        
        const category = categories.find(cat => cat.slug === slug);
        if (category) {
          setCurrentCategory(category.name);
        }
      } else {
        setCurrentCategory("All Products");
      }
      
      setCategoryProducts(filteredProducts);
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [slug]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
          {currentCategory}
        </h1>
        <div className="h-1 w-20 bg-dessert mb-4"></div>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
          {slug && slug !== "all" 
            ? `Explore our delicious selection of ${currentCategory.toLowerCase()}, made fresh with the finest ingredients.`
            : "Browse our complete collection of delicious desserts for every occasion."}
        </p>
      </div>

      {isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[...Array(8)].map((_, index) => (
            <div key={index} className="dessert-card animate-pulse">
              <div className="h-48 bg-gray-300 dark:bg-gray-700"></div>
              <div className="p-4">
                <div className="h-4 bg-gray-300 dark:bg-gray-700 w-3/4 mb-2 rounded"></div>
                <div className="h-4 bg-gray-300 dark:bg-gray-700 w-1/4 mb-3 rounded"></div>
                <div className="h-4 bg-gray-300 dark:bg-gray-700 w-full mb-2 rounded"></div>
                <div className="h-4 bg-gray-300 dark:bg-gray-700 w-2/3 mb-4 rounded"></div>
                <div className="h-10 bg-gray-300 dark:bg-gray-700 rounded"></div>
              </div>
            </div>
          ))}
        </div>
      ) : categoryProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categoryProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-2">
            No products found in this category.
          </h3>
          <p className="text-gray-500 dark:text-gray-400">
            Please check back later or browse other categories.
          </p>
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
