import React from 'react'
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import "./chat.css"


export default function Chat() {
    return (
    <> 
        
        <Topbar/>
        <div className="chatContainer">
            <Sidebar/>
            <Feed/>
            <Rightbar/>
        </div>
        </>
    )
}