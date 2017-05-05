import React, { Component } from 'react';
import './navigation.css';

class Navigation extends Component {
    render() {
        return (
            <nav className="c-navigation">
                <ul className="c-navigation__list">
                    <li className="c-navigation__item"><a href="#">One</a></li>
                    <li className="c-navigation__item"><a href="#">Two</a></li>
                    <li className="c-navigation__item"><a href="#">Three</a></li>
                </ul>
            </nav>
        );
    }
}

export default Navigation;
