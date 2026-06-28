import React from 'react'
import './TodaysOffer.css'
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'


const TodaysOffer = () => {
  return (
    <>
    <div className='container'>
        <div className="row">
            <div className="col-12">
     <iframe className='youtubeVideo' src="https://www.youtube.com/embed/8Qbax_1szSs?si=Tyghu_KY16Xs54HZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

            </div>
        </div>
        <img src={img1} alt="" className='img-fluid'/>
        <img src={img2} alt="" className='img-fluid customIMGOffer' />

    </div>
    </>

  )
}

export default TodaysOffer