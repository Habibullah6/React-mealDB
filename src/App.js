import { BrowserRouter as Router, Route, Switch,  } from 'react-router-dom';
import './App.css';
import MealDetails from './components/MealDetails/MealDetails';
import Meals from './components/Meals/Meals';
import NavBar from './components/NavBar/NavBar';
import NotFound from './components/NotFound/NotFound';






function App() {
  return (
    <div className="App">
     
     <Router>
     <NavBar></NavBar>
      <Switch>
        <Route exact path="/">
          <Meals></Meals>
        </Route>
        <Route exact path="/meals">
          <Meals></Meals>
        </Route>
        <Route exact  path="/details/:id">
          <MealDetails></MealDetails>
        </Route>
        <Route path="/not-found">
          <NotFound></NotFound>
        </Route>
      </Switch>
     </Router>
    </div>
  );
}

export default App;
