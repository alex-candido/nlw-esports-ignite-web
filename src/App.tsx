import { MagnifyingGlassPlus } from 'phosphor-react';
import logoImg from './assets/logo-nlw-esports.svg';
import './styles/main.css';

const gameImgs = [
  {
    name: "League of Legends", 
    img:"/game-1.png"
  }, 
  {
    name: "Dota 2", 
    img:"/game-2.png"
  },
  {
    name: "Counter Strike", 
    img:"/game-3.png"
  },
  {
    name: "Apex Legends", 
    img:"/game-4.png"
  },
  {
    name: "Fortnite", 
    img:"/game-5.png"
  },
  {
    name: "Word of Warcraft", 
    img:"/game-6.png"
  },
]

const App = () => {
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="" />

      <h1 className="text-6xl text-white font-black mt-20">Seu <span className="text-transparent bg-nlw-gradient bg-clip-text">duo</span> está aqui</h1>

      <div className="grid grid-cols-6 gap-6 mt-16">
        {gameImgs.map((game) => (
          <a href="" className="relative rounded-lg overflow-hidden">
            <img src={game.img} alt="" />

            <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
              <strong className="font-bold text-white block">{game.name}</strong>
              <span className="text-zinc-300 text-sm block">4 anúncios</span>
            </div>
          </a>
        ))}
      </div>

      <div className="pt-1 bg-nlw-gradient self-stretch rounded-lg mt-8 overflow-hidden">
        <div className="bg-[#2A2634] px-8 py-6 flex justify-between items-center">
          <div>
            <strong className="text-2xl text-white font-black block">Não encontrou seu duo?</strong>
            <span className="text-zinc-400 block">Publique um anúncio para encontrar novos players!</span>
          </div>
          
          <button className="py-3 px-4 bg-violet-500 hover:bg-violet-600 text-white rounded flex items-center gap-3">
            <MagnifyingGlassPlus size={24} />
            Publicar anúncio
          </button>
        </div>
      </div>
    </div>
  )
}

export default App