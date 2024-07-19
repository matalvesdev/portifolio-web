
import React, { useState } from 'react';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Link from 'next/link';

interface Project {
  name: string;
  description: string;
  stack: string[];
  image: string;
  githubLink: string;
}

const projects: Project[] = [
  {
    name: 'Portfólio Web - 2024',
    description: 'Portfólio pessoal, criado com NextJS e TailwindCSS para estilização, além do uso do shadcn/UI para componentizar alguns elementos.',
    stack: ['NextJS', 'TailwindCSS', 'Shadcn/UI'],
    image: 'https://i.imgur.com/cG5ySfO.jpeg',
    githubLink: 'https://github.com/matalvesdev/portifolio-web',
  },
  {
    name: 'NLW Journey - Rocketseat',
    description: 'Planejador de Viagens feito em ReactJS, TailwindCSS e consumindo a API do projeto feita na trilha de NodeJS..',
    stack: ['ReactJS', 'TailwindCSS', 'NodeJS'],
    image: '/nlw-journey.jpg',
    githubLink: 'https://github.com/matalvesdev/nlw-journeyfront-rocket',
  },
];

interface ProjectDialogProps {
  project: Project;
}

const ProjectDialog: React.FC<ProjectDialogProps> = ({ project }) => (
  <Dialog>
    <DialogTrigger asChild>
      <a href="#projetos" className="project-link">
        <img
          src={project.image}
          alt={`${project.name}`}
          className="w-auto h-96 cursor-pointer transition-transform transform hover:scale-105"
        />
      </a>
    </DialogTrigger>
    <DialogContent className="p-6 rounded-lg shadow-lg bg-white max-w-lg mx-auto">
      <DialogHeader className="mb-2 border-b border-gray-200 pb-2">
        <DialogTitle className="text-2xl font-bold text-gray-800 mb-4">
          {project.name}
        </DialogTitle>
        <DialogDescription className="text-gray-600 text-lg">
          {project.description}
        </DialogDescription>
      </DialogHeader>
      <div>
        <h4 className="font-semibold text-lg text-gray-800 mb-2">
          Stack Usada:
        </h4>
        <ul className="list-disc list-inside text-gray-700">
          {project.stack.map((tech: string, index: number) => (
            <li key={index} className="pl-1">
              {tech}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-end mt-4">
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="py-2 px-4 bg-black text-white rounded-lg hover:bg-slate-900 transition duration-300 flex items-center justify-center"
        >
          Ver no GitHub
        </a>
      </div>
    </DialogContent>
  </Dialog>
);

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-inherit w-full md:w-[1920px] h-[128px] flex items-center justify-between px-8 md:px-64 py-2">
      <div className="text-3xl">
        <Link href="#inicio" className="text-black font-bold">
          M
        </Link>
      </div>
      <button
        onClick={handleMenuToggle}
        className="block md:hidden p-2 text-black focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`w-6 h-6 ${isMenuOpen ? 'hidden' : 'block'}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`w-6 h-6 ${isMenuOpen ? 'block' : 'hidden'}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <nav
        className={`md:flex md:items-center md:space-x-4 text-2xl font-normal absolute md:static top-16 left-0 right-0 md:top-0 bg-white md:bg-inherit transition-transform transform ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0`}
      >
        <a href="#inicio" className="nav-link">Inicio</a>
        <a href="#sobre-mim" className="nav-link">Sobre Mim</a>
        <a href="#experiencia" className="nav-link">Experiência</a>
        <a href="#projetos" className="nav-link">Projetos</a>
        <a href="#contato" className="nav-link">Contato</a>
      </nav>
    </header>
  );
};

export default Navbar;
