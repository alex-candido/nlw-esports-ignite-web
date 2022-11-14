import { Link } from "react-router-dom";

export interface GameBannerProps {
  gameId: string;
  bannerUrl: string;
  title: string;
  adsCount: number;
}


const GameBanner = ({ gameId, bannerUrl, title, adsCount}: GameBannerProps) => {
  function handleChange(){

  }

  return (
    <Link
    className="relative rounded-lg overflow-hidden"
    to={`/game/${gameId}`}
    onClick={() => handleChange()}
    >
      <img src={bannerUrl} alt={title} />

      <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
        <strong className="font-bold text-white block">{title}</strong>
        <span className="text-zinc-300 text-sm block">{adsCount} anúncio(s)</span>
      </div>

    </Link>
  )
}

export default GameBanner