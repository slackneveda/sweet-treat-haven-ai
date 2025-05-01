
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ShoppingCart, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useCart } from "@/context/CartContext";
import { Product } from "@/components/ProductCard";
import { products } from "@/data/mockData";

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const { toast } = useToast();
  const { addToCart } = useCart();
  
  useEffect(() => {
    setIsLoading(true);
    
    // Simulate API call delay
    const timer = setTimeout(() => {
      if (id) {
        const foundProduct = products.find(p => p.id === parseInt(id));
        if (foundProduct) {
          setProduct(foundProduct);
          
          // Find related products (same category)
          const related = products
            .filter(p => p.category === foundProduct.category && p.id !== foundProduct.id)
            .slice(0, 4);
          setRelatedProducts(related);
        }
      }
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [id]);

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value > 0) {
      setQuantity(value);
    }
  };

  const handleIncrement = () => {
    setQuantity(prev => prev + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const handleAddToCart = () => {
    if (product) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity,
        image: product.image,
        category: product.category,
      });
      
      toast({
        title: "Added to cart",
        description: `${quantity} x ${product.name} has been added to your cart.`,
      });
    }
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="animate-pulse bg-gray-300 dark:bg-gray-700 rounded-lg h-96"></div>
          <div className="space-y-4">
            <div className="h-8 bg-gray-300 dark:bg-gray-700 rounded w-3/4"></div>
            <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-1/4"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full"></div>
            <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-3/4"></div>
            <div className="h-12 bg-gray-300 dark:bg-gray-700 rounded w-full mt-8"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
        <p className="mb-6 text-gray-600 dark:text-gray-400">
          The product you're looking for doesn't exist or has been removed.
        </p>
        <Button asChild className="dessert-button">
          <Link to="/category/all">Browse All Products</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="flex items-center mb-6 text-sm">
        <Link to="/" className="text-gray-500 hover:text-dessert dark:text-gray-400 dark:hover:text-dessert">
          Home
        </Link>
        <span className="mx-2 text-gray-400">/</span>
        <Link 
          to={`/category/${product.category.toLowerCase().replace(/[&\s]/g, '-')}`} 
          className="text-gray-500 hover:text-dessert dark:text-gray-400 dark:hover:text-dessert"
        >
          {product.category}
        </Link>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-gray-700 dark:text-gray-300">{product.name}</span>
      </div>

      {/* Product Detail */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="rounded-lg overflow-hidden shadow-md">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto object-cover max-h-[500px]"
          />
        </div>
        
        <div>
          <Link
            to={`/category/${product.category.toLowerCase().replace(/[&\s]/g, '-')}`}
            className="inline-block text-sm font-medium text-dessert mb-2"
          >
            {product.category}
          </Link>
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            {product.name}
          </h1>
          <div className="text-2xl font-bold text-dessert mb-4">
            ${product.price.toFixed(2)}
          </div>
          
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            {product.description}
          </p>
          
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Quantity
            </label>
            <div className="flex items-center">
              <button
                type="button"
                onClick={handleDecrement}
                className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-l-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                -
              </button>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={handleQuantityChange}
                className="w-16 text-center border-t border-b border-gray-300 dark:border-gray-600 py-2 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300"
              />
              <button
                type="button"
                onClick={handleIncrement}
                className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-r-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                +
              </button>
            </div>
          </div>
          
          <Button onClick={handleAddToCart} className="w-full dessert-button py-6">
            <ShoppingCart className="mr-2" size={20} />
            Add to Cart
          </Button>
          
          <div className="mt-8 bg-gray-50 dark:bg-gray-800 p-4 rounded-md">
            <h3 className="font-medium text-gray-800 dark:text-gray-200 mb-2">
              Product Details
            </h3>
            <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400">
              <li>Freshly made daily</li>
              <li>Premium quality ingredients</li>
              <li>Best consumed within 48 hours</li>
              <li>Store in refrigerator</li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">
            You May Also Like
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Link
                key={relatedProduct.id}
                to={`/product/${relatedProduct.id}`}
                className="dessert-card"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-800 dark:text-gray-200">
                    {relatedProduct.name}
                  </h3>
                  <p className="text-dessert font-bold mt-1">
                    ${relatedProduct.price.toFixed(2)}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
      
      <div className="mt-12">
        <Button asChild variant="ghost" className="text-gray-600 dark:text-gray-400">
          <Link to={`/category/${product.category.toLowerCase().replace(/[&\s]/g, '-')}`} className="flex items-center">
            <ArrowLeft size={16} className="mr-2" />
            Back to {product.category}
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default ProductDetailPage;
