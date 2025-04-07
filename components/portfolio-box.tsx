import { SquareArrowOutUpRight } from "lucide-react"
import Image from "next/image"



interface PortfolioBoxProps {
      data: {
            id: number,
            
            image: string
            title: string
            urlGithub: string,
            urlDemo: string

      }
   
}

const PortfolioBox = (props: PortfolioBoxProps) => {
      const { data } = props
      const { title, image, urlGithub, urlDemo } = data

      return (

            <div className="p-6 border border-teal-50 rounded-xl">
                  <h3 className="mb-4 text-xl">
                        {title}
                  </h3> 
                  <div className="w-[900px] h-[150px] hover:shadow-xl hover:shadow-black">
                        <Image src={image} alt="Image product" width={800} height={800}
                              className="w-[250px] md:w-[350px] rouded-2xl h-auto" />

                  </div>



                  <div className="flex flex-row gap-4 ml-4">
                        <a href={urlGithub}
                                  
                              className="px-3 py-4 my-5 transition-all border-2 cursor-pointer text-md w-[250px] text-white border-secondary rounded-xl hover:shadow-xl hover:shadow-secondary ml-52 mt-16" >
                              GitHub
                        </a>
                        <a href={urlDemo} target="_blank" rel="noopener noreferrer">
                              <SquareArrowOutUpRight size={48} color="#3498db" className="-ml-48 -mt-20" /> 
                              
                        </a>



                  </div>
            </div>
      )
}

export default PortfolioBox