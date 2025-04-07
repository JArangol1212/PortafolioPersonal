import { socialNetworks } from "@/data"
import MotionTransition from "./transition-component"
import Link from "next/link"


export function Header() {

      return (
            <>

                  <MotionTransition position="bottom" className="absolute z-40 inline-block w-full md: top-0 px-20">
                        <header>

                              <div className="container justify-between max-w-6xl mx-auto md:flex ">
                                    <Link href="/">
                                          <div className="h-[100px] bg-transparent flex items-center justify-center">

                                          </div>


                                    </Link>
                                    <div className="flex items-center justify-center gap-7 ml-2">

                                          {socialNetworks.map(({ logo, src, id }) => (
                                                <Link key={id}
                                                      href={src}
                                                      target="_blank"
                                                      className="transition-all duration hover:text-red-900 cursor-not-allowed"
                                                >
                                                      {logo}
                                                </Link>
                                          ))}

                                    </div>


                              </div>

                        </header>
                  </MotionTransition>

            </>
      )
}