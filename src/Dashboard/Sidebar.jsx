import React, { useContext, useRef, useState } from "react";
import { DRAWER_WIDTH } from "../MuiComponents/constants";
import { CompanyIcon, EditIcon, HomeIcon } from "../assets/Svgs";
import { Divider, Drawer, List, ListItem, ListItemButton } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import useOutSideClick from "../CustomHooks/useOutSideClick";
import { appContext } from "../Context/Context";

const Sidebar = ({ isOpen, drawerRef }) => {
  // const [activeIndex, setActiveIndex] = useState(0);
  const { isMobileScreen } = useContext(appContext);
  const location = useLocation();

  const items = [
    { title: "Home", icon: HomeIcon, route: "/" },
    { title: "Application", icon: EditIcon, route: "/application" },
    // { title: "Profile", icon: EditIcon, route: "/profile" },
  ];
  return (
    <Drawer
      ref={drawerRef}
      sx={{
        width: isOpen ? DRAWER_WIDTH : 0,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: DRAWER_WIDTH,
          boxSizing: "border-box",
        },
      }}
      className={`shadow-[4px_4px_10px_0_rgba(0,0,0,0.15)] h-screen ${
        isMobileScreen ? "absolute" : ""
      }`}
      variant="persistent"
      anchor="left"
      open={isOpen}
    >
      <div className="bg-[var(--navbar-color)] justify-center h-[39px] flex items-center gap-3.5">
        <CompanyIcon />
        <div className="text-white outfit-font text-xs font-extrabold">
          Admin Portal
        </div>
      </div>
      <Divider />
      <div className="py-[24px]">
        {items.map((item, index) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.route;
          return (
            <Link to={item.route}>
              <ListItem
                key={item.title}
                disablePadding
                className={isActive ? "border-r-[3px] border-[#1D77FF] " : ""}
              >
                <div className="flex gap-3.5 px-[16px] py-[14px] cursor-pointer w-full">
                  <Icon
                    className={isActive ? "text-[#1D77FF]" : "text-gray-400"}
                  />
                  <span
                    className={isActive ? "text-[#1D77FF]" : "text-gray-400"}
                  >
                    {item.title}
                  </span>
                </div>
              </ListItem>
            </Link>
          );
        })}
      </div>
    </Drawer>
  );
};

export default Sidebar;
