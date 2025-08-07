import { WhatsappLogoIcon } from '@phosphor-icons/react/dist/ssr'
import dogHeaderImg from '../../../public/Dog paw-rafiki.svg'
import Image from 'next/image'
import { Poppins } from 'next/font/google'

const PoppinsFont = Poppins({
    subsets: ["latin"],
    weight: "400",
});

export function Hero() {
    return(
        <section className={`bg-[#FFB862] text-white relative overflow-hidden ${PoppinsFont.className}`}>
            
            <div>
                <Image
                    src={dogHeaderImg}
                    alt='Foto do cachorro'
                    fill
                    sizes="100vw"
                    priority
                    className='object-cover opacity-60 lg:hidden'
                />
                <div className='absolute inset-0 bg-black opacity-40 md:hidden'></div>
            </div>

            <div className="container mx-auto pt-16 pb-16 md:pb-0 px-4 relative">

                <article className='grid grid-cols-1 lg:grid-cols-2 gap-8'>

                    <div className='space-y-6'>

                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-10">O seu animalzinho mereçe todo cuidado, carinho e atenção especial.</h1>
                        <p className="lg:text-lg">E nós da Fourfoots, oferecemos os melhores serviços para garantir o bem-estar e a felicidade do seu amiguinho de quatro patas</p>

                        <div>

                            <a href="#" 
                                className="bg-green-500 px-5 py-2 rounded-md font-semibold 
                                flex items-center justify-center w-fit gap-2">
                                <WhatsappLogoIcon className='w-S h-5'/>
                                Contato via WhatsApp!
                            </a>

                        </div>

                        <div className="mt-8">

                            <p className="text-sm mb-4">
                                <b className="bg-black text-white px-2 py-1 rounded-md">5%</b> de desconto na primeira compra!
                            </p>

                        </div>

                    </div>

                    <div className="hidden md:block h-full relative">

                        <Image
                            src={dogHeaderImg}
                            alt='Foto Dog Header'
                            className="object-contain"
                            fill
                            sizes="(max-width: 768px) 0vw, 50vw"
                            quality={100}
                            priority
                        />

                    </div>

                </article>
            </div>

        </section>
    )
}