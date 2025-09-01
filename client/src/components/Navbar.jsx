import { Link, useNavigate } from "react-router-dom";
import Homesvg from "../icons/Homesvg";
import Codesvg from "../icons/Codesvg";
import Personsvg from "../icons/Personsvg";
import Contactsvg from "../icons/Contactsvg";


const Navbar = ({ showContactModal, setShowContactModal }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="fixed right-0 h-1/4 flex flex-col   gap-4  py-2 text-lg px-8 pt-56  ">
        <Link to="/" className="hover:text-[#0e7490] flex gap-1">
          <Homesvg size={20} />
        </Link>

        <Link to="/projects" className=" hover:text-[#0e7490] flex gap-1">
          <Codesvg size={20} className=" hover:text-[#0e7490]" />
        </Link>

        <Link to="/resume" className=" hover:text-[#0e7490]  flex gap-1">
          <Personsvg size={20} />
        </Link>
    
        <div
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" }),
              setShowContactModal(!showContactModal);
          }}
          className=" hover:text-[#0e7490] flex gap-1"
        >
          <Contactsvg size={20} />
       
        </div>
      </div>
   
    </>
  );
};
export default Navbar;
