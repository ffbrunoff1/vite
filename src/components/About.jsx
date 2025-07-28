import React from 'react';
import { motion } from 'framer-motion';
import { Building, Target, ShieldCheck } from 'lucide-react';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const features = [
    {
      icon: <Target className="h-10 w-10 text-brand-blue-light" />,
      title: 'Nossa Missão',
      description:
        'Entregar projetos de construção que superem as expectativas através da inovação, qualidade e compromisso com os prazos.',
    },
    {
      icon: <Building className="h-10 w-10 text-brand-blue-light" />,
      title: 'Nossa Visão',
      description:
        'Ser a referência no setor da construção, reconhecida pela excelência, sustentabilidade e pela capacidade de transformar desafios em realidade.',
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-brand-blue-light" />,
      title: 'Nossos Valores',
      description:
        'Integridade, segurança, colaboração e foco no cliente são os pilares que guiam cada uma de nossas ações e projetos.',
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-brand-gray">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="text-center"
        >
          <motion.h2
            className="text-3xl md:text-4xl font-extrabold text-brand-blue-dark mb-4"
            variants={itemVariants}
          >
            Inovação e Expertise em Construção
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-3xl mx-auto mb-16"
            variants={itemVariants}
          >
            Na Vite, combinamos décadas de experiência com tecnologia de ponta
            para criar estruturas duradouras e funcionais. Cada projeto é um
            compromisso com a excelência e a satisfação total do cliente.
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-brand-white p-8 rounded-xl shadow-soft text-center flex flex-col items-center"
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <div className="bg-brand-gray p-4 rounded-full mb-6 inline-block">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-blue-dark mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
