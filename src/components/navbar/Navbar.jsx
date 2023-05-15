import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState } from "react";
import { useEffect } from "react";

const Navbar = ({ closeSidebar }) => {
  const navItems = [
    { id: 1, name: "Dashboard", isSelected: false },
    { id: 2, name: "Play Area", isSelected: false },
    { id: 3, name: "Widgets", isSelected: false },
    { id: 4, name: "Templates", isSelected: false },
    { id: 5, name: "Data Locker", isSelected: false },
  ];

  const [navList, setNavList] = useState(navItems);

  const selectTab = (id) => {
    const updatedNavList = navItems.map((item) => {
      if (item.id === id) {
        item.isSelected = !item.isSelected;
      }
      return item;
    });
    setNavList(updatedNavList);
  };

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="menu">
          <MenuIcon className="icon" onClick={() => closeSidebar()} />
        </div>

        <div className="search">
          <SearchOutlinedIcon className="icon" />
        </div>
        <div className="nav-items">
          <ul>
            {navList.map((item) => (
              <li
                key={item.id}
                onClick={() => selectTab(item.id)}
                style={{
                  backgroundColor: `${
                    item.isSelected ? " #8799b2" : "#296296"
                  }`,
                }}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>

        <div className="items">
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <AccountCircleIcon className="icon" />
          </div>
          <div className="item">
            <MoreVertIcon className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
