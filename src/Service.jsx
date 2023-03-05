import React from 'react';
import Card from './Card';
import Sdata from "./Sdata";




// const Ncard = (val) => {
//     return(
//     <Card imgsrc={val.img}
//     title = {val.title} />
// )}
const Service = () => {
 
 return(

 Sdata.map((val)=>{
        return(
            <Card 
                imgsrc = {val.img}
                title = {val.title}
            />
        )
    })
    
  );
}


export default Service;




// when we have to write somewhere in between div then we can use this
// Sdata.map((val,ind)=>{
//     return(
//         <Card 
//             imgsrc = {val.img}
//             title = {val.title}
//         />
//     )
// })
