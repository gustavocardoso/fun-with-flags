import Image from 'next/image'
import { Card, Footer, Grid, Header } from './components'

const countries = [
  { id: 1, country: 'Brazil', capital: 'Brasília', region: 'South America', population: 213993437 },
  { id: 2, country: 'Canada', capital: 'Ottawa', region: 'North America', population: 38389200 },
  { id: 3, country: 'Japan', capital: 'Tokyo', region: 'Asia', population: 125584200 },
  { id: 4, country: 'Germany', capital: 'Berlin', region: 'Europe', population: 83783945 },
  { id: 5, country: 'Australia', capital: 'Canberra', region: 'Oceania', population: 25788217 },
  { id: 6, country: 'Nigeria', capital: 'Abuja', region: 'Africa', population: 223804632 },
  { id: 7, country: 'India', capital: 'New Delhi', region: 'Asia', population: 1425829000 },
  { id: 8, country: 'France', capital: 'Paris', region: 'Europe', population: 65381000 },
  {
    id: 9,
    country: 'United States',
    capital: 'Washington, D.C.',
    region: 'North America',
    population: 334233854
  },
  { id: 10, country: 'South Africa', capital: 'Pretoria', region: 'Africa', population: 60535921 },
  {
    id: 11,
    country: 'Mexico',
    capital: 'Mexico City',
    region: 'North America',
    population: 128649565
  },
  { id: 12, country: 'China', capital: 'Beijing', region: 'Asia', population: 1411778724 }
]

export default function Home() {
  return (
    <>
      <Header />
      <main className='flex-1'>
        <Grid>
          {countries.map(country => (
            <Card
              key={country.id}
              country={country.country}
              capital={country.capital}
              region={country.region}
              population={country.population}
            />
          ))}
        </Grid>
      </main>
      <Footer />
    </>
  )
}
