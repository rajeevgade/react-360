import React from 'react'

const button = (props) => {
    return (
        <div className="v360-menu-btns" onClick={props.clicked}>
            <i className={props.icon}></i>{props.text}
        </div>
    )
}

export default button;