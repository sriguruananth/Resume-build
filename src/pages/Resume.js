import React, { Component } from 'react'
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import TopButton from '../components/topButton/TopButton';

class Resume extends Component {
  render(){
        window.open("https://drive.google.com/file/d/1pMCXoyIK0zJJFtI5aNs1qLdbKUX3n2_T/");
        const timer = setTimeout(() => {
            window.location.href = "/Resume-build"; // Navigate to the home page
        }, 2000);
      
        // Clean up the timer to prevent memory leaks
        return () => {
           clearTimeout(timer);
        };
    return (
       <div>
        </div> 
      )
  }
   
}

export default Resume;

          
