import React from 'react'

const Card = (props) => {
    return (
        <div className="card">
            <img src={props.imgscr} alt={props.sname} />
            <h3>{props.sname}</h3>
            <span>{props.title}</span><br />
            <a href={props.links}>
                <button>Watch Now</button>
            </a>
    </div>
    )
}

export default Card
