
import { useState } from 'react';
import { Camera, Video, Mic, Lightbulb, Smartphone, Monitor, HardDrive, Grid3X3 } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { AppSidebar } from '../components/AppSidebar';
import { SidebarProvider, SidebarTrigger } from '../components/ui/sidebar';

const Categories = () => {
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleBrandToggle = (brand: string) => {
    setSelectedBrands(prev => 
      prev.includes(brand) 
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  };

  const handleCategoryToggle = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

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

  // Filter categories based on selected filters
  const filteredCategories = categories.filter(category => {
    if (selectedCategories.length > 0 && !selectedCategories.includes(category.name)) {
      return false;
    }
    return true;
  });

  // Sample products data
  const products = [
    {
      id: 1,
      name: "Sony Alpha 7 III",
      category: "Cameras",
      brand: "Sony",
      price: "₹6,500",
      image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=400&h=300&fit=crop",
      specs: ["35mm full frame", "4K (QFHD)", "Approx. 715g"]
    },
    {
      id: 2,
      name: "Canon EOS R5",
      category: "Cameras",
      brand: "Canon",
      price: "₹8,000",
      image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=400&h=300&fit=crop",
      specs: ["45MP full frame", "8K RAW", "Approx. 680g"]
    },
    {
      id: 3,
      name: "Sony FE 24-70mm f/2.8",
      category: "Lenses",
      brand: "Sony",
      price: "₹3,200",
      image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=300&fit=crop",
      specs: ["24-70mm zoom", "f/2.8 aperture", "Weather sealed"]
    },
    {
      id: 4,
      name: "DJI Mavic 3",
      category: "Drones",
      brand: "DJI",
      price: "₹12,000",
      image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=400&h=300&fit=crop",
      specs: ["4/3 CMOS sensor", "5.1K video", "46min flight time"]
    },
    {
      id: 5,
      name: "Aputure 300D II",
      category: "Lighting",
      brand: "Aputure",
      price: "₹4,500",
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=300&fit=crop",
      specs: ["300W LED", "5500K daylight", "Wireless control"]
    },
    {
      id: 6,
      name: "DJI RS 3",
      category: "Gimbals & Stabilizers",
      brand: "DJI",
      price: "₹5,500",
      image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?w=400&h=300&fit=crop",
      specs: ["3-axis gimbal", "3kg payload", "12h battery"]
    }
  ];

  // Filter products based on selected filters
  const filteredProducts = products.filter(product => {
    if (selectedCategories.length > 0 && !selectedCategories.includes(product.category)) {
      return false;
    }
    if (selectedBrands.length > 0 && !selectedBrands.includes(product.brand)) {
      return false;
    }
    return true;
  });

  // Group products by category
  const productsByCategory = filteredProducts.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {} as Record<string, typeof products>);

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="flex w-full">
        {/* Left column with ad banner and sidebar */}
        <div className="w-80 flex flex-col">
          {/* Ad Banner */}
          <div className="h-32 bg-gradient-to-r from-primary to-primary/80 flex items-center justify-center text-primary-foreground">
            <div className="text-center">
              <div className="text-lg font-bold">Camera Deals</div>
              <div className="text-sm opacity-90">Up to 30% off rentals</div>
            </div>
          </div>
          
          {/* Sidebar */}
          <SidebarProvider>
            <AppSidebar 
              selectedBrands={selectedBrands}
              onBrandToggle={handleBrandToggle}
              selectedCategories={selectedCategories}
              onCategoryToggle={handleCategoryToggle}
            />
          </SidebarProvider>
        </div>
        
        {/* Main content area */}
        <div className="flex-1">
          
          {/* Hero Section - Featured Product */}
          <section className="relative bg-black text-white">
            <div className="container mx-auto px-4 py-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h1 className="text-4xl font-bold mb-6">SONY FX3</h1>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="bg-gray-800 p-4 rounded">
                      <div className="text-2xl font-bold">35mm</div>
                      <div className="text-sm text-gray-300">full frame</div>
                      <div className="text-xs text-gray-400">high-sensitivity CMOS sensor</div>
                    </div>
                    <div className="bg-gray-800 p-4 rounded">
                      <div className="text-2xl font-bold">4K</div>
                      <div className="text-sm text-gray-300">High frame-rate</div>
                      <div className="text-xs text-gray-400">120 fps</div>
                    </div>
                    <div className="bg-gray-800 p-4 rounded">
                      <div className="text-2xl font-bold">715g</div>
                      <div className="text-sm text-gray-300">Approx.</div>
                      <div className="text-xs text-gray-400">body & battery & memory card</div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=500&h=400&fit=crop" 
                    alt="Sony FX3" 
                    className="max-w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Quick Category Navigation */}
          <section className="bg-gray-100 py-8">
            <div className="container mx-auto px-4">
              <div className="flex flex-wrap justify-center gap-4">
                {categories.map((category) => {
                  const IconComponent = category.icon;
                  return (
                    <button
                      key={category.id}
                      onClick={() => handleCategoryToggle(category.name)}
                      className={`flex flex-col items-center p-4 rounded-lg transition-colors ${
                        selectedCategories.includes(category.name)
                          ? 'bg-orange-500 text-white'
                          : 'bg-white hover:bg-gray-200'
                      }`}
                    >
                      <IconComponent className="h-6 w-6 mb-2" />
                      <span className="text-sm font-medium">{category.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Products Grid by Category */}
          <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
              {Object.entries(productsByCategory).map(([categoryName, products]) => (
                <div key={categoryName} className="mb-12">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">{categoryName}</h2>
                    <button className="text-orange-500 hover:text-orange-600 font-medium">
                      View All &gt;&gt;
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products.map((product) => (
                      <div
                        key={product.id}
                        className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                      >
                        <div className="aspect-square overflow-hidden">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="font-semibold text-gray-900 mb-1">{product.name}</h3>
                          <div className="text-lg font-bold text-orange-500 mb-3">{product.price}</div>
                          
                          <div className="space-y-1 mb-4 text-xs text-gray-600">
                            {product.specs.map((spec, index) => (
                              <div key={index}>{spec}</div>
                            ))}
                          </div>
                          
                          <button className="w-full bg-gray-900 hover:bg-orange-500 text-white py-2 rounded transition-colors font-medium">
                            Rent Now
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              
              {filteredProducts.length === 0 && (
                <div className="text-center py-12">
                  <div className="text-gray-500 text-lg">No products found matching your filters.</div>
                  <button 
                    onClick={() => {
                      selectedBrands.forEach(brand => handleBrandToggle(brand));
                      selectedCategories.forEach(category => handleCategoryToggle(category));
                    }}
                    className="mt-4 text-orange-500 hover:text-orange-600 font-medium"
                  >
                    Clear all filters
                  </button>
                </div>
              )}
            </div>
          </section>

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Categories;
