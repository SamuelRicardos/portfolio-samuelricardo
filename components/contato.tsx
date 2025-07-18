'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ParticleCanvas } from '@/hooks/particle';
import Navbar from '@/components/navbar';

const Contato = () => {
  const [enviado, setEnviado] = useState(false);
  const [erro, setErro] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEnviado(false);
    setErro(false);

    const form = e.currentTarget;
    const data = new FormData(form);

    const res = await fetch('https://formspree.io/f/xrbbopzr', {
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' },
    });

    if (res.ok) {
      setEnviado(true);
      form.reset();
    } else {
      setErro(true);
    }
  };

  return (
    <main className="relative w-full overflow-x-hidden">
      <Navbar />
      <section className="relative min-h-screen pt-32 pb-16 px-6 overflow-x-hidden" id="contact">
        {/* Background com partículas */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <ParticleCanvas />
        </div>

        {/* Conteúdo principal */}
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-content mb-4"
          >
            Entre em contato
          </motion.h2>
          <div className="w-10 h-1 bg-gradient-to-r from-primary to-tertiary rounded-full mx-auto mb-8" />

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-left"
            onSubmit={handleSubmit}
          >
            <div>
              <label className="block text-sm font-medium text-content mb-1">
                Seu Email
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="seu@email.com"
                className="w-full px-4 py-2 rounded-lg bg-white/5 text-content placeholder:text-content/40 border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-content mb-1">
                Sua Mensagem
              </label>
              <textarea
                name="message"
                required
                placeholder="Digite sua mensagem aqui..."
                rows={5}
                className="w-full px-4 py-2 rounded-lg bg-white/5 text-content placeholder:text-content/40 border border-white/10 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              />
            </div>

            {enviado && (
              <p className="text-green-500 text-center font-semibold">
                ✅ Mensagem enviada com sucesso!
              </p>
            )}

            {erro && (
              <p className="text-red-500 text-center font-semibold">
                ❌ Ocorreu um erro. Tente novamente mais tarde.
              </p>
            )}

            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-2 bg-gradient-to-r from-primary to-tertiary text-white font-semibold rounded-full shadow-lg hover:brightness-110 transition-all"
              >
                Enviar
              </button>
            </div>
          </motion.form>
        </div>
      </section>
    </main>
  );
};

export default Contato;
