import * as Dialog from '@radix-ui/react-dialog';
import { GameController } from 'phosphor-react';
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
      
      <Dialog.Root>
        <CreateAdBanner />

        <Dialog.Portal>
          <Dialog.Overlay className='bg-black/60 inset-0 fixed'>

            <Dialog.Content className='fixed bg-[#2A2634] py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[480px] shadow-black/25'>
              <Dialog.Title className='text-3xl font-black'>Publique um anúncio</Dialog.Title>

                <form className='mt-8 flex flex-col gap-4'>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="game" className='font-semibold' >Qual o game?</label>
                    <input 
                      id="game" 
                      placeholder='Selecione o game que deseja jogar'
                      className='bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500'
                      />
                  </div>

                  <div>
                    <label htmlFor="name">Seu nome (ou nickname)</label>
                    <input id="name" placeholder='Como te chamam dentro do game?'/>
                  </div>

                  <div>
                    <div>
                      <label htmlFor="yearsPlaying">Joga há quantos anos?</label>
                      <input id="yearsPlaying" type='number' placeholder='Tudo bem ser ZERO'/>
                    </div>
                    <div>
                      <label htmlFor="discord">Qual o seu Discord?</label>
                      <input id="discord" type='text' placeholder='alex_cndd#4689'/>
                    </div>
                  </div>

                  <div>
                    <div>
                      <label htmlFor="weekDays">Quando costuma jogar?</label>
                    </div>
                    <div>
                      <label htmlFor="hourStart">Qual horário do dia?</label>
                      <div>
                        <input id="hourStart" type='time' placeholder='De'/>
                        <input id="hourEnd" type='time' placeholder='Até'/>
                      </div>
                    </div>
                  </div>

                  <div>
                    <input type="checkbox" />
                    Costumo me conectar ao chat de voz
                  </div>

                  <footer>
                    <button>Cancelar</button>
                    <button type='submit'>
                      <GameController />
                      Encontrar duo
                    </button>
                  </footer>
                </form>
                
            </Dialog.Content>
          </Dialog.Overlay>
        </Dialog.Portal>
      </Dialog.Root>
      
    </div>
  )
}

export default App