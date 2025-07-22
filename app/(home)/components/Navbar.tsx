"use client";
import {useState, useEffect} from "react";
import Link from "next/link";
import {Menu, X, Code, Home, User, Briefcase, Mail} from "lucide-react";
import {motion, AnimatePresence} from "framer-motion";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        {href: "#home", label: "Inicio", icon: Home},
        {href: "#about", label: "Sobre mí", icon: User},
        {href: "#skills", label: "Habilidades", icon: Code},
        {href: "#projects", label: "Proyectos", icon: Briefcase},
        {href: "#contact", label: "Contacto", icon: Mail},
    ];

    const scrollToSection = (href: string) => {
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({behavior: "smooth"});
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <motion.nav
            initial={{y: -100}}
            animate={{y: 0}}
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${
                isScrolled
                    ? "bg-black/95 backdrop-blur-md shadow-lg shadow-red-500/20"
                    : "bg-transparent"
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <motion.div
                        whileHover={{scale: 1.05}}
                        className="flex items-center space-x-2"
                    >
                        <div
                            className="w-8 h-8 bg-gradient-to-r from-red-500 to-red-700 rounded-lg flex items-center justify-center">
                            <Code className="w-5 h-5 text-white"/>
                        </div>
                        <span className="text-xl font-bold text-white">
              Dick<span className="text-red-500">anby</span>
            </span>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8">
                        {navItems.map((item, index) => (
                            <motion.button
                                key={item.href}
                                onClick={() => scrollToSection(item.href)}
                                whileHover={{scale: 1.05}}
                                whileTap={{scale: 0.95}}
                                initial={{opacity: 0, y: -20}}
                                animate={{opacity: 1, y: 0}}
                                transition={{delay: index * 0.1}}
                                className="flex items-center space-x-1 text-gray-300 hover:text-red-400 transition-colors duration-200 group"
                            >
                                <item.icon className="w-4 h-4 group-hover:text-red-400"/>
                                <span>{item.label}</span>
                                <motion.div
                                    className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500 origin-left"
                                    initial={{scaleX: 0}}
                                    whileHover={{scaleX: 1}}
                                    transition={{duration: 0.2}}
                                />
                            </motion.button>
                        ))}
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <motion.button
                            whileTap={{scale: 0.95}}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-gray-300 hover:text-red-400 transition-colors duration-200"
                        >
                            {isMobileMenuOpen ? (
                                <X className="w-6 h-6"/>
                            ) : (
                                <Menu className="w-6 h-6"/>
                            )}
                        </motion.button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{opacity: 0, height: 0}}
                        animate={{opacity: 1, height: "auto"}}
                        exit={{opacity: 0, height: 0}}
                        className="md:hidden bg-black/95 backdrop-blur-md border-t border-red-500/20"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navItems.map((item, index) => (
                                <motion.button
                                    key={item.href}
                                    onClick={() => scrollToSection(item.href)}
                                    initial={{opacity: 0, x: -20}}
                                    animate={{opacity: 1, x: 0}}
                                    transition={{delay: index * 0.1}}
                                    className="flex items-center space-x-2 w-full text-left px-3 py-2 text-gray-300 hover:text-red-400 hover:bg-red-500/10 rounded-md transition-colors duration-200"
                                >
                                    <item.icon className="w-4 h-4"/>
                                    <span>{item.label}</span>
                                </motion.button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;