

import { Component } from "react";
import {Link} from "react-router-dom"
import "./Header.css"

class Header extends Component{
    render(){
        return(
            <div>
                <div className = "header-heading">
                    <h1>Project Case Study</h1>
                </div>
                <div className = "list-container">
                    <ul className = "list-item-container">
                        <Link to = "/">
                        <li className = "list-item">
                            Home
                        </li>
                        </Link>
                        <li className = "list-item">
                            About
                        </li>
                        <li className = "list-item">
                            Contact
                        </li>
                    </ul>
                </div>
            </div>
        )

    }
}
export default Header