import * as motion from "framer-motion/client";


export default function ContactSection() {
    return (
        <section id="contato" className="py-16 bg-rt-green">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Contato</h2>
                <motion.form
                    className="max-w-xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-rt-white font-semibold">Nome</label>
                        <input
                            type="text"
                            id="name"
                            className="w-full text-rt-green px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-rt-white font-semibold">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full text-rt-green px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-rt-white font-semibold">Mensagem</label>
                        <textarea
                            id="message"
                            className="w-full px-4 text-rt-green py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            rows="4"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-rt-info text-rt-green px-4 py-2 rounded-lg font-semibold hover:bg-rt-dark transition"
                    >
                        Enviar
                    </button>
                </motion.form>
            </div>
        </section>
    );
}
