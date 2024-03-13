function Item({item,isPacked}){
    if(isPacked){
    return <li className="list">{item} picked</li>
}
    return <li className="list">{item} Not Picked</li>
}
export default function PackingList(){
    return(
        <section>

            <h1>Items Packing for Trip</h1>
            <ul>
                <Item
                
                isPacked={true}
                item='Helmet with a golden leaf'
                
                />
                <Item
                
                isPacked={true}
                item="Suit"
                />
                 <Item
                     isPacked={false}
                     item="glovse"
                  />
            </ul>
            <ul>
                <ListItem
                
                isPacked={true}
                item='Helmet with a golden leaf'
                
                />
                <ListItem
                
                isPacked={true}
                item="Suit"
                />
                 <ListItem
                     isPacked={false}
                     item="glovse"
                  />
            </ul>
            <ul>
                <List
                
                isPacked={true}
                item='Helmet with a golden leaf'
                
                />
                <List
                
                isPacked={true}
                item="Suit"
                />
                 <List
                     isPacked={false}
                     item="glovse"
                  />
            </ul>
            <Greeting />
            
        </section>

    );
}

function Greeting({isLoggedIn}){
    const currentTime=new Date().getHours();
    let greetingMessage;
    if(currentTime<12){
        greetingMessage='Good Morning'
    }else if(currentTime >=12 && currentTime <=18){
        greetingMessage='Good AfterNoon'
    }else{
        greetingMessage='Good Evening'
    }
    
    let greetingContent;
    if(isLoggedIn){
    greetingContent=<p>{greetingMessage},User</p>
    }else{
        greetingContent=<p>{greetingMessage},Guest</p>
    }
    return(
        <div>
          {greetingContent}
        </div>
    );
}


function ListItem({item,isPacked}){
    let nothing=null
    return(
        <li className="list">
            {isPacked ? (
                <del>
                    {item + 'Picked'}
                </del>
            ):(
                <p>
                {item + ' want to pick '}
                </p>
            )}
        </li>
    );
}

function List({item,isPacked}){
    return(
        <li className="list">{item}{isPacked && 'Picked'}</li>
    );
}