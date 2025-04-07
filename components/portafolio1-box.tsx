import { Portafolio } from "@/data"
import Image from "next/image"

interface PortafolioArangoProps{

      data: {
            id: number,
            title: string,
            image: string,
            urlGithub: string,
            urlDemo: string
      }
}



const PortafolioBox1 =(props:PortafolioArangoProps) =>{

      const {data} = props

      const {title, image} = data

      return (

            <div className="p-6 border border-teal-50 rounded-xl">
            <h3 className="mb-4 text-xl">
                  {title}
            </h3>
            <div className="w-[800px] h-[150px]">
            <Image src={image} alt="Image product" width={800} height={800}
                  className="w-full md:w-[200px] rouded-2xl h-auto" />

            </div>


            <h1 className="text-center font-semibold text-lg mt-4"> Tecnologias </h1>
            <div className="flex flex-row gap-4 ml-4">
                  {Portafolio.map((tecno) => (
                        <div key={tecno.id} className="flex items-center">
                              <Image
                                    src={tecno.imageUrl}
                                    alt="tecnologia"
                                    width={100}
                                    height={100}
                                    className="bg-no-repeat"
                              />
                        </div>
                  ))}
            </div>
      </div>
)
}

export default PortafolioBox1
      
