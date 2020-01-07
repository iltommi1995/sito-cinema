import React from 'react';

import Header from "./components/mainLayout/Header/Header"
import Footer from "./components/mainLayout/Footer/Footer";
import MainTemplate from "./components/mainLayout/MainTemplate/MainTemplate";

function App() {
  return (
      <div>
          <Header />
          <div className="container" style={{
              "margin-top":"70px"
          }}>
              <MainTemplate/>
          </div>
          <Footer />
      </div>
  );
}

export default App;
