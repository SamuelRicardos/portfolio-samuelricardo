
'use client';
import { motion } from "framer-motion";
import { FaNode, FaReact } from "react-icons/fa";
import { SiFirebase, SiMongodb, SiNextdotjs, SiTailwindcss, SiTypescript, SiVite } from "react-icons/si";
import { RiBearSmileFill } from "react-icons/ri";
import Image from "next/image";
import { ArrowUpRightIcon } from "@heroicons/react/16/solid";
import Link from "next/link";


const projects = [
    {
        title: "Dashboard financeiro",
        description: "Um dashboard moderno feito com NextJS e Firebase",
        url: "https://github.com/SamuelRicardos/projeto-dashboard",
        tech: [
            { name: "React", icon: FaReact, color: "#61DAFB" },
            { name: "Next.js", icon: SiNextdotjs, color: "000000" },
            { name: "Tailwind CSS", icon: SiTailwindcss, color: "06B6D4" },
            { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
            { name: "Zustand", icon: RiBearSmileFill, color: "#453F39" },
            { name: "TS", icon: SiTypescript, color: "#3178C6" },
        ],
        image: '/projects/Dashboard2.png'
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
    {
        title: "Hashbnb",
        description: "Hashbnb é um clone do Airbnb, desenvolvido com foco em experiência do usuário e boas práticas modernas.",
        url: "https://github.com/SamuelRicardos",
        tech: [
            { name: "React", icon: FaReact, color: "#61DAFB" },
            { name: "Vite", icon: SiVite, color: "#3178C6" },
            { name: "NodeJS", icon: FaNode, color: "#339933" },
            { name: "MongoDB", icon: SiMongodb, color: "#339933" }
        ],
        image: '/projects/mobile.jpg'
    },
]


export default function Main() {
    return (
        <section className=" py-32 relative" id='work'>
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Heading */}

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
                {/* Project Grid */}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
            gap-8 relative z-10">

                    {
                        projects.map((project, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                whileHover={{
                                    y: -10,
                                    transition: { duration: 0.2 }
                                }}

                                className="group relative h-[500px] rounded-3xl overflow-hidden
                    bg-surface border border-white/10 cursor-pointer"
                            >
                                {/* Image Section */}
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

                                {/* Content Section */}
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
                                            gap-1.5 group/tech"
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
                {/* View More Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="flex justify-center mt-20 relative z-[5]"
                >

                    <button className="relative px-8 py-3 rounded-full bg-surface
                    border border-white/10 hover:border-primary/10 transition-all group">
                        <span className="text-content transition-colors
                        relative z-[1]">
                            Ver mais
                        </span>
                        <div className="absolute inset-0 rounded-full
                        bg-gradient-to-r from-primary/10 to-tertiary/10
                        opacity-0 group-hover:opacity-100 transition-opacity"/>
                    </button>

                </motion.div>
            </div>

        </section>
    );
}