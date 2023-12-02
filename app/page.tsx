import { fetchAnimeList } from "./server actions/actions"
import Image from 'next/image'
import bg from '@/public/bg.jpg'
import LoadMore from "./LoadMore"

const Home = async () => {

try {
  const data = await fetchAnimeList(1)
  
    return (
      <div>
        <div className="h-80 bg-zinc-900 grid place-content-center relative">
         <Image src={bg} fill alt='bg' className="object-cover opacity-20" placeholder="blur" draggable={false} />
         <h1 className="text-5xl font-bold px-8 relative md:text-center selection:bg-none">Discover the Marvels of <br /> <span className="text-red-600">Anime</span> realms</h1>
        </div>
        <div className="w-[min(1300px,100%-4rem)] mx-auto">
          <h2 className="text-3xl font-bold my-10">Explore Anime</h2>
          <div className="flex gap-10 justify-center flex-wrap">
              {data}
          </div>
          <LoadMore />
        </div>
      </div>
    )
} catch (err: any) {
  return (
    <div>
       <div className="h-80 bg-zinc-900 grid place-content-center relative">
         <Image src={bg} fill alt='bg' className="object-cover opacity-20" placeholder="blur" draggable={false} />
         <h1 className="text-5xl font-bold px-8 relative">Dive deep into <span className="text-red-600">Anime</span> realm</h1>
        </div>
        <h2 className="mt-16 text-center">{err.message}</h2>
    </div>
  )}}

export default Home
