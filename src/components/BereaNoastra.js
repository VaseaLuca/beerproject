import React, { useRef } from 'react';

import back_video from '../assets/bere-video.mp4';
import './BereaNoastra.css'
import Product from './Product';
import Footer from './Footer';

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

const Produse = (props) => {

  const myRef = useRef(null);
  const executeScroll = () => scrollToRef(myRef);

  return (
    <div className="flex-section">
      <video className="background-block" autoPlay muted loop>
        <source className="background-video" src={back_video} />
      </video>

      <div className="video-btn" onClick={executeScroll}>
        Vezi Berea Noastră
      </div>
      <span className="arrow" onClick={executeScroll}></span>
      <div ref={myRef}>
        <Product />
      </div>
      <div className="produse-footer">
        <Footer className="Berea-Noastra" />
      </div>
    </div>
  );
  };
export default Produse;