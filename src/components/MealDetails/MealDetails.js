import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import SingleMealDetails from '../SingleMealDetails/SingleMealDetails';




const MealDetails = () => {
    const {id} = useParams();
    
    const [details, setDetails] = useState([])
    useEffect(()=> {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setDetails(data.meals))
    }, [])

    console.log(details);
    return (
        <div>
           {
               details.map(detail => <SingleMealDetails key={detail.idMeal} detail={detail}></SingleMealDetails>)
           }
        </div>
    );
};

export default MealDetails;