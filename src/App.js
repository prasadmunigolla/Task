import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Btnbar from './components/buttonbar/Btnbar';
import Pagebody from './components/pagebody/Pagebody';
import Footer from './components/footer/Footer';

class App extends React.Component{
  render(){
    return(
      <div className="app">
        <Navbar />
        <Btnbar />
        <Pagebody />
        <Footer />
      </div>
    );
  }
}


export default App;
