
import { Link } from "react-router-dom";

const PrivacyPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">
          Privacy Policy
        </h1>
        
        <div className="prose dark:prose-invert max-w-none">
          <p className="mb-6">
            This Privacy Policy describes how Sweet Treat Haven ("we," "us," or "our") 
            collects, uses, and shares personal information when you visit our website, 
            place an order, or interact with us in any way.
          </p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">Information We Collect</h2>
          
          <h3 className="text-lg font-medium mt-6 mb-3">Personal Information</h3>
          <p className="mb-4">
            When you place an order or create an account, we collect:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Billing and shipping address</li>
            <li>Payment information (processed securely by our payment processors)</li>
          </ul>
          
          <h3 className="text-lg font-medium mt-6 mb-3">Automatically Collected Information</h3>
          <p className="mb-4">
            When you visit our website, we automatically collect certain information, including:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Device information</li>
            <li>Pages visited and time spent</li>
            <li>Referring website</li>
            <li>Cookies and similar technologies</li>
          </ul>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">How We Use Your Information</h2>
          <p className="mb-4">
            We use your personal information to:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Process and fulfill your orders</li>
            <li>Communicate with you about your order</li>
            <li>Provide customer support</li>
            <li>Send you marketing communications (if you've opted in)</li>
            <li>Improve our products and services</li>
            <li>Comply with legal obligations</li>
          </ul>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">Information Sharing</h2>
          <p className="mb-4">
            We may share your information with:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Service providers (payment processors, delivery services)</li>
            <li>Business partners (when necessary to fulfill your orders)</li>
            <li>Legal authorities (when required by law)</li>
          </ul>
          <p className="mb-6">
            We do not sell your personal information to third parties.
          </p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">Cookies</h2>
          <p className="mb-6">
            We use cookies and similar technologies to enhance your experience on our website, 
            analyze usage patterns, and personalize content. You can manage your cookie preferences 
            through your browser settings.
          </p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">Your Rights</h2>
          <p className="mb-4">
            Depending on your location, you may have the right to:
          </p>
          <ul className="list-disc pl-6 mb-6">
            <li>Access your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Delete your information</li>
            <li>Object to certain processing activities</li>
            <li>Export your data</li>
          </ul>
          <p className="mb-6">
            To exercise these rights, please contact us at privacy@sweettreathaven.com.
          </p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">Data Security</h2>
          <p className="mb-6">
            We implement appropriate technical and organizational measures to protect your personal 
            information from unauthorized access, disclosure, alteration, or destruction.
          </p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">Children's Privacy</h2>
          <p className="mb-6">
            Our website is not intended for children under 13 years of age. We do not knowingly 
            collect personal information from children under 13.
          </p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">Changes to This Privacy Policy</h2>
          <p className="mb-6">
            We may update this Privacy Policy from time to time. The updated version will be 
            indicated by an updated "Last Updated" date at the top of this page.
          </p>
          
          <h2 className="text-xl font-semibold mt-8 mb-4">Contact Us</h2>
          <p className="mb-4">
            If you have any questions about this Privacy Policy, please contact us:
          </p>
          <ul className="list-none mb-6">
            <li>By email: privacy@sweettreathaven.com</li>
            <li>By phone: (555) 123-4567</li>
            <li className="mb-6">By mail: 123 Sweet Street, Dessert City, DC 12345</li>
          </ul>
          
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Last Updated: May 1, 2025
          </p>
          
          <div className="mt-8">
            <Link 
              to="/contact"
              className="text-dessert hover:text-dessert-dark font-medium"
            >
              Contact Us
            </Link>
            {" "}if you have any questions about our privacy practices.
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
