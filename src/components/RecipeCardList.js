import RecipeCard from './RecipeCard'
import React from 'react'
import { generateUniqueKey } from '../helper/utils'

const RecipeCardList = ({recipes}) => {
  return(
    <>
      {recipes.map(recipe => <RecipeCard key={generateUniqueKey(recipe.id)} recipe={recipe} />)}
    </>
  )
}

export default RecipeCardList