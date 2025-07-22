"use client";
import { motion } from "framer-motion";
import { MessageCircle, Linkedin } from "lucide-react";

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-black">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        ¿Listo para <span className="text-red-500">colaborar</span>?
                    </h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Conectemos y trabajemos juntos en tu próximo proyecto
                    </p>
                    <div className="w-24 h-1 bg-red-500 mx-auto mt-6 rounded-full"></div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-lg mx-auto"
                >
                    {/* WhatsApp */}
                    <motion.a
                        href="https://wa.me/51994784057?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20tus%20servicios"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        className="group"
                    >
                        <div className="bg-gradient-to-br from-green-500/20 to-green-700/20 backdrop-blur-sm border border-green-500/30 rounded-2xl p-8 hover:border-green-400/50 transition-all duration-300">
                            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <MessageCircle className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">WhatsApp</h3>
                            <p className="text-gray-400 text-sm">
                                Envíame un mensaje directo
                            </p>
                        </div>
                    </motion.a>

                    {/* LinkedIn */}
                    <motion.a
                        href="http://www.linkedin.com/in/deivi-huamani-982313274"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        className="group"
                    >
                        <div className="bg-gradient-to-br from-blue-500/20 to-blue-700/20 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-8 hover:border-blue-400/50 transition-all duration-300">
                            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <Linkedin className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">LinkedIn</h3>
                            <p className="text-gray-400 text-sm">
                                Conectemos profesionalmente
                            </p>
                        </div>
                    </motion.a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="mt-12 text-gray-400"
                >
                    <p>¡Estoy siempre abierto a nuevas oportunidades y colaboraciones!</p>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;