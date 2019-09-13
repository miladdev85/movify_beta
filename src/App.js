import React from "react";
import { Route, Redirect } from "react-router-dom";
import Header from "./Components/Header";
import People from "./Components/People/People";
import Keyword from "./Components/Keyword/Keyword";
import Movies from "./Components/Movie/Movies";
import Tv from "./Components/Tv/Tv";
import Search from "./Components/Search/Search";
import FAQ from "./Components/FAQ";
import Footer from "./Components/Footer";
import "./Animations.css";
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
