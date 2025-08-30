import Sidebar from "../../components/Sidebar/Sidebar";
import HeroSection from "../../components/HeroSection/HeroSection"; 
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 100, opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex"
    >
      <Sidebar />
      <div className="flex-1 ml-0 md:ml-64 p-6">
        <HeroSection />
      </div>
    </motion.div>
  );
}
