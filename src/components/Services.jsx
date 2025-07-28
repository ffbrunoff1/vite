import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardList, Construction, Award } from 'lucide-react';

export default function Services() {
  const servicesData = [
    {
      icon: <ClipboardList size={40} className="text-brand-blue-light" />,
      title: 'Planejamento Estratégico',
      description:
        'Cada projeto começa com um planejamento meticuloso, garantindo a otimização de recursos, cumprimento de prazos e alinhamento com os objetivos do cliente.',
    },
    {
      icon: <Construction size={40} className="text-brand-blue-light" />,
      title: 'Execução de Precisão',
      description:
        'Utilizamos as mais modernas técnicas e mão de obra qualificada para garantir uma execução impecável, com foco total na segurança e na qualidade estrutural.',
    },
    {
      icon: <Award size={40} className="text-brand-blue-light" />,
      title: 'Controle de Qualidade',
      description:
        'Implementamos um rigoroso controle de qualidade em todas as fases da obra, assegurando que cada detalhe atenda aos mais altos padrões de excelência.',
    },
  ];

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="services" className="py-20 md:py-32 bg-brand-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-blue-dark mb-4">
            Nossos Pilares Fundamentais
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A base do nosso sucesso reside em três pilares essenciais que
            aplicamos em todos os empreendimentos, garantindo resultados
            superiores.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              className="flex flex-col bg-brand-gray p-8 rounded-xl shadow-soft hover:shadow-xl transition-shadow duration-300"
              variants={itemVariants}
              whileHover={{ y: -8 }}
            >
              <div className="flex-shrink-0 mb-6">
                <div className="bg-brand-white p-4 rounded-full inline-block">
                  {service.icon}
                </div>
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-bold text-brand-blue-dark mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
