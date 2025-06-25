
import { Star, Clock, Shield } from 'lucide-react';

const FeaturedEquipment = () => {
  const equipment = [
    {
      id: 1,
      name: "Canon EOS R5",
      category: "Mirrorless Camera",
      price: "$75/day",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop",
      features: ["45MP Full Frame", "8K Video", "In-Body Stabilization"]
    },
    {
      id: 2,
      name: "Sony FX3",
      category: "Cinema Camera",
      price: "$95/day",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=600&fit=crop",
      features: ["Full Frame 4K", "S-Cinetone", "Dual Base ISO"]
    },
    {
      id: 3,
      name: "Canon RF 70-200mm f/2.8",
      category: "Telephoto Lens",
      price: "$45/day",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      features: ["Weather Sealed", "IS Technology", "L-Series Quality"]
    },
    {
      id: 4,
      name: "DJI Ronin 4D",
      category: "Gimbal System",
      price: "$120/day",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?w=800&h=600&fit=crop",
      features: ["4-Axis Stabilization", "Built-in Monitor", "ActiveTrack Pro"]
    }
  ];

  return (
    <section id="equipment" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Equipment
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our collection of professional cameras, lenses, and accessories 
            from the world's leading brands.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {equipment.map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-black/80 text-white px-2 py-1 rounded-lg text-sm">
                  {item.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
                
                <div className="flex items-center mb-3">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm text-gray-600">{item.rating}</span>
                  </div>
                  <span className="ml-auto text-2xl font-bold text-orange-500">{item.price}</span>
                </div>
                
                <ul className="text-sm text-gray-600 mb-4 space-y-1">
                  {item.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="w-full bg-gray-900 hover:bg-orange-500 text-white py-3 rounded-lg transition-colors duration-300 font-semibold">
                  Rent Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <Clock className="h-12 w-12 text-orange-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast Delivery</h3>
            <p className="text-gray-600">Same-day pickup or next-day delivery available</p>
          </div>
          
          <div className="text-center">
            <Shield className="h-12 w-12 text-orange-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Fully Insured</h3>
            <p className="text-gray-600">All equipment covered with comprehensive insurance</p>
          </div>
          
          <div className="text-center">
            <Star className="h-12 w-12 text-orange-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Guarantee</h3>
            <p className="text-gray-600">Professional-grade equipment tested before every rental</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedEquipment;
