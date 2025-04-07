import AvatarService from "@/components/avatar-service"
import CircleImage from "@/components/circle-image"
import SliderService from "@/components/slider-service"
import { TransitionPage } from "@/components/transition-page"



const ServicesPage = () => {

      return (
            <>
                  <TransitionPage />
                  <CircleImage/>
                  <AvatarService />
                  <div className="grid items-center justify-center h-screen max-w-5xl
                                   gap-6 mx-auto md:grid-cols-2 md:px-20">
                        <div className="max-w-[400px] mt-10">


                              <h1 className="text-2xl leading-tight text-center  md:text-6xl md:mb-5 -ml-10">Mis <span className="font-bold text-blue-800 text-center"> servicios.</span></h1>
                              <p className="mb-3 text-xl text-gray-260">Ofrezco servicios de desarrollo web frontend y backend utilizando tecnologías modernas como TypeScript, JavaScript, Next.js, NestJS y PostgreSQL. Me especializo en la creación de sitios web y aplicaciones web escalables, rápidas y visualmente atractivas. Diseño interfaces de usuario intuitivas y responsivas que no solo reflejan la identidad de marca de mis clientes, sino que también ofrecen una experiencia de usuario fluida y optimizada para alto rendimiento. Además, desarrollo arquitecturas sólidas en el backend que garantizan seguridad, eficiencia y escalabilidad.</p>
                              <button className="px-3 py-2 rounded-lg border border-blue-800 hover:shadow-xl hover:shadow-white">
                                    Contacta conmigo
                              </button>
                        </div>
                        {/*  SLIDER*/}

                        <div>
                              <SliderService />
                        </div>
                  </div>
            </>
      )
}

export default ServicesPage