import Image from 'next/image'

type CardProps = {
  name: string
  capital: string
  region: string
  population: number
  flag: string
  index: number
}

const Card = ({ name, capital, region, population, flag, index }: CardProps) => {
  return (
    <div className='card-container h-full bg-white rounded-lg shadow-lg overflow-hidden'>
      <div className='card-image aspect-video w-full'>
        <Image
          src={flag || 'https://placehold.co/600x400'}
          alt={`${name} flag`}
          width={600}
          height={400}
          className='w-full h-full object-cover'
          priority={index < 16}
        />
      </div>

      <div className='card-info p-6 text-sm text-gray-600'>
        <h2 className='card-title text-xl font-semibold mb-4'>{name}</h2>
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
