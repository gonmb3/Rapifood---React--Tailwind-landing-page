import { useEffect } from "react";
import AOS from "aos";

import dish1 from "../assets/dish1.jpg";
import dish2 from "../assets/dish2.jpg";
import dish3 from "../assets/dish3.jpg";
import dish4 from "../assets/dish4.jpg";

const Items = () => {

  {
    /* AOS animation*/
  }
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);


  const data = [
    {image : dish1, text1: "MC BURGER", text2:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, nam.", text3:"ORDENAR!"},
    {image : dish2, text1: "MC BURGER", text2:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, nam.", text3:"ORDENAR!"},
    {image : dish3, text1: "MC BURGER", text2:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, nam.", text3:"ORDENAR!"},
    {image : dish4, text1: "MC BURGER", text2:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, nam.", text3:"ORDENAR!"},
  ]


  return (
    <section id="menu" className="w-full h-fit bg-slate-950 px-12 lg:px-20 lg:py-24 py-20 flex flex-col justify-center items-center gap-8">
      <h1 data-aos="zoom-in" className="text-white font-bold text-6xl text-center">Mira nuestra  <span className="text-green-500 italic">deliciosa</span> comida</h1>   
      <p data-aos="slide-up" className="text-white font-semibold text-xl text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, quia rem!</p>
    
    <div className="flex flex-col lg:flex-row justify-center items-center flex-wrap gap-10" id="grids">
      {
        data.map(dat => (
          <div data-aos="slide-up" data-aos-delay="200" className="flex flex-col justify-center items-center gap-4 bg-slate-900 pb-10 lg:w-2/5 w-full rounded-[150px]">
          <img src={dat.image} alt="dish image" />
          <div className="w-full flex flex-col justify-center items-center gap-4 px-10">
            <h1 className="text-white font-bold text-2xl"> {dat.text1} </h1>
            <p className="text-white font-semibold text-lg text-center">{dat.text2}</p>
          <button className="bg-orange-500 hover:bg-green-500 duration-300 font-bold full hover:text-black px-8 py-4 rounded-full">{dat.text3}</button>
          </div>
        </div>
        ))
      }
      



    </div>
    

    </section>
  )
}

export default Items