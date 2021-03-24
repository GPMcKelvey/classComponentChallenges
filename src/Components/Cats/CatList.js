import React, { Component } from 'react';
 
const CatList = (props) => {
 return (
   <div>
     <ul>
     {
      props.cats.map(cat => {
        return (
          <li>{cat}</li>
        ) 
      })
    }
     </ul>
   </div>
 )
}
 
export default CatList;
