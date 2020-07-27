import React from "react";
import { Route } from "react-router-dom";

import Toolbar from './Toolbar/Toolbar';
import SideDrawer from './SideDrawer/SideDrawer';
import Backdrop from './Backdrop/Backdrop';
import BereaNoastra from "./BereaNoastra";
import TurulBerii from "./TurulBerii";
import DespreNoi from "./DespreNoi";
import Blog from "./Blog";
import Contact from "./Contact";
import Home from "./Home";
import ProductPresentationPage from './ProductPresentationPage';
import './App.css';

class App extends React.Component {
constructor(props){
super(props)
  this.state = { sideDrawerOpen: false };

}
  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {

    let backDrop;

    if (this.state.sideDrawerOpen) {
      backDrop = <Backdrop click={this.backdropClickHandler} />;
    }

    return (
      <div>
          <div style={{ height: "100%" }}>
            <Toolbar drawerToggleClickHandler={this.drawerToggleClickHandler} />
            <SideDrawer show={this.state.sideDrawerOpen} />
            {backDrop}
            <main className='main'>
              <Route path="/" exact component={Home} />
              <Route path="/produse" exact component={BereaNoastra} />
              <Route path="/produse/chisinau-blonda" exact component={ProductPresentationPage}  />
              <Route path="/produse/chisinau-bruna" exact component={ProductPresentationPage} />
              <Route path='/produse/chisinau-fara-alcool' exact component={ProductPresentationPage} />
              <Route path='/produse/chisinau-tare' exact component={ProductPresentationPage} />
              <Route path="/turul-berii" exact component={TurulBerii} />
              <Route path="/despre-noi" exact component={DespreNoi} />
              <Route path="/blog" exact component={Blog} />
              <Route path="/contact" exact component={Contact} />
            </main>
          </div>
      </div>
    );
  }
}
export default App;
