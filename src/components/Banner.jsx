import { useEffect } from "react";
import AOS from "aos";
import banner1 from "../assets/banner1.jpg";

const Banner = () => {
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

  return (
    <section
      style={{ backgroundImage: `url(${banner1})` }}
      className="w-full bg-black h-fit flex justify-between items-center text-white px-10 lg:px-40 py-20 bg-cover bg-center"
    >
      <div className="flex flex-col justify-center items-center gap-8 w-full">
        <div
          data-aos="zoom-in"
          id="box-circle"
          className="bg-green-500 p-12 rounded-full flex justify-center flex-col gap-4 w-60 mt-6"
        >
          <h1 className="text-black font-bold text-6xl text-center">40%</h1>
          <h2 className="text-black font-bold text-xl text-center">
            BUSINESS <br />
            LUNCH
          </h2>
        </div>
        <h1
          data-aos="slide-up"
          data-aos-delay="200"
          className="lg:text-6xl text-5xl font-semibold"
        >
        ️ Mantente al día con nosotros!
        </h1>
        <p
          data-aos="slide-up"
          data-aos-delay="100"
          className="text-xl lg:text-2xl font-semibold"
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae,
          ut. Fugit, voluptatibus!
        </p>

        <div
          id="form"
          data-aos="slide-right"
          className="flex flex-col lg:flex-row justify-center items-center w-full gap-6 mt-6"
        >
          <input type="text"  className="p-4 text-black font-normal w-full lg:w-[50%] rounded-full " placeholder="Tendras las últimas novedades!"/>
      <button type="submit" className="bg-green-500 hover:bg-orange-500 px-10 py-4 rounded-full text-black font-bold text-lg">ENVIAR</button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
