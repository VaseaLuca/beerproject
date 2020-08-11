import React from "react";
import { Route } from "react-router-dom";

import Toolbar from './Toolbar/Toolbar';
import SideDrawer from './SideDrawer/SideDrawer';
import Backdrop from './Backdrop/Backdrop';
import BereaNoastra from "./BereaNoastra";
import TurulBerii from "./TurulBerii";
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

onFormSubmit (year) {
  console.log(year)

}

  render() {
      
    return (
      <div>
        <div style={{ height: "100%" }}>
          <Toolbar drawerToggleClickHandler={this.drawerToggleClickHandler} />
          <SideDrawer show={this.state.sideDrawerOpen} />
          {this.state.sideDrawerOpen ? (
            <Backdrop click={() => this.setState({ sideDrawerOpen: false })} />
          ) : null}
          <main className="main">
            <Route path="/" exact component={Home} />
            <Route path="/produse" exact component={BereaNoastra} />
            <Route
              path="/produse/:name"
              exact
              component={ProductPresentationPage}
            />
            <Route path="/turul-berii" exact component={TurulBerii} />
            <Route path="/contact" exact component={Contact} />
          </main>
        </div>
      </div>
    );
  }
}
export default App;
