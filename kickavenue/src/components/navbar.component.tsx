/** @format */
"use client";
import { SessionProvider, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
export default function Navbar() {
  return (
    <div className="w-full sticky top-0 z-10 ">
      <SessionProvider>
        {/* desktop */}
        <NavbarDesktop />
        {/* mobile */}
        <NavbarMobile />
      </SessionProvider>

      {/* 2nd Navbar */}
      <div className="flex p-4 overflow-x-auto w-full gap-6 md:justify-center items-center bg-white shadow-lg outline-1">
        <Link href="#" className="text-[#ed3293] text-nowrap">
          K-Brands
        </Link>
        <Link href="#" className="text-nowrap">
          Sneakers
        </Link>
        <Link href="#" className="text-nowrap">
          Apparel
        </Link>
        <Link href="#" className="text-nowrap">
          Luxury
        </Link>
        <Link href="#" className="text-nowrap">
          Electronics & Collectibles
        </Link>
      </div>
    </div>
  );
}

function NavbarDesktop() {
  const router = useRouter();
  const { data: session } = useSession();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="hidden md:flex pt-[16px] px-[32px] w-full bg-white ">
      <Link href={"/"}>
        <Image
          src="https://www.kickavenue.com/static/media/black-logo.6a064f19.svg"
          width={185}
          height={100}
          alt=""
        ></Image>
      </Link>
      <div className=" px-[7px] flex bg-[#f0f0f0] rounded-md mx-8 w-full">
        <div className="flex justify-center items-center w-[31px]  mr-1">
          <Image
            src="https://www.kickavenue.com/static/media/search-icon.39218494.svg"
            alt=""
            width={19}
            height={18}
          />
        </div>

        <input
          type="text"
          placeholder="Type any products here"
          className=" bg-[#f0f0f0] w-full focus:outline-none"
          name="search"
          onKeyDown={(e) => {
            if (e.key == "Enter")
              router.push("/?search=" + e.currentTarget.value);
          }}
        />
      </div>
      <div className="flex items-center ml-[-6px]">
        {session?.user?.id ? (
          <>
            <div className="flex w-[26] mx-1">
              <ShoppingCartIcon
                width={18}
                height={18}
                className="mr-2 hover:text-gray-400 cursor-pointer"
              ></ShoppingCartIcon>
            </div>

            <button onClick={handleClick} className="flex">
              <Image
                src={
                  "https://www.kickavenue.com/static/media/no-profile.a853341c.png"
                }
                alt="avatar"
                width={18}
                height={18}
                className="mr-2"
              />
              <div>{session.user.email}</div>
            </button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>My Account</MenuItem>
              <MenuItem onClick={() => signOut()}>Logout</MenuItem>
            </Menu>
          </>
        ) : (
          <>
            <Link className="px-[6px]" href={"/login"}>
              Login
            </Link>
            <Link className="px-[6px]" href={"/register"}>
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

function NavbarMobile() {
  return (
    <div className="flex justify-between md:hidden pt-[16px] px-[32px] w-full bg-white ">
      <Image
        src="https://www.kickavenue.com/static/media/search-icon.39218494.svg"
        alt=""
        className=" w-6 h-6"
        height={24}
        width={24}
      />

      <Image
        src="https://www.kickavenue.com/static/media/black-logo.6a064f19.svg"
        className="h-6 w-full"
        height={24}
        width={24}
        alt=""
      ></Image>

      <Image
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABIBAMAAACnw650AAAAG1BMVEUjIyMvLy////+Xl5f4+Pjz8/Ourq6GhoalpaWPtzYJAAAAZklEQVRIx2NQwgBOGCIMSkSAQakolAjAYGxsbG5sXIyXYAACQQZGAXzEEAaCRACGNCIAgwsRYOimp1FFVFREVFIpJwIQl3yHd+a0IAKMJrpRRdSuOQmCAcgwAgQg3TNnBxFgeNecAHACSX1/gu7fAAAAAElFTkSuQmCC"
        alt=""
        className=" w-6 h-6"
        height={24}
        width={24}
      />
    </div>
  );
}
