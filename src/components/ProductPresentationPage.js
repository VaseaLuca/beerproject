import React from "react";
import {Link} from 'react-router-dom';
import "./ProductPresentationPage.css";
import blonda from "../assets/blonda.png";
import tare from "../assets/bere-tare.png";
import bruna from "../assets/bere-bruna.png";
import petBruna from '../assets/bere-pet-bruna.png';
import nonalcool from "../assets/bere-fara-alcool.png";
import dozaFara from '../assets/bere-doza-fara.png';
import dozaMetal from '../assets/bere-doza-blonda.png';
import petBlonda from "../assets/bere-pet-blonda.png";
import petBlonda15 from '../assets/bere-pet-blonda15.png';
import petBLonda2x from '../assets/bere-pet-blonda2x.png';
import DynamicBlock from './DynamicBlock';



class ProductPresentationPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      display: "",
      productList: [
        {
          id: "blonda",
          linkToProduct: "/produse/chisinau-blonda",
          mainImg: blonda,
          sliderImg: [dozaMetal, blonda, petBlonda, petBlonda15, petBLonda2x],
          img: [dozaMetal, blonda, petBlonda, petBlonda15, petBLonda2x],
          name: "Chișinău Blondă",
          descriptionTitle: "Descriere produs",
          description:
            "O bere blondă cu un gust plin și autentic,produsă după tehnologia unică de fierbere Merlin, numită și fierberea lentă, ce asigură păstrarea proprietăților naturale ale malțului, distribuindu-le uniform într-un gust demn a fi numită adevărata bere a Moldovei.Conținutul de alcool: 4,5%",
        },

        {
          id: "strong",
          linkToProduct: "/produse/chisinau-tare",
          mainImg: tare,
          sliderImg: [tare],
          img: [tare],
          name: "Chișinău Tare",
          descriptionTitle: "Descriere produs",
          description:
            "Pentru amatorii de bere tare cu un caracter floral condimentat.Conținutul de alcool: 7.0%",
        },
        {
          id: "bruna",
          linkToProduct: "/produse/chisinau-bruna",
          mainImg: bruna,
          sliderImg: [bruna, petBruna],
          img: [bruna, petBruna],
          name: "Chișinău Brună",
          descriptionTitle: "Descriere produs",
          description:
            "O bere brună, concepută din malț brun select, fermentat fin prin procesul de fierbere lentă datorită tehnologiei Merlin.Conținutul de alcool: 5,0%",
        },
        {
          id: "nonalcool",
          linkToProduct: "/produse/chisinau-fara-alcool",
          mainImg: nonalcool,
          sliderImg: [dozaFara, nonalcool],
          img: [dozaFara, nonalcool],
          name: "Chișinău fără Alcool",
          descriptionTitle: "Descriere produs",
          description:
            "Bere cu gust excepțional și aromă de malț,fermentat fin prin procesul de fierbere lentă datorită tehnologiei Merlin.Conținutul de alcool: 0,5%",
        },
      ],
    };
  }

  render() {
    return (
      <div className="product-presentation">
        {/* -----------Blond Beer Component --------- */}
        <div className="products-overview">
          {this.state.display ? (
            <DynamicBlock
              name={this.state.display.name}
              img={this.state.display.img}
              sliderImg={this.state.display.sliderImg}
              description={this.state.display.description}
              descriptionTitle={this.state.display.descriptionTitle}
            />
          ) : (
            <h2>Select a product</h2>
          )}
        </div>

        {/* ---------------------Product List-------------- */}

        <div className="product-list-title">
          <div className="familia-chisinau">Familia Chișinău</div>
          <div className="product-type">
            {this.state.productList.map((item, index) => (
              
                <Link
                  to={item.linkToProduct}
                  onClick={() => this.setState({ display: item })}
                  key={index}
                >
                  <div
                    className={
                      this.state.display.id === item.id
                        ? "product-container open"
                        : "product-container"
                    }
                  >
                    <div className="blond">
                      <img className="blond" src={item.mainImg} alt="" />
                    </div>
                    <div className="type">{item.name}</div>
                  </div>
                </Link>
              
            ))}
          </div>

          {/* <Link
              to="/produse/chisinau-blonda"
              // onClick={() => this.setState({ blond: true })}
              onClick={this.displayBlond}
             >
              <div
                className={
                  this.state.display.id === "blonda" ? "product-container open": "product-container"}>
                <div className="blond">
                  <img className="blond" src={blonda} alt="" />
                </div>
                <div className="type">Chișinău Blondă</div>
              </div>
            </Link>

 */}
        </div>
      </div>
    );
  }
}

export default ProductPresentationPage;
