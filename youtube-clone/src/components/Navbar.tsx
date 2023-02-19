
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { TiMicrophone } from "react-icons/ti";
import { BsYoutube, BsCameraVideo, BsBell } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoAppsSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import me from '../assets/me.jpg'


type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className="flex justify-between items-center px-14 h-14 bg-[#212121] opacity-95 sticky top-0 z-50" >
      <div className="flex gap-8 items-center text-2xl">
        <div className="cursor-pointer" >
          <GiHamburgerMenu/>
        </div>
        <Link style={{textDecoration:'none',color:'white'}} to='/' >
          <div className="flex gap-1 items-center justify-center">
            <BsYoutube className=" cursor-pointer text-3xl text-red-600" />
            <span className="text-xl font-medium">Youtube</span>
          </div>
        </Link>
      </div>

      <div className="flex items-center justify-center md:gap-5 gap-2">
        <form >
          <div className="flex bg-zinc-900 items-center h-10 px-4 pr-0">
            <div className="flex gap-4 items-center pr-5">
              <div >
                <AiOutlineSearch className="cursor-pointer text-xl" />
              </div>
              <input type="text" className="md:w-96 w-0 bg-zinc-900 focus:outline-none border-none" />
              <AiOutlineClose className=" md:text-xl w-0 cursor-pointer" />
            </div>
            <button className="h-10 w-16 flex items-center justify-center bg-zinc-800">
              <AiOutlineSearch className="cursor-pointer text-xl" />
            </button>
          </div>
        </form>
        <div className="text-xl p-3 bg-zinc-900 rounded-full">
         <TiMicrophone className="cursor-pointer" />
        </div>
      </div>
      <div className="flex gap-5 items-center text-xl">
        <BsCameraVideo className="cursor-pointer" />
        <IoAppsSharp className="cursor-pointer" />
        <div className="relative">
          <BsBell className="cursor-pointer" />
          <span className="absolute bottom-2 left-2 text-xs bg-red-600 rounded-full px-1">
           9+
          </span>
        </div>
        <img src={me} alt="" className="cursor-pointer  w-10 h-10 rounded-full" />
      </div>
    </div>
  )
}

export default Navbar