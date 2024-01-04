import React from 'react'
import G6 from '../Assets/GTA6_banner.png'
import GT from '../Assets/gtaT.jpg'
import GTT from '../Assets/gtaTrailer.jpg'

const Newswire = () => {
  return (
    <section className='section'>
        <h3>Newswire</h3>
        <div className="section-content">
        <div className="main-post">
            <img src={G6} alt="" />
            <div className="post-info">
            <h5 className='description-game'>Grand Theft Auto VI - View 1° trailer now</h5>
            <div className="date-info">
              <p className='title-game'>Rockstar Games</p>
              <p className='date'>December 5, 2023</p>
            </div>
            </div>
          </div>
        <div className="list">
          <div className="post">
            <img src={GTT} alt="" />
            <div className="post-info">
            <h5 className='description-game'>TRAILER 1. TUESDAY, DECEMBER 5. 9AM ET.</h5>
            <div className="date-info">
              <p className='title-game'>Rockstar Games</p>
              <p className='date'>December 1, 2023</p>
            </div>
            </div>
          </div>
          <div className="post">
            <img src={GT} alt="" />
            <div className="post-info">
            <h5 className='description-game'>Grand Theft Auto: The Trilogy - The Definitive Edition Now Available on Netflix, IOS, and Android</h5>
            <div className="date-info">
              <p className='title-game'>Grand Theft Auto: The Trilogy</p>
              <p className='date'>December 14, 2023</p>
            </div>
            </div>
          </div>
        </div>
        </div>
      </section>
  )
}

export default Newswire