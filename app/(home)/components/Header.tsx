"use client";
import { motion } from "framer-motion";
import { ChevronDown, Code2, Database, Globe } from "lucide-react";
import { useEffect, useState } from "react";

const Header = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    const scrollToAbout = () => {
        const element = document.querySelector("#about");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section id="home" className="min-h-screen relative overflow-hidden bg-black">
            {/* Animated Background */}
            <div className="absolute inset-0">
                {/* Gradient Orbs */}
                <motion.div
                    animate={{
                        x: mousePosition.x * 0.1,
                        y: mousePosition.y * 0.1,
                    }}
                    transition={{ type: "spring", stiffness: 50, damping: 50 }}
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/20 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        x: mousePosition.x * -0.05,
                        y: mousePosition.y * -0.05,
                    }}
                    transition={{ type: "spring", stiffness: 30, damping: 30 }}
                    className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-red-700/15 rounded-full blur-3xl"
                />

                {/* Floating Icons */}
                <motion.div
                    animate={{
                        rotate: 360,
                        x: [0, 100, 0],
                        y: [0, -50, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="absolute top-20 left-20"
                >
                    <Code2 className="w-8 h-8 text-red-500/50" />
                </motion.div>

                <motion.div
                    animate={{
                        rotate: -360,
                        x: [0, -80, 0],
                        y: [0, 60, 0],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="absolute top-40 right-32"
                >
                    <Database className="w-6 h-6 text-red-400/40" />
                </motion.div>

                <motion.div
                    animate={{
                        rotate: 180,
                        x: [0, 50, 0],
                        y: [0, -80, 0],
                    }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="absolute bottom-40 left-40"
                >
                    <Globe className="w-7 h-7 text-red-600/30" />
                </motion.div>

                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,0,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,0,0,0.1)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,black_70%,transparent_110%)]" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex items-center justify-center min-h-screen">
                <div className="text-center px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.h1
                            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            Apasionado por
                            <motion.span
                                className="block bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent"
                                animate={{
                                    backgroundPosition: ["0%", "100%", "0%"],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                            >
                                Python & Linux
                            </motion.span>
                        </motion.h1>

                        <motion.p
                            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            Desarrollo soluciones modernas y eficientes con tecnologías de código abierto.
                            Enfocado en Python, automatización, backend limpio y el poder de Linux.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center"
                        >
                            <motion.button
                                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(239, 68, 68, 0.3)" }}
                                whileTap={{ scale: 0.95 }}
                                onClick={scrollToAbout}
                                className="px-8 py-4 bg-gradient-to-r from-red-500 to-red-700 text-white font-semibold rounded-lg transition-all duration-300 hover:from-red-600 hover:to-red-800"
                            >
                                Conoce más sobre mí
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
                                className="px-8 py-4 border-2 border-red-500 text-red-400 font-semibold rounded-lg transition-all duration-300 hover:bg-red-500/10"
                            >
                                Ver Proyectos
                            </motion.button>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
                <motion.button
                    onClick={scrollToAbout}
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex flex-col items-center text-gray-400 hover:text-red-400 transition-colors duration-300"
                >
                    <span className="text-sm mb-2">Desliza hacia abajo</span>
                    <ChevronDown className="w-6 h-6" />
                </motion.button>
            </motion.div>
        </section>
    );
};

export default Header;