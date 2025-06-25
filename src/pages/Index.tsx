
import Header from '../components/Header';
import ProductCategories from '../components/ProductCategories';
import FeaturedEquipment from '../components/FeaturedEquipment';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <ProductCategories />
      <FeaturedEquipment />
      <Footer />
    </div>
  );
};

export default Index;
