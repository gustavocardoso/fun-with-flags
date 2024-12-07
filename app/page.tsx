import Image from 'next/image'
import { Footer, Header } from './components'

export default function Home() {
  return (
    <>
      <Header />
      <main className='flex-1'>Main</main>
      <Footer />
    </>
  )
}
