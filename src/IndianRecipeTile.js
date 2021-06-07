import React from 'react'

export default function IndianRecipeTile({recipe}) {
    console.log(recipe);
    return (
        <>
        
        <a href={recipe.url}>
        <div className="recipeTile" data-aos="fade-up">
            <img src={recipe.image} className="recipeTile__img" alt="Server Issue"/>
            <p className="recipeTile__name">{recipe.label}</p>
            <p>State : {recipe.state}</p>
        </div>
        </a>
        </>
    )
}
