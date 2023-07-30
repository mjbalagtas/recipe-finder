import React from 'react'
import {
  OrderedList,
  ListItem
} from '@chakra-ui/react'
import { generateUniqueKey } from '../helper/utils'

const Instructions = ({recipe}) => {
  return(
    <OrderedList>
    {
      recipe.instructions.map(ingredient => <ListItem key={generateUniqueKey(ingredient)}>{ingredient}</ListItem>)
    }
    </OrderedList>

  )
}

export default Instructions