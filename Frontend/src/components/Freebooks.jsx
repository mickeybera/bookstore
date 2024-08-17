import React, { useEffect, useState } from 'react'
import Slider from "react-slick"
import Cards from './Cards';
import axios from "axios"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Freebooks() {
  const [book, setBook] = useState([])
  useEffect(() => {
    const getBook = async () => {
        try {
            const res = await axios.get("http://localhost:4001/book");
            console.log(res.data);
            setBook(res.data.filter((data)=>data.category==="Free"));
        } catch (error) {
            console.log(error)
        }
    }
    getBook();
}, []);
    

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
    <div className="bg-white max-w-screen-2xl container mx-auto md:px-20px px-4">
   <div>
   <h1 className="font-semibold text-xl pb-4">Free offered courses</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab libero praesentium, dolorum vitae eligendi esse iste. Quia numquam cupiditate atque.</p>
   </div>
   
    <div className="bg-slate-50">
    <Slider {...settings}>
        {book.map((item)=>(
            <Cards item={item} key={item.id}/>
        ))
        }
      </Slider>
    </div>
    </div>
    </>
  )
}

export default Freebooks
