import React, {useState} from 'react';
import Word from './components/Word/Word';
import UserGuess from './components/UserGuess/UserGuess';
import './App.css';
// Application state should contain the available words? 
const App = () => {
  const wordArray = ['word1','word2','word3','word4','word5']
  const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','x','y','z']
  const [word, setWord] = useState(wordArray)
  const [userGuess, setUserGuess] = useState('')
  const randomWord = word[Math.floor(Math.random() * word.length)]

  const handleUserGuess = (event) => {
    console.log(event.target.value)
  }
  return (
    <div className="App">
      <Word word={randomWord} />
      <UserGuess userGuess={userGuess} handleUserGuess={handleUserGuess} alphabet={alphabet}/>
    </div>
  );
}

export default App;
