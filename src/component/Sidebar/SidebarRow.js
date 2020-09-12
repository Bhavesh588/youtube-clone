import React from 'react'
import './SidebarRow.css';

function SidebarRow({ Icon, title, selected, wrap }) {
    return (
        <div className={`sidebarRow ${selected && "selected"}`}>
            <Icon className="sidebarRow__icon" />
            <h2 className={`sidebarRow__title ${wrap && "wrap"}`}>{title}</h2>
        </div>
    )
}

export default SidebarRow
