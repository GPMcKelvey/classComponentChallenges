import React from 'react'

const DogDisplay = (props) => {
    return (
        <div>
            <img src={props.img} alt="doggo" height='400px'/>
        </div>
    )
}

export default DogDisplay