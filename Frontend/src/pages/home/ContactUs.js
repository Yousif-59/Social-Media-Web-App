import React from 'react'
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/Sidebar'
//import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import ContactInfo from '../../components/contactInfo/ContactInfo';
import "./contactUs.css"


export default function ContactUs() {
    return (
        <> 
        
        <Topbar/>
        <div className="contactUsContainer">
            <Sidebar/>
            <ContactInfo/>
            <Rightbar/>
        </div>
        </>
    )
}