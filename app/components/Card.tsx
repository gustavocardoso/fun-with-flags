type CardProps = {
  country: string
  capital: string
  region: string
  population: number
}

const Card = ({ country, capital, region, population }: CardProps) => {
  return (
    <div className='card-container h-full bg-white rounded-lg shadow-lg overflow-hidden'>
      <div className='card-image aspect-video w-full'>
        <img
          src='https://placehold.co/600x400'
          alt='Placeholder Image'
          className='w-full h-full object-cover'
        />
      </div>

      <div className='card-info p-6 text-sm text-gray-600'>
        <h2 className='card-title text-xl font-semibold mb-4'>{country}</h2>
        <div className='card-description space-y-2'>
          <div className='flex items-center gap-1'>
            <span className='font-semibold'>Capital:</span>
            <span>{capital}</span>
          </div>

          <div className='flex items-center gap-1'>
            <span className='font-semibold'>Region:</span>
            <span>{region}</span>
          </div>

          <div className='flex items-center gap-1'>
            <span className='font-semibold'>Population:</span>
            <span>{population}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
