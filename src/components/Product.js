import React from "react";
import { Link } from 'react-router-dom';

import "./Product.css";
import bere_blonda from "../assets/beer-bottle.png";
import tare from '../assets/bere-tare.png';
import bruna from '../assets/bere-bruna.png';
import nonalcool from '../assets/bere-fara-alcool.png';


const Product = (props) =>  {
  const producstList = [
    {
      id: "strong",
      linkToProduct: "/produse/chisinau-tare",
      mainImg: tare,
      name: "Chișinău Tare"
    },
    {
      id: "bruna",
      linkToProduct: "/produse/chisinau-bruna",
      mainImg: bruna,
      name: "Chișinău Brună",
    },
    {
      id: "nonalcool",
      linkToProduct: "/produse/chisinau-fara-alcool",
      mainImg: nonalcool,
      name: "Chișinău fără Alcool",
      },
  ];

    return (
      <div className="product-overview">
        <div className="product">
          <Link to={{ pathname: "/produse/chisinau-blonda", state:{producstList: true} }}>
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
            {producstList.map((product, index) => (
              <Link to={product.linkToProduct} key={index}>
                <div className="product-detail">
                  <div className="product-image">
                    <img className="bere" src={product.mainImg} alt="" />
                  </div>
                  <div className="product-name">{product.name}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }

export default Product;
