import React, {useState} from 'react';
import ReactTooltip from 'react-tooltip';

export default function RecipeTile({recipe}) {
    
     

return (
    <>
    <a href={recipe["recipe"]["url"]}>
    <div className="recipeTile" data-aos="fade-up">

      
            <img src={recipe["recipe"]["image"]} className="recipeTile__img" alt="Server Issue"/>
        
        <p className="recipeTile__name">{recipe["recipe"]["label"]}</p>
        
        <ol>
            {recipe["recipe"]["ingredients"].map((ingredient)=>(
                <li>{ingredient.text}</li>
            ))}
        </ol>
    </div>
    </a>

    <a data-tip data-for='global'> 
    
    </a>
<ReactTooltip id='global' aria-haspopup='true' >
 <p>Ingredients</p>
 <ul>
   <li>Word</li>
   <li>Chart</li>
   <li>Else</li>
 </ul>
</ReactTooltip>
    
    </>
)
}
