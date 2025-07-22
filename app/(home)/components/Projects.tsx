"use client";
import {motion} from "framer-motion";
import Link from "next/link";
import {ExternalLink, Calendar, Code} from "lucide-react";
import {DirectionAwareHover} from "@/components/ui/direction-aware-hover";
import Title from "./Title";
import {projectsData} from "@/data/projectsData";

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{opacity: 0, y: 50}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.8}}
                    viewport={{once: true}}
                    className="text-center mb-16"
                >
                    <Title text="Proyectos 🎨" className="flex flex-col items-center justify-center"/>
                    <p className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto">
                        Explora mi recorrido semanal de aprendizaje y desarrollo web
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {projectsData.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{opacity: 0, y: 30}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{duration: 0.6, delay: index * 0.1}}
                            viewport={{once: true}}
                            className="group"
                        >
                            <div
                                className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-red-500/20 overflow-hidden hover:border-red-500/50 transition-all duration-300">
                                {/* Week Badge */}
                                <div className="p-4 pb-2">
                                    <div className="flex items-center justify-between mb-3">
                                        <motion.span
                                            whileHover={{scale: 1.05}}
                                            className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-red-500/20 text-red-400 border border-red-500/30"
                                        >
                                            <Calendar className="w-3 h-3 mr-1"/>
                                            {project.semana}
                                        </motion.span>
                                    </div>

                                    <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 group-hover:text-red-400 transition-colors">
                                        {project.title}
                                    </h3>

                                    <p className="text-gray-400 text-sm line-clamp-2 mb-4">
                                        {project.description}
                                    </p>
                                </div>

                                {/* Project Image with Hover Effect */}
                                <div className="relative h-48 bg-gradient-to-br from-red-500/10 to-gray-800/50">
                                    <DirectionAwareHover
                                        imageUrl={project.cover}
                                        className="w-full h-full cursor-pointer"
                                    >
                                        <div className="flex flex-col justify-center items-center space-y-3 p-4">
                                            <Link href={`/projects/${project.id}`}  passHref>
                                                <motion.div
                                                    whileHover={{ scale: 1.05 }}
                                                    className="flex flex-col justify-center items-center space-y-3 p-4 cursor-pointer  rounded-lg transition"
                                                >
                                                    <motion.div
                                                        whileHover={{ scale: 1.1 }}
                                                        className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center"
                                                    >
                                                        <Code className="w-6 h-6 text-white" />
                                                    </motion.div>
                                                    <p className="text-white font-semibold text-center">
                                                        Ver detalles del proyecto
                                                    </p>
                                                </motion.div>
                                            </Link>
                                        </div>
                                    </DirectionAwareHover>
                                </div>

                                {/* Action Button */}
                                <div className="p-4">
                                    <Link href={`/projects/${project.id}`}>
                                        <motion.button
                                            whileHover={{scale: 1.02}}
                                            whileTap={{scale: 0.98}}
                                            className="w-full flex items-center justify-center space-x-2 py-3 px-4 bg-gradient-to-r from-red-500 to-red-700 text-white font-semibold rounded-lg transition-all duration-300 hover:from-red-600 hover:to-red-800 group"
                                        >
                                            <span>Explorar proyecto</span>
                                            <ExternalLink
                                                className="w-4 h-4 group-hover:translate-x-1 transition-transform"/>
                                        </motion.button>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;