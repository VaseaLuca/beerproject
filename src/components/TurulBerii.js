import React from "react";

import tour_img from '../assets/cover-turul.jpg';
import tour_column from '../assets/cover-turul-column.jpg';
import Footer from './Footer';
import "./TurulBerii.css";



const TurulBerii = () => {

  return (
    <div className="main">
      <div className="constructor">
        <div className="main-constructor">
          <div className="image">
            <img className='tour-img' src={tour_img} alt="" />
          </div>
          
          <div className="tour-description">
            <div className="description">
              <div className="tour-title">
                Bine ai venit la Turul Berii Ohișinău
              </div>
              <p>Excursion can take up to 80 minutes and includes:</p>
              <ul className="ul-left">
                <li>Prezentarea generală a companiei</li>
                <li>Vizitarea secțiilor de producere</li>
                <li>Degustarea materiei prime</li>
                <li>Secția de producere a mustului de malț</li>
                <li>Secția de filtrare</li>
                <li>Secția îmbuteliere bere</li>
                <li>Degustare bere din familia Ohișinău</li>
              </ul>
              <div className="text">
                La final o mică surpriză din partea companiei. <br /> La
                excursie vor participa persoanele cu programare <br />
                prealabilă, cu <span>vârsta de la 18 ani</span>. <br /> Accesul
                în fabrică se face în baza unui act de identitate <br />
                <br /> Vezi regulamentul
                <span> aici</span> <br /> Pentru mai multe detalii,
                contactați-ne la numărul de <br /> telefon:
                <span> 055 55 588 580</span> <br /> Turul Berii este gratuit
              </div>
              <div>
                <button className="orange-btn">Vreau la excursie</button>
              </div>
            </div>
          </div>
          <div className='tourPhotoColumn'>
            <img className='tourPhotoColumn-img' src={tour_column} alt=""/>
          </div>
        </div>
        <div className='footer-section'>
          <Footer className="footer-turul" />
        </div>
      </div>
    </div>
  );
};

export default TurulBerii;
