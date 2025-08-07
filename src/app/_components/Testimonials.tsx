"use client"

import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight, Scissors, Syringe, CarTaxiFront, Hotel, Clock } from "lucide-react"
import { WhatsappLogo } from '@phosphor-icons/react'
import { Poppins } from 'next/font/google'
import Image from 'next/image'
import tutor1 from '../../../public/tutor1.jpg'
import tutor2 from '../../../public/tutor2.jpg'

const PoppinsFont = Poppins({
    subsets: ["latin"],
    weight: "400",
});


const testimonials = [
  {
    content:
      "A FourFoots é simplesmente incrível! Sempre encontro tudo que a Mel precisa, desde ração de qualidade até brinquedos que ela ama. O atendimento é super atencioso e dá pra sentir que eles realmente se importam com nossos pets.",
    author: "Fernanda Silva",
    role: "Tutora da Pituca (Viralata)",
    image: tutor2,
  },
  {
    content:
      "O Charlie é super exigente com petiscos (quase mais do que eu com café), mas na FourFoots encontramos várias opções que ele adora! E o melhor: sempre chega rápido e muito bem embalado.",
    author: "Paulo",
    role: "Tutor do Charlie (Shi-Tzu)",
    image: tutor1,
  },
  {
    content: "Além de produtos de ótima qualidade, adoro como a equipe da FourFoots sempre dá dicas úteis de cuidados com o Max. É muito mais do que uma loja, é uma parceira na vida do meu cachorr",
    author: "Felipe Almeida",
    role: "Tutor do Max",
    image: tutor1,
  },
]

export function Testimonials() {

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true
  })


  function scrollPrev() {
    emblaApi?.scrollPrev();
  }

  function scrollNext() {
    emblaApi?.scrollNext();
  }

  return (
    <section className={`bg-[#FF6B6B] py-16 ${PoppinsFont.className}`}>
      <div className="container mx-auto px-4">

        <h2 className="text-4xl font-bold text-center mb-12">Depoimentos dos nossos clientes</h2>

        <div className="relative max-w-4xl mx-auto">

          <div className='overflow-hidden' ref={emblaRef}>
            <div className='flex'>
              {testimonials.map((item, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 px-3">
                  <article className="bg-[#7B68EE] font-bold text-[#1F2933] rounded-2xl p-6 space-y-4 h-full flex flex-col">
                    <div className='flex flex-col items-center text-center space-y-4'>
                      <div className='relative w-24 h-24'>
                        <Image
                          src={item.image}
                          alt={item.author}
                          fill
                          sizes='150px'
                          className='object-cover rounded-full'
                        />
                      </div>

                      <p className='text-[#1F2933]'>{item.content}</p>

                      <div>
                        <p className='font-bold'>{item.author}</p>
                        <p className='text-sm text-[#1F2933]'>{item.role}</p>
                      </div>

                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>

          <button
            className='bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-3 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10'
            onClick={scrollPrev}
          >
            <ChevronLeft className='w-6 h-6 text-gray-600' />
          </button>

          <button
            className='bg-white flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute -right-6 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10'
            onClick={scrollNext}
          >
            <ChevronRight className='w-6 h-6 text-gray-600' />
          </button>

        </div>

      </div>
    </section>
  )
}