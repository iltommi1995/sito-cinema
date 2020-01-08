import React from 'react';

import Header from "./components/mainLayout/header/header"
import Footer from "./components/mainLayout/footer/footer";
import MainTemplate from "./components/mainLayout/mainTemplate/mainTemplate";

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
