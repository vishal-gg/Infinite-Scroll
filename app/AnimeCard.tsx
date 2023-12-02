import { AnimeTypes } from "./interfaces";
import Image from "next/image";
import { CiStar } from "react-icons/ci";
import { RiMovieLine } from "react-icons/ri";
import { MotionElement } from "./MotionElement";

interface propsType {
  anime: AnimeTypes;
  index: number;
}

const variants = {
  hidden: { opacity: 0, scale: .8 },
  show: { opacity: 1, scale: 1 }
};

const AnimeCard: React.FC<propsType> = ({ anime, index }) => {
  return (
    <MotionElement
      variants={variants}
      initial="hidden"
      whileInView="show"
      transition={{delay: index * 0.03, ease: 'easeInOut' }}
      viewport={{once: true, amount: 0}}
    >
      <div className="w-60">
        <a
          className="hover:opacity-80 transition-opacity"
          href={`https://shikimori.one${anime.url}`}
          target="_blank"
        >
          <div
            className="w-full relative rounded-xl overflow-hidden bg-zinc-900"
            style={{ aspectRatio: 1 / 1.45 }}
          >
            <Image
              src={`https://shikimori.one${anime.image.original}`}
              alt={anime.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </a>
        <div className="font-semibold">
          <div className="flex justify-between items-center mt-1">
            <span className="text-lg line-clamp-1">{anime.name}</span>
            <span className="ml-3 capitalize text-sm px-1 bg-red-600 rounded-md">
              {anime.kind}
            </span>
          </div>
          <div className="text-sm flex gap-3">
            <span className="flex items-center">
              <RiMovieLine className="inline-block text-lg text-yellow-400 mr-1" />
              {anime.episodes}
            </span>
            <span className="flex items-center">
              <CiStar className="inline-block text-xl text-yellow-400 mr-1" />
              {anime.score}
            </span>
          </div>
        </div>
      </div>
    </MotionElement>
  )
};

export default AnimeCard;
