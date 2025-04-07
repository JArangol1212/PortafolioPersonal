
"use client"

import ContainerPage from "@/components/container"
import Skill from "@/components/skills"
import { dataSkill } from "@/data"



const SkillPage = () => {

      const frontendSkills = dataSkill.filter((data) => data.category === "Frontend")
      const backendSkills = dataSkill.filter((data) => data.category === "Backend")
      const databaseSkills = dataSkill.filter((data) => data.category === "Base de Datos")
      const otrosSkills = dataSkill.filter((data) => data.category==="otros")

      return (


            <ContainerPage>
                  
                  <h1 className=" leading-tight text-center md:text-left md:text-6xl md:mb-5 text-2xl font-mono size-4xl font-bold text-blue-600  mb-5"> 
                                    HABILIDADES
                                    <span className="font-bold text-black text-center size-4-2xl font-mono">TÉCNICAS</span>

                              </h1>
                   
                  <div className="w-[1200px] h-full bg-black text-white px-4 py-8 rounded-xl hover:shadow-2xl hover:shadow-white -ml-12 ">
                        
                        <div className="w-full p-2 ">

                            

                              {/* Frontend */}
                              <section >
                                    <h2 className="text-4xl font-bold text-center mt-6 mb-4 relative text-blue-600 animate-shadow">Frontend</h2>
                                    <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 mx-auto gap-2 aspect-3/2 hover:shadow-xl hover:shadow-amber-400 bg-transparent">
                                          
                                          {frontendSkills.map((data) => (
                                                <Skill key={data.id} data={data} />
                                          ))}
                                    </div>
                              </section>

                              {/* Backend */}
                              <section className="w-full">
                                    <h2 className="text-4xl font-bold text-center mt-6 mb-4 relative text-blue-600 animate-shadow">Backend</h2>
                                    <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mx-auto hover:shadow-xl hover:shadow-blue-700">
                                          {backendSkills.map((data) => (
                                                <Skill key={data.id} data={data} />
                                          ))}
                                    </div>

                              </section>
                              {/* Base de Datos */}
                              <section>
                                    <h2 className="text-4xl font-bold text-center mt-6 mb-4 relative text-blue-600 animate-shadow">Base de Datos</h2>
                                    <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mx-auto hover:shadow-2xl hover:shadow-green-600">
                                          {databaseSkills.map((data) => (
                                                <Skill key={data.id} data={data} />
                                          ))}
                                    </div>
                              </section>
                                {/* Otros */}
                                <section>
                                    <h2 className="text-4xl font-bold text-center mt-6 mb-4 relative text-blue-600 animate-shadow">Otros</h2>
                                    <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mx-auto hover:shadow-2xl hover:shadow-red-700">
                                          {otrosSkills.map((data) => (
                                                <Skill key={data.id} data={data} />
                                          ))}
                                    </div>
                              </section>

                        </div>
                  </div>



            </ContainerPage>


      )
}

export default SkillPage