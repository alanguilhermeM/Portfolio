import { Typewriter } from "react-simple-typewriter";
import Header from "@/components/Header";
import Image from "next/image";
import React from "react";
import AboutMe from "@/components/AboutMe";
import { motion } from "framer-motion";
import ProgressBar from "@/components/ProgressBar/ProgressBar";

const Home: React.FC = () => {
  return (
    <>
      <ProgressBar />
      <Header />
      <main className="bg-gradient-to-t from-[#121012] via-gray-300 min-h-screen flex flex-col items-center">
        <div className="w-full flex justify-center">
          <div className="relative flex justify-around items-center h-[80vh] w-[95%] bg-white border-b-0 border-solid shadow-2xl rounded-b-2xl">
            <div className="flex w-[80%] justify-around items-center max-sm:flex-col max-lg:flex-col">
              <motion.div
                // initial={{ opacity: 0, scale: 0.5 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="flex w-[80%] justify-around items-center"
              >
                <Image
                  className="border-4 border-solid rounded-full shadow-2xl transition-all duration-500 max-sm:scale-75 max-sm:mb-40 max-lg:mb-28 max-sm:absolute max-lg:absolute"
                  src="/profile.jpeg"
                  alt="profile"
                  width={500}
                  height={500}
                />
              </motion.div>
              <h1 className="text-3xl w-[50%] max-sm:w-[80%] max-lg:w-[80%] max-sm:relative max-lg:relative max-sm:top-40 max-lg:top-64 max-sm:text-xl max-lg:text-3xl max-sm:text-center max-lg:text-center">
                <Typewriter
                  words={[
                    "Olá! Me chamo Guilherme Mansur e sou um desenvolvedor full-stack!",
                  ]}
                  loop={1}
                  cursor
                  cursorStyle="_"
                  typeSpeed={50}
                  deleteSpeed={25}
                  delaySpeed={1000}
                />
              </h1>
            </div>
          </div>
        </div>
      </main>
      <AboutMe />
    </>
  );
};

export default Home;
