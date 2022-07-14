import React from 'react'
import Wave from "react-wavify";
import '../Styles/home.css';

const Home = () => {
  return (
    <div id="home">
   <Wave 
        className="wave"
        fill="#FFF6FF"
        paused={false}
        options={{
          height: 20,
          amplitude: 45,
          speed: 0.1,
          points: 5
        }}
      />
      
      <div className="intro">
          <div className="lefthome">
        <span className="homeline1">Namaste! I Am</span>
        <span className="homeline2">Aditya Kakkar</span>
        <span className="homeline3">Full Stack web developer from MERN stack , now exploring the concept of Blockchain using Rust.
        Want to Join me on my journey??</span>

        <div className="homebutton">
       <button className="home-button">Contact</button>
       </div>
       </div>
       <div className="righthome">
          <img src="imgmain.png" alt="" srcset="" id="imagehome" />
       </div>
      
      </div>
      <div className="homedark">
      
      </div>


     
    </div>
  )
}

export default Home
