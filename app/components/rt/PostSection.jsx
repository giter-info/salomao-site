import post1 from "@/app/images/home/post1.jpg";
import post2 from "@/app/images/home/post2.jpg";
import post3 from "@/app/images/home/post3.jpg";
import Image from "next/image";

export default function PostSection() {
    return (
        <section id="posts">
            <div className="bg-brand-offwhite dark:bg-brand-green-dark">
                <div className="container mx-auto px-4 py-8">
                    <h2 className="font-serif text-3xl text-brand-green dark:text-brand-gold font-bold text-center mb-8">
                        Blog Digital
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                            <Image
                                src={post1}
                                alt="Imagem 1"
                                className="w-full h-auto rounded-3xl shadow-lg border border-slate-200 dark:border-brand-gold/15"
                            />
                        </div>
                        <div>
                            <Image
                                src={post2}
                                alt="Imagem 2"
                                className="w-full h-auto rounded-3xl shadow-lg border border-slate-200 dark:border-brand-gold/15"
                            />
                        </div>
                        <div>
                            <Image
                                src={post3}
                                alt="Imagem 3"
                                className="w-full h-auto rounded-3xl shadow-lg border border-slate-200 dark:border-brand-gold/15"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
