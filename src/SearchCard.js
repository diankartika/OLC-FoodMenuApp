import { useState } from "react";
import './SearchCard.css';

const SearchCard = () => {
    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (event) => {
        const { value } = event.target

        setInputValue(value)
    }

    return (
        <form className='SearchCard'>
            <input className='input-col' type='text' onChange={handleInputChange} value={inputValue} placeholder='Search recipes'></input>
            <button type='submit'>Search</button>
        </form>

    )
}

export default SearchCard;