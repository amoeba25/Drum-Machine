import {React, useState} from 'react'
import './index.css'

const bankOne = [
  {
    keyCode: 'KeyQ',
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  },
  {
    keyCode: 'KeyW',
    keyTrigger: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  },
  {
    keyCode: 'KeyE',
    keyTrigger: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  },
  {
    keyCode: 'KeyA',
    keyTrigger: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  },
  {
    keyCode: 'KeyS',
    keyTrigger: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  },
  {
    keyCode: 'KeyD',
    keyTrigger: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
  {
    keyCode: 'KeyZ',
    keyTrigger: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
  {
    keyCode: 'KeyX',
    keyTrigger: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  {
    keyCode: 'KeyC',
    keyTrigger: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  }
];

const Display = ({id, placeholder}) => {
  return (
    <div id={id}>
      <p>{placeholder}</p>
    </div>
  )
}

const Audio = ({id}) => {
  const audioClip = bankOne.find((audio) => audio.keyTrigger === id);
  return (
    <audio id= {id} className='clip' src={audioClip.url} autoPlay={false} ></audio>
  )
}

const TouchPad = ({text, classname, playSound, id}) => {
  return (
  <button className={classname} onClick= {playSound} id={id}> 
  <Audio id={text}/>
    {text}
  </button> 
  )
}

const App = () => { 

  const [display, setDisplay] = useState('display'); 

  //when key is pressed
  document.addEventListener('keydown', (event) => {
      
    const findKey = bankOne.find((audio) => audio.keyCode === event.code);
    if(findKey === undefined) {
      return NaN;
    }
    const key = document.getElementById(findKey.id);
    key.click();
    key.focus()
  });

  //sound triggered on button press
  const start = (e) => {
    const audio = document.getElementById(e.target.textContent); 
    setDisplay(e.target.id)
    audio.play()
  }

  //makes all the elements
  const Touch = bankOne.map((sound) => 
    <TouchPad key={sound.id} text={sound.keyTrigger} classname='drum-pad' playSound={(e)=> start(e)} id={sound.id} />
  );

  return (
    <div>
      <h1 id='title'>The Drum Machine</h1>
      <Display id='display' placeholder={display} />
      <div id='touchpad'>
        {Touch}
      </div>
    </div >
  );
}

export default App;