interface AdsInfoProps {
  label: string;
  value: string;
  colorValue?: string;
}


const AdsInfo = ({ label, value, colorValue = '#FFFFFF'}: AdsInfoProps) => {
  return (
    <div className='w-full mb-4'>
      <p className='mb-1' style={{ color: '#D4D4D8'}}>{label}</p>
      <strong style={{ color: colorValue }}>{value}</strong>
    </div>
  )
}

export default AdsInfo