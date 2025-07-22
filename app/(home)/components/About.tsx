"use client";
import {motion} from "framer-motion";
import {Download, ExternalLink, Phone, MapPin, Mail} from "lucide-react";
import Image from "next/image";

const About = () => {
    return (
        <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{opacity: 0, y: 50}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.8}}
                    viewport={{once: true}}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Sobre <span className="text-red-500">Mí</span>
                    </h2>
                    <div className="w-24 h-1 bg-red-500 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Photo and Info */}
                    <motion.div
                        initial={{opacity: 0, x: -50}}
                        whileInView={{opacity: 1, x: 0}}
                        transition={{duration: 0.8}}
                        viewport={{once: true}}
                        className="text-center lg:text-left"
                    >
                        <div className="relative mb-8">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                                className="w-64 h-64 mx-auto lg:mx-0 relative"
                            >
                                {/* Imagen de perfil */}
                                <div className="w-full h-full rounded-2xl border-2 border-red-500/30 overflow-hidden relative z-10">
                                    <Image
                                        src="/profile.jpg" // Cambia esto por la ruta o URL de tu imagen
                                        alt="Tu Foto"
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                {/* Borde animado */}
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    className="absolute -inset-2 bg-gradient-to-r from-red-500 via-transparent to-red-700 rounded-2xl blur opacity-75"
                                />
                            </motion.div>
                        </div>

                        <div className="space-y-4">
                            <motion.div
                                whileHover={{scale: 1.02}}
                                className="flex items-center justify-center lg:justify-start space-x-3 text-gray-300"
                            >
                                <MapPin className="w-5 h-5 text-red-400"/>
                                <span>Huancayo, Perú</span>
                            </motion.div>

                            <motion.div
                                whileHover={{scale: 1.02}}
                                className="flex items-center justify-center lg:justify-start space-x-3 text-gray-300"
                            >
                                <Phone className="w-5 h-5 text-red-400"/>
                                <span>+51 994 784 057</span>
                            </motion.div>

                            <motion.div
                                whileHover={{scale: 1.02}}
                                className="flex items-center justify-center lg:justify-start space-x-3 text-gray-300"
                            >
                                <Mail className="w-5 h-5 text-red-400"/>
                                <span>deivi.ha.22@gmail.com</span>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Description and Actions */}
                    <motion.div
                        initial={{opacity: 0, x: 50}}
                        whileInView={{opacity: 1, x: 0}}
                        transition={{duration: 0.8, delay: 0.2}}
                        viewport={{once: true}}
                        className="space-y-6"
                    >
                        <h3 className="text-2xl font-bold text-white mb-4">
                            Creador de soluciones digitales con Python y herramientas Linux

                        </h3>

                        <div className="text-gray-300 space-y-4">
                            <p>
                                Soy estudiante del noveno semestre de Ingeniería de Sistemas, con un fuerte interés en
                                las áreas de redes, transmisión de la información y ciberseguridad. Me considero una
                                persona curiosa, proactiva y con gran capacidad de aprendizaje. Estoy dispuesto a asumir
                                nuevos retos con compromiso, responsabilidad y dedicación. Mi objetivo es aplicar y
                                fortalecer tanto mis habilidades técnicas como personales, contribuyendo activamente al
                                crecimiento de la empresa y al desarrollo de la industria tecnológica.
                            </p>


                            <p>
                                <strong className="text-red-400">Lo que me gusta:</strong>
                            </p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>Aprender nuevas tecnologías y frameworks</li>
                                <li>Resolver problemas complejos con código elegante</li>
                                <li>Colaborar en proyectos de código abierto</li>
                                <li>Optimizar rendimiento y experiencia de usuario</li>
                                <li>Compartir conocimientos con la comunidad dev</li>
                            </ul>
                        </div>


                        <div className="flex flex-col sm:flex-row gap-4 pt-6">
                            <motion.a
                                href="cv/cv.pdf"
                                target="_blank"
                                whileHover={{scale: 1.05, boxShadow: "0 10px 30px rgba(239, 68, 68, 0.3)"}}
                                whileTap={{scale: 0.95}}
                                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-red-500 to-red-700 text-white font-semibold rounded-lg transition-all duration-300 hover:from-red-600 hover:to-red-800"
                            >
                                <Download className="w-5 h-5 mr-2"/>
                                Descargar CV
                            </motion.a>

                            <motion.a
                                href="https://linkedin.com/in/tu-perfil"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{scale: 1.05}}
                                whileTap={{scale: 0.95}}
                                className="inline-flex items-center justify-center px-6 py-3 border-2 border-red-500 text-red-400 font-semibold rounded-lg transition-all duration-300 hover:bg-red-500/10"
                            >
                                <ExternalLink className="w-5 h-5 mr-2"/>
                                LinkedIn
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;