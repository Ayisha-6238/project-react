import React from 'react'
import Navbaar from './Navbaar'
import Footer from './Footer'

function Awards() {
  return (
    <div>
        <Navbaar/>
      <div className="container text-center pt-5 mt-5">
        <h3 className='text-start'><b>Awards</b></h3>
        <img className='w-75' src="https://storylineonline.net/wp-content/uploads/2023/11/AwardWinningProgram2023-forwebsite.png" alt="" />
      </div>
      <Footer/>
    </div>
  )
}

export default Awards