import React from 'react'

import SideBarItem from "./SideBarItem"
import { items } from "./sidebar"

import "./style.css"

export const SideBar = () => {

    return <div id="sidebar" className="sidebar" >
        {items.map((item, index) => <SideBarItem key={index} item={item} />)}
    </div >
}
