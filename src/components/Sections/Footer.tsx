import Link from "next/link";

const Footer = (): JSX.Element => {
  return (
    <footer className="p-10 flex flex-col items-center bg-gray-900">
        <ul className="flex space-x-14 justify-center text-xl">
        <li>
          <Link
            className="text-blue-400 font-bold"
            href={"https://github.com/alanguilhermeM"}
          >
            Github
          </Link>
        </li>
        <li>
          <Link
            className="text-green-400 font-bold"
            href={"https://www.linkedin.com/in/mansur/"}
          >
            Linkedin
          </Link>
        </li>
        <li className="text-yellow-300 font-bold">(32) 9 9844-3075</li>
      </ul>
      <div className="flex flex-col items-center">
        <p className="text-white">
          <span className="text-red-400">Guilherme Mansur</span> © 2024 | São João Del Rei - MG - Brasil
        </p>
        <p className="text-white">Next.js ❤ Tailwind</p>
      </div>
    </footer>
  );
};

export default Footer;
