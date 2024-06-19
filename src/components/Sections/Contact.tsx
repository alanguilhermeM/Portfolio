// import Title from "@/components/Title";

import { FaLinkedin } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import Link from "next/link";
import { motion } from "framer-motion";

const Contact = (): JSX.Element => {
  return (
    <div className="max-w-[1300px] m-auto relative bottom-52 font-jetbrains md:px-10 px-5 text-center text-white">
      <h1 className="font-jetbrains text-teal-400 my-3 flex font-bold w-full text-3xl ">
          Contato
          <span className="grow m-3 border-b border-solid border-white opacity-50" />
        </h1>
      <div className="flex flex-col md:items-center ">
        <motion.h1
          initial={{ opacity: 0, x: 200 }}
          transition={{ delay: 0.1, duration: 0.1 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="m-4 text-teal-400 text-2xl"
        >
          Entre em contato comigo!
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: 200 }}
          transition={{ delay: 0.1, duration: 0.2 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          alanguilherme13@outlook.com
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: 200 }}
          transition={{ delay: 0.1, duration: 0.3 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          (32) 9 9844-3075
        </motion.p>
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex text-5xl m-1 space-x-2 justify-center my-10"
        >
          <Link
            className="hover:text-teal-500"
            href={"https://www.linkedin.com/in/kelvincrepaldi/"}
          >
            <FaLinkedin />
          </Link>
          <Link
            className="hover:text-teal-500"
            href={"https://github.com/KelvinCrepaldi?tab=repositories"}
          >
            <AiFillGithub />
          </Link>
        </motion.div>
      </div>

      <div className="flex flex-col items-center text-center max-w-[700px] mx-auto my-10 text-lg">
        <motion.p
          initial={{ opacity: 0, x: 200 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-teal-300"
        >
          Se você gostaria de discutir um projeto, fazer uma pergunta ou
          simplesmente dizer {'"'}oi{'"'}, estou sempre aberto para uma
          conversa. Você pode me contatar através dos meios de contato listados.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: 200 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          Estou disponível para trabalhos remotos. Para projetos presenciais em
          outras cidades, podemos discutir como isso pode ser
          viável e as opções de colaboração.
        </motion.p>
      </div>
    </div>
  );
};

export default Contact;
