import React from "react";
//import App from '../App';
//import '../App.css';
import NBAL from '../Images/NBALOGO.jpg'
import PLL from '../Images/PL2.png'
import UCLL from '../Images/UCLLOGO.jpg'

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <header>
                <div className="container">
                    <nav className="headerNav">
                        <ul>
                            <li><a href="#">NBA</a></li>
                            <li><a href="#">PL</a></li>
                            <li><a href="#">UCL</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }
}