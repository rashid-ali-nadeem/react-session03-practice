import React from 'react';
import './MediaCard.css';

function MediaCard(props){
    return (
    <div className ="page">
        <h3>{props.title}</h3>
        <p>{props.body}</p>
        <div><img src={props.myimage} alt = "MyImage" title="My Gig"/></div>
    </div>
    )
}
export default MediaCard;
