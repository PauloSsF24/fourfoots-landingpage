import Image from "next/image";
import about1Img from '../../../public/dog-about1.jpg'
import about2Img from '../../../public/dog-about2.jpg'
import { Check, MapPin } from "lucide-react";
import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { Poppins } from 'next/font/google'

const PoppinsFont = Poppins({
    subsets: ["latin"],
    weight: "400",
});

export function About(){
    return(

        <section className={`bg-[#FDF6ec] py-16 ${PoppinsFont.className}`}>
            
            <div className="container px-4 mx-auto">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 item-center">

                    <div className="relative">
                        <div className="relative w-full h-[400px] rounded-3x1 overflow-hidden">
                            <Image
                                src={about1Img}
                                alt="Foto do cachorro"
                                fill
                                quality={100}
                                className="object-cover hover:scale-110 duration-300"
                                priority
                            />
                        </div>
                        
                        <div className="absolute w-40 h-40 right-4 -bottom-8 border-4 overflow-hidden border-white rounded-lg ">
                            <Image
                                src={about2Img}
                                alt="Foto do cachorro"
                                fill
                                quality={100}
                                className="object-cover hover:scale-110 duration-300"
                                priority
                            />
                        </div>

                    </div>

                    <div className="space-y-6 mt-10">
                        <h2 className="text-4xl font-bold">🐾 Sobre a FourFoots</h2>

                        <p>
                            Na FourFoots, acreditamos que todo pet merece amor, cuidado e momentos felizes. Somos um petshop criado por quem ama animais, para quem ama animais. Aqui, oferecemos não apenas produtos de qualidade, mas também carinho, atenção e compromisso com o bem-estar do seu melhor amigo.

                            Desde brinquedos e rações até acessórios e cuidados especiais, selecionamos cada item pensando no conforto e na saúde do seu pet. Nossa missão é tornar sua rotina mais prática e a vida do seu pet mais alegre.

                            Porque para nós, pet é família. 💙
                        </p>

                        <ul className="space-y-4">
                            <li className="flex items-center gap-2">
                                <Check className="text-[#1F2933]"/>
                                Aberto desde 2019
                            </li>
                            <li className="flex items-center gap-2">
                                <Check className="text-[#1F2933]"/>
                                Equipe especializada!
                            </li>
                            <li className="flex items-center gap-2">
                                <Check className="text-[#1F2933]"/>
                                Qualidade profissional!
                            </li>
                        </ul>

                        <div className="flex gap-2">
                            <a 
                            href="#"
                            className="bg-[#FFB862] text-black flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"    
                                > 
                                <WhatsappLogo className="w-5 h-5 text-black"/>
                                Contato via Whatsapp
                            </a>
                            <a 
                            href="#"
                            className="flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"    
                                > 
                                <MapPin className="w-5 h-5 text-black"/>
                                Endereço da loja
                            </a>
                        </div>

                    </div>

                </div>

            </div>

        </section>

    )
}