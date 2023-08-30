import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Row } from "react-bootstrap";
import SingleMeal from "../SingleMeal/SingleMeal";

const Meals = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=fish`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, []);
  console.log(meals);

  return (
    <div className="container mb-5">
      <h3 className="my-4 text-success">
        Here you can find your favorite dish...
      </h3>
      <Row xs={1} md={3} lg={4} className="g-4">
        {meals.map((meal) => (
          <SingleMeal key={meal.idMeal} meal={meal}></SingleMeal>
        ))}
      </Row>
    </div>
  );
};

export default Meals;
