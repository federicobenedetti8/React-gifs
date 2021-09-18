import React from 'react';
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

    
    const { data:imgs, loading } = useFetchGifs(category);


    return (
        <>    
            <h4> { category } </h4>

            <p className="animate__flash"> 
              <b> { loading && "CARGANDO ..." } </b>
            </p>
            
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


