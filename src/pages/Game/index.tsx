import { CaretLeft } from "phosphor-react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AdsBanner from "../../components/AdsCard";
import Heading from "../../components/Heading";
import { api } from "../../services/api";
import { GameProps } from "../Home";

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
  const navigate = useNavigate();
  const [ads, setAds] = useState<DuoCardProps[]>([]);
  const [games, setGames] = useState<GameProps[]>([])
  const { id } = useParams();

  useEffect(() => {
    api.get(`/games/${id}/ads`).then((response) => {
      setAds(response.data);
    })
  }, [])

  useEffect(() => {
    api.get('/games').then((response) => {
      setGames(response.data);
    })
  }, [])
  
  const result = games.find((item) => item.id === id)
  console.log(result)

  function goBack() {
    navigate('/');
  }

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <div className="w-full items-center justify-center mb-5" onClick={goBack}>
        <button type="submit" className="flex flex-row h-12 py-3 rounded-lg items-center justify-center font-semibold;">
        <CaretLeft color={'#FFFFFF'} size={20} />
          <span className='text-white ml-2 leading-6 hover:underline'>Voltar</span>
        </button>
      </div>
      
      <Heading 
        title={result?.title}
        subtitle="Conecte-se e comece a jogar!"
      />

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