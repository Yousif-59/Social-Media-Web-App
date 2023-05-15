import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@mui/icons-material";
import  { Link, useMatch, useResolvedPath } from "react-router-dom"
import {AuthContext} from "../../context/AuthContext";
import { useContext } from "react";

export default function Topbar() {

  const {user} = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
      <Link to="/" style={{textDecoration:"none"}}>
        <span className="logo">Borgs-Social</span>
      </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <ul class = "links">
          <li><CustomLink to="/" className="topbarLink">Home</CustomLink></li>
          <li><CustomLink to="/contactUs" className="topbarLink">Contact Us</CustomLink></li>
          </ul>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <Link to={`/profile/${user.username}`}>
        <img src={user.profilePicture ? PF + user.profilePicture : PF + "person/noAvatar.png" } alt="" className="topbarImg"/>
        </Link>
      </div>
    </div>
  );
}

function CustomLink({ to,  children, ...props}) {
  const resolvePath = useResolvedPath(to) // grab url
  const isActive = useMatch({ path: resolvePath.pathname, end: true})
  return (
    <li className={isActive ? "active" : "" }>
    <Link to={to}{...props}>
    {children}
    </Link>
    </li>
  )
}