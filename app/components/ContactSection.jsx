"use client"
import * as motion from "framer-motion/client";
import { useState } from "react";

export default function ContactSection() {
    const defaultContent = {
        name: '',
        email: '',
        message: ''
    }
    const [loading, setLoading] = useState(false); // Estado para o loading
    const [formData, setFormData] = useState(defaultContent);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [id]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch('https://redesalomao.com.br/sendmail/public/api/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok) {
                alert(result.message); // Exibe a mensagem de sucesso
            } else {
                alert('Erro ao enviar o e-mail.');
            }
        } catch (error) {
            alert('Erro ao enviar o e-mail. Por favor, tente novamente mais tarde.');
        } finally {
            setLoading(false);
            setFormData(defaultContent)
        }
    };

    return (
        <section id="contato" className="py-16 bg-rt-green">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Contato</h2>
                <motion.form
                    className="max-w-xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    onSubmit={handleSubmit} // Ação ao enviar o formulário
                >
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-rt-white font-semibold">Nome</label>
                        <input
                            type="text"
                            id="name"
                            className="w-full text-rt-green px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-rt-white font-semibold">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full text-rt-green px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-rt-white font-semibold">Mensagem</label>
                        <textarea
                            id="message"
                            className="w-full px-4 text-rt-green py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            rows="4"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className={`w-full bg-rt-primary text-rt-green px-4 py-2 rounded-lg font-semibold hover:bg-rt-info transition ${
                            loading ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                        disabled={loading} // Desabilita o botão enquanto estiver carregando
                    >
                        {loading ? 'Enviando...' : 'Enviar'} {/* Texto do botão muda durante o loading */}
                    </button>
                </motion.form>
            </div>
        </section>
    );
}
