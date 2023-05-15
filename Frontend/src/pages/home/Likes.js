import React from 'react'
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
//import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import "./likes.css"


export default function Likes() {
    return (
    <>
        
        <Topbar/>
        <div className="likesContainer">
            <Sidebar/>
            <Rightbar/>
                Likes Page
        </div>
        </>
    )
}