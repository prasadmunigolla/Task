import React from 'react';
import './Footer.css';


class Footer extends React.Component{
  render(){
    return(
      <div class="footerbox">
      <div className="footer">
          <p><b>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</b></p>
      <div className="exlink">
        <ul>
          <li><a href="https://www.google.com/" target="_blank">google</a></li>
          <li><a href="https://www.google.com/" target="_blank">google</a></li>
          <li><a href="https://www.google.com/" target="_blank">google</a></li>
        </ul>
      
      </div>
      </div>
      </div>
    );
  }
}
export default Footer;