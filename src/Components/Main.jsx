import React from 'react'
import Banner from '../Assets/GTA6_banner.png'
import Newswire from './Newswire'
import Games from './Games'
import Launcher from './Launcher'
import Footer from './Footer'

const Main = () => {
  return (
    <main className='main'>
      <img src={ Banner } alt="" />
      <Games />
      <Newswire />
      <Launcher />
      <Footer />
    </main>
  )
}

export default Main