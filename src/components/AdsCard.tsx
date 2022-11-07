import { GameController } from "phosphor-react";
import { DuoCardProps } from "../pages/Game";
import AdsInfo from "./AdsInfo";

interface Props {
  props: DuoCardProps;
}

const AdsCard = ({ props }: Props) => {
  return (
    <div className="bg-[#2A2634] relative rounded-lg overflow-hidden h-full w-52 p-5 items-stretch">
      <AdsInfo 
        label="Nome"
        value={props.name}
      />

      <AdsInfo 
        label="Tempo de jogo"
        value={`${props.yearsPlaying} anos`}
      />

      <AdsInfo 
        label="Disponibilidade"
        value={`${props.weekDays.length} dias \u2022 ${props.hourStart} - ${props.hourEnd}`}
      />

      <AdsInfo
        label="Chamada de áudio"
        value={props.useVoiceChannel ? 'Sim' : 'Não'}
        colorValue={props.useVoiceChannel ? '#34D399' : '#F87171'}
      />

      <button type="submit" className='flex flex-row w-full h-12 rounded-lg bg-[#8B5CF6] items-center justify-center font-semibold hover:bg-violet-600'>
        <GameController
          color={'#FFFFFF'}
          size={22}
        />
        <span className='text-white ml-2 '>Conectar</span>
      </button>

    </div>
  )
}

export default AdsCard