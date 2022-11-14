interface Props {
  title?: string;
  subtitle: string;
}

const Heading = ({ title, subtitle, ...rest}: Props) => {
  return (
    <div className='w-full items-center justify-center mb-20'>
    <strong className= 'text-6xl text-transparent bg-nlw-gradient bg-clip-text font-black'>{title}</strong>
      <p style={{ color: '#D4D4D8'}}className='text-xl mt-3'>{subtitle}</p>
    </div>
  )
}

export default Heading