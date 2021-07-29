import React from 'react'

const Button = ({text, color, onClick, showAdd}) => {
    return <button style={{backgroundColor: color}} onClick={onClick} className="btn">{text}</button>

}

export default Button