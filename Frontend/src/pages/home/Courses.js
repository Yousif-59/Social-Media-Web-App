import React from 'react'
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import "./courses.css"


export default function Courses() {
    return (
        <> 
        
        <Topbar/>
        <div className="coursesContainer">
            <Sidebar/>
            <Feed/>
            <Rightbar/>
        </div>
        </>
    )
}