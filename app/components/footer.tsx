// components/Footer.tsx
const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left Section: Logo/Website Name */}
            <div>
              <h2 className="text-2xl font-semibold">YourWebsite</h2>
              <p className="mt-2 text-gray-400">Bringing you the best content, products, and services.</p>
            </div>
  
            {/* Middle Section: Navigation Links */}
            <div>
              <h3 className="text-lg font-semibold">Quick Links</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="/home" className="hover:text-blue-400">Home</a></li>
                <li><a href="/about" className="hover:text-blue-400">About Us</a></li>
                <li><a href="/products" className="hover:text-blue-400">Products</a></li>
                <li><a href="/contact" className="hover:text-blue-400">Contact</a></li>
              </ul>
            </div>
  
            {/* Right Section: Social Media Links */}
            <div>
              <h3 className="text-lg font-semibold">Follow Us</h3>
              <div className="mt-4 flex space-x-4">
                <a href="https://facebook.com" target="_blank" className="text-gray-400 hover:text-blue-600">
                  <i className="fab fa-facebook-f text-2xl" />
                </a>
                <a href="https://twitter.com" target="_blank" className="text-gray-400 hover:text-blue-400">
                  <i className="fab fa-twitter text-2xl" />
                </a>
                <a href="https://instagram.com" target="_blank" className="text-gray-400 hover:text-pink-500">
                  <i className="fab fa-instagram text-2xl" />
                </a>
                <a href="https://linkedin.com" target="_blank" className="text-gray-400 hover:text-blue-700">
                  <i className="fab fa-linkedin-in text-2xl" />
                </a>
              </div>
            </div>
          </div>
  
          {/* Bottom Section: Contact Info and Copyright */}
          <div className="mt-8 border-t border-gray-700 pt-4 text-center">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} YourWebsite. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  