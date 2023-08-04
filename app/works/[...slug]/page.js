import Image from 'next/image'
import Hero from '@/components/Hero';
import BigSentence from '@/components/BigSentence';
import {
  getHero,

} from "../sanity/sanity-util";
export default async function Home() {
  const heroData = await getHero();
  return (
    <main className="">
   <Hero  heroData={heroData}/>
   <div className='z-10 padding-top-screen relative bg-white'>
   <BigSentence  heroData={heroData}/>
   </div>
  

    </main>
  )
}
