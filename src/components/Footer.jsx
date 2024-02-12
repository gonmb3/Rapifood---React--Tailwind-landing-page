import { useEffect } from "react";
import AOS from "aos";
import { Link } from "react-scroll";
import fb from "../assets/icons/fb.svg"
import insta from "../assets/icons/insta.svg"
import twitter from "../assets/icons/twitter.svg"
import topArrow from "../assets/icons/toparrow.svg"





const Footer = () => {  

  const year = new Date().getFullYear()


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
   <>
     <footer className="flex justify-center items-center px-10 lg:px-20 py-10 lg:py-10 flex-col gap-6 bg-slate-800 w-full">
      <div className="flex flex-row justify-start items-center gap-6 mt-3" id="social-icons">
      <div data-aos="zoom-in" id="icon-box" className="bg-orange-500 p-2 rounded-full hover:bg-green-500 cursor-pointer">
        <img src={fb} alt="icon" width={28} height={28}/>
      </div>

      <div data-aos="zoom-in" id="icon-box" className="bg-orange-500 p-2 rounded-full hover:bg-green-500 cursor-pointer">
        <img src={insta} alt="icon" width={28} height={28}/>
      </div>

      <div data-aos="zoom-in" id="icon-box" className="bg-orange-500 p-2 rounded-full hover:bg-green-500 cursor-pointer">
        <img src={twitter} alt="icon" width={28} height={28}/>
      </div>
      </div>
      <ul className="flex justify-center items-start lg:items-center text-white text-lg mt- lg:gap-10 gap-4 cursor-pointer duration-500">
        <li className="hover:text-orange-500">Home</li>
        <li className="hover:text-orange-500">Nosotros</li>
        <li className="hover:text-orange-500">Menú</li>
        <li className="hover:text-orange-500">Contacto</li>
      </ul>
    </footer>
    {/* top arrow button */}
    <div className="w-full bg-black text-sm p-4 flex flex-col justify-center items-center text-gray-300 font-semibold">
      <h1>Copyright {year} - GZM </h1>

      <div id="icon-box" className="bg-green-500 p-2 rounded-full hover:bg-orange-500 cursor-pointer fixed bottom-12 right-6">
      <Link to="home" spy={true} offset={-100} smooth={true}>
       <img src={topArrow} alt="icon" width={40} height={40}/>
      </Link>
       
      </div>
    </div>
   </>
  )
}

export default Footer