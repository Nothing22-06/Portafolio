import React from "react";
import { motion } from "framer-motion";

const Title = ({ text, className }: { text: string; className?: string }) => {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
            <motion.h1
                className="text-4xl md:text-5xl font-bold text-white mb-4"
                initial={{ y: 20 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
            >
                {text}
            </motion.h1>
            <div className="flex justify-center space-x-2">
                <motion.div
                    className="w-20 h-1 bg-red-500 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: 80 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                />
                <motion.div
                    className="w-20 h-1 bg-red-700 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: 80 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                />
            </div>
        </motion.div>
    );
};

export default Title;