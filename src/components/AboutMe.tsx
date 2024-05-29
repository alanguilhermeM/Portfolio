// import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { DiScrum } from "react-icons/di";
import { FaUsers } from "react-icons/fa";
import { AiFillLayout } from "react-icons/ai";
import { MdMenuBook } from "react-icons/md";
import { skills } from "@/data/skills";
import Image from "next/image";
import VejaMais from "./button/VejaMais";

const AboutMe: React.FC = () => {
  return (
    <section className="h-screen flex justify-center items-center bg-[#121012]">
      <div className="w-[70%] relative bottom-40 text-white">
        <h1 className="font-jetbrains text-teal-400 my-3 flex font-bold w-full text-lg ">
          Sobre
          <span className="grow m-3 border-b border-solid border-white opacity-50" />
        </h1>
        <div className="flex">
          <motion.div
            initial={{ opacity: 0, x: 500 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className=" lg:w-1/2 p-5 text-lg lg:text-xl text-teal-200"
          >
            <p className=" mt-3 text-lg text-teal-100 font-bold">
              Formado pela Trybe como Full Stack, aprendi principais tecnologias
              de Front End e Back End.
            </p>
            <p className=" mt-3 text-lg text-teal-300 font-bold">
              Entre as linguagens e tecnologias aprendidas, estão HTML5, CSS3,
              JavaScript (ES6 +), React, Redux, Python (Django e Flask),Node.js,
              Express, e SQL.
            </p>
            <p className=" mt-3 text-lg text-teal-500 font-bold">
              Além de soft skills disponíveis para o mercado de trabalho, Scrum,
              Kanban.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="p-8 space-y-4"
          >
            <p className="flex items-center">
              <span className="text-2xl text-green-300 p-1">
                <DiScrum />
              </span>
              Habilidades em Scrum e Kanban para gerenciamento de projetos.
            </p>
            <p className="flex items-center">
              <span className="text-2xl text-green-300 p-1">
                <FaUsers />
              </span>
              Experiência em trabalho em equipe e colaboração com colegas de
              diferentes backgrounds.
            </p>
            <p className="flex items-center">
              <span className="text-2xl text-green-300 p-1">
                <AiFillLayout />
              </span>
              Competência em design de interface, com foco em UI, UX e abordagem
              Mobile-First.
            </p>
            <p className="flex items-center">
              <span className="text-2xl text-green-300 p-1">
                <MdMenuBook />
              </span>
              Compromisso contínuo de aprendizado, explorando novas tecnologias.
            </p>
          </motion.div>
        </div>
        <div className="flex flex-wrap space-x-3 justify-center mt-20">
          {skills.map((skill, index: number) => (
            <motion.div
              initial={{ opacity: 0, x: 300 }}
              whileInView={{ opacity: 1, x: 0 }}
              key={index}
              className="w-[50px] aspect-square m-2"
            >
              <Image alt={`${skill.name} logo`} src={skill.image} />
            </motion.div>
          ))}
        </div>
        <VejaMais path={'/about'}/>
      </div>
    </section>
  );
};

export default AboutMe;
