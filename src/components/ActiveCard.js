import React, {useState} from 'react';
import PictureSlider from './PictureSlider';
import './ActiveCard.css'

const ActiveCard = (props) => {

    const  [clicked, setClicked] = useState(false); 


    return (
        <>
        {!clicked ? 

        <div> 
            <div className="card">
            <PictureSlider images={props.images} />

            <div className="user-info">
                <div className="basic-info">
                    <div className="name">
                        {props.name}
                    </div>
                    <div className="age">
                        {props.age}
                    </div>
                </div>
                <div className="location">
                    <img id="location-icon" src="location.svg" alt="location icon"/>
                    <span>{props.distance} km away</span>
                </div>
                <div className="demographics">
                    {props.gender}, {props.sClass}
                </div>
            </div>

            <div className="description">
                <div className="quote">
                    <q>{props.quote}</q>
                </div>
                <div>
                    {props.description}
                </div>
            </div>
                <div className="rating-container">
                    <img className="rate" id="decline" src="x.svg" alt="decline icon" onClick={() => setClicked(true)}/>
                    <img className="rate" id="heart" src="heart2.svg" alt="heart icon" onClick={() => setClicked(true)}/>
                </div>
            </div>
        </div>

            : null
        }
        </>
    )   
}

export default ActiveCard;