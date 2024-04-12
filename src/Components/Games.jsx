import React from 'react'
import G5 from '../Assets/GTA5.png'
import GO from '../Assets/GTAonline.png'
import RD from '../Assets/RED.png'
import RO from '../Assets/REDOnline.png'

const Games = () => {
  return (
    <section className='section'>
      <div className="selection">
        <h3>Featured Games</h3>
        <div className="platform">
          <button className="btn-platform">PC</button>
          <button className="btn-platform">Console</button>
          <button className="btn-platform">Mobile Devices</button>
        </div>
      </div>
        <div className="list-games">
          <div className="post-game">
              <img src={G5} alt="" />
          </div>
          <div className="post-game">
              <img src={GO} alt="" />
          </div>
          <div className="post-game">
              <img src={RD} alt="" />
          </div>
          <div className="post-game">
              <img src={RO} alt="" />
          </div>
        </div>
        <div className='btn-ViewMore-Container'>
          <button className='btn-ViewMore'>View More</button>
        </div>
      </section>
  )
}

export default Games