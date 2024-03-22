
import React, { useState, useEffect } from 'react';

export default function Button(){
  function handleClick(){
    alert('Hello Good Morning')
  }

  return(
    <>
    <button onClick={handleClick}>
      Do Nothing
    </button>
    <PlayButton movieName='Idiot'/>
    <UploadButton />
    <Button2 onSamsh={()=>alert('Playing')}>Play Movie</Button2>
    <Button2 onSamsh={()=>alert('Uploading')}>Uploading</Button2>
    <LightSwitch />
    </>
  );

 
}

//Reading the Props in Event Handler


export function AlertButton({message,children}){
  function handleClick(){
    alert(message)
  }
  return(

   <button onClick={handleClick}>
    {children}
   </button>
   
  );
}

//Passing the Eventhandler as a Prop

export function Button1({onClick,children}){
  return(
    <button onClick={onClick}>
      {children}
    </button>
  );
}

export function PlayButton({movieName}){
  function handlePlayClick(){
    alert('Playing Movie')
  }
  return(
    <button onClick={handlePlayClick}>Play " 
    {movieName}"</button>
  );
}

export function UploadButton(){
  return(
    <button onClick={()=>alert('Uploading')}>Upload Image</button>
  );
}

//Naming event handler props 

export function Button2({onSamsh,children}){
  return(
    <button onClick={onSamsh}>
      {children}
    </button>
  );
}



export function LightSwitch() {
  const [isBackgroundBlack, setIsBackgroundBlack] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = isBackgroundBlack ? 'black' : 'white';
  }, [isBackgroundBlack]);

  function handleClick() {
    setIsBackgroundBlack(prevIsBackgroundBlack => !prevIsBackgroundBlack);
  }

  return (
    <button onClick={handleClick}>
      Toggle the lights
    </button>
  );
}
