import './App.css';
import './RecipeTile.css'
import React,{useEffect, useState} from 'react';
import Axios from 'axios';
import RecipeTile from './RecipeTile';
import Navbar from './Navbar';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function Home() {

  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [healthLabel, setHealthLabel] = useState("vegan");
  const [calories, setCalories] = useState("50-250");
  const url = `https://api.edamam.com/search?q=${query}&app_id=ca8135c5&app_key=60e18b6e9c2e3af0f5fd444c4efceac1&from=0&to=28&calories=${calories}&health=${healthLabel}`;
  
  useEffect(()=>{
    getRecipes();
  },[]);

  const getRecipes = async() => {
    var result = await Axios.get(url);
    setRecipes(result.data.hits);
    console.log(result.data.hits);
  }


  const submit = (e) => {
    e.preventDefault();
    getRecipes();
  }

  return (

    <>

    <div className="header">
        <Navbar/>
      <div className="overlay">
      
    <h1 className="logo">Delicious Recipes</h1>
    <h2>Food to fit your lifestyle & health</h2>
    <p>A place where you can find out all your favourite recipes</p>
        <form className="app__searchForm">
          <input placeholder="Enter ingredient name" value={query} onChange={(e)=>setQuery(e.target.value)} className="app__input"/>
          <input onClick={submit} type="submit" value="Search" className="app__submit" />

          <select className="app__healthLabels" onClick={(e)=>setHealthLabel(e.target.value)}>
            <option value="vegan">Vegan</option>
            <option value="vegetarian">Vegetarian</option>
            <option value="paleo">Paleo</option>
            <option value="dairy-free">Dairy-free</option>
            <option value="gluten-free">Gluten-free</option>
            <option value="wheat-free">Wheat-free</option>
            <option value="low-sugar">Low-sugar</option>
            <option value="egg-free">Egg-free</option>
            <option value="peanut-free">Peanut-free</option>
            <option value="tree-nut-free">Tree-nut-free</option>
            <option value="soy-free">Soy-free</option>
            <option value="fish-free">Fish-free</option>
            <option value="shellfish-free">Shellfish-free</option>
            
          </select>

          <select className="app__healthLabels" onClick={(e)=>setCalories(e.target.value)}>
            <option value="50-250">50-250 kcal</option>
            <option value="250-450">250-450 kcal</option>
            <option value="450-650">450-650 kcal</option>
            <option value="650-850">650-850 kcal</option>
            <option value="850-1400">850-1400 kcal</option>
            <option value="50-5000">All</option>
            
          </select>
        </form>
    </div>
    </div>
    <div className="app">
      <div className="app__recipes">
        {recipes.map((recipe,index)=> {
          return <RecipeTile recipe={recipe} key={index}/>
        })}
      </div>
    </div>
    
    </>
  );
}

export default Home;


//App Id ca8135c5
//App key 60e18b6e9c2e3af0f5fd444c4efceac1

// https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free