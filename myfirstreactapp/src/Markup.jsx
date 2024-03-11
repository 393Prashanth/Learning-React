

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