import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, RecipeCard, RecipeHeader, RecipeImage } from './HomeStyles'



const RecipeCardComp = ({recipe,index}) => {
    const navigate = useNavigate();
    
    const moreClick = () => {
        navigate("/details",{state:{recipe}})
    };

return (
    <RecipeCard key={index}>
        <RecipeHeader>
            {recipe.label}
        </RecipeHeader>
            <RecipeImage src={recipe.image}/>
            <Button onClick={moreClick}>View More</Button>
    </RecipeCard>
)
}

export default RecipeCardComp