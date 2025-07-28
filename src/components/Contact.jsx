import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Send,
  Loader,
  CheckCircle,
  AlertTriangle,
  Mail,
  MapPin,
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError(null);

    try {
      const response = await fetch('/.netlify/functions/send-contact-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          errorData.message || 'Ocorreu uma falha ao enviar a mensagem.'
        );
      }

      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      setSubmitError(error.message);
      setTimeout(() => setSubmitError(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-brand-gray">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-blue-dark mb-4">
            Vamos Construir Algo Juntos
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Tem uma ideia ou projeto em mente? Entre em contato conosco. Nossa
            equipe está pronta para transformar seu conceito em realidade.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 bg-brand-white p-8 md:p-12 rounded-2xl shadow-soft">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-bold text-brand-blue-dark mb-6">
              Informações de Contato
            </h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-brand-blue-light mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-800">E-mail</h4>
                  <a
                    href="mailto:ffbrunoff@yahoo.com.br"
                    className="text-gray-600 hover:text-brand-blue-light transition-colors"
                  >
                    ffbrunoff@yahoo.com.br
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-brand-blue-light mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-800">Localização</h4>
                  <p className="text-gray-600">padre lebret 801 g05 bloco 03</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Nome Completo
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-brand-gray rounded-lg border-transparent focus:ring-2 focus:ring-brand-blue-light focus:border-transparent transition"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Seu E-mail
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-brand-gray rounded-lg border-transparent focus:ring-2 focus:ring-brand-blue-light focus:border-transparent transition"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Sua Mensagem
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-brand-gray rounded-lg border-transparent focus:ring-2 focus:ring-brand-blue-light focus:border-transparent transition"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center bg-brand-blue-light text-white font-bold py-3 px-6 rounded-full hover:bg-brand-blue-dark disabled:bg-gray-400 transition-all duration-300 transform hover:scale-105"
                >
                  {isSubmitting ? (
                    <Loader className="animate-spin mr-2" />
                  ) : (
                    <Send className="mr-2 h-5 w-5" />
                  )}
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                </button>
              </div>
              {submitSuccess && (
                <div className="flex items-center text-green-600 bg-green-100 p-3 rounded-lg">
                  <CheckCircle className="mr-2" /> Mensagem enviada com sucesso!
                </div>
              )}
              {submitError && (
                <div className="flex items-center text-red-600 bg-red-100 p-3 rounded-lg">
                  <AlertTriangle className="mr-2" /> Erro: {submitError}
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
