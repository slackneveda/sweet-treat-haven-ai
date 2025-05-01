
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingCart, Sun, Moon, User, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/context/ThemeContext";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { getCartCount } = useCart();
  const { isAuthenticated, isAdmin, logout } = useAuth();

  const categories = [
    { name: "Cakes & Pastries", path: "/category/cakes-pastries" },
    { name: "Cookies & Biscuits", path: "/category/cookies-biscuits" },
    { name: "Frozen Desserts", path: "/category/frozen-desserts" },
    { name: "Puddings & Custards", path: "/category/puddings-custards" },
    { name: "Small Bites & Sweets", path: "/category/small-bites-sweets" },
    { name: "Pies & Tarts", path: "/category/pies-tarts" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-40 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
            <span className="text-dessert font-bold text-2xl">Sweet Treat Haven</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-dessert dark:hover:text-dessert transition-colors">
              Home
            </Link>
            {categories.map((category) => (
              <Link
                key={category.path}
                to={category.path}
                className="text-gray-700 dark:text-gray-300 hover:text-dessert dark:hover:text-dessert transition-colors"
              >
                {category.name}
              </Link>
            ))}
          </div>

          {/* Right Section - Auth, Theme Toggle, Cart */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="text-gray-700 dark:text-gray-300"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </Button>

            {isAuthenticated ? (
              <>
                <div className="relative group">
                  <Button
                    variant="ghost"
                    className="flex items-center space-x-1 text-gray-700 dark:text-gray-300"
                  >
                    <User size={20} />
                    <span>Account</span>
                  </Button>
                  <div className="absolute right-0 top-full w-48 py-2 bg-white dark:bg-gray-900 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gray-200 dark:border-gray-700 z-50">
                    {isAdmin && (
                      <Link
                        to="/admin"
                        className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                      >
                        Admin Panel
                      </Link>
                    )}
                    <button
                      onClick={logout}
                      className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <Link to="/login">
                <Button
                  variant="ghost"
                  className="flex items-center space-x-1 text-gray-700 dark:text-gray-300"
                >
                  <LogIn size={20} />
                  <span>Sign In</span>
                </Button>
              </Link>
            )}

            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative text-gray-700 dark:text-gray-300">
                <ShoppingCart size={20} />
                {getCartCount() > 0 && (
                  <span className="absolute -top-2 -right-2 bg-dessert text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {getCartCount()}
                  </span>
                )}
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="text-gray-700 dark:text-gray-300"
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </Button>
            
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative text-gray-700 dark:text-gray-300">
                <ShoppingCart size={20} />
                {getCartCount() > 0 && (
                  <span className="absolute -top-2 -right-2 bg-dessert text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {getCartCount()}
                  </span>
                )}
              </Button>
            </Link>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="text-gray-700 dark:text-gray-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-white dark:bg-gray-900">
            <div className="flex flex-col space-y-4 py-4">
              <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-dessert dark:hover:text-dessert px-2" onClick={closeMenu}>
                Home
              </Link>
              {categories.map((category) => (
                <Link
                  key={category.path}
                  to={category.path}
                  className="text-gray-700 dark:text-gray-300 hover:text-dessert dark:hover:text-dessert px-2"
                  onClick={closeMenu}
                >
                  {category.name}
                </Link>
              ))}
              <Link to="/contact" className="text-gray-700 dark:text-gray-300 hover:text-dessert dark:hover:text-dessert px-2" onClick={closeMenu}>
                Contact Us
              </Link>
              <Link to="/privacy" className="text-gray-700 dark:text-gray-300 hover:text-dessert dark:hover:text-dessert px-2" onClick={closeMenu}>
                Privacy Policy
              </Link>
              
              {isAuthenticated ? (
                <>
                  {isAdmin && (
                    <Link
                      to="/admin"
                      className="text-gray-700 dark:text-gray-300 hover:text-dessert dark:hover:text-dessert px-2"
                      onClick={closeMenu}
                    >
                      Admin Panel
                    </Link>
                  )}
                  <button
                    onClick={() => {
                      logout();
                      closeMenu();
                    }}
                    className="text-left text-gray-700 dark:text-gray-300 hover:text-dessert dark:hover:text-dessert px-2"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link
                  to="/login"
                  className="text-gray-700 dark:text-gray-300 hover:text-dessert dark:hover:text-dessert px-2"
                  onClick={closeMenu}
                >
                  Sign In
                </Link>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
