'use client'

import { useEffect, useRef, useState } from "react"

import  ButtonCustom  from "@/components/ui/custom/buttonCustom"
import { ArrowUpRight } from "@deemlol/next-icons"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"


gsap.registerPlugin(ScrollTrigger)

export default function HeroPageComponent() {

 const [currentIndex, setCurrentIndex] = useState(1)
  const [hasClickedd, setHasClicked] = useState(false)

  const [isLoading, setisLoading] = useState(true)
  const [loadedVideos, setLoadedVideos] = useState(0)

  const totalVideos = 4
  const nextVideoRef = useRef<HTMLVideoElement | null>(null)

  const handleVideoLoad = () => {
    setLoadedVideos((prev) => prev + 1)
  }

  const upcomingVideoIndex = (currentIndex % totalVideos) + 1

  const handleMiniVideoClick = () => {
    setHasClicked(true)

    setCurrentIndex(upcomingVideoIndex)
  }

  useEffect(() => {
    if (loadedVideos === totalVideos -1) {
      setisLoading(false)
    }
  }, [loadedVideos])

  useGSAP(() => {
    if(hasClickedd){
      gsap.set("#next-video", { visibility: "visible" })
      gsap.to("#next-video", {
        transformOrigin: "center center",
        scale: 1,
        width: "100%",
        height: "100%",
        duration: 1,
        ease: "power1.inOut",
        onStart: () => {
        nextVideoRef.current?.play()},
      })
       gsap.from("#current-video", {
          transformOrigin: "center center",
          scale: 0,
          duration: 1.5,
          ease: "power1.inOut",
        })
    }
  }, {dependencies: [currentIndex], revertOnUpdate: true})

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

  const getVideoSrc = (index: any) => `videos/hero-${index}.mp4`

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      {/* {isLoading && (
        <div>
          <div className=" flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50">
            <div className="three-body">
                <div className="three-body__dot" />
                <div className="three-body__dot" />
                <div className="three-body__dot" />
            </div>
          </div>
        </div>
      )} */}
      <div id="video-frame" className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75">
        <div>
          <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
            <div onClick={handleMiniVideoClick} className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100">
              <video 
                ref={nextVideoRef}
                src={getVideoSrc(upcomingVideoIndex) }
                loop
                muted
                id="current-video"
                className="size-64 origin-center scale-150 object-cover object-center"
                onLoadedData={handleVideoLoad}
              />
            </div>
          </div>
          <video
            ref={nextVideoRef}
            src={getVideoSrc(currentIndex)}
            loop
            muted
            id="next-video"
            className="absolute-center invisible z-20 size-64 object-cover object-center"
            onLoadedData={handleVideoLoad}
          />
          <video 
          src={getVideoSrc(currentIndex === totalVideos - 1 ? 1 : currentIndex)}
          autoPlay
          loop
          muted
          className="absolute left-0 top-0 size-full object-cover object-center"
          onLoadedData={handleVideoLoad}
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
