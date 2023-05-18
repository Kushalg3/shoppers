import Image from "next/image";
import { phoneImg } from "@/public/assets/images";
import { FiChevronDown } from "react-icons/fi";
import { MdOutlineLocationOn } from "react-icons/md";
import { TbBrandShopee } from "react-icons/tb";

const NavBarButton = () => {
  return (
    <div className="max-w-container mx-auto py-2 px-6 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 cursor-pointer">
          <Image className="w-6" src={phoneImg} alt="Phone Image" />
          <p className="text-sm font-semibold">How do you want your items?</p>
          <FiChevronDown />
          <span className="w-[1px] h-4 bg-white inline-flex ml-2"></span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 cursor-pointer">
            <MdOutlineLocationOn />
            <p className="text-sm text-zinc-100">Sacremento, 95829</p>
          </div>
          <div className="flex items-center gap-1 cursor-pointer">
            <TbBrandShopee />
            <p className="text-sm text-zinc-100">Sacremento Supercenter</p>
          </div>
        </div>
      </div>
      <ul className="flex text-sm font-semibold gap-6">
        <li className="bottomNavBarLi">Deals</li>
        <li className="bottomNavBarLi">Easter</li>
        <li className="bottomNavBarLi">Grocery & Essentials</li>
        <li className="bottomNavBarLi">Home</li>
        <li className="bottomNavBarLi">Tech</li>
        <li className="bottomNavBarLi">Fashion</li>
        <li className="bottomNavBarLi">Auto</li>
        <li className="bottomNavBarLi">Shoppers+</li>
      </ul>
    </div>
  );
};

export default NavBarButton;
