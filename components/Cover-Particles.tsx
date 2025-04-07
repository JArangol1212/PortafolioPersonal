"use client"

import {Particles,initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useState } from "react";

const CoverParticles = () => {
    const [init, setInit] = useState(false);
    
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    return (
        init && 
        <div className="w-full h-screen bg-gradient-to-br">
            <Particles
                id="tsparticles"
                options={{
                    fullScreen: {
                        enable: true
                    },
                    fpsLimit: 120,
                    particles: {
                        color: {
                            value: "#00c0c",
                        },
                        number: {
                            value: 200,
                            density: {
                                enable: true
                            }
                        },
                        shape: {
                            type: "char",
                          
                        },
                        opacity: {
                            value: 0.5
                        },
                        size: {
                            value: { min: 20, max: 30 }
                        },
                        move: {
                            enable: true,
                            speed: 3,
                            direction: "none",
                            random: false,
                            straight: false,
                            outModes: {
                                default: "bounce"
                            },
                            attract: {
                                enable: true,
                                 
                            }
                        },
                        rotate: {
                            value: {
                                min: 0,
                                max: 360
                            },
                            direction: "random",
                            animation: {
                                enable: true,
                                speed: 10
                            }
                        },
                        links: {
                            enable: true,
                            distance: 150,
                            color: "#fff",
                            opacity: 0.6,
                            width: 1
                        },
                    },
                    interactivity: {
                        events: {
                            onHover: {
                                enable: true,
                                mode: "grab"
                            },
                            onClick: {
                                enable: true,
                                mode: "push"
                            },
                        },
                        modes: {
                            grab: {
                                distance: 200,
                                links: {
                                    opacity: 0.8
                                }
                            },
                            push: {
                                quantity: 6
                            }
                        }
                    },
                    detectRetina: true,
                    background: {
                        color: "transparent"
                    }
                }}
            />
        </div>
    );
};

export default CoverParticles;
