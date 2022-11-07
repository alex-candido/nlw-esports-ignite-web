import { DuoCardProps } from "../pages/Game";

interface Props {
  props: DuoCardProps;
}

const AdsBanner = ({ props }: Props) => {
  return (
    <div className="bg-[#2A2634] relative rounded-lg overflow-hidden w-52 p-5 items-center">
      <p>Nome</p>  
      <strong>{props.name}</strong>
    </div>
  )
}

export default AdsBanner