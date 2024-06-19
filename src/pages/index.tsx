import Header from "@/components/Sections/Header";
import React from "react";
import AboutMe from "@/components/Sections/AboutMe";
import ProgressBar from "@/components/ProgressBar/ProgressBar";
import Apresentation from "@/components/Sections/Apresentation";
import Projects from "@/components/Sections/Projects";
import Contact from "@/components/Sections/Contact";
import Footer from "@/components/Sections/Footer";

const Home: React.FC = () => {
  return (
    <div className="bg-gray-800 font-jetbrains">
      <ProgressBar />
      <Header />
      <Apresentation />
      <Projects />
      <AboutMe />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
