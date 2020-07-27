import React from "react";
import { Link } from 'react-router-dom';

import "./Product.css";
import bere_blonda from "../assets/beer-bottle.png";
import bere_bruna from '../assets/bere-bruna.png';
import bere_fara_alcool from '../assets/bere-fara-alcool.png';
import bere_tare from '../assets/bere-tare.png';


const Product = (props) =>  {

    return (
      <div className="product-overview">
        <div className="product">
          <Link to={{
                      pathname: '/produse/chisinau-blonda',
                      state: { display: 'from product' }
                    }} >
            <div className="product-info">
              <div className="product-title">
                <div className="Chisinau">Chișinău Blondă</div>
                <div className="button-info">
                  <button className="info">Află mai mult</button>
                </div>
              </div>
              <div className="product-img">
                <img className="bere-blonda" src={bere_blonda} alt="" />
              </div>
            </div>
          </Link>

          <div className="product-area">
            <Link to="/produse/chisinau-bruna"  >
              <div className="product-detail">
                <div className="product-image">
                  <img className="bere" src={bere_bruna} alt="" />
                </div>
                <div className="product-name">Chișinău Brună</div>
              </div>
            </Link>
            <Link to="/produse/chisinau-fara-alcool" >
              <div className="product-detail">
                <div className="product-image">
                  <img className="bere" src={bere_fara_alcool} alt="" />
                </div>
                <div className="product-name">Chișinău Fară Alcool</div>
              </div>
            </Link>
            <Link to="/produse/chisinau-tare" >
              <div className="product-detail">
                <div className="product-image">
                  <img className="bere" src={bere_tare} alt="" />
                </div>
                <div className="product-name">Chișinău Tare</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }

export default Product;
