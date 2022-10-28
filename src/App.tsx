import { useEffect, useState } from 'react';
import logoImg from './assets/logo-nlw-esports.svg';
import CreateAdBanner from './components/CreateAdBanner';
import GameBanner from './components/GameBanner';

import { api } from './services/api';
import './styles/main.css';

interface GameProps {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  }
}

const App = () => {
  const [games, setgames] = useState<GameProps[]>([]);

  useEffect(() => {
    api.get('/games').then((response) => {
      setgames(response.data);
    })
  }, [])
  
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="" />

      <h1 className="text-6xl text-white font-black mt-20">Seu <span className="text-transparent bg-nlw-gradient bg-clip-text">duo</span> está aqui</h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        {games.map((game, id) => (
          <GameBanner 
            key={id} 
            bannerUrl={game.bannerUrl} 
            title={game.title} 
            adsCount={game._count.ads} 
          />
        ))}
      </div>
      
      <CreateAdBanner />
      
    </div>
  )
}

export default App