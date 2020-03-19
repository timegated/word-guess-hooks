import React from 'react';
import './UserGuess.css'
const UserGuess = ({userGuess, alphabet, handleUserGuess}) => {
    console.log(userGuess)
    return (
        <div className="userGuess">
        {alphabet.map(letter => {
            return (
                <button      
                onClick={handleUserGuess}
                value={letter} 
                key={letter}>
                    {letter}
                </button>
            )
        })}
        </div>
    )
}

export default UserGuess;