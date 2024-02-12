import { useEffect } from "react";
import AOS from "aos";
import phone from "../assets/icons/phone.svg";
import mail from "../assets/icons/mail.svg";
import map from "../assets/icons/map.svg";

const Contact = () => {

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
    <section id="contact" className="bg-slate-950 w-full px-20 py-20 flex flex-col lg:flex-row justify-around items-center gap-16">
      <div data-aos="slide-up" delay="600" className="flex flex-col justify-center items-center gap-2 ">
        <div className="bg-green-500 p-4 rounded-full hover:bg-orange-500 cursor-pointer" id="icon-box">
          <img src={phone} alt="icon" width={40} height={40} />
        </div>
     
        <p className="text-gray-300 font-normal text-xl text-center">Lun-Sab de 17pm a 1am!</p>
        <p className="text-orange-500 text-xl font-bold underline cursor-pointer">+598 099 555 666</p>
      </div>

      <div data-aos="slide-up" delay="600" className="flex flex-col justify-center items-center gap-2 ">
        <div className="bg-green-500 p-4 rounded-full hover:bg-orange-500 cursor-pointer" id="icon-box">
          <img src={mail} alt="icon" width={40} height={40} />
        </div>
       <p className="text-gray-300 font-normal text-xl text-center">Lun-Sab de 17pm a 1am!</p>
        <p className="text-orange-500 text-xl font-bold underline cursor-pointer">email123@example.com</p>
      </div>

      <div data-aos="slide-up" delay="600" className="flex flex-col justify-center items-center gap-2 ">
        <div className="bg-green-500 p-4 rounded-full hover:bg-orange-500 cursor-pointer" id="icon-box">
          <img src={map} alt="icon" width={40} height={40} />
        </div>
       <p className="text-gray-300 font-normal text-xl text-center">Lun-Sab de 17pm a 1am!</p>
        <p className="text-orange-500 text-xl font-bold underline cursor-pointer">Calle 1 & Calle 2 </p>
      </div>
    </section>
  )
}

export default Contact