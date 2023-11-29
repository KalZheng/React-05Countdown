import { useState, useRef } from "react";

export default function Player() {
  // const playerName = useRef();
  const [enterPlayerName, setEnterPlayerName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleChange(event){
    setSubmitted(false);
    setEnterPlayerName(event.target.value);
  }

  function handleClick(){
    setSubmitted(true);
    // setEnterPlayerName(playerName,current.value);
  }
  
  return (
    <section id="player">
      <h2>Welcome {submitted ? enterPlayerName : 'unknown entity'}</h2>
      <p>
        <input ref={playerName} type="text" onChange={handleChange} value={enterPlayerName}/>
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
