
import { Camera, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Camera className="h-8 w-8 text-orange-500" />
              <span className="text-2xl font-bold">LensRent</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Professional camera equipment rental for photographers, filmmakers, and content creators.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#equipment" className="hover:text-orange-500 transition-colors">Browse Equipment</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">How It Works</a></li>
              <li><a href="#about" className="hover:text-orange-500 transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-orange-500 transition-colors">Cameras</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Lenses</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Audio Equipment</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Lighting</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>hello@lensrent.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>New York, NY</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 LensRent. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
