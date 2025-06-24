import React, { useContext, useEffect, useRef, useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { MoreIcon, NotificationIcon, ProfileIcon } from "../assets/Svgs";
import { Main, Navbar } from "../MuiComponents/MuiComponents";
import Sidebar from "../Dashboard/Sidebar";
import { Link, Outlet } from "react-router-dom";
import useOutSideClick from "../CustomHooks/useOutSideClick";
import { appContext } from "../Context/Context";

export default function Layout() {
  const { isMobileScreen } = useContext(appContext);
  const [open, setOpen] = useState(!isMobileScreen);
  const [notificationCount, setNotificationCount] = useState(2);
  const drawerRef = useRef();

  useOutSideClick(drawerRef, () => {
    open && isMobileScreen && setOpen(false);
  });

  const toggleSidebar = () => {
    setOpen((prev) => !prev);
  };

  return (
    <Box className="flex">
      <Navbar position="fixed" open={open}>
        {((!open && isMobileScreen) || !isMobileScreen) && (
          <MoreIcon
            onClick={toggleSidebar}
            className="cursor-pointer ml-[14px] pr-[4px]"
          />
        )}
        <div className={`flex gap-3.5 mr-8 ${(!open && isMobileScreen) ? "": "justify-end grow"}`}>
          <div className="relative">
            <span className="absolute bg-white text-[var(--navbar-color)] flex justify-center items-center font-bold -top-1 -right-1 rounded-full text-[12px] h-4 w-4 ]">
              {notificationCount}
            </span>
            <NotificationIcon />
          </div>
          <Link to={"/profile"}>
            <ProfileIcon className="cursor-pointer" />
          </Link>
        </div>
      </Navbar>
      <Sidebar isOpen={open} drawerRef={drawerRef} />
      <Outlet />
    </Box>
  );
}
