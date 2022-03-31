import React, {useState, useEffect} from 'react';
import './PictureSlider.css';
const PictureSlider = (props) => {

    const [index, setIndex] = useState(0);

    const increaseIndex = () => {
        if (index !== props.images.length-1){
            setIndex(index+1);
        }
    }

    const decreaseIndex = () => {
        if (index !== 0){
            setIndex(index-1);
        }
    }

    useEffect( () => {
         props.images.forEach( (image) => {
            // console.log(image);
            const img = new Image();
            img.src = image;
            // console.log(img)
        })
        // document.title = "hayley";
    })
    
    // let  poo = [];

    // useEffect(

    //     () => {
        
    //         props.images.forEach( (image) => {
    //             const x = require(`../../public/${image}`)
    //             poo.push(x)
    //         })
    //         // const img = require(`../../public/${props.images[0]}`);
    //         console.log(poo[0]);
            
    //     }
        
    // )
    // console.log(poo);
    return (

        <div 
            className="image-container" 
            style={{
                // backgroundImage : `url(bnw-tindercards/${props.images[index]})` 
                backgroundImage: `url(${process.env.PUBLIC_URL}/${props.images[index]})`
                // backgroundImage : `url(${image})`
                }}
        >
            {  index > 0 ? 
            <img src={`${process.env.PUBLIC_URL}/left.svg` } className="arrow" alt="left-arrow-icon" 
            onClick={() => decreaseIndex()}/ >   
            : <div></div>
            } 
                
            {  index < props.images.length-1 ? 
            <img src={`${process.env.PUBLIC_URL}/right.svg` } className="arrow" alt="right-arrow-icon" 
            onClick={() => increaseIndex()}/> 
            : <div></div>}
        </div>
 
    )


}


export default PictureSlider;