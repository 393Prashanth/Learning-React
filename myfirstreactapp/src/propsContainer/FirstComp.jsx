

import { useState } from 'react';
// import { sculptureList } from './data.js';

// export default function Gallery() {
//   const [index, setIndex] = useState(0);
//   const [showMore, setShowMore] = useState(false);

//   let hasPrev = index > 0;
//   let hasNext = index < sculptureList.length - 1;

//   function handlePrevClick() {
//     if (hasPrev) {
//       setIndex(index - 1);
//     }
//   }

//   function handleNextClick() {
//     if (hasNext) {
//       setIndex(index + 1);
//     }
//   }

//   function handleMoreClick() {
//     setShowMore(!showMore);
//   }

//   let sculpture = sculptureList[index];
//   return (
//     <>
   
//     <Form />
//       <button
//         onClick={handlePrevClick}
//         disabled={!hasPrev}
//       >
//         Previous
//       </button>
//       <button
//         onClick={handleNextClick}
//         disabled={!hasNext}
//       >
//         Next
//       </button>
//       <h2>
//         <i>{sculpture.name} </i> 
//         by {sculpture.artist}
//       </h2>
//       <h3>  
//         ({index + 1} of {sculptureList.length})
//       </h3>
//       <button onClick={handleMoreClick}>
//         {showMore ? 'Hide' : 'Show'} details
//       </button>
//       {showMore && <p>{sculpture.description}</p>}
//       <img 
//         src={sculpture.url} 
//         alt={sculpture.alt}
//       />
//     </>
//   );
// }


export default function Form(){

    const [firstName,setFirstName]=useState('');
    const[lastName,setLastName]=useState('');

    function handleFirstNameChange(e){
        setFirstName(e.target.value);
    }

    function handleLastNameChange(e){
        setLastName(e.target.value);
    }
    function handleResetNames(){
        setFirstName('');
        setLastName('');
    }
    return(
        <>
        <Clock />
        <FeedbackForm />
        <form onSubmit={e=>e.preventDefault()}>

            <input placeholder="FirstName"
            value={firstName}
            onChange={handleFirstNameChange}
            />
            <input placeholder="LastName"
            value={lastName}
            onChange={handleLastNameChange} />
            <h1>Hi {firstName} {lastName}</h1>
            <button onClick={handleResetNames}>Reset</button>
        </form>

        </>
    );
}

export function FeedbackForm(){

    const [isSent,setIsSent]=useState(false);
    const [message,setMessage]=useState('');
    if(isSent){
        return <h1>Thank You</h1>
    }else{
        return(
           <form onSubmit={e=>{
            e.preventDefault()
            alert(`sending "${message}"`);
            setIsSent(true);
        }}>
            <textarea placeholder='Message'
            value={message}
            onChange={e=>setMessage(e.target.value)}/>
            <br/>
            <button type="submit">Send</button>
            </form>
        );
    }
}

export function Clock({ time }) {
    return (
      <>
        <h1>{time}</h1>
        <input />
      </>
    );
  }