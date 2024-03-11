import CountriesList from "./CountriesList";
import Array from "./Array";
import "./App.css"
import FirstComp from "./propsContainer/FirstComp";
import SecondComp from "./propsContainer/SecondComp";
import CarModel from "./propsContainer/CarModel";
import ComplexExample from "./ComplexExample";
import { Avatar } from "./Markup";
import Markup from "./Markup";

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
        <CountriesList />
        <Array />
        <FirstComp name="Prashanth"/>
        <SecondComp name="Kumar"/>
        <CarModel car={carObjectModel} />
        <ComplexExample />
        <Markup />
        <Avatar />
        
        </div>
    );
}





