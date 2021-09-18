import React, {useEffect, useState} from 'react';
import { GifGridItem } from './GifGridItem';
import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({ category }) => {


    useEffect(() => {
        getGifs( category ).then( setImgs );
    }, [category])

    const [imgs, setImgs] = useState([]);

    


    return (
        <>    
            <h4> { category } </h4>
            <ol className="row-start">
                { 
                    imgs.map( img =>
                        <GifGridItem key={ img.id } { ...img } />
                    )
                }
              
            </ol>
        </>
    )
}


