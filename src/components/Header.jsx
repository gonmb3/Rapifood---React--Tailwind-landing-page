import { Link } from "react-scroll";
import { FaXmark, FaBars } from "react-icons/fa6";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navLinks = [
    { link: "Home", path: "home" },
    { link: "Nosotros", path: "about" },
    { link: "Menú", path: "menu" },
    { link: "galería", path: "gallery" },
    { link: "Contacto", path: "contact" },
  ];

  return (
    <header className="flex justify-between items-center px-3 gap-4 bg-slate-800 lg:px-10 py-6 sticky top-0 z-20">
      <div className="" id="logo">
        <h1 className="lg:text-[35px] text-[28px] text-green-500 font-bold italic">
        <a href="#home">RAPI<span className="text-orange-500">FOOD</span></a>
        </h1>
      </div>

      <ul className="lg:flex justify-center items-center gap-10 hidden">
        {navLinks.map(({ link, path }) => (
          <Link
            key={path}
            to={path}
            spy={true}
            offset={-100}
            className="text-white uppercase rounded-lg hover:bg-orange-500 hover:text-black p-3 font-semibold cursor-pointer"
          >
            {link}
          </Link>
        ))}
      </ul>

      {/* mobile menu */}
      <div className="flex justify-center lg:hidden" onClick={toggleMenu}>
        <div className="">
          {menuOpen ? (
            <FaXmark className="text-white text-2xl cursor-pointer z-30 " />
          ) : (
            <FaBars className="text-white  z-30 text-2xl cursor-pointer  " />
          )}
        </div>

        <div
          className={`${
            menuOpen ? "flex" : "hidden"
          } w-full h-fit bg-slate-800 p-4 absolute top-[80px] left-0`}
          onClick={closeMenu}
        >
          <ul className="flex flex-col justify-center items-center gap-2 w-full">
            {navLinks.map(({ link, path }) => (
              <Link
                to={path}
                className="text-white uppercase font-semibold cursor-pointer p-3 rounded-lg hover:bg-orange-500 hover:text-black w-full text-center"
                key={path}
                spy={true}
              >
                {link}
              </Link>
            ))}
          </ul>
        </div>
      </div>
  
        <button className="bg-orange-500 px-8 py-3 rounded-full hover:bg-green-500 hover:text-black font-bold hidden lg:flex">
          ORDENAR!
        </button>
      
    </header>
  );
};

export default Header;
