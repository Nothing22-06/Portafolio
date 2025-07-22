"use client";
import {motion} from "framer-motion";
import {ArrowLeft, ExternalLink, Lightbulb, ArrowRight, ArrowLeft as ArrowLeftIcon} from "lucide-react";
import Link from "next/link";
import {WeekProject} from "@/data/projectsData";
import CodeBlock from "./CodeBlock";
import Image from "next/image";
import {projectsData} from "@/data/projectsData";

interface ProjectDetailProps {
    project: WeekProject;
}

const ProjectDetail = ({project}: ProjectDetailProps) => {
    // Find current project index and determine previous/next projects
    const currentIndex = projectsData.findIndex((p) => p.id === project.id);
    const prevProject = currentIndex > 0 ? projectsData[currentIndex - 1] : null;
    const nextProject = currentIndex < projectsData.length - 1 ? projectsData[currentIndex + 1] : null;

    return (
        <div className="min-h-screen bg-gray-950">
            {/* Navigation */}
            <nav className="bg-gray-900/95 backdrop-blur-md border-b border-red-600/30 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <Link href="/">
                            <motion.button
                                whileHover={{scale: 1.05}}
                                whileTap={{scale: 0.95}}
                                className="flex items-center space-x-2 text-red-400 hover:text-red-300 transition-colors duration-200"
                            >
                                <ArrowLeft className="w-5 h-5"/>
                                <span>Volver al portafolio</span>
                            </motion.button>
                        </Link>
                        <div className="text-red-400 font-semibold text-lg">
                            {project.semana}
                        </div>
                    </div>
                </div>
            </nav>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Header */}
                <motion.div
                    initial={{opacity: 0, y: 30}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.8}}
                    className="text-center mb-16"
                >
                    <div
                        className="inline-block px-4 py-2 bg-red-600/20 text-red-400 rounded-full text-sm font-semibold mb-4 border border-red-600/40">
                        {project.semana}
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
                        {project.title}
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        {project.description}
                    </p>
                </motion.div>

                {/* Hero Image */}
                <motion.div
                    initial={{opacity: 0, scale: 0.95}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{duration: 0.8, delay: 0.2}}
                    className="relative h-96 md:h-[32rem] mb-16 rounded-2xl overflow-hidden shadow-xl"
                >
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        priority={true}
                    />
                    <div
                        className="absolute inset-0 bg-gradient-to-br from-red-600/30 to-gray-900/60 flex items-center justify-center">
                        <div className="text-center">
                            <div
                                className="w-20 h-20 bg-red-600 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                                <span className="text-2xl font-bold text-white">
                                    {project.semana.split(' ')[1]}
                                </span>
                            </div>
                            <p className="text-gray-200 font-medium">Proyecto: {project.title}</p>
                        </div>
                    </div>
                </motion.div>

                {/* Content Sections */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2 space-y-16">
                        {/* Theory Section */}
                        <motion.section
                            initial={{opacity: 0, y: 30}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.8, delay: 0.4}}
                        >
                            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
                                <div className="w-8 h-8 bg-red-600 rounded-lg mr-4 flex items-center justify-center">
                                    <span className="text-white font-bold">📚</span>
                                </div>
                                Conceptos Teóricos
                            </h2>
                            <div className="space-y-6">
                                {project.content.theory.map((paragraph, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{opacity: 0, x: -20}}
                                        animate={{opacity: 1, x: 0}}
                                        transition={{duration: 0.6, delay: 0.5 + index * 0.1}}
                                        className="bg-gray-900/70 backdrop-blur-sm border border-red-600/30 rounded-lg p-6 hover:border-red-500/50 transition-colors duration-300"
                                    >
                                        <p className="text-gray-300 leading-relaxed">{paragraph}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.section>


                        <motion.section
                            initial={{opacity: 0, y: 30}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.8, delay: 0.6}}
                        >
                            <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
                                <div className="w-8 h-8 bg-red-600 rounded-lg mr-4 flex items-center justify-center">
                                    <span className="text-white font-bold">💻</span>
                                </div>
                                Ejemplos Prácticos
                            </h2>
                            <div className="space-y-8">
                                {project.content.examples.map((example, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                                        className="bg-gray-900/70 backdrop-blur-sm border border-red-600/30 rounded-xl hover:border-red-500/50 transition-colors duration-300 max-h-[600px] overflow-y-auto scrollbar-thin scrollbar-thumb-red-500 scrollbar-track-gray-800"
                                    >
                                        <div className="p-6 pb-4">
                                            <h3 className="text-xl font-bold text-white mb-2">
                                                {example.title}
                                            </h3>
                                            <p className="text-gray-400 mb-4">{example.description}</p>
                                        </div>
                                        <CodeBlock code={example.code} language={example.language} />
                                    </motion.div>
                                ))}
                            </div>

                        </motion.section>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">
                        {/* Reflection Section */}
                        <motion.section
                            initial={{opacity: 0, y: 30}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.8, delay: 0.8}}
                            className="bg-gradient-to-br from-red-600/20 to-gray-900/70 rounded-xl border border-red-600/40 p-8 shadow-lg"
                        >
                            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                                <Lightbulb className="w-8 h-8 text-red-400 mr-4"/>
                                Reflexión y Aprendizajes
                            </h2>
                            <p className="text-gray-300 leading-relaxed text-lg">
                                {project.content.reflection}
                            </p>
                        </motion.section>

                        {/* Resources */}
                        <motion.div
                            initial={{opacity: 0, x: 20}}
                            animate={{opacity: 1, x: 0}}
                            transition={{duration: 0.8, delay: 0.6}}
                            className="bg-gray-900/70 backdrop-blur-sm border border-red-600/30 rounded-xl p-6 hover:border-red-500/50 transition-colors duration-300"
                        >
                            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                                <ExternalLink className="w-6 h-6 text-red-400 mr-3"/>
                                Recursos Útiles
                            </h3>
                            <div className="space-y-3">
                                {project.content.resources.map((resource, index) => (
                                    <motion.a
                                        key={index}
                                        href={resource.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{scale: 1.02}}
                                        className="block p-3 bg-gray-950/50 rounded-lg hover:bg-red-600/20 transition-all duration-300 border border-gray-700 hover:border-red-500/60"
                                    >
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <h4 className="text-white font-medium">{resource.name}</h4>
                                                <p className="text-gray-400 text-sm">{resource.type}</p>
                                            </div>
                                            <ExternalLink className="w-4 h-4 text-red-400"/>
                                        </div>
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>

                        {/* Navigation */}

                        <motion.div
                            initial={{opacity: 0, x: 20}}
                            animate={{opacity: 1, x: 0}}
                            transition={{duration: 0.8, delay: 0.8}}
                            className="bg-gray-900/70 backdrop-blur-sm border border-red-600/30 rounded-xl p-6 hover:border-red-500/50 transition-colors duration-300"
                        >
                            <h3 className="text-xl font-bold text-white mb-6">Navegación</h3>
                            <div className="space-y-4">
                                {prevProject && (
                                    <Link href={`/projects/${prevProject.id}`} passHref>
                                        <motion.button
                                            whileHover={{scale: 1.02}}
                                            className="w-full flex items-center justify-center py-3 px-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors duration-200"
                                        >
                                            <ArrowLeftIcon className="w-5 h-5 mr-2"/>
                                            Semana Anterior
                                        </motion.button>
                                    </Link>
                                )}

                                {nextProject && (
                                    <Link href={`/projects/${nextProject.id}`} passHref>
                                        <motion.button
                                            whileHover={{scale: 1.02}}
                                            className="w-full flex items-center justify-center py-3 px-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors duration-200"
                                        >
                                            Siguiente Semana
                                            <ArrowRight className="w-5 h-5 ml-2"/>
                                        </motion.button>
                                    </Link>
                                )}

                                <Link href="/#projects" passHref>
                                    <motion.button
                                        whileHover={{scale: 1.02}}
                                        className="w-full flex items-center justify-center py-3 px-4 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors duration-200"
                                    >
                                        Ver todos los proyectos
                                    </motion.button>
                                </Link>

                                <Link href="/#contact" passHref>
                                    <motion.button
                                        whileHover={{scale: 1.02}}
                                        className="w-full flex items-center justify-center py-3 px-4 border border-red-600 text-red-400 font-semibold rounded-lg hover:bg-red-600/20 transition-colors duration-200"
                                    >
                                        Contactar
                                    </motion.button>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;
