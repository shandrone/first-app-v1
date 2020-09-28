import React from "react";

import HelloWorld_2 from "./Components/HelloWorld";
//import HelloWorld from "./Components/HelloWorld";
import Count from "./Components/CountExample";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Views/Home";
import About from "./Views/About";
import Product from "./Views/Product";

function App() {
  return (
    //the following two <div> was for practicing HelloWorld props and Hook
    /*
    <header>
      <div>
        <h1>This is hello</h1>
        <HelloWorld_2 name="Dynamic Content" />
      </div>

      <div>
        { will use hook in this example }
        <Count />
      </div>
    </header>
    */
    <header className=" font-black p-1">
      <div className="relative pb-10 min-h-screen">
        <Router>
          <Header />

          <div className="p-2">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>

              <Route exact path="/numbergame">
                <div>
                  <Count />
                </div>
              </Route>

              <Route path="/products/:id">
                <div>
                  <Product />
                </div>
              </Route>

              <Route path="/about">
                <About />
              </Route>
            </Switch>
          </div>

          <Footer />
        </Router>
      </div>
    </header>
  );
}

export default App;
