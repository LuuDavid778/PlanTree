import React from 'react';
import "./plantpagequizcard.css";

const HouseCard = require('../../../Imgs/house.svg');
const ApartmentCard = require('../../../Imgs/apartment.svg');


const PlantPageQuizCard = () => <div>
    <img src={HouseCard}></img>
    <img src={ApartmentCard}></img>
    </div>

export default PlantPageQuizCard;