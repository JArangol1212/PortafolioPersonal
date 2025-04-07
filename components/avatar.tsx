import MotionTransition from "./transition-component"
import Image from "next/image"


const Avatar =()=>{

      return (

            <MotionTransition
            position="top"
            className="absolute  -left-16 transform -translate-x-1/2 aspect-[3/2] mt-5">
                  <Image
                  src="/Arango1.png"
                  width={250}
                  height={250}
                  className="w-full h-full ml-10 float-none"
                  alt="Avatar"
                  />
            </MotionTransition>
      )

}

export default Avatar
