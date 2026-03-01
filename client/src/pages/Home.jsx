import HeroSection from '../components/home/HeroSection';
import ServiceSlider from '../components/home/ServiceSlider';
import CategoryIcons from '../components/home/CategoryIcons';
import PopularProducts from '../components/home/PopularProducts';
import Features from '../components/home/Features';
import VideoSection from '../components/home/VideoSection';
import Testimonials from '../components/home/Testimonials';
import Newsletter from '../components/home/Newsletter';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <ServiceSlider />
      <PopularProducts />
      <CategoryIcons />
      <Features />
      <VideoSection />
      <Testimonials />
      <Newsletter />
    </div>
  );
};

export default Home;
