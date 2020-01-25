
import React, {Component} from 'react';
import "./css/general.css";

import Header from "./components/mainLayout/header/header"
import Footer from "./components/mainLayout/footer/footer";
import MainTemplate from "./components/mainLayout/mainTemplate/mainTemplate";
import Orologio from "./components/orologio/orologio";




class App extends Component {

    render() {
        return (
            <div>
                <Header/>
                <div className="mainBody">
                    <div className="container">
                        <MainTemplate/>
                    </div>
                </div>
                <div style={{"position": "fixed", "top": "100px", "right": "50px"}}>
                    <Orologio/>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default App;
