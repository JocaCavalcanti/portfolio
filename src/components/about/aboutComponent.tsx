import BentoCard from "@/components/bentoCard/bentoCardComponent"
import { ArrowUpRight } from "@deemlol/next-icons"

export default function AboutComponent() {
  return (
    <section className="bg-black pb-52">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className="font-main text-lg text-blue-50">
            Lorem Title
          </p>
          <p className="font-main max-w-md text-lg text-blue-50 opacity-50">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt delectus inventore
            eius doloremque perferendis fuga error! Omnis, fugit. Voluptatum vitae modi eligendi
            magni doloribus commodi ducimus harum non sapiente sit!
          </p>
        </div> 
        <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7">
          <div className="relative col-span-2 overflow-hidden rounded-md transition-transform duration-300 ease-out bento-border-light row-span-1 md:col-span-1 md:row-span-2">
            <BentoCard
              src="videos/feature-2.mp4"
              title={<>radi<b>O</b></>}
              description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt delectus inventore eius doloremque perferendis fuga error! Omnis, fugit. Voluptatum vitae modi eligendi magni doloribus commodi ducimus harum non sapiente sit!"
            />
          </div>
          <div className="relative col-span-2 overflow-hidden rounded-md transition-transform duration-300 ease-out bento-border-light row-span-1 ml-32 md:col-span-1 md:ml-0">
            <BentoCard
              src="videos/feature-3.mp4"
              title={<>radi<b>O</b></>}
            />
          </div>
          <div className="relative col-span-2 overflow-hidden rounded-md transition-transform duration-300 ease-out bento-border-light mr-20 md:col-span-1 md:mr-0">
            <BentoCard
              src="videos/feature-4.mp4"
              title={<>radi<b>O</b></>}
            />
          </div>
          <div className="relative col-span-1 row-span-1 overflow-hidden rounded-md transition-transform duration-300 ease-out">
              <div className="flex size-full flex-col justify-between bg-violet-300 p-5">
                  <h1 className="uppercase md:text-6xl text-3xl font-black max-w-64 text-black">More comming soon</h1>
                  <ArrowUpRight size={24} className="m-5 md:size-44 self-end"/>
              </div>
          </div>
          <div className="relative col-span-1 row-span-1 overflow-hidden rounded-md transition-transform duration-300 ease-out">
            <video src={"videos/feature-5.mp4"}
            loop
            muted
            autoPlay
            className="size-full object-cover object-center"/>
          </div>    
        </div>
         <div className="bento-border-light relative mt-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
          <BentoCard
            src="videos/feature-1.mp4"
            title={<>radi<b>O</b></>}
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt delectus inventore eius doloremque perferendis fuga error! Omnis, fugit. Voluptatum vitae modi eligendi magni doloribus commodi ducimus harum non sapiente sit!"
          />
        </div>
      </div>
    </section>
  )
}