import React, { useState } from "react";
import Image from "next/image";
import logo from "../Images/applelogowhite.png";
import Link from "next/link";
import {
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { useSelector } from "react-redux";
import { cartState } from "../reduxToolkit/cartSlice";
import SearchComponent from "./SearchComponent";
import { Badge } from "@mui/material";

function Header() {
  const session = false;
  const cartProducts = useSelector(cartState);
  const [showSearch, setShowSearch] = useState(false);
  return (
    <header className="h-14 w-full sticky z-30 top-0 flex justify-between items-center bg-[#323332] text-white ">
      <div className=" w-1/5 flex justify-center items-center">
        <div className="w-10">
          <Link href="/">
            <Image src={logo} alt="Apple logo" />
          </Link>
        </div>
      </div>

      {showSearch === false ? (
        <div className="hidden flex-1 items-center justify-center md:flex">
          <Link href="/store">
            <p className="text-xs mr-10 cursor-pointer">Store</p>
          </Link>
          <Link href="/mac">
            <p className="text-xs mr-10 cursor-pointer">Mac</p>
          </Link>
          <Link href="/ipad">
            <p className="text-xs mr-10 cursor-pointer">iPad</p>
          </Link>
          <Link href="/iphone">
            <p className="text-xs mr-10 cursor-pointer">iPhone</p>
          </Link>
          <Link href="/support">
            <p className="text-xs mr-10 cursor-pointer">Support</p>
          </Link>
        </div>
      ) : (
        <SearchComponent
          showSearch={showSearch}
          setShowSearch={setShowSearch}
        />
      )}

      <div className="w-1/5 flex items-center justify-center ">
        <button onClick={() => [setShowSearch(true)]}>
          <MagnifyingGlassIcon className="h-5 w-5 mr-10 cursor-pointer" />
        </button>
        <Link href="/cart">
          <div className="h-5 w-5 mr-10 cursor-pointer flex align-baseline">
            <Badge badgeContent={cartProducts.length} color="primary" className="h-5 w-5">
              <ShoppingBagIcon />
            </Badge>
          </div>
        </Link>

        {session ? (
          //add image here
          <span>image</span>
        ) : (
          <UserIcon className="h5 w-5 cursor-pointer" />
        )}
      </div>
    </header>
  );
}

export default Header;
