import { Link } from "react-router-dom";

export interface GameBannerProps {
  gameId: string;
  bannerUrl: string;
  title: string;
  adsCount: number;
}

const GameBanner = (props: GameBannerProps) => {

  return (
    <Link
    className="relative rounded-lg overflow-hidden"
    to={`/game/${props.gameId}`}
    >
      <img src={props.bannerUrl} alt={props.title} />

      <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
        <strong className="font-bold text-white block">{props.title}</strong>
        <span className="text-zinc-300 text-sm block">{props.adsCount} anúncio(s)</span>
      </div>
    </Link>
  )
}

export default GameBanner