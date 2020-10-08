import React from 'react'

export default function Bar({ fill, skill, percent, delay}) {
    return (
        <div className="bar flex">
        <div className="bar fill" style={{transition: `0.3s ${delay}s width ease-out`, ...fill}}></div>
    <div className="tag bold flex">{skill}</div>
    <span id="percent">{percent}</span>
      </div>

    )
}

