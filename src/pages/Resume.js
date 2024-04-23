import React, { Component } from 'react'
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import TopButton from '../components/topButton/TopButton';

class Resume extends Component {
  render(){
        window.open("https://drive.google.com/file/d/1BGVjbKXGBMBuNPL3mfSFi-75Pcp0g1FH/view?usp=drive_link");
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

  //</div>href="https://docs.google.com/document/d/1DmQtCQioSqB8T1lPjCqao6eFwRh7Ymet/edit#heading=h.gjdgxs">
          