import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { slugTranslate } from "../../utility/slugTranslate"

export default function SideBarItem({ item }) {
    const [open, setOpen] = useState(false)

    const location = useLocation()
    const searchParams = new URLSearchParams(location.search);
    const type = searchParams.get("type")
    const slug = searchParams.get("name")

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
        const active = slug && type && slugTranslate({ target: type, slug })
        return (
            <Link to={item.path || "#"} className={`sidebar-item plain ${active && active.path === item.path ? "active" : ""}`}>
                {/* {item.icon} */}
                {item.title}
            </Link>)
    }
}