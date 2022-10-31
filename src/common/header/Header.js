import React from "react";
import './Header.css';
import logo from './logo.svg';
class Header extends React.Component {
    render() {
        return<>
        <div>
            <header className="header">
            <img src={logo} className="App-logo" alt="logo" />   
            </header>
        </div>
        </>
    }
}

export default Header;