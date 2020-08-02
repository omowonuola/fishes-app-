import React, { Component } from 'react';
import { Link } from "react-router-dom";


class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className="nav" style={{backgroundColor: "black"}}>
                    <Link to="">
                        <h5 className="nav-link active" >FISHES</h5>
                    </Link>
                    <Link to="">
                       <h5 className="nav-link">Types</h5> 
                    </Link>
                    <Link to="">
                        <h5 className="nav-link" >About</h5>
                    </Link>
                </nav>
            </div>
        )
    }
}


export default NavBar;