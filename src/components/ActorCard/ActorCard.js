import React from "react";
import "./ActorCard.css";

const ActorCard = props => (
    <div className="card" value={props.id} onClick={() => props.onClick(props.id)}>
        <div className="img-container">
            <img alt={props.name} src={props.image} />
        </div>
    </div>
);

export default ActorCard;
