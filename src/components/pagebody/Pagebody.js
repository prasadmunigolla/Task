import React from 'react';
import './Pagebody.css';


class Pagebody extends React.Component{
    render(){
    return(
      <div>
      <div class="bs-example">
          <div id="myCarousel" class="carousel slide" data-interval="3000" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
            </ol>
      
          <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="https://images.pexels.com/photos/1647905/pexels-photo-1647905.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="First Slide"/>  
            </div>
            <div class="carousel-item">
                <img src="https://images.pexels.com/photos/935756/pexels-photo-935756.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Second Slide"/>
            </div>
            <div class="carousel-item">
                <img src="https://images.pexels.com/photos/3789085/pexels-photo-3789085.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Third Slide"/>          
            </div>
          </div>
     
              <a class="carousel-control-prev" href="#myCarousel" data-slide="prev">
                <span class="carousel-control-prev-icon"></span>
              </a>
              <a class="carousel-control-next" href="#myCarousel" data-slide="next">
                <span class="carousel-control-next-icon"></span>
              </a>
        </div>
     </div>
     <div class="linkcontr">
     <ul>
          <li><a href="https://www.google.com/" target="_blank">google</a></li>
          <li><a href="https://www.google.com/" target="_blank">google</a></li>
          <li><a href="https://www.google.com/" target="_blank">google</a></li>
          <li><a href="https://www.google.com/" target="_blank">google</a></li>
          <li><a href="https://www.google.com/" target="_blank">google</a></li>
          <li><a href="https://www.google.com/" target="_blank">google</a></li>
          <li><a href="https://www.google.com/" target="_blank">google</a></li>
          <li><a href="https://www.google.com/" target="_blank">google</a></li>
          <li><a href="https://www.google.com/" target="_blank">google</a></li>
          <li><a href="https://www.google.com/" target="_blank">google</a></li>
          <li><a href="https://www.google.com/" target="_blank">google</a></li>
          <li><a href="https://www.google.com/" target="_blank">google</a></li>
          <li><a href="https://www.google.com/" target="_blank">google</a></li>
          <li><a href="https://www.google.com/" target="_blank">google</a></li>
          <li><a href="https://www.google.com/" target="_blank">google</a></li>
          <li><a href="https://www.google.com/" target="_blank">google</a></li>
        </ul>
      
     </div>
     </div>
    );
    }
  } 
export default Pagebody ;