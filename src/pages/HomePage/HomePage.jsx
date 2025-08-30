import Sidebar from "../../components/Sidebar/Sidebar";
import HeroSection from "../../components/HeroSection/HeroSection"; 

export default function HomePage() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 ml-0 md:ml-64 p-6">
        <HeroSection />
      </div>
    </div>
  );
}
