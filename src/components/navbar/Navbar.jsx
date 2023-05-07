import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Navbar = ({closeSidebar}) => {
  const navItems = ['Dashboard', 'Play Area', 'Widgets','Templates', 'Data Locker'];
 
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="menu">
          <MenuIcon className="icon" onClick={()=>closeSidebar()} />
        </div>

        <div className="search">
          <SearchOutlinedIcon className="icon" />
        </div>
        <div className="nav-items">
          <ul>
            {navItems.map(item =><li key={item} >{item}</li>)}
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
