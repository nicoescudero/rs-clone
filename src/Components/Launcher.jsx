import React from 'react'
import RD from '../Assets/rdr2.png'
import Logo from '../Assets/rsLogo.png'

const Launcher = () => {
  return (
    <section className='section launcher'>
      <div className="section-download">
        <div className="launcher-info">
          <img src={Logo} alt=""  className='logo-rs'/>
          <h3>Games Launcher</h3>
        </div>
        <p>All games in one place</p>
        <button className='btn-Download'>Download</button>
      </div>
      <img src={RD} alt="" />
    </section>
  )
}

export default Launcher