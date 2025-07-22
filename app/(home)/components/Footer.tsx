"use client";
import { motion } from "framer-motion";
import { Code, Heart, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { href: "#home", label: "Inicio" },
        { href: "#about", label: "Sobre mí" },
        { href: "#skills", label: "Habilidades" },
        { href: "#projects", label: "Proyectos" },
        { href: "#contact", label: "Contacto" },
    ];

    const projectWeeks = [
        { href: "/projects/semana01", label: "Semana 01" },
        { href: "/projects/semana02", label: "Semana 02" },
        { href: "/projects/semana03", label: "Semana 03" },
        { href: "/projects/semana04", label: "Semana 04" },
        { href: "/projects/semana05", label: "Semana 05" },
        { href: "/projects/semana06", label: "Semana 06" },
        { href: "/projects/semana07", label: "Semana 07" },
        { href: "/projects/semana09", label: "Semana 09" },
        { href: "/projects/semana10", label: "Semana 10" },
        { href: "/projects/semana11", label: "Semana 11" },
        { href: "/projects/semana12", label: "Semana 12" },
        { href: "/projects/semana13", label: "Semana 13" },
        { href: "/projects/semana14", label: "Semana 14" },
        { href: "/projects/semana15", label: "Semana 15" },
    ];

    const firstHalfWeeks = projectWeeks.slice(0, 7);
    const secondHalfWeeks = projectWeeks.slice(7);

    return (
        <footer className="bg-black border-t border-red-500/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="space-y-4">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center space-x-2"
                        >
                            <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-red-700 rounded-lg flex items-center justify-center">
                                <Code className="w-5 h-5 text-white" />
                            </div>
                            <span className="text-xl font-bold text-white">
                Dick<span className="text-red-500">anby</span>
              </span>
                        </motion.div>
                        <p className="text-gray-400 text-sm">
                            Desarrollador Full Stack apasionado por crear soluciones web innovadoras
                            y experiencias de usuario excepcionales.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Enlaces Rápidos</h3>
                        <ul className="space-y-2">
                            {quickLinks.map((link, index) => (
                                <motion.li key={link.href}>
                                    <button
                                        onClick={() => {
                                            const element = document.querySelector(link.href);
                                            if (element) {
                                                element.scrollIntoView({ behavior: "smooth" });
                                            }
                                        }}
                                        className="text-gray-400 hover:text-red-400 transition-colors duration-200 text-sm"
                                    >
                                        {link.label}
                                    </button>
                                </motion.li>
                            ))}
                        </ul>
                    </div>

                    {/* Project Weeks */}
                    {/* Project Weeks */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Proyectos por Semana</h3>
                        <div className="grid grid-cols-2 gap-x-6">
                            <ul className="space-y-2">
                                {firstHalfWeeks.map((project) => (
                                    <motion.li key={project.href}>
                                        <Link
                                            href={project.href}
                                            className="text-gray-400 hover:text-red-400 transition-colors duration-200 text-sm"
                                        >
                                            {project.label}
                                        </Link>
                                    </motion.li>
                                ))}
                            </ul>
                            <ul className="space-y-2">
                                {secondHalfWeeks.map((project) => (
                                    <motion.li key={project.href}>
                                        <Link
                                            href={project.href}
                                            className="text-gray-400 hover:text-red-400 transition-colors duration-200 text-sm"
                                        >
                                            {project.label}
                                        </Link>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </div>


                    {/* Social Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Sígueme</h3>
                        <div className="flex space-x-4">
                            <motion.a
                                href="https://github.com/tu-usuario"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1, y: -2 }}
                                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-500/20 transition-colors duration-300"
                            >
                                <Github className="w-5 h-5 text-gray-400 hover:text-red-400" />
                            </motion.a>

                            <motion.a
                                href="https://linkedin.com/in/tu-perfil"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1, y: -2 }}
                                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-500/20 transition-colors duration-300"
                            >
                                <Linkedin className="w-5 h-5 text-gray-400 hover:text-red-400" />
                            </motion.a>

                            <motion.a
                                href="mailto:tu.email@ejemplo.com"
                                whileHover={{ scale: 1.1, y: -2 }}
                                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-500/20 transition-colors duration-300"
                            >
                                <Mail className="w-5 h-5 text-gray-400 hover:text-red-400" />
                            </motion.a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="py-6 border-t border-gray-800">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <motion.p
                            className="text-gray-400 text-sm flex items-center"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            © {currentYear} Dickanby.
                        </motion.p>


                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;