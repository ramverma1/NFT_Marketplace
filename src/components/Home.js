import React from 'react'
import digitalArt1 from '../assets/home/da0.jpg';
import digitalArt2 from '../assets/home/da1.jpg';
import digitalArt3 from '../assets/home/da2.jpg';
import digitalArt4 from '../assets/home/da3.jpg';
import digitalArt5 from '../assets/home/da4.jpg';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};


export const Home = () => {
   function handleClick() {
    window.location.href = "/asset"
   }
   function handleCollection(){
     window.location.href="/collection"
   }
  return (
    <div className="container ">
      <div className="row">
      <div className="col-lg-12">
        <div className="col-lg-6 home-title" style={{float:"left" , marginLeft:"-120px"}}>
        <h1 style={{ fontSize: "45px" ,    fontFamily: "sans-serif"}}>Discover, collect and sell extraordinary NFTs</h1>
        <span style={{fontSize: "30px", fontWeight:"300"}}>on the world's first & largest NFT marketplace</span>
        <div className="explore-btn">
        <button className="btn btn-primary explore mt-5 mr-3" onClick={handleClick} > Explore </button>
        <button className="btn btn-primary explore mt-5 mr-3" style={{backgroundColor:"white",color:"blue"}} onClick={handleCollection}> create </button>
        </div>
        </div>
         <div className="col-lg-6" style={{float:"right"}}>
          <div class="Home featured-background">
            <img class="imgtop mt-5" src={digitalArt1} alt="Card image cap" />
          </div>
        </div>
      </div>   
      </div>
      <div className="row">
      <div className="col-lg-12 " infinite={true} style={{top:"120px"}}>
        <span className="drops"> Exclusive OpenSea drops </span>  
        <Carousel responsive={responsive} className="mt-5">
        <div ><img class="imgbottom" src={digitalArt2} alt="Card image cap" /></div>
        <div><img class="imgbottom " src={digitalArt3} alt="Card image cap" /></div>
        <div><img src={digitalArt4} class="imgbottom" alt="Card image cap" /></div>
        <div><img src={digitalArt5} class="imgbottom" alt="Card image cap" /></div>
        </Carousel>;
      
      </div></div>
        
    </div>
  )
}
