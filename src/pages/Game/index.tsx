import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import logoImg from '../../assets/logo-nlw-esports.svg';
import AdsBanner from "../../components/AdsCard";
import { api } from "../../services/api";

export interface DuoCardProps {
  id: string;
  hourEnd: string;
  hourStart: string;
  name: string;
  useVoiceChannel: boolean;
  weekDays: string[];
  yearsPlaying: number;
}

const Game = () => {
  const [ads, setAds] = useState<DuoCardProps[]>([]);
  const { id } = useParams();


  useEffect(() => {
    api.get(`/games/${id}/ads`).then((response) => {
      setAds(response.data);
    })
  }, [])

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="" />

      <h1 className="text-6xl text-white font-black mt-20">Seu <span className="text-transparent bg-nlw-gradient bg-clip-text">duo</span> está aqui</h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        {ads.map((ads, id) => (
          <AdsBanner
            key={id} 
            props={ads}
          />
        ))}
      </div>
      
    </div>
  )
}

export default Game