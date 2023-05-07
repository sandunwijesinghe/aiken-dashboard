import "./widget.scss";
import StarsIcon from "@mui/icons-material/Stars";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import { useRef, useState } from "react";
import { Menu, MenuItem } from "@mui/material";

const Widget = ({ dataContainer, title }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [deleteWidget, setDeleteWidget] = useState(false);
  const buttonRef = useRef(null);
  return (
    <>
      {!deleteWidget && (
        <div className="widget">
          <div className="header">
            <div className="title">
              <p>{title}</p>
            </div>
            <div className="icons">
              {" "}
              <StarsIcon />
              <ZoomInIcon />
              <MoreVertIcon
              ref={buttonRef}
              style={{cursor: 'pointer',position: 'relative'}}
                className="icon"
                onClick={() => setMenuOpen(true)}
              />
              <Menu anchorEl={buttonRef.current} open={menuOpen} onClose={() => setMenuOpen(false)} >
                <MenuItem
                  onClick={() => {
                    /* Handle delete logic here */
                    setDeleteWidget(true);
                    setMenuOpen(false);
                  }}
                >
                 <p>Delete Widget</p>
                </MenuItem>
              </Menu>
            </div>
          </div>
          <div className="data">{dataContainer}</div>
        </div>
      )}
    </>
  );
};

export default Widget;
