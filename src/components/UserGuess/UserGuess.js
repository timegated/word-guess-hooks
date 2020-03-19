import React from 'react';
import './UserGuess.css'
const UserGuess = ({userGuess, alphabet, handleUserGuess}) => {
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
        <p>{userGuess}</p>
        </div>
    )
}

export default UserGuess;