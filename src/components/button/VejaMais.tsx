import VejaMaisProps from '@/interfaces/Props/VejaMais';
import React from 'react'
import { useRouter } from 'next/router';
import { motion } from "framer-motion";

const VejaMais: React.FC<VejaMaisProps> = ({ path }) => {
    const router = useRouter()
    return (
        <div className='flex justify-center items-center relative top-10'>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className='text-center bg-teal-500 rounded-full text-black w-[20rem] py-5 px-7 text-lg hover:scale-105 hover:bg-teal-400 transition-all'
            >
                <button onClick={() => router.push(path)} className=''>
                        Veja mais sobre quem eu sou!
                </button>
            </motion.div>
        </div>
    )
}
export default VejaMais;