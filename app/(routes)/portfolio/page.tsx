import AvatarPortfolio from "@/components/avatar-portfolio"

import ContainerPage from "@/components/container"

import PortfolioBox from "@/components/portfolio-box"
import { TransitionPage } from "@/components/transition-page"
import { dataPortfolio } from "@/data"




const PorfolioPage = () => {

  return (
    <>
    <h1 className="text-2xl leading-tight -ml-16  md:text-4xl md:mb-5 text-center mt-20">
    Mis Últimos <span className="text-blue-700 font-bold">Trabajos Realizados</span>
  </h1>
    <ContainerPage>
      <TransitionPage />
   
      <AvatarPortfolio />
     

      <div className="flex flex-col justify-center h-full ml-20">

        <div className="relative z-10 grid   gap-6 mx-auto  sm:grid-cols-2 md:grid-cols-4 w-[1680px] h-[250px] -mt-40 ml-9 ">
          {dataPortfolio.map((data) => (
           <PortfolioBox 
           key={data.id} 
           data={data} 
       
         />
          ))}

        </div>
      

      </div>

    </ContainerPage>
    </>
  )

}

export default PorfolioPage