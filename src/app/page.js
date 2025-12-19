import Navbar from "./components/Navbar";
import HeroCarousel from "./components/HeroCarousel";
import SchemesSection from "./components/SchemesSection";
import StoriesSection from "./components/StoriesSection";
import CategoriesSection from "./components/CategoriesSection";
import StatesSection from "./components/StatesSection";
import SchemesGridSection from "./components/SchemesGridSection";
import SocialHubSection from "./components/SocialHubSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroCarousel />
      <SchemesSection />
      <StoriesSection />
      <CategoriesSection />
      <StatesSection />
      <SchemesGridSection />
      <SocialHubSection />
      <Footer />
    </div>
  );
}
