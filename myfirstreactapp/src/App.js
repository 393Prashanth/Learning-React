import CountriesList from "./CountriesList";
import Array from "./Array";
import "./App.css"
import FirstComp from "./propsContainer/FirstComp";
import SecondComp from "./propsContainer/SecondComp";
import CarModel from "./propsContainer/CarModel";
import ComplexExample from "./ComplexExample";
import { Avatar } from "./Markup";
import Markup from "./Markup";
import { DoubleCurley } from "./Markup";
import { Person } from "./Markup";
import {TodoList} from "./Markup"
import getImageUrl from "./util";

import Avatar2 from "./Avatar";
import  getImageUrl1 from "./util";
import PackingList from "./Condtional";
import List from "./List";
import Button, { PlayButton, UploadButton } from "./Events";
import User from "./Props";
import { AlertButton } from "./Events";
import Form from "./propsContainer/FirstComp";

const carObjectModel={

    Model:'MG',
    Wheels:4,
    Engine:'Petrol',
    Dealer:'MG',
    Color:'White'
}
export default function App(){
    return(
        <div>
          <Form />
         
          <User name="Prashanth"
          age='24'
          
          />
          
        <CountriesList />
        <Array />
       
        <SecondComp name="Kumar"/>
        <CarModel car={carObjectModel} />
        <ComplexExample />
        <Markup />
        <Avatar />
        <DoubleCurley />
        <Person />
        <TodoList />
        <Avatar1
        size={100}
        person={{ 
          name: 'Katsuko Saruhashi', 
          imageId: 'YfeOqp2'
        }}
      />
      <Avatar1
        size={80}
        person={{
          name: 'Aklilu Lemma', 
          imageId: 'OKS67lh'
        }}
      />
      <Avatar1
        size={50}
        person={{ 
          name: 'Lin Lanying',
          imageId: '1bX5QH6'
        }}
      />
      <Card>

        <Avatar2 
        
        size={100}
        person={{
          name: 'Katsuko Saruhashi',
          imageId: 'YfeOqp2'
        }}
        
        />
      </Card>

      
    <div>
      <h1>Notable Scientists</h1>
      <Profile
        imageId="szV5sdG"
        name="Maria Skłodowska-Curie"
        profession="physicist and chemist"
        discovery="polonium (chemical element)"
        awards={[
          'Nobel Prize in Physics',
          'Nobel Prize in Chemistry',
          'Davy Medal',
          'Matteucci Medal'
        ]}
      />
      <Profile
        imageId='YfeOqp2'
        name='Katsuko Saruhashi'
        profession='geochemist'
        discovery="a method for measuring carbon dioxide in seawater"
        awards={[
          'Miyake Prize for geochemistry',
          'Tanaka Prize'
        ]}
      />
    </div>
        <PackingList />
        <List />
      
        <Button />
        <div>
      <AlertButton message="Playing!">
        Play Movie
      </AlertButton>
      <AlertButton message="Uploading!">
        Upload Image
      </AlertButton>
    </div>

    
        </div>
    );
}


function Avatar1({person,size}){

    return(
        <img 
        className="avatar"
        src={getImageUrl(person)}
        alt={Person.name}
        width={size}
        height={size}
        
        />
        
    );
}

function Card({children}){

  return(
    <>
    <h1>This is Parent Component</h1>
    <div className="card">
      {children}
    </div>
    </>
  );
}

function Profile({
  imageId,
  name,
  profession,
  awards,
  discovery,
  imageSize=70
}){
 return(

    <section className="profile">
      <h2>{name}</h2>
      <img 
      
      src={getImageUrl1(imageId)}
      alt={name}
      height={imageSize}
      width={imageSize}
      
      />
      <ul>
        <li><b>Profression:</b>{profession}</li>
        <li><b>Awards:{awards.length}</b>
        ({awards.join(', ')})
        </li>
        <li>
          <b>Discovery:</b>{discovery}
        </li>
      </ul>

    </section>
 );
 
 
}