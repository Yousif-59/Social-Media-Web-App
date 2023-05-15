import "./sidebar.css";
import {
  RssFeed,
  Chat,
  /*PlayCircleFilledOutlined,*/
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,
  ThumbUp,
} from "@mui/icons-material";
import { Users } from "../../dummyData";
import CloseFriend from "../closeFriend/CloseFriend";
import  { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <CustomLinkSB to = "/feed" className= "sidebarListItemText">Feed</CustomLinkSB>
          </li>
          <li className="sidebarListItem">
            <Chat className="sidebarIcon" />
            <CustomLinkSB to = "/chat" className= "sidebarListItemText">Chat</CustomLinkSB>
          </li>
          <li className="sidebarListItem">
            <ThumbUp className="sidebarIcon" />
            <CustomLinkSB to = "/likes" className= "sidebarListItemText">Likes</CustomLinkSB>
          </li>
          <li className="sidebarListItem">
            <Group className="sidebarIcon" />
            <CustomLinkSB to = "/groups" className= "sidebarListItemText">Groups</CustomLinkSB>
          </li>
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon" />
            <CustomLinkSB to = "/studentInfo" className= "sidebarListItemText">Student Info</CustomLinkSB>
          </li>
          <li className="sidebarListItem">
            <HelpOutline className="sidebarIcon" />
            <CustomLinkSB to = "/questions" className= "sidebarListItemText">Questions</CustomLinkSB>
          </li>
          <li className="sidebarListItem">
            <WorkOutline className="sidebarIcon" />
            <CustomLinkSB to = "/aboutUs" className= "sidebarListItemText">About Us</CustomLinkSB>
          </li>
          <li className="sidebarListItem">
            <Event className="sidebarIcon" />
            <CustomLinkSB to = "/events" className= "sidebarListItemText">Events</CustomLinkSB>
          </li>
          <li className="sidebarListItem">
            <School className="sidebarIcon" />
            <CustomLinkSB to = "/courses" className= "sidebarListItemText">Courses</CustomLinkSB>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          {Users.map((u) => (
            <CloseFriend key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
}

function CustomLinkSB({ to,  children, ...props}) {
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