
import Image from "next/image"

interface SillkPageProps {

      data: {
            name: string,
            imageUrl: string,
            category: string,
         
      }
}

const Skill = (props: SillkPageProps) => {

      const { data } = props
      const { name, imageUrl } = data

      return (

            <div className="group relative w-[300px] h-[300px] p-2 rounded-xl  bg-from-white flex-col items-center hover:scale-105 transition-all duration-300  shadow-gray-900 ">
               

                  <h3 className="text-white text-lg font-medium text-center relative z-10 gap-1">
                        {name}
                  </h3>
                  <div className="relative w-40 h-40 overflow-hidden rounded-xl group-hover:scale-110 transition-transform duration-300 hover:shadow-xl hover:shadow-blue-50 ml-10">
                        <Image 
                        src={imageUrl}
                        alt={`${name} 'skill'`}
                        width={200}
                        height={200}
                        className="object-contain w-full h-full transition-all duration-300"
                        >
                        

                        </Image>


                  </div>
            </div>
      )
}

export default Skill