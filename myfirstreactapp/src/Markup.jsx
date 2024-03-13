

export default function Markup(){

    const style = {
        color: 'red',
        fontSize: '20px'
      };
      
    return(
        <>
        <h1>Lammer's Todos</h1>
        <img  src="https://i.imgur.com/yXOvdOSs.jpg" 
      alt="Hedy Lamarr" 
      class="photo"
      />
    <ul>
        <li>Invent new Traffic lights</li>
        <li>Improve the spectrum technology</li>
        </ul>       
      <div style={style}>Styled Text</div>
        </>
    );
}

export const Avatar = () =>{

    const avatar="https://i.imgur.com/7vQD0fPs.jpg";
    const description="Gregorio Y. Zara" 
    const Name='Prashanth';
    const age=30;
    const painting={
        color:'blue',
        fontSize:'24px'
        
    }
   
   return(
        <>
       <img 
       className="avatar"
       src={avatar}
       alt={description}
       
       />
       <h1>Name:{Name}</h1>
       <p>Age:{age}</p>
        <h2 style={painting}>This is the heading one</h2>

        </>
    );
}

//Using the double curley braces


export const DoubleCurley = () =>{
const items=['Apple','Banana','Orange']
const Profile={
  firstName:"Prashanth",
  lastName:"N",
  Age:25,
  email:"prashanth@123"
}
  return(
        <>
        <ul style={{
          backgroundColor:"black",
          color:"red"
        }}>
          <li>Good photography</li>
          <li>Prepare for the Video</li>
          {items.map((item,index)=>(
            <li key={index}>{item}</li>
          ))}
  
        </ul>

        <h1>firstName:{Profile.firstName}</h1>
          <h1>lastName:{Profile.lastName}</h1>
         
         
        
          </>
  );
}

export const Person = () =>{
  const person={
    name:"Gergorio Y. Zara",
    theme:{
      backgroundColor:"Black",
      color:"Pink"
    }
  };
  return(
    
    <div style={person.theme}>
      <h1>{person.name}</h1>
      <img
        className="avatar"
        src="https://i.imgur.com/7vQD0fPs.jpg"
        alt="Gregorio Y. Zara"
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
    
  
  );
}
// Extract information into an object
const person = {
  name: 'Gregorio Y. Zara',
  imageUrl:"https://i.imgur.com/7vQD0fPs.jpg",
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};

export function TodoList() {
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img
        className="avatar"
        src={person.imageUrl}
        alt="Gregorio Y. Zara"
      />
     
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}
