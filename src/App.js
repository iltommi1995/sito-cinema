/**
 * Author   :
 * Update   :
 * Date     :
 */
import React from 'react';
import "./css/general.css";
///
import Header       from "./components/mainLayout/header/header"
import Footer       from "./components/mainLayout/footer/footer";
import MainTemplate from "./components/mainLayout/mainTemplate/mainTemplate";
import Orologio     from "./components/orologio/orologio";
import Timer        from "./components/timer/timer";
//
function App() {
  return (
      <div>
          <Header />
          <div className="mainBody" >
              <div className="container" >
                  <MainTemplate/>
              </div>
          </div>
          <div style={{"position": "fixed", "top": "100px", "right": "50px"}}>
            <Orologio />
          </div>
          <div style={{"position": "fixed", "top": "100px", "left": "50px"}}>
              <Timer />
          </div>
          <Footer />
      </div>
  );
}
//
export default App;
//