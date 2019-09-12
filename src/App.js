import React from "react";
import { Route, Redirect } from "react-router-dom";
import Header from "./Header";
import People from "./People";
import Keyword from "./Keyword";
import Movies from "./Movies";
import Tv from "./Tv";
import Search from "./Search";
import FAQ from "./FAQ";
import Footer from "./Footer";

import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Route exact path={"/"} render={() => <Redirect to="/movies" />} />
      <Route path="/movies" component={Movies} />
      <Route path="/tv" component={Tv} />
      <Route path="/people" component={People} />
      <Route path="/faq" component={FAQ} />
      <Route path="/search" component={Search} />
      <Route path="/keyword/:id" component={Keyword} />
      <div className="py-5 mt-5" />
      <Footer />
    </div>
  );
}

export default App;
