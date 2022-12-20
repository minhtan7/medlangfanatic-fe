import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { Link } from "react-router-dom"

export default function SideBarItem({ item }) {
    const [open, setOpen] = useState(false)


    if (item.children) {
        return (
            <div className={open ? "sidebar-item open" : "sidebar-item"}>
                <div className="sidebar-title">
                    <span >
                        {item.icon}
                        {item.title}
                    </span>
                    <FontAwesomeIcon className="toggle-btn"
                        icon={faChevronDown}
                        onClick={() => setOpen(!open)}
                    />
                </div>
                <div className="sidebar-content">
                    {item.children.map((child, index) => <SideBarItem key={index} item={child} />)}
                </div>
            </div>
        )
    } else {

        return (
            <Link to={item.path || "#"} className="sidebar-item plain">
                {item.icon}
                {item.title}
            </Link>)
    }
}