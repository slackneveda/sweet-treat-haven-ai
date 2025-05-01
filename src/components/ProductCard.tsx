
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { ShoppingCart } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleAddToCart = () => {
    setLoading(true);
    setTimeout(() => {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
        image: product.image,
        category: product.category,
      });
      toast({
        title: "Added to cart",
        description: `${product.name} has been added to your cart.`,
      });
      setLoading(false);
    }, 500);
  };

  return (
    <div className="dessert-card">
      <Link to={`/product/${product.id}`}>
        <div className="h-48 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
      </Link>
      <div className="p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="text-lg font-medium text-gray-800 dark:text-gray-100 mb-1 hover:text-dessert dark:hover:text-dessert">
            {product.name}
          </h3>
        </Link>
        <p className="text-dessert font-bold mb-2">${product.price.toFixed(2)}</p>
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
        <Button
          onClick={handleAddToCart}
          disabled={loading}
          className="w-full dessert-button"
        >
          {loading ? (
            <div className="flex items-center justify-center">
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
              Adding...
            </div>
          ) : (
            <>
              <ShoppingCart size={16} className="mr-2" /> Add to Cart
            </>
          )}
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
