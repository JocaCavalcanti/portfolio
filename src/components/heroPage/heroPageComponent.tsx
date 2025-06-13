

'use client'

import { useEffect, useRef, useState } from "react"

import  ButtonCustom  from "@/components/ui/custom/buttonCustom"
import { ArrowUpRight } from "@deemlol/next-icons"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"



gsap.registerPlugin(ScrollTrigger)

export default function HeroPageComponent() {

  useGSAP(() => {

    gsap.set("#video-frame",{
     'clip-path': 'polygon(11% 0, 83% 0, 100% 80%, 0 97%)',
     borderRadius: '0 0 40% 10%'
    })

    gsap.from('#video-frame',{
      clipPath: 'polygon(0% 0, 100% 0%, 100% 100%, 0 100%)',
      borderRadius: '0 0 0 0',
      ease: 'power1.inOut',
      scrollTrigger: {
        trigger: '#video-frame',
        start: 'center center',
        end: 'bottom center',
        scrub: true,
      }
    })

  })


  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      <div id="video-frame" className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75">
        <div> 
          <img 
          src='/img/dark1.webp'
          className="absolute left-0 top-0 size-full object-cover object-center"
          />
          <h1 className=" text-blue-75 hero-heading absolute bottom-5 right-5 z-40 ">G<b>a</b>ming</h1>
          <div className="absolute left-0 top-0 z-40 size-full">
            <div className="mt-24 px-5 sm:px-10">
              <h1 className="special-font hero-heading text-blue-100">redefi<b>n</b>e</h1>
              <p className="mb-5 max-w-64 font-main text-blue-100">enter the metaGame Layer <br /> Unleash the play Economy</p>
              <ButtonCustom id="watch-trailer" title="Teste titulo" leftIcon={<ArrowUpRight size={16} color="#FFFFFF" />} containerClass="bg-yellow-300 flex-center gap-1" />
            </div>
          </div>
        </div>      
      </div>  
       <h1 className="text-black hero-heading absolute bottom-5 right-5">G<b>a</b>ming</h1>
    </div>
  )
} 