'use client'

import { useEffect, useState } from 'react'
import { Card, Footer, Grid, Header } from './components'

type Country = {
  cca3: string
  name: {
    common: string
  }
  capital: string
  region: string
  population: number
  flags: {
    svg: string
  }
}

export default function Home() {
  const [countries, setCountries] = useState<Country[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(
          'https://restcountries.com/v3.1/all?fields=cca3,name,flags,capital,region,population'
        )
        const data = await response.json()
        setCountries(data)
      } catch (error) {
        setError('Failed to fetch data')
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
    fetchCountries()
  }, [])

  if (loading) return <div>Loading data...</div>
  if (error) return <div>{error}</div>

  return (
    <>
      <Header />
      <main className='flex-1'>
        <Grid>
          {countries.map(({ cca3, name, capital, region, population, flags }, index) => {
            const { svg: flag } = flags ?? {}
            const { common: countryName } = name ?? {}
            const [capitalName] = capital[0] ?? []

            return (
              <Card
                key={cca3}
                name={countryName}
                capital={capitalName}
                region={region}
                population={population}
                flag={flags.svg}
                index={index}
              />
            )
          })}
        </Grid>
      </main>
      <Footer />
    </>
  )
}
