import React from 'react';

export const GifGridItem = ({ title, img }) => {


    return (   
        <div className="card animate__animated animate__bounce">
            <img src={ img } alt={ title }  width="250px" height="250px" />
            <h5> {title} </h5>
        </div>
    )
        

    
}
