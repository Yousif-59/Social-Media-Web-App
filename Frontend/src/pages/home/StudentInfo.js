import React from 'react'
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import "./studentInfo.css"


export default function StudentInfo() {
    return (
        <> 
        
        <Topbar/>
        <div className="studentInfoContainer">
            <Sidebar/>
            <Feed/>
            <Rightbar/>
        </div>
        </>
    )
}