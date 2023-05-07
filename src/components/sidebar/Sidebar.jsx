import "./sidebar.scss";
import { Link } from "react-router-dom";
import logo from "../../resource/logo.png";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import MenuIcon from "@mui/icons-material/Menu";
import StarsIcon from "@mui/icons-material/Stars";
import ClearIcon from "@mui/icons-material/Clear";
import GroupIcon from "@mui/icons-material/Group";
import {  useState } from "react";

const Sidebar = ({isSidebarOpen}) => {
  let initialDashboardList = [
    { id: 1, name: "Finance",isFavorite: false },
    { id: 2, name: "Sales", isFavorite: false },
  ];

  const [dashboardList, setDashboardList] = useState(initialDashboardList);
  const [newDashboardItem, setNewDashboardItem] = useState("");
  const [addingNewItem, setAddingNewItem] = useState(false);
  const [selectedFavItems, setSelectedFavItems] = useState([]);
  // const [sortedList, setSortedList] = useState([...dashboardList]);
  // useEffect(() => {
  //   sortDashboardList();
  // }, [selectedFavItems]);
  
  const addDashboardItem = () => {
    if (dashboardList.length >= 10) {
      return;
    }

    if(!addingNewItem){
      const newId = dashboardList.length + 1;
      let newItem = { id: newId, name: "" };
      setDashboardList([...dashboardList, newItem]);
      setAddingNewItem(true);
    }
   

   
  };

  const removeDashboardItem = (id) => {
    const updatedItems = dashboardList.filter((item) => item.id !== id);
    setDashboardList(updatedItems);
  };

 
const handleItemNameChange = (id,newName) => {
  const updatedItems = dashboardList.map((item)=>{
    if (item.id === id){
      return {...item, name: newName};
    }
    return item;
  });
  setDashboardList(updatedItems);
  setAddingNewItem(false);
};

  const handleInputChange = (event) => {
    setNewDashboardItem(event.target.value);
  };


  const handleInputKeyDown = (event,id) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleItemNameChange(id,newDashboardItem);
      setNewDashboardItem("");

    }
  };

 const handleFavSelect = (id) => {
  const isSelected = selectedFavItems.includes(id);
  if (isSelected) {
    setSelectedFavItems(selectedFavItems.filter((item) => item !== id));
  } else {
    const updatedItems = dashboardList.map((item) =>
      item.id === id ? { ...item, isFavorite: true } : item
    );
    setDashboardList(updatedItems);
    setSelectedFavItems([...selectedFavItems, id]);
  }
 }
  
//  const sortDashboardList = () => {
//   const favorites = sortedList.filter((item) => item.isFavorite);
//   const nonFavorites = sortedList.filter((item) => !item.isFavorite);
//   const sorted = [...favorites, ...nonFavorites];

// }


  return (
<>
{isSidebarOpen && <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <img className="logo" src={logo} alt="" />
        </Link>
      </div>

      <div className="search">
        <SearchOutlinedIcon />
        <input type="text" placeholder="Search" />
      </div>

      <div className="center">
        <ul>
          <p className="title">My Dashboard</p>
          <hr />
          {dashboardList?.map(({ id, name }) => {
            return (
              <li id={id}>
                {name ? (
                  <>
                    <MenuIcon className="menu-icon" />
                    <span>{name}</span>
                    <StarsIcon  className={selectedFavItems.includes(id) ? "fav-icon-selected" : "fav-icon"} onClick={()=>{handleFavSelect(id)}} />
                    <ClearIcon
                      className="del-icon"
                      onClick={() => removeDashboardItem(id)}
                    />
                  </>
                ) : (
                  <>
                  <input
                   className="input-item"
                    placeholder="Add name and press Enter"
                    type="text"
                    value={newDashboardItem}
                    onKeyDown={(e)=>{handleInputKeyDown(e,id)}}
                    onChange={handleInputChange}
                  
                    autoFocus // focus the input field automatically when it appears
                  />
                  {/* <ClearIcon
                      className="del-icon"
                     
                    /> */}

                    </>
                )}
              </li>
            );
          })}

         

          <div style={{ textAlign: "center" }} >
            {" "}
            <AddCircleIcon className="add-icon" onClick={addDashboardItem} />
          </div>
        </ul>
      </div>

      <div className="bottom">
        <ul>
          <span>
            <p className="title">Shared</p>
            <GroupIcon className="shared-icon" />
          </span>

          <hr />
          <li>
            <MenuIcon className="menu-icon" />
            <span>Shared01</span>

            <StarsIcon className="fav-icon" />
            <ClearIcon className="del-icon" />
          </li>
          <li>
            <MenuIcon className="menu-icon" />
            <span>Shared02</span>
            <StarsIcon className="fav-icon" />
            <ClearIcon className="del-icon" />
          </li>
        </ul>
      </div>
    </div> }


</>


    
  );
};

export default Sidebar;
