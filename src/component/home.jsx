import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const Home = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, // Autoplay aktiv edir
        autoplaySpeed: 2000, // Autoplay sürətini təyin edir (ms cinsində)
      };
  return (
    <div className='mt-5 cont' >
            <Slider {...settings}>
      <div className='d-flex align-items-center mt-5'>
            <div className='ps-3'>
                <h1>Ən gözəl ayyaqabılar buradadır</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt inventore odit possimus quidem ipsam cupiditate!</p>
                 <button className='btn btn-secondary'>İncele</button>   
            </div>
         <img className='w-25' src="https://parspng.com/wp-content/uploads/2023/02/shoespng.parspng.com-12.png" alt="" />
      </div>
      
      <div className='d-flex align-items-center mt-5'>
            <div className='ps-3'>
                <h1>Ən gözəl ayyaqabılar buradadır</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt inventore odit possimus quidem ipsam cupiditate!</p>
                 <button className='btn btn-secondary'>İncele</button>   
            </div>
            <img className='w-25' src="https://parspng.com/wp-content/uploads/2023/02/shoespng.parspng.com-5.png" alt="" />
      </div>

      <div className='d-flex align-items-center mt-5'>
            <div className='ps-3'>
                <h1>Ən gözəl ayyaqabılar buradadır</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt inventore odit possimus quidem ipsam cupiditate!</p>
                 <button className='btn btn-secondary'>İncele</button>   
            </div>
            <img className='w-25' src="https://purepng.com/public/uploads/large/purepng.com-running-shoesrunning-shoesrunningshoessportingphysical-activitiesstyle-1701528181337dmmkt.png" alt="" />
      </div>
     
    </Slider>
    </div>
  )
}

export default Home