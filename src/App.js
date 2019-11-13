import React from "react";
import Routes from "./Components/Routes";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import "./Animations.css";
import "./App.css";

// Routes component holds all the routes for the site

function App() {
  return (
    <div>
      <Header />
      <Routes />
      <div className="py-5 mt-5" />
      <Footer />
    </div>
  );
}

export default App;
