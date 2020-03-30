import React from 'react';
import './Navbar.css';

class Navbar extends React.Component{
    render(){
        return(
            <div class="bar">
                   <button><a href="https://www.google.com/"><b>Log In</b></a></button>
                   <h1><b>ONETEKSOL</b></h1>
                   <input type="text" placeholder="Search.."></input>
            </div>

        );
    }
}

export default Navbar;
