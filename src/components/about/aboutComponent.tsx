import BentoCard from '@/components/bentoCard/bentoCardComponent'


export default function AboutComponent() {
    return (
        <section className="bg-black pb-52">
          <div className="container mx-auto px-3 md:px-10">
            <div className="px-5 py-32">
              <p className="font-main text-lg text-blue-50">
                Lorem Title
              </p>
            <p className="font-main max-w-md text-lg text-blue-50 opacity-50">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt delectus inventore eius doloremque perferendis fuga error! Omnis, fugit. Voluptatum vitae modi eligendi magni doloribus commodi ducimus harum non sapiente sit!
            </p>
            </div>
          
            <div className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
              <BentoCard 
                src="videos/feature-1.mp4"
                title={<>radi<b>O</b></>}
                description="lorem"
              />
            </div>
          </div>
        </section>
    )
}