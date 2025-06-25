
import { Camera, Video, Mic, Lightbulb, Smartphone, Monitor, HardDrive, Grid3X3 } from 'lucide-react';

const ProductCategories = () => {
  const categories = [
    {
      id: 1,
      name: "Cameras",
      description: "Professional cameras from Canon, Sony, Nikon, and more",
      icon: Camera,
      itemCount: 45,
      priceRange: "₹2,500 - ₹8,000/day",
      image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800&h=600&fit=crop"
    },
    {
      id: 2,
      name: "Lenses",
      description: "Wide selection of prime and zoom lenses",
      icon: Camera,
      itemCount: 78,
      priceRange: "₹1,500 - ₹4,500/day",
      image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=800&h=600&fit=crop"
    },
    {
      id: 3,
      name: "Audio Equipment",
      description: "Microphones, recorders, and audio accessories",
      icon: Mic,
      itemCount: 32,
      priceRange: "₹800 - ₹3,200/day",
      image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=600&fit=crop"
    },
    {
      id: 4,
      name: "Lighting",
      description: "Studio lights, LED panels, and lighting modifiers",
      icon: Lightbulb,
      itemCount: 56,
      priceRange: "₹1,200 - ₹5,000/day",
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&h=600&fit=crop"
    },
    {
      id: 5,
      name: "Gimbals & Stabilizers",
      description: "Professional gimbals and camera stabilization",
      icon: Grid3X3,
      itemCount: 29,
      priceRange: "₹2,000 - ₹6,500/day",
      image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?w=800&h=600&fit=crop"
    },
    {
      id: 6,
      name: "Drones",
      description: "Professional drones for aerial photography",
      icon: Smartphone,
      itemCount: 18,
      priceRange: "₹3,500 - ₹12,000/day",
      image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&h=600&fit=crop"
    },
    {
      id: 7,
      name: "Monitors & Displays",
      description: "External monitors and field monitors",
      icon: Monitor,
      itemCount: 24,
      priceRange: "₹1,800 - ₹4,200/day",
      image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&h=600&fit=crop"
    },
    {
      id: 8,
      name: "Storage & Media",
      description: "Memory cards, hard drives, and storage solutions",
      icon: HardDrive,
      itemCount: 35,
      priceRange: "₹500 - ₹2,800/day",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Professional Equipment Rental
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Browse our comprehensive collection of professional photography and videography equipment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.id}
                className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group cursor-pointer"
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300"></div>
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm rounded-lg p-2">
                    <IconComponent className="h-5 w-5 text-gray-900" />
                  </div>
                  <div className="absolute bottom-3 right-3 bg-orange-500 text-white px-2 py-1 rounded-lg text-sm font-semibold">
                    {category.itemCount} items
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors duration-300">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 mb-3 text-sm leading-relaxed">
                    {category.description}
                  </p>
                  
                  <div className="mb-4">
                    <span className="text-lg font-bold text-orange-500">{category.priceRange}</span>
                  </div>

                  <button className="w-full bg-gray-900 hover:bg-orange-500 text-white py-2.5 rounded-lg transition-colors duration-300 font-semibold text-sm group-hover:bg-orange-500">
                    Browse {category.name}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
