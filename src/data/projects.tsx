// import ApiImage from "../assets/server1.svg";
import { IProject } from "@/interfaces/project.interface";

export const projects: IProject[] = [
  {
    title: "Education Demo",
    description:
      "Demonstração de EAD (Educação a Distância) - Plataforma de aprendizado online.",
    demoUrl: "https://educationdemo.vercel.app",
    repoUrl: "https://github.com/KelvinCrepaldi/educationdemo",
    images: [
      {
        desktopImage: "https://imgur.com/3oLeX6S.jpg",
        mobileImage: "https://imgur.com/pGeuDYd.jpg",
      },
      {
        desktopImage: "https://imgur.com/7lHw0YV.jpg",
        mobileImage: "https://imgur.com/vcdzfsc.jpg",
      },
      {
        desktopImage: "https://imgur.com/a7fU5uY.jpg",
        mobileImage: "https://imgur.com/SCNPLJc.jpg",
      },
      {
        desktopImage: "https://imgur.com/7GXHm1Y.jpg",
        mobileImage: "https://imgur.com/nGBH0x3.jpg",
      },
      {
        desktopImage: "https://imgur.com/lQI5zUW.jpg",
        mobileImage: "https://imgur.com/rUAN9O8.jpg",
      },
    ],
    type: "Front-end",
    mobile: true,
    skills: ["Next.js", "Tailwind"],
  },
  {
    title: "Pirate's Punch",
    description:
      "Ecommerce de venda de bebidas com temática pirata, de um bar fantasioso da ilha de tortuga.",
    demoUrl: "https://piratespunchdrinks.vercel.app",
    repoUrl: "https://github.com/KelvinCrepaldi/piratespunchdrinks",
    images: [
      {
        desktopImage: "https://imgur.com/UvpxpNe.jpg",
        mobileImage: "https://imgur.com/Py8OO7l.jpg",
      },
      {
        desktopImage: "https://imgur.com/Fg6YQxY.jpg",
        mobileImage: "https://imgur.com/DzbKwIj.jpg",
      },
      {
        desktopImage: "https://imgur.com/ODSEKw1.jpg",
        mobileImage: "https://imgur.com/CBquQAz.jpg",
      },
      {
        desktopImage: "https://imgur.com/PuDGsUB.jpg",
        mobileImage: "https://imgur.com/UfoHsj0.jpg",
      },
      {
        desktopImage: "https://imgur.com/5VHY8lj.jpg",
        mobileImage: "https://imgur.com/hQwpY9z.jpg",
      },
    ],
    type: "fullstack",
    mobile: true,
    skills: ["Next.js", "Express"],
  },
  {
    title: "Do.it",
    description: "Website de anotações para gerenciar tarefas.",
    demoUrl: "https://doit2.vercel.app",
    repoUrl: "https://github.com/KelvinCrepaldi/doit-app",
    images: [
      {
        desktopImage: "https://imgur.com/w7fUZWx.jpg",
        mobileImage: "https://imgur.com/YipFLo2.jpg",
      },
      {
        desktopImage: "https://imgur.com/WmSRToj.jpg",
        mobileImage: "https://imgur.com/KXNHp1Q.jpg",
      },
      {
        desktopImage: "https://imgur.com/Ys3TcEE.jpg",
        mobileImage: "https://imgur.com/tDbYGJE.jpg",
      },
      {
        desktopImage: "https://imgur.com/cNQ7ME3.jpg",
        mobileImage: "https://imgur.com/ZJ8V47S.jpg",
      },
    ],
    type: "fullstack",
    mobile: true,
    skills: ["Next.js", "Express"],
  },
  {
    title: "VMBProject",
    description:
      "Página para listar negociações de moedas digitais usando a API Mercadobitcoin.",
    demoUrl: "https://vmb-project.vercel.app",
    repoUrl: "https://github.com/KelvinCrepaldi/VMBProject",
    images: [
      {
        desktopImage: "https://imgur.com/XuMlc4Z.jpg",
      },
    ],
    type: "Front-end",
    mobile: false,
    skills: ["Vue.js", "Vuetify", "Pinea"],
  },
  {
    title: "PokeNext",
    description: "Biblioteca de Pokemons em Next.js e tailwind",
    demoUrl: "https://pokenext-nine-mu.vercel.app",
    repoUrl: "https://github.com/KelvinCrepaldi/pokenext",
    images: [
      {
        desktopImage: "https://imgur.com/FB95u2f.jpg",
        mobileImage: "https://imgur.com/BPC80Xn.jpg",
      },
    ],
    type: "Front-end",
    mobile: true,
    skills: ["Next.js"],
  },
  {
    title: "Kelvin Crepaldi",
    description: "Código fonte deste website.",
    repoUrl: "https://github.com/KelvinCrepaldi/kelvincrepaldi",
    images: [
      {
        desktopImage: "https://imgur.com/cqzr6sU.jpg",
        mobileImage: "https://imgur.com/uSRaGmU.jpg",
      },
      {
        desktopImage: "https://imgur.com/k7QTfIs.jpg",
        mobileImage: "https://imgur.com/Ny47i6e.jpg",
      },
      {
        desktopImage: "https://imgur.com/KObSdcx.jpg",
        mobileImage: "https://imgur.com/VUYf9ou.jpg",
      },
    ],
    type: "Front-end",
    mobile: true,
    skills: ["Next.js", "Framer-Motion"],
  },
  {
    title: "Nina Martinho",
    description:
      "Projeto de Portfólio de um artista de concepts, ilustrações e jogos.",
    demoUrl: "https://ninamartinho.vercel.app",
    repoUrl: "https://github.com/KelvinCrepaldi/ninamartinho",
    images: [
      {
        desktopImage: "https://imgur.com/MtlITxG.jpg",
        mobileImage: "https://imgur.com/aRoceC2.jpg",
      },
      {
        desktopImage: "https://imgur.com/cdydGbT.jpg",
        mobileImage: "https://imgur.com/l8tnJuy.jpg",
      },
      {
        desktopImage: "https://imgur.com/FYze3iT.jpg",
        mobileImage: "https://imgur.com/anC39ft.jpg",
      },
    ],
    type: "Front-end",
    mobile: true,
    skills: ["React.js", "Styled components"],
  },

  {
    title: "piratespunchdrinks-api",
    description:
      "API de Ecommerce de bebidas, criada para o App Pirate's Punch, como um projeto full-stack Express.",
    repoUrl: "https://github.com/KelvinCrepaldi/piratespunchdrinks-api",
    images: [
      {
        desktopImage: "https://imgur.com/ePwIw9r.jpg",
      },
    ],
    type: "Back-end",
    mobile: false,
    skills: ["Express.js", "TypeORM", "PostgreSQL"],
  },

  {
    title: "Eximoveisapi Gestão de Imóveis",
    description:
      "Projeto em Express.ts + TypeORM para gestão de imóveis, venda e agendamento de visitas.",
    repoUrl: "https://github.com/KelvinCrepaldi/eximoveisapi",
    images: [
      {
        desktopImage: "https://imgur.com/CahOqOY.jpg",
      },
    ],
    type: "Back-end",
    mobile: false,
    skills: ["Express.js", "TypeORM", "PostgreSQL"],
  },

  {
    title: "Le-Coffee API",
    description: "Le-Coffee é uma API para um e-commerce de cafés artesanais.",
    repoUrl: "https://github.com/KelvinCrepaldi/Le-Coffee-API",
    demoUrl: "https://documenter.getpostman.com/view/19946807/UVsFz8tc",
    images: [
      {
        desktopImage: "https://imgur.com/dcmffSz.jpg",
      },
    ],
    type: "Back-end",
    mobile: false,
    skills: ["Python", "Flask", "PostgreSQL"],
  },

  {
    title: "Fiado Online API",
    description:
      "API de Gerenciamento para Autônomos, ajudando a gerenciar gastos de investimentos, listas de clientes e controlar valores a receber.",
    repoUrl: "https://github.com/KelvinCrepaldi/capstoneQ4-fiado-online",
    demoUrl: "https://documenter.getpostman.com/view/20745940/UyrEiahn",
    images: [
      {
        desktopImage: "https://imgur.com/v8AncuT.jpg",
      },
    ],
    type: "Back-end",
    mobile: false,
    skills: ["Express", "TypeORM", "PostgreSQL"],
  },

  {
    title: "HR-control API",
    description:
      "HR-control é uma API de RH feita para auxiliar os setores de recursos humanos em empresas.",
    repoUrl: "https://github.com/KelvinCrepaldi/hr-control-API",
    demoUrl: "https://documenter.getpostman.com/view/20745940/Uz5DocEb",
    images: [
      {
        desktopImage: "https://imgur.com/AW2eYn0.jpg",
      },
    ],
    type: "Back-end",
    mobile: false,
    skills: ["Python", "Django", "Docker"],
  },
];
