import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./css/general.css";
import Header from "./components/mainLayout/header/header";
import Footer from "./components/mainLayout/footer/footer";
import MainTemplate from "./components/mainLayout/mainTemplate/mainTemplate";
import Orologio from "./components/orologio/orologio";


class App extends Component {

    render() {
        return (
            <div>
                <Header/>
                <div className="main-body">
                    <div className="container">
                        <MainTemplate/>
                    </div>
                </div>
                <div className="orologio">
                    <Orologio/>
                </div>
                <Footer/>
            </div>
        );
    }
}
//
export default App;
//