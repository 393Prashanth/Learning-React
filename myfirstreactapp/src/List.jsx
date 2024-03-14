import { Fragment } from "react";
import  getImageUrl2  from "./util";

export const people = [{
    id: 0,
    name: 'Creola Katherine Johnson',
    profession: 'mathematician',
    accomplishment: 'spaceflight calculations',
    imageId: 'MK3eW3A'
  }, {
    id: 1,
    name: 'Mario José Molina-Pasquel Henríquez',
    profession: 'chemist',
    accomplishment: 'discovery of Arctic ozone hole',
    imageId: 'mynHUSa'
  }, {
    id: 2,
    name: 'Mohammad Abdus Salam',
    profession: 'physicist',
    accomplishment: 'electromagnetism theory',
    imageId: 'bE7W1ji'
  }, {
    id: 3,
    name: 'Percy Lavon Julian',
    profession: 'chemist',
    accomplishment: 'pioneering cortisone drugs, steroids and birth control pills',
    imageId: 'IOjWm71'
  }, {
    id: 4,
    name: 'Subrahmanyan Chandrasekhar',
    profession: 'astrophysicist',
    accomplishment: 'white dwarf star mass calculations',
    imageId: 'lrWQx8l'
  }];
  

  export default function List(){
     const chemists=people.filter(person=> person.profession === 'chemist'
     
     );
        const listItems=chemists.map(person=>
           <li>
            <img
       src={getImageUrl2(person)}
       alt={person.name}
     />
     <p>
       <b>{person.name}:</b>
       {' ' + person.profession + ' '}
       known for {person.accomplishment}
     </p>
           </li>
            );
    

     return(
        <ul>{listItems}
        <OderList />
        </ul>
     );
  }

  export function OderList(){
    const listItems=people.map(person=>
        <Fragment key={person.id}>
            <p>{person.id}
            <img src={getImageUrl2(person)}alt={person.name} />
            <p>
                <b>{person.name}</b>
                <b> Profession:{person.profession + ' '}</b>
                known for {person.accomplishment}
            </p>
            </p>
        </Fragment>
        )
        return <ul>{listItems}</ul>
  }