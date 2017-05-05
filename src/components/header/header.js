import React, { Component } from 'react';
import Navigation from "../navigation/navigation";
import logo from '../../icons/logo.svg';
import './header.css';

class Header extends Component {
    render() {
        return (
            <header className="c-header">
                <div className="c-header__container">
                    <img src={logo} className="c-header__logo" alt="logo" />
                    <Navigation/>
                </div>
            </header>
        );
    }
}

export default Header;
