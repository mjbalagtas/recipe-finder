import React from 'react'
import {
  UnorderedList,
  ListItem
} from '@chakra-ui/react'
import { generateUniqueKey } from '../helper/utils'

const Ingredients = ({recipe}) => {
  return(
    <UnorderedList>
    {
      recipe.ingredients.map(ingredient => <ListItem key={generateUniqueKey(ingredient)}>{ingredient}</ListItem>)
    }
    </UnorderedList>

  )
}

export default Ingredients