import React from 'react'
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import QuestionsInfo from '../../components/questionsInfo/QuestionsInfo'
import "./questions.css"


export default function Questions() {
    return (
        <> 
        
        <Topbar/>
        <div className="questionsContainer">
            <Sidebar/>
            <QuestionsInfo/>
            <Rightbar/>
        </div>
        </>
    )
}