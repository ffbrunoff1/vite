import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  const imageVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-brand-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-brand-white to-brand-gray opacity-50"></div>
      <div className="container mx-auto px-6 z-10">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="text-center md:text-left">
            <motion.h1
              className="text-4xl md:text-6xl font-extrabold text-brand-blue-dark leading-tight mb-4"
              variants={itemVariants}
            >
              Construindo o futuro com{' '}
              <span className="gradient-text">eficiência</span> e{' '}
              <span className="gradient-text">confiança</span>.
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl mx-auto md:mx-0"
              variants={itemVariants}
            >
              Transforme seu conceito em realidade com nossa expertise. A Vite é
              a escolha certa para construções de qualidade e projetos
              inovadores.
            </motion.p>
            <motion.a
              href="#contact"
              className="inline-flex items-center justify-center bg-brand-blue-light text-white font-bold py-4 px-8 rounded-full hover:bg-brand-blue-dark transition-all duration-300 transform hover:scale-105 shadow-lg"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Inicie seu Projeto
              <ArrowRight className="ml-2 h-5 w-5" />
            </motion.a>
          </div>
          <motion.div
            className="relative hidden md:block"
            variants={imageVariants}
          >
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-brand-blue-light rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-brand-blue-dark rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="relative p-8">
              <img
                src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/construction-concept.png"
                alt="Conceito de construção moderna"
                className="relative w-full h-auto rounded-2xl shadow-2xl object-cover"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
