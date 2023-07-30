import React, {useState, useEffect, useRef} from 'react'
import RecipeCardList from './components/RecipeCardList'
import recipeService from './services/recipes'
import {
  AbsoluteCenter,
  Box,
  Stack,
  Input,
  Button,
} from '@chakra-ui/react'

import {
  AddIcon,
  CloseIcon,
} from '@chakra-ui/icons'

const App = () => {
  const [topListRecipes, setTopListRecipes] = useState([])
  const btnRef = useRef(null)
  const [visible, setVisible] = useState(true)

  const toggleVisibility = () => {
    setVisible(!visible)
  }

  useEffect(() => {
    const ingredients = {
      searched_ingredients: ["vinegar", "chicken", "onion", "garlic"]
    }
    recipeService
      .getTopList(ingredients)
      .then(response => {
        setTopListRecipes(response)
      })
      console.log(topListRecipes)
  }, [])
  return(
    <>
    <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
      <Box>
      <Stack spacing={3}>
        {visible && <Button onClick={toggleVisibility}><Input placeholder='extra small size' size='xs' /><CloseIcon /></Button> }
        <Input placeholder='small size' size='sm' />
        <Input placeholder='medium size' size='md' />
        <Input placeholder='large size' size='lg' />
        <Button><AddIcon boxSize={6} /></Button>
        <Button>Submit</Button>
      </Stack>
      </Box>
      <AbsoluteCenter color='white'>
      <RecipeCardList 
        recipes={topListRecipes} 
        btnRef={btnRef}
      />
      </AbsoluteCenter>
    </Box>
    </>
  )
}

export default App