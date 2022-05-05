import React, { useState } from 'react'
import './Dropdown.styles.css'

const Dropdown = props => {
    const [openMenu, setOpenMenu] = useState(false)

    const pushToRoute = route => {
        props.history.push(route)
        setOpenMenu(false)
    }
    return (
        <div className='Dropdown'>
            <div className="menu-item"
            onClick={() => setOpenMenu(!openMenu)}>
                ☰dropdown
            </div>
            <div className='resources' onClick={() => pushToRoute("/resources") }>
                Resources
                </div>

        </div>
    )
}

export default Dropdown