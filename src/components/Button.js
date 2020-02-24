import React from 'react'

const button = (props) => {
    return (
        <div class="v360-menu-btns" onClick={props.clicked}>
            <i class={props.icon}></i>
        </div>
    )
}

export default button;