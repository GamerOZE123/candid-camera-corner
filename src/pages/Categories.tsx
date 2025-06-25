
import { Camera, Video, Mic, Lightbulb, Smartphone, Monitor, HardDrive, Grid3X3 } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Categories = () => {
  const categories = [
    {
      id: 1,
      name: "Cameras",
      description: "Professional cameras from Canon, Sony, Nikon, and more",
      icon: Camera,
      itemCount: 45,
      image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800&h=600&fit=crop",
      subcategories: ["DSLR", "Mirrorless", "Cinema Cameras", "Action Cameras"]
    },
    {
      id: 2,
      name: "Lenses",
      description: "Wide selection of prime and zoom lenses for every shot",
      icon: Camera,
      itemCount: 78,
      image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=800&h=600&fit=crop",
      subcategories: ["Prime Lenses", "Zoom Lenses", "Macro Lenses", "Telephoto"]
    },
    {
      id: 3,
      name: "Audio Equipment",
      description: "Microphones, recorders, and audio accessories",
      icon: Mic,
      itemCount: 32,
      image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=600&fit=crop",
      subcategories: ["Shotgun Mics", "Lavalier Mics", "Audio Recorders", "Boom Poles"]
    },
    {
      id: 4,
      name: "Lighting",
      description: "Studio lights, LED panels, and lighting modifiers",
      icon: Lightbulb,
      itemCount: 56,
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&h=600&fit=crop",
      subcategories: ["LED Panels", "Softboxes", "Ring Lights", "Color Gels"]
    },
    {
      id: 5,
      name: "Gimbals & Stabilizers",
      description: "Professional gimbals and camera stabilization systems",
      icon: Grid3X3,
      itemCount: 29,
      image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?w=800&h=600&fit=crop",
      subcategories: ["Handheld Gimbals", "Crane Systems", "Steadicams", "Sliders"]
    },
    {
      id: 6,
      name: "Drones",
      description: "Professional drones for aerial photography and videography",
      icon: Smartphone,
      itemCount: 18,
      image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&h=600&fit=crop",
      subcategories: ["Cinema Drones", "Photography Drones", "FPV Drones", "Accessories"]
    },
    {
      id: 7,
      name: "Monitors & Displays",
      description: "External monitors, field monitors, and display accessories",
      icon: Monitor,
      itemCount: 24,
      image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&h=600&fit=crop",
      subcategories: ["Field Monitors", "Director Monitors", "Wireless Systems", "Monitor Mounts"]
    },
    {
      id: 8,
      name: "Storage & Media",
      description: "Memory cards, hard drives, and storage solutions",
      icon: HardDrive,
      itemCount: 35,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
      subcategories: ["Memory Cards", "External Drives", "Card Readers", "Storage Cases"]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] bg-gradient-to-br from-black via-gray-900 to-black flex items-center">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:50px_50px]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Professional
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                {" "}Equipment
              </span>
              <br />
              For Every Project
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              From cameras and lenses to drones and gimbals - rent the latest professional equipment 
              from top brands when you need it most.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Start Browsing
              </button>
              <button className="border-2 border-white hover:bg-white hover:text-black text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
                View Pricing
              </button>
            </div>
          </div>
        </div>

        <div className="absolute top-20 left-10 w-4 h-4 bg-orange-500 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-6 h-6 bg-orange-400 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-8 w-3 h-3 bg-white rounded-full animate-pulse delay-500"></div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Equipment Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Browse our comprehensive collection of professional photography and videography equipment.
              Everything you need for your creative projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={category.id}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group cursor-pointer"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300"></div>
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-2">
                      <IconComponent className="h-6 w-6 text-gray-900" />
                    </div>
                    <div className="absolute bottom-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-lg text-sm font-semibold">
                      {category.itemCount} items
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors duration-300">
                      {category.name}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {category.description}
                    </p>

                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-gray-800 mb-2">Popular Types:</h4>
                      <div className="flex flex-wrap gap-2">
                        {category.subcategories.map((sub, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full hover:bg-orange-100 hover:text-orange-700 transition-colors duration-200"
                          >
                            {sub}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button className="w-full mt-6 bg-gray-900 hover:bg-orange-500 text-white py-3 rounded-lg transition-colors duration-300 font-semibold group-hover:bg-orange-500">
                      Browse {category.name}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Latest Equipment</h3>
              <p className="text-gray-600">Access to the newest cameras, lenses, and accessories from top brands</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Support</h3>
              <p className="text-gray-600">Get guidance from professionals to choose the right equipment for your project</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Monitor className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Flexible Rentals</h3>
              <p className="text-gray-600">Daily, weekly, or monthly rentals with competitive pricing and easy booking</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Browse our equipment categories or contact our team for personalized recommendations
            based on your specific project needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors duration-300">
              Browse All Equipment
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-black text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Categories;
