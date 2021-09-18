import React, {useState} from 'react';
import PropTypes  from 'prop-types';

export const AddInput = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => setInputValue(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length > 1) {
            setCategories( cats => [ inputValue, ...cats ] );
            setInputValue('');
        }
    }


    return (
        <form onSubmit= { handleSubmit }>
            <input 
                type="text"
                placeholder="Buscar Gifs"
                value= { inputValue }
                onChange= { handleInputChange }
            />
        </form>
    )
}


AddInput.propTypes = {
    setCategories: PropTypes.func.isRequired,  
}