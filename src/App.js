import React from "react";
import { StyledApp } from "./components/styles/appStyle";

//components
import Topbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import About from "./components/pages/about";
import Contact from "./components/pages/contact";
import Dashboard from "./components/pages/dashboard";
import Features from "./components/pages/features";
import Header from "./components/pages/header";
import Reviews from "./components/pages/reviews";
import SignUp from "./components/pages/signUp";

function App() {
  return (
    <StyledApp>
      <Topbar />
      <Header />
      <About />
      <Features />
      <Dashboard />
      <Reviews />
      <SignUp />
      <Contact />
      <Footer />
    </StyledApp>
  );
}

export default App;
