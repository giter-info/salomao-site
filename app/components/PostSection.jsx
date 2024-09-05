import post1 from "@/app/images/post1.jpg";
import post2 from "@/app/images/post2.jpg";
import post3 from "@/app/images/post3.jpg";
import Image from "next/image";

export default function PostSection() {
    return (
        <div className="bg-rt-info">
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                        <Image
                            src={post1}
                            alt="Imagem 1"
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                    </div>
                    <div>
                        <Image
                            src={post2}
                            alt="Imagem 2"
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                    </div>
                    <div>
                        <Image
                            src={post3}
                            alt="Imagem 3"
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
