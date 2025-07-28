import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const logoUrl =
    'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/imagens.website.creation/ad5c31a2-f045-4f97-a0ab-2d4f0e6a69e7/logo_1753746995669_0.png';
  const currentYear = new Date().getFullYear();

  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const navLinks = [
    { name: 'Sobre', href: '#about' },
    { name: 'Pilares', href: '#services' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <motion.footer
      className="bg-brand-blue-dark text-white"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <a href="#home">
              <img
                src={logoUrl}
                alt="Vite Logo"
                className="h-14 w-auto mb-4 bg-white p-2 rounded-md"
              />
            </a>
            <p className="max-w-md text-gray-300">
              Construindo o futuro com eficiência e confiança. Transformamos
              conceitos em realidade com expertise e inovação.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-brand-white mb-4">
              Navegação
            </h3>
            <ul className="space-y-2">
              {navLinks.map(link => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-brand-blue-light transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-brand-white mb-4">
              Contato
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="h-5 w-5 mt-1 mr-3 flex-shrink-0 text-brand-blue-light" />
                <a
                  href="mailto:ffbrunoff@yahoo.com.br"
                  className="text-gray-300 hover:text-brand-blue-light transition-colors"
                >
                  ffbrunoff@yahoo.com.br
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mt-1 mr-3 flex-shrink-0 text-brand-blue-light" />
                <span className="text-gray-300">
                  padre lebret 801 g05 bloco 03
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>
            &copy; {currentYear} Vite Construção. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
