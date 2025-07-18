
'use client';
import { motion } from "framer-motion";
import { FaNode, FaReact, FaAngular, FaJava, FaDatabase, FaRobot } from "react-icons/fa";
import { SiFirebase, SiMongodb, SiNextdotjs, SiTailwindcss, SiTypescript, SiVite, SiPrimeng, SiMysql, SiSpringboot, SiShadcnui, SiPostgresql, SiGithubactions } from "react-icons/si";
import { RiBearSmileFill } from "react-icons/ri";
import Image from "next/image";
import { ArrowUpRightIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import { useState } from "react";
import ExperienceTimeline from "./ExperienceTimeline";
import Contato from "./contato";
import SobreMim from "./sobremim";


const projects = [
    {
        title: "E-commerce",
        description: "Aplicação completa de e-commerce com autenticação de usuários, controle de estoque, carrinho sincronizado com o back-end e finalização de pedidos.",
        url: "https://github.com/SamuelRicardos/ecommerce-angular",
        tech: [
            { name: "Angular", icon: FaAngular, color: "#C50836" },
            { name: "MongoDB", icon: SiMongodb, color: "#6EB442" },
            { name: "Java", icon: FaJava, color: "#096CAB" },
            { name: "Spring Boot", icon: SiSpringboot, color: "#71B544" },
        ],
        image: '/projects/Ecommerce.jpg'
    },
    {
        title: "Projeto Questionários",
        description: "Sistema interativo de perguntas por tema e nível, com lógica de vidas, progresso, perguntas, respostas e explicações geradas por IA.",
        url: "https://github.com/SamuelRicardos/projeto-questionarios",
        tech: [
            { name: "React", icon: FaReact, color: "#61DAFB" },
            { name: "Vite", icon: SiVite, color: "#3178C6" },
            { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
            { name: "Java", icon: FaJava, color: "#096CAB" },
            { name: "Spring Boot", icon: SiSpringboot, color: "#71B544" },
            { name: "Zustand", icon: RiBearSmileFill, color: "#453F39" },
            { name: "PostgreSQL", icon: SiPostgresql, color: "#1A6997" },
            { name: "Gemini IA", icon: FaRobot, color: "#1A6997" },
            { name: "CI/CD", icon: SiGithubactions, color: "#2088FF" }
        ],
        image: '/projects/Questionarios.png'
    },
    {
        title: "Dashboard financeiro",
        description: "Um dashboard moderno feito com NextJS e Firebase",
        url: "https://github.com/SamuelRicardos/projeto-dashboard",
        tech: [
            { name: "React", icon: FaReact, color: "#61DAFB" },
            { name: "Next.js", icon: SiNextdotjs, color: "000000" },
            { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
            { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
            { name: "Zustand", icon: RiBearSmileFill, color: "#453F39" },
            { name: "ShadcnUI", icon: SiShadcnui, color: "#FFFFFF" },
            { name: "TS", icon: SiTypescript, color: "#3178C6" },
        ],
        image: '/projects/Dashboard2.png'
    },
    {
        title: "Hashbnb",
        description: "Hashbnb é um clone do Airbnb, desenvolvido com foco em experiência do usuário e boas práticas modernas.",
        url: "https://github.com/SamuelRicardos",
        tech: [
            { name: "React", icon: FaReact, color: "#61DAFB" },
            { name: "Vite", icon: SiVite, color: "#3178C6" },
            { name: "NodeJS", icon: FaNode, color: "#339933" },
            { name: "MongoDB", icon: SiMongodb, color: "#6EB442" }
        ],
        image: '/projects/Hashbnb.png'
    },
    {
        title: "Cozinha criativa",
        description: "Um sistema de receitas, onde é criado um fluxo para a criação de livro de receitas em PDF",
        url: "https://github.com/SamuelRicardos/cozinha_criativa",
        tech: [
            { name: "Angular", icon: FaAngular, color: "#C50836" },
            { name: "Primeng", icon: SiPrimeng, color: "#DE0837" },
            { name: "Java", icon: FaJava, color: "#096CAB" },
            { name: "Spring Boot", icon: SiSpringboot, color: "#71B544" },
            { name: "MySQL", icon: SiMysql, color: "#1A6997" }
        ],
        image: '/projects/Cozinhacriativa.png'
    },
    {
        title: "LoginPage",
        description: "Uma página de login e cadastro com integração com back-end",
        url: "https://github.com/SamuelRicardos/login-page-frontend",
        tech: [
            { name: "Angular", icon: FaAngular, color: "#C50836" },
            { name: "Java", icon: FaJava, color: "#096CAB" },
            { name: "Spring Boot", icon: SiSpringboot, color: "#71B544" },
            { name: "H2", icon: FaDatabase, color: "#1A6997" }
        ],
        image: '/projects/LoginPage.png'
    },
    {
        title: "Delícias da Lucinda",
        description: "Projeto freelance. Uma landing page feito para uma microempresa.",
        url: "https://github.com/SamuelRicardos/salgados",
        tech: [
            { name: "Next.js", icon: SiNextdotjs, color: "000000" },
            { name: "React", icon: FaReact, color: "#61DAFB" },
            { name: "Tailwind CSS", icon: SiTailwindcss, color: "06B6D4" },
        ],
        image: '/projects/DeliciasDaLucinda.png'
    },
    {
        title: "Lene boleira",
        description: "Projeto freelance. Uma landing page feito para uma microempresa.",
        url: "https://github.com/SamuelRicardos/lene-boleira",
        tech: [
            { name: "React", icon: FaReact, color: "#61DAFB" },
            { name: "Vite", icon: SiVite, color: "#3178C6" },
            { name: "Tailwind CSS", icon: SiTailwindcss, color: "06B6D4" },
        ],
        image: '/projects/LeneBoleira4.png'
    },
    {
        title: "PetDev",
        description: "Uma landing page para serviços de pets",
        url: "https://github.com/SamuelRicardos/petdev",
        tech: [
            { name: "Next.js", icon: SiNextdotjs, color: "000000" },
            { name: "React", icon: FaReact, color: "#61DAFB" },
            { name: "Tailwind CSS", icon: SiTailwindcss, color: "06B6D4" },
            { name: "ShadcnUI", icon: SiShadcnui, color: "#FFFFFF" },
        ],
        image: '/projects/PetDev.png'
    },
    {
        title: "MarketList",
        description: "Um CRUD de lista de mercado. Com funcionalidades extras como tema claro/escuro e histórico de compras",
        url: "https://github.com/SamuelRicardos/lista-de-mercado",
        tech: [
            { name: "React", icon: FaReact, color: "#61DAFB" },
            { name: "Vite", icon: SiVite, color: "#3178C6" },
            { name: "Zustand", icon: RiBearSmileFill, color: "#453F39" },
        ],
        image: '/projects/ListaMercado.png'
    },
]


export default function Main() {
    const [showAll, setShowAll] = useState(false);
    const visibleProjects = showAll ? projects : projects.slice(0, 6);

    return (
        <>
        <SobreMim/>
            <section className=" py-32 relative" id='projects'>
                <div className="max-w-7xl mx-auto px-6">


                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col items-center mb-20"
                    >

                        <h2 className="text-4xl md:text-5xl font-bold
                    text-content mb-4 text-center">Principais projetos</h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-primary
                    to-tertiary rounded-full"/>

                    </motion.div>


                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
            gap-8 relative z-10">

                        {
                            visibleProjects.map((project, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: i * 0.1 }}
                                    whileHover={{
                                        y: -10,
                                        transition: { duration: 0.2 }
                                    }}

                                    className="group relative h-[550px] rounded-3xl overflow-hidden
                    bg-surface border border-white/10 cursor-pointer"
                                >

                                    <motion.div
                                        className="h-[250px] relative"
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                            className="object-cover"
                                            priority
                                        />
                                    </motion.div>


                                    <motion.div
                                        className="p-6 h-[25px] bg-surface"
                                        transition={{ duration: 0.3 }}
                                    >

                                        <div className="flex justify-between items-start
                            mb-4 group/title">

                                            <h3 className="text-2xl font-bold text-content">{project.title}</h3>
                                            {project.url && (
                                                <Link href={project.url} target="_blank" rel="noopener noreferrer" title={`Ver ${project.title}`}>
                                                    <ArrowUpRightIcon
                                                        className="h-6 w-6 text-content/50 group-hover/title:text-primary transition-colors duration-300"
                                                    />
                                                </Link>
                                            )}

                                        </div>
                                        <p className="text-content/80 mb-4">{project.description}</p>

                                        <div className="flex flex-wrap gap-2">

                                            {
                                                project.tech.map((tech, j) => (
                                                    <span
                                                        key={j}
                                                        className="px-3 py-1 rounded-full bg-white/5 text-content/80
                                            text-sm border border-white/5
                                            hover:bg-surface transition-colors flex items-center
                                            gap-1 group/tech"
                                                    >
                                                        <tech.icon
                                                            style={{ color: tech.color }}
                                                            className="w-4 h-4 transition-colors" />
                                                        <span className="group-hover/tech:text-content transition-colors">
                                                            {tech.name}
                                                        </span>
                                                    </span>
                                                ))
                                            }

                                        </div>

                                    </motion.div>
                                </motion.div>
                            ))
                        }


                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex justify-center mt-20 relative z-[5]"
                    >
                        <button
                            onClick={() => setShowAll(prev => !prev)}
                            className="relative px-8 py-3 rounded-full bg-surface
    border border-white/10 hover:border-primary/10 transition-all group"
                        >
                            <span className="text-content transition-colors relative z-[1]">
                                {showAll ? "Ver menos" : "Ver mais"}
                            </span>
                            <div className="absolute inset-0 rounded-full
    bg-gradient-to-r from-primary/10 to-tertiary/10
    opacity-0 group-hover:opacity-100 transition-opacity" />
                        </button>
                    </motion.div>
                </div>

            </section>
            <ExperienceTimeline />
            <Contato/>
        </>
    );
}