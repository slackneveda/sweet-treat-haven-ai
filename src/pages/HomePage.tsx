
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import ProductCard, { Product } from "@/components/ProductCard";
import CategoryBanner from "@/components/CategoryBanner";

// Mock product data
import { products, categories } from "@/data/mockData";

const HomePage = () => {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      // Get random products from different categories
      const featured = [...products]
        .sort(() => 0.5 - Math.random())
        .slice(0, 8);
      
      setFeaturedProducts(featured);
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="relative rounded-xl overflow-hidden h-[500px] mb-16">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2274&q=80"
            alt="Delicious Desserts" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/20"></div>
        </div>
        <div className="relative h-full flex flex-col justify-center px-8 md:px-16 max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in">
            Handcrafted Desserts for Every Occasion
          </h1>
          <p className="text-lg text-gray-200 mb-8 animate-fade-in">
            Explore our delicious range of freshly made cakes, pastries, and sweet treats 
            delivered straight to your door.
          </p>
          <div className="flex space-x-4">
            <Button asChild className="dessert-button px-6 py-6">
              <Link to="/category/cakes-pastries">
                Browse Desserts
              </Link>
            </Button>
            <Button asChild variant="outline" className="bg-white/10 border-white text-white hover:bg-white/20 px-6 py-6">
              <Link to="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Carousel */}
      <section className="mb-16">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
            Our Categories
          </h2>
          <Button asChild variant="ghost" className="text-dessert hover:text-dessert-dark">
            <Link to="/categories" className="flex items-center">
              View All <ChevronRight size={16} />
            </Link>
          </Button>
        </div>
        
        <Carousel opts={{
          align: "start",
          loop: true,
        }}>
          <CarouselContent>
            {categories.map((category) => (
              <CarouselItem key={category.slug} className="sm:basis-1/2 md:basis-1/3">
                <CategoryBanner 
                  title={category.name} 
                  description={category.description}
                  image={category.image}
                  slug={category.slug}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:flex">
            <CarouselPrevious className="border-dessert text-dessert hover:bg-dessert hover:text-white" />
            <CarouselNext className="border-dessert text-dessert hover:bg-dessert hover:text-white" />
          </div>
        </Carousel>
      </section>

      {/* Featured Products */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
            Featured Desserts
          </h2>
          <Button asChild variant="ghost" className="text-dessert hover:text-dessert-dark">
            <Link to="/category/all" className="flex items-center">
              View All <ChevronRight size={16} />
            </Link>
          </Button>
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
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>
      
      {/* Why Choose Us Section */}
      <section className="my-16">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-8 text-center">
          Why Choose Sweet Treat Haven?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 bg-dessert/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-dessert" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-100">Fresh & Quality</h3>
            <p className="text-gray-600 dark:text-gray-400">
              All our desserts are made fresh daily using premium ingredients for exceptional taste.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 bg-dessert/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-dessert" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-100">Fast Delivery</h3>
            <p className="text-gray-600 dark:text-gray-400">
              We ensure your desserts arrive fresh and on time with our efficient delivery service.
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
            <div className="w-16 h-16 bg-dessert/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-dessert" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-100">Custom Orders</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Special occasion? We create custom desserts tailored to your preferences and requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="my-16 bg-dessert/10 dark:bg-gray-800/50 rounded-xl p-8">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Join Our Sweet Community</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Subscribe to our newsletter for exclusive offers, recipes, and dessert inspirations.
          </p>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow rounded-l-md border-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:ring-dessert focus:border-dessert"
            />
            <Button className="dessert-button rounded-l-none">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
