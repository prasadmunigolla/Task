import React from 'react';
import './Btnbar.css';
import {Link } from "react-router-dom";

class Btnbar extends React.Component{
    render(){
        return(
            <div className="btnbar">

                <Link to="/">
                <span> </span>
                <span> </span>
                <span> </span>
                <span> </span>
                Home</Link>
                <Link to="/components/Form/Form.js">
                <span> </span>
                <span> </span>
                <span> </span>
                <span> </span>
                Apllication</Link>
                <a href="www.google.co.in">
                <span> </span>
                <span> </span>
                <span> </span>
                <span> </span>
                Technology</a>
                <a href="www.google.co.in">
                <span> </span>
                <span> </span>
                <span> </span>
                <span> </span>
                Gallery</a>
                <a href="www.google.co.in">
                <span> </span>
                <span> </span>
                <span> </span>
                <span> </span>
                Contact Us</a>
                <a href="www.google.co.in">
                <span> </span>
                <span> </span>
                <span> </span>
                <span> </span>
                About us</a>
        
            </div>

        );
    }
}

export default Btnbar;