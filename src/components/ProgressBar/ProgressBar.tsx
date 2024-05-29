"use client";

import React from 'react';
import { motion, useScroll } from "framer-motion";

const ProgressBar: React.FC = () => {
    const { scrollYProgress } = useScroll();
    return (
        <motion.div 
            className='fixed bottom-5 left-10 right-10 h-[8px] bg-green-300 border border-solid rounded-3xl origin-[0%_100%]'
            style={{ scaleX: scrollYProgress }}
        />
    )
}

export default ProgressBar;