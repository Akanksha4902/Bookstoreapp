import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from "../../public/list.json"
import axios from "axios";
import Cards from "./Cards";

function Freebook() {
  const filterData = list.filter((data) => data.category === "Free");

  
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <h1 className="font-semibold text-xl pb-2">
        Free offered Courses
      </h1>
      <p>A bookstore is a haven for book lovers, offering a vast collection of academic resources, and entertainment materials. It is a place where knowledge, creativity, and come together, providing readers with access to a diverse range of genres, including fiction, non-fiction, mystery, romance, science fiction, biographies, history, and more.</p>

    </div>
    <div>
    <Slider {...settings}>
        {filterData.map((item)=>
        <Cards item={item} key={item}/>
        
        )}
      </Slider>
    </div>
    
    </>
  );

 
  
}

export default Freebook;
