import React from 'react'
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import "./events.css"


export default function Events() {
    return (
        <> 
        
        <Topbar/>
        <div className="eventsContainer">
            <Sidebar/>
            <Feed/>
            <Rightbar/>
        </div>
        </>
    )
}