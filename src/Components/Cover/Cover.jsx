import React from 'react';
import cover1 from '../../assets/cover(1).jpeg'
import cover2 from '../../assets/cover(1).jpg'
import cover3 from '../../assets/cover(2).jpg'
import cover4 from '../../assets/cover(3).jpg'

const Cover = () => {
    return (
        <div style={{ height: "500px" }} className="carousel">
        <div id="slide1" className="carousel-item relative w-full">
          <img style={{ height: "500px",opacity:.3 }} src={cover1} className=" w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="text-4xl btn btn-ghost bg-none text-basicColor">❮</a> 
            <a href="#slide2" className="text-4xl btn btn-ghost text-basicColor">❯</a>
          </div>
          <div className="absolute flex justify-center left-5 right-5 top-1/2">
            <h1>Hi this is me</h1>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
          <img style={{ height: "500px",opacity:.3 }} src={cover3} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="text-4xl btn btn-ghost text-basicColor">❮</a> 
            <a href="#slide3" className="text-4xl btn btn-ghost text-basicColor">❯</a>
          </div>
          <div className="absolute flex justify-center left-5 right-5 top-1/2">
            <h1>Hi this is me</h1>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
          <img style={{ height: "500px",opacity:.3 }} src={cover2} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="text-4xl btn btn-ghost text-basicColor">❮</a> 
            <a href="#slide4" className="text-4xl btn btn-ghost text-basicColor">❯</a>
          </div>
          <div className="absolute flex justify-center left-5 right-5 top-1/2">
            <h1>Hi this is me</h1>
          </div>
        </div> 
        <div id="slide4" className="carousel-item relative w-full">
          <img style={{ height: "500px",opacity:.3 }} src={cover4} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="text-4xl btn btn-ghost text-basicColor">❮</a> 
            <a href="#slide1" className="text-4xl btn btn-ghost text-basicColor">❯</a>
          </div>
          <div className="absolute flex justify-center left-5 right-5 top-1/2">
            <h1>Hi this is me</h1>
          </div>
        </div>
      </div>
    );
};

export default Cover;