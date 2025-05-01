
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-12">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-dessert font-bold text-xl">Sweet Treat Haven</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Discover the finest dessert specialties delivered right to your doorstep.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-4">Categories</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/category/cakes-pastries" className="text-gray-600 dark:text-gray-400 hover:text-dessert dark:hover:text-dessert">
                  Cakes & Pastries
                </Link>
              </li>
              <li>
                <Link to="/category/cookies-biscuits" className="text-gray-600 dark:text-gray-400 hover:text-dessert dark:hover:text-dessert">
                  Cookies & Biscuits
                </Link>
              </li>
              <li>
                <Link to="/category/frozen-desserts" className="text-gray-600 dark:text-gray-400 hover:text-dessert dark:hover:text-dessert">
                  Frozen Desserts
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-4">More Categories</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/category/puddings-custards" className="text-gray-600 dark:text-gray-400 hover:text-dessert dark:hover:text-dessert">
                  Puddings & Custards
                </Link>
              </li>
              <li>
                <Link to="/category/small-bites-sweets" className="text-gray-600 dark:text-gray-400 hover:text-dessert dark:hover:text-dessert">
                  Small Bites & Sweets
                </Link>
              </li>
              <li>
                <Link to="/category/pies-tarts" className="text-gray-600 dark:text-gray-400 hover:text-dessert dark:hover:text-dessert">
                  Pies & Tarts
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-4">Information</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-gray-600 dark:text-gray-400 hover:text-dessert dark:hover:text-dessert">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-600 dark:text-gray-400 hover:text-dessert dark:hover:text-dessert">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-gray-600 dark:text-gray-400 hover:text-dessert dark:hover:text-dessert">
                  Sign In / Sign Up
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 text-center text-gray-600 dark:text-gray-400">
          <p>© {new Date().getFullYear()} Sweet Treat Haven. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
