import React from 'react'
import Wave from "react-wavify";
import '../Styles/home.css';
import { GoMarkGithub } from "react-icons/go";
import { BsLinkedin } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";

const Home = () => {
  return (
    <div id="home">
   
      
      <div className="intro">
          <div className="lefthome">
        <span className="homeline1">Namaste! I Am</span>
        <span className="homeline2">Aditya Kakkar</span>
        <span className="homeline3">Full Stack web developer from MERN , now exploring the concept of Blockchain using Rust.
        Want to Join me on my journey??</span>

        <div className="homebutton">
       <button className="home-button">Contact</button>
       </div>
       </div>
       <div className="righthome">
          <img src="imgmain.png" alt="" srcset="" id="imagehome" />
       </div>
      
      </div>
      <Wave
        className="wave"
        fill="#372b47"
        paused={false}
        options={{
          height: 15,
          amplitude: 45,
          speed: 0.1,
          points: 5
        }}
      />
      
     <div className="lefthomenav">
       <a href="https://github.com/AdityaKakkar1402">
     <span className="iconhomenav"><GoMarkGithub/></span>
      </a>
      <a href="https://www.linkedin.com/in/aditya-kakkar-77b077190/">
     <span className="iconhomenav"><BsLinkedin/></span>
     </a>
     <a href="https://twitter.com/ADITYA94722">
     <span className="iconhomenav"><AiFillTwitterCircle/></span>
     </a>
     </div>

     
    </div>
  )
}

export default Home
