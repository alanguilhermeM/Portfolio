import Header from "@/components/Sections/Header";
import React from "react";
import Projects from "@/components/Sections/Projects";
import Footer from "@/components/Sections/Footer";

const Portfolio: React.FC = () => {
  return (
    <div className="bg-gray-800 font-jetbrains">
      <Header />
      <Projects />
      <Footer />
    </div>
  );
};

export default Portfolio;
