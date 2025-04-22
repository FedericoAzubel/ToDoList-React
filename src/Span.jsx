import React from 'react'

const Span = ({ msg }) => {
    return (
        <div className="span_container">
            <span className={msg.type}>{msg.text}</span>
        </div>
    )
}

export default Span
