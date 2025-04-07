import CoverParticles from "@/components/Cover-Particles";
import { Introduccion } from "@/components/introduccion";
import { TransitionPage } from "@/components/transition-page";



export default function Home() {
  return (
   
    <main>
      <TransitionPage />
      <div  className="flex min-h-[100vh] h-full bg-no-repeat bg-neutral-950 bg-cover bg-center relative">
        <div className="absolute top-0 left-0 right-0 bottom-0 z-10 bg-gradient-to-br from-[#fff] to-[#000] opacity-50"></div> 
   
        <CoverParticles/>
        <Introduccion/>

      </div>
    </main>
  );
}
