import React from "react";

const CarModel = (props) =>{
    const {Model,Color,Wheels,Engine,Delear} =props.car;

    return(
        <>
        <div>CarModel:{Model}</div>
        <div>Wheels:{Wheels}</div>
        <div>Color:{Color}</div>
        <div>Engine:{Engine}</div>
        <div>Delear:{Delear}</div>
        </>
    );
}



export default CarModel;