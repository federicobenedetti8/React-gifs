import React, {useState} from 'react';
import {AddInput} from './components/AddInput';
import {GifGrid} from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Hunter X Hunter']);

    return (
        <>
            <h2>Gifs</h2>
            <hr/>      
            
            <AddInput setCategories={ setCategories } />

            <ol>
                {
                    categories.map( (category) => 
                        <li key={ category }> 
                            <GifGrid category = { category } /> 
                        </li>  
                    )
                }
            </ol>

        </>
    )
}

