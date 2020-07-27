import React from 'react';
import Slider from 'react-slick';

import './DynamicBlock.css';

const DynamicBlock = (props) => {
      
    const firstSlider = {
    autoplay: true,
    autopaySpeed: 600 ,
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidestoShow: 1,
    slidesToScroll: 1
  }

  
    const sliderImg = props.sliderImg.map((slide,index) => {
        return  <div key={index}><img src={slide} alt="" /> </div> 
      })
    const img = props.img.map((img,index)=> {
        return  <div className='element' key={index}> <img className='photo' scr={img} alt='' key={index}/>  </div>
      })



  return (
    <div className="mother-block">
      <div className="first-block">
        <Slider {...firstSlider}>

          { sliderImg }

          {/* <div>
            <img src={props.slider1} alt="" />
          </div>
 */}
        </Slider>
      </div>
      <div className="second-block">
        <div className="name">{props.name}</div>
        <div className="product-description-title">
          <div>{props.descriptionTitle}</div>
        </div>
        <div className="product-description">
          {props.description}
            <div className="product-photos">
            { img }
            </div>
        </div>
      </div>
    </div>
  );
}

export default DynamicBlock;