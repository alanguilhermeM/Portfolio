import { Typewriter } from "react-simple-typewriter";
import Header from "@/components/Header";
import Image from "next/image";
import React from "react";
import AboutMe from "@/components/AboutMe";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ProgressBar from "@/components/ProgressBar/ProgressBar";

const Home: React.FC = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["300px center", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  const position = useTransform(scrollYProgress, (val) => {
    return val === 1 ? "relative" : "fixed";
  });

  return (
    <>
      <ProgressBar />
      <Header />
      <div className="flex justify-center w-full min-h-full bg-gray-800">
        <motion.section
          style={{ opacity }}
          ref={targetRef}
          className="flex justify-around h-[60vh] lg:h-[50vh] font-bold"
        >
          <motion.div
            style={{ scale, position }}
            className="max-sm:w-[90%] md:w-[80%] justify-center flex flex-col h-[60vh] lg:text-center lg:items-center"
          >
            <div className="relative bottom-32 text-[#14b8a5]">
              <h1 className="max-sm:text-2xl max-lg:text-4xl lg:text-5xl">
                Olá, eu sou Guilherme Mansur
              </h1>
              <p className="font-light max-sm:text-xl max-lg:text-3xl lg:text-4xl">
                Desenvolvedor Full-stack
              </p>
            </div>
            <div className="flex w-[80%] justify-center max-lg:justify-start items-center relative max-sm:w-2/3 lg:w-[45%] lg:top-60 xl:top-20">
              <h1 className="text-3xl h-20 max-lg:w-[80%] max-sm:text-lg max-lg:text-3xl lg:text-xl max-md:h-[56px] text-gray-400 font-light">
                <Typewriter
                  words={[
                    "Esse website é meu espaço, criado para guardar algumas coisas que aprendi e criei durante meu tempo como programador",
                  ]}
                  loop={1}
                  cursor
                  cursorStyle="_"
                  typeSpeed={30}
                  deleteSpeed={25}
                  delaySpeed={1000}
                />
              </h1>
            </div>
          </motion.div>
        </motion.section>
      </div>
      <AboutMe />
    </>
  );
};

export default Home;
