import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Linkedin, ShoppingBag } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <ShoppingBag className="text-indigo-400 h-6 w-6" />
              <span className="font-bold text-xl tracking-tight">FootFusion</span>
            </Link>
            <p className="text-gray-400 text-sm max-w-xs">
              Premium footwear designed for comfort, style, and performance.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white text-sm transition">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white text-sm transition">About Us</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-white text-sm transition">Products</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-white text-sm transition">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white text-sm transition">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Social Media</h3>
            <div className="flex flex-wrap gap-4">
              <a href="#" className="bg-gray-800 p-2 rounded-full text-gray-400 hover:text-white hover:bg-indigo-600 transition" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full text-gray-400 hover:text-white hover:bg-pink-600 transition" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full text-gray-400 hover:text-white hover:bg-blue-400 transition" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full text-gray-400 hover:text-white hover:bg-blue-600 transition" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-500 text-sm">
          <p>© 2026 FootFusion. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
