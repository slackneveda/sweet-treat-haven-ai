
import { useState } from "react";
import { Link } from "react-router-dom";
import { Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity, getCartTotal } = useCart();
  const [loading, setLoading] = useState<Record<number, boolean>>({});

  const handleUpdateQuantity = (id: number, quantity: number) => {
    setLoading({...loading, [id]: true});
    
    // Simulate a delay to show loading state
    setTimeout(() => {
      updateQuantity(id, quantity);
      setLoading({...loading, [id]: false});
    }, 300);
  };

  const handleRemoveFromCart = (id: number) => {
    setLoading({...loading, [id]: true});
    
    // Simulate a delay to show loading state
    setTimeout(() => {
      removeFromCart(id);
    }, 300);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">
        Your Cart
      </h1>
      
      {cart.length === 0 ? (
        <div className="text-center py-12">
          <div className="w-20 h-20 mx-auto mb-4 text-gray-400 dark:text-gray-600">
            <ShoppingBag size={80} />
          </div>
          <h2 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-2">
            Your cart is empty
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mb-6">
            Looks like you haven't added any items to your cart yet.
          </p>
          <Button asChild className="dessert-button px-6">
            <Link to="/">Continue Shopping</Link>
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
              <div className="hidden md:flex border-b border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-500 dark:text-gray-400">
                <div className="w-2/5 px-6 py-3">Product</div>
                <div className="w-1/5 px-6 py-3 text-center">Price</div>
                <div className="w-1/5 px-6 py-3 text-center">Quantity</div>
                <div className="w-1/5 px-6 py-3 text-center">Total</div>
              </div>
              
              {cart.map((item) => (
                <div 
                  key={item.id}
                  className="flex flex-col md:flex-row border-b border-gray-200 dark:border-gray-700 last:border-b-0"
                >
                  {/* Product */}
                  <div className="flex p-4 md:w-2/5 md:p-6">
                    <Link to={`/product/${item.id}`} className="shrink-0">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-20 h-20 md:w-24 md:h-24 object-cover rounded" 
                      />
                    </Link>
                    <div className="ml-4">
                      <Link 
                        to={`/product/${item.id}`}
                        className="font-medium text-gray-800 dark:text-gray-100 hover:text-dessert dark:hover:text-dessert"
                      >
                        {item.name}
                      </Link>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        {item.category}
                      </p>
                      <button
                        onClick={() => handleRemoveFromCart(item.id)}
                        className="mt-2 text-sm flex items-center text-red-500 hover:text-red-600"
                      >
                        <Trash2 size={14} className="mr-1" />
                        Remove
                      </button>
                    </div>
                  </div>
                  
                  {/* Price - Mobile */}
                  <div className="flex justify-between px-4 md:hidden">
                    <div className="text-sm text-gray-500 dark:text-gray-400">Price</div>
                    <div className="font-medium">${item.price.toFixed(2)}</div>
                  </div>
                  
                  {/* Price - Desktop */}
                  <div className="hidden md:flex md:w-1/5 items-center justify-center px-6">
                    <span className="font-medium text-gray-800 dark:text-gray-200">
                      ${item.price.toFixed(2)}
                    </span>
                  </div>
                  
                  {/* Quantity */}
                  <div className="px-4 py-3 md:w-1/5 md:flex md:items-center md:justify-center">
                    <div className="flex items-center md:justify-center">
                      <button
                        type="button"
                        onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                        disabled={loading[item.id] || item.quantity <= 1}
                        className="w-8 h-8 rounded-full border border-gray-300 dark:border-gray-600 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50"
                      >
                        -
                      </button>
                      <span className="mx-3 w-6 text-center text-gray-800 dark:text-gray-200">
                        {loading[item.id] ? (
                          <div className="w-4 h-4 border-2 border-dessert border-t-transparent rounded-full animate-spin mx-auto"></div>
                        ) : (
                          item.quantity
                        )}
                      </span>
                      <button
                        type="button"
                        onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                        disabled={loading[item.id]}
                        className="w-8 h-8 rounded-full border border-gray-300 dark:border-gray-600 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  
                  {/* Total - Mobile */}
                  <div className="flex justify-between px-4 py-3 md:hidden">
                    <div className="text-sm text-gray-500 dark:text-gray-400">Total</div>
                    <div className="font-medium text-gray-800 dark:text-gray-200">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                  
                  {/* Total - Desktop */}
                  <div className="hidden md:flex md:w-1/5 items-center justify-center px-6">
                    <span className="font-medium text-gray-800 dark:text-gray-200">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 flex justify-between">
              <Button asChild variant="outline" className="text-gray-600 dark:text-gray-400">
                <Link to="/">Continue Shopping</Link>
              </Button>
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">
                Order Summary
              </h2>
              
              <div className="space-y-3 text-gray-600 dark:text-gray-400">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-medium text-gray-800 dark:text-gray-200">
                    ${getCartTotal().toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="font-medium text-gray-800 dark:text-gray-200">
                    Calculated at checkout
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span className="font-medium text-gray-800 dark:text-gray-200">
                    Calculated at checkout
                  </span>
                </div>
                <div className="border-t border-gray-200 dark:border-gray-700 pt-3 mt-3">
                  <div className="flex justify-between font-semibold">
                    <span className="text-gray-800 dark:text-gray-100">Total</span>
                    <span className="text-dessert text-xl">
                      ${getCartTotal().toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
              
              <Button 
                asChild
                className="w-full mt-6 bg-dessert hover:bg-dessert-dark text-white py-3 rounded font-medium"
              >
                <Link to="/checkout" className="flex items-center justify-center">
                  Proceed to Checkout <ArrowRight size={16} className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
