
import React from 'react';
import "./css/general.css";

import Header from "./components/mainLayout/header/header"
import Footer from "./components/mainLayout/footer/footer";
import MainTemplate from "./components/mainLayout/mainTemplate/mainTemplate";




function App() {
  return (
      <div>
          <Header />
          <div className="mainBody" >
              <div className="container" >
                  <MainTemplate/>
              </div>
          </div>
          <Footer />
      </div>
  );
}

export default App;
