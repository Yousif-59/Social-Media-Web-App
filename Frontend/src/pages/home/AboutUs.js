import React from 'react'
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import ProfileInfo from '../../components/profileInfo/ProfileInfo';
import "./aboutUs.css"


export default function AboutUs() {
    return (
        <> 
        
        <Topbar/>
        <div className="aboutUsContainer">
            <Sidebar/>
            <ProfileInfo/>
            <Rightbar/>
        </div>
        </>
    )
}