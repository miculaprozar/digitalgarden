import React from "react";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import "../styles/Index.css"

const App = () => {
  return (
    <div class = "page-content">
      <div class="content">
        <Navbar />
      </div>
        <Footer />
    </div>
  );
};

export default App;