import logoImg from './assets/logo-nlw-esports.svg';
import './styles/main.css';

const gameImgs = ["/game-1.png", "/game-2.png", "/game-3.png", "/game-4.png", "/game-5.png", "/game-6.png"]

const App = () => {
  return (
    <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
      <img src={logoImg} alt="" />

      <h1 className="text-6xl text-white font-black mt-20">Seu <span className="text-transparent bg-nlw-gradient bg-clip-text">duo</span> está aqui</h1>

      <div className='grid grid-cols-6 gap-6 mt-16'>
      {gameImgs.map((gameImg) => (
        <a href="">
          <img src={gameImg} alt="" />
        </a>
      ))}
      </div>
    </div>
  )
}

export default App