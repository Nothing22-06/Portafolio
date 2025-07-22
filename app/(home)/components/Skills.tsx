"use client";
import { motion } from "framer-motion";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import Title from "./Title";
import { skillsData } from "@/data/skillsData";

const Skills = () => {
    return (
        <section id="skills" className="py-20 bg-gray-900">
            <div className="max-w-7xl mx-auto px-8">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <Title text="Habilidades 🏅" className="flex flex-col items-center justify-center" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <HoverEffect items={skillsData} />
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;