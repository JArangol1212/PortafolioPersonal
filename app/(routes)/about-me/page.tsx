
import Avatar from "@/components/avatar";
import ContainerPage from "@/components/container";
import { TransitionPage } from "@/components/transition-page";


export default function Page() {
  return (

    <>

      <TransitionPage />
      <ContainerPage>
        <h1 className="text-2xl leading-tight
         text-center md:text-left md:text-5xl -mt-36  font-bold -ml-12 ">


          SOBRE  <span className="text-black font-bold"> MI</span>

        </h1>
        <Avatar />
        <section className="text-center font-mono px-4 py-8 max-w-3xl mx-auto">
          <h1 className="text-2xl font-bold mb-4 hover:shadow-lg hover:shadow-white bg-transparent rounded-lg ">
            ARANGO LLAMOCCA JOSE NELSON
          </h1>
          <p className="mb-3 text-xl text-gray-260 leading-6">
            Soy un apasionado desarrollador frontend y backend, con un enfoque en crear experiencias digitales únicas y atractivas.
            Mi combinación de habilidades técnicas y creativas me permite abordar los proyectos desde una perspectiva integral,
            asegurando resultados que no solo funcionan bien, sino que también lucen excepcionales.
          </p>
        </section>

        <div className="flex items-center justify-center gap-3 md:justify-start md:gap-4 -ml-20">
          <a
            href="https://drive.google.com/file/d/11E_SEythMhmm0Z9zLgBrG5WZepxgjXaH/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-4 my-5 transition-all border-2 cursor-pointer text-md w-56 text-blue-600 border-white rounded-xl hover:shadow-xl hover:shadow-white ml-72 mt-16 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-download"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            Descargar CV
          </a>

           
          <a href="https://api.whatsapp.com/send?phone=972544433&text=Hola,%20soy%20Arango%20Llamocca%20Jose%20Nelson,%20desarrollador%20de%20software.%20He%20visitado%20mi%20portafolio%20y%20si%20desea%20hablar%20sobre%20posibles%20oportunidades,%20estaré%20encantado%20de%20conversar.%20¡Espero%20su%20mensaje!" target="_blank"
             
            className="px-3 py-4 my-5 transition-all border-2 cursor-pointer text-md w-fit text-white border-green-600 rounded-xl hover:shadow-xl hover:shadow-green-500 ml-52 mt-16" >
            Contácme en WhatsApp
          </a>
        </div>
      </ContainerPage>

    </>
  )
}