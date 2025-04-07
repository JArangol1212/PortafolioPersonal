"use client"

import Image from "next/image"
import { TypeAnimation } from 'react-type-animation';


export  function Introduccion(){

      return (
            <div className="z-10 w-full bg-transparent -m-28">
                  <div className="z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2 bg-transparent">
                   <Image src="/home5.png" 
                   priority 
                   width={1000}
                   height={1000}
                   alt="avatar"
                   className="-ml-80">

                   </Image>
                        <div className="flex flex-col justify-center max-w-md mt-20">
                         
                            <h1 className="-ml-80 mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10 mt-0">SOY PROGRAMADOR, <br/>
                            <TypeAnimation
                            sequence={[
                              'Puedo Programarlo',
                              2000,
                              'Puedo Optimizarlo',
                              2000,
                              'Puedo Implementar',
                              2000,
                              'Puedo Desarrollar',
                              2000,
                              

                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="font-bold text-black"
                            >

                            </TypeAnimation>
                            </h1>

                         
                        </div>

                   
                  </div>

            </div>
      )
}