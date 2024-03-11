
export default function Array(){
const numbers=[1,2,3,4,5,6];
const listItems=numbers.map((number) =>(
<li key={number}>{number}</li>
        
              
));
 const element=<ul>{listItems}</ul>
 return(
 <div>
<LoggedIn />        
<ShoppingList />
<UserProfile />
  {element}
   </div>
     ) 
              
     
          
}

const products=[
    {title:'Cabbage',isFruit:false,id:1},
    {title:'Garlic',isFruit:false,id:2},
    {title:'Apple',isFruit:true,id:3},
    
];

function ShoppingList(){
    const listItems=products.map(prod=>(
        <li key={prod.id} 
        style={{color:prod.isFruit ? 'red' : 'Green'}}
        >{prod.title}</li>
    ));
    return(
        <ul>{listItems}</ul>
    );
}

const isLoggedIn=true;

const LoggedIn = () =>{

    return(

      <>
            {isLoggedIn  ? (<h1>Welcome Back</h1>) :
            (<button>Please Login</button>)}
       </>
    );
};


const user={
    name:"prashanth",
    imageUrl:'https://i.imgur.com/yXOvdOSs.jpg',
    

};


const UserProfile = () =>{
    return(
        <>
        <h1 className="name">{user.name}</h1>
        <img className="person"
        src={user.imageUrl}
        style={{width:user.imageSize,
                height:user.imageSize
                }}
                />
        </>

    );
}