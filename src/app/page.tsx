import HeroPageComponent from '@/components/heroPage/heroPageComponent'
import AboutComponent from '@/components/about/aboutComponent'


export default function HomePage() {
  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden'>  
     <HeroPageComponent />
     <AboutComponent />
    </main>
  )
}
