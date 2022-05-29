import React from 'react';
import ActiveCard from './ActiveCard';
import './ProfileStack.css'

console.log("hello world");


const profiles = [
    {
        "images" : ["bayes.jpg", "bayes-dead.jpg"],
        "name" : "Thomas Bayes",
        "age" : "30",
        "distance" : 21, 
        "gender" : "Male",
        "sClass" : "Englishman",
        "quote" : "I am a mathematician and a priest",
        "description" : "I studied logic and theology at University of Edinburgh but had the opportunity to study mathematics at some point too. The evolution work has applications in modern machine learning particularly in ecommerce, search algorithms, and advertisements.",
        "id": 1
    },
  {
        "images" : ["sri1.png"],
        "name" : "Srinivasa Ramanujan",
        "age" : "32",
        "distance" : 20, 
        "gender" : "Male",
        "sClass" : "Indian",
        "quote" : "Indian mathematician born in 1887 in British Ruled India.",
        "description" : "I am a devout Hindu. I was a prodigy with no formal training in mathematics. I made major contributions in number theory, infinite series, and continued fractions. I also love game theory, computer science, economics, and social science",
        "id": 3
    },
    {
        "images" : ["euclid1.png" , "euclid2.jpg", "euclid3.jpeg", "euclid4.jpeg"],
        "name" : "Euclid",
        "age" : "60",
        "distance" : 34, 
        "gender" : "Male",
        "sClass" : "Greek",
        "quote" : "A Greek mathematician during 300 BC in Alexandria Egypt",
        "description" : "I am known for my treatsies on geometry and built a logical and rigorous foundation of geometry through definitions. I wrote 'Elements' which is composed of 13 books. Book I proves various theorems on parallelograms and triangles, ending with a proof of the Pythorean theorem Book II is about geometric algebra Book III is about circles Book IV is about regular polygons",
        "id": 2
    },
  
  
  
]














const ProfileStack = () => {
    
    const list = []

    profiles.forEach(profile => 
        list.push(<ActiveCard {...profile} />)       
        )
    return (
        <div>
            {list}
        </div>
    )

}

export default ProfileStack;