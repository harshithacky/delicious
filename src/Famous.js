import Navbar from './Navbar'
import IndianRecipeTile from './IndianRecipeTile.js';
import Indiandishes from './Indiandishes';

const Famous = () => {
    
    
    return(
        <>
            <div className="header2">
                <Navbar/>
                <div className="overlay">
      
                    <h1 className="logo">Famous Indian Recipes</h1>
                    <h2>A taste of exotic India</h2>
                    <p>Top Dishes Of Indian States</p>
        
                </div>
            </div>
            <div className="app">
                <div className="app__recipes">
                    {Indiandishes.map((recipe,index)=> {
                    return <IndianRecipeTile recipe={recipe} key={index}/>
                    })}
                </div>
            </div>
            
        </>
    );
}

export default Famous;