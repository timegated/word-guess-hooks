import React from 'react';
import Blanks from '../Blanks/Blanks';
import './Word.css'

const Word = ({ word }) => {
    const letters = word.split('')
    return (
    <div className="blanks">
    <Blanks letters={letters} />
    </div>
    )
}

export default Word;