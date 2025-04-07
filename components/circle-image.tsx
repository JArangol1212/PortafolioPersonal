"use Client"

import Image from "next/image"

const CircleImage =()=>{

      return (

            <div className="bottom-0 right-0 hidden md:inline-block md:absolute">
              <Image src="/444.png" width={200} height={200} alt="Circle" className="w-full h-full"/>
            </div>
      )
}

export default CircleImage