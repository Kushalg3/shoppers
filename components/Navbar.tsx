import Image from "next/image";
import { logo } from "../public/assets/images/index";
import { IoSearchOutline } from "react-icons/io5";
import { AiOutlineHeart, AiOutlineUser } from "react-icons/ai";
import { BsCart2 } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="w-full bg-blue text-white">
      <div className="max-w-container mx-auto h-20 px-4 flex items-center justify-between gap-2">
        {/* Logo section */}

        <div className="navBarHover">
          <Image src={logo} className="w-44" alt="logo" />
        </div>

        {/* Department button */}

        <div className="navBarHover">
          <div className="w-4 grid grid-cols-2 gap-[2px]">
            <span className="w-1.5 h-1.5 border-[1px] border-white inline-flex"></span>
            <span className="w-1.5 h-1.5 border-[1px] border-white inline-flex"></span>
            <span className="w-1.5 h-1.5 border-[1px] border-white inline-flex"></span>
            <span className="w-1.5 h-1.5 border-[1px] border-white inline-flex"></span>
          </div>
          <p className="text-base font-semibold">Departments</p>
        </div>

        {/* Services Button */}

        <div className="navBarHover">
          <div className="w-4 grid grid-cols-2 gap-[2px]">
            <span className="w-1.5 h-1.5 rounded-md border-[1px] border-white inline-flex"></span>
            <span className="w-1.5 h-1.5 rounded-md border-[1px] border-white inline-flex"></span>
            <span className="w-1.5 h-1.5 rounded-md border-[1px] border-white inline-flex"></span>
            <span className="w-1.5 h-1.5 rounded-md border-[1px] border-white inline-flex"></span>
          </div>
          <p className="text-base font-semibold">Services</p>
        </div>

        {/* Search box */}

        <div className="h-10 flex flex-1 relative">
          <input
            className="h-full w-full rounded-full px-4 text-black text-base outline-none border-[1px] border-transparent focus-visible:border-black duration-200"
            type="text"
            placeholder="Search everything at Shoppers online and in store"
          />
          <span className="absolute w-8 h-8 rounded-full flex items-center justify-center top-1 right-1 bg-yellow text-black text-xl">
            <IoSearchOutline />
          </span>
        </div>

        {/* My Items button */}

        <div className="navBarHover">
          <AiOutlineHeart />
          <div>
            <p className="text-xs">Recorder</p>
            <h2 className="text-base font-semibold -mt-1">My Items</h2>
          </div>
        </div>

        {/* Sign in Account */}

        <div className="navBarHover">
          <AiOutlineUser className="text-lg" />
          <div>
            <p className="text-xs">Sign In</p>
            <h2 className="text-base font-semibold -mt-1">Account</h2>
          </div>
        </div>

        {/* Cart Button */}

        <div className="navBarHover relative flex-col justify-center items-center">
          <BsCart2 className="text-2xl" />
          <p className="text-[10px] -mt-2">$0.00</p>
          <span className="absolute w-4 h-4 bg-yellow text-black top-0 right-4 rounded-full flex items-center justify-center font-bodyFont text-xs">0</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
