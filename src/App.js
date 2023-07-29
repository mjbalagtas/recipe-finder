import React from 'react'
import { Card, CardBody, CardFooter, Image, Stack, Heading, Text, Button, ButtonGroup, Divider} from '@chakra-ui/react'


const data = [
  {
    title: "Miso-Butter Roast Chicken With Acorn Squash Panzanella",
    imageName: "miso-butter-roast-chicken-acorn-squash-panzanella"
  },
  {
    title: "Crispy Salt and Pepper Potatoes",
    imageName: "crispy-salt-and-pepper-potatoes-dan-kluger"
  },
  {
    title: "Thanksgiving Mac and Cheese",
    imageName: "thanksgiving-mac-and-cheese-erick-williams"
  },
  {
    title: "Italian Sausage and Bread Stuffing",
    imageName: "italian-sausage-and-bread-stuffing-240559"
  },
  { 
    title: "Newton's Law",
    imageName: "newtons-law-apple-bourbon-cocktail"
  },
  {
    title: "Warm Comfort",
    imageName: "warm-comfort-tequila-chamomile-toddy"
  }
]
const image_url = "foodImages/" + data[0].imageName +".jpg"

const App = () => {
  return(
    <>
      <Card maxW='lg' variant='elevated' align='center'>
        <CardBody align='center'>
          <Image  src={image_url} alt={data[0].title} borderRadius='lg' />
          <Stack mt='6' spacing='3'>
            <Heading size='md'>
              {data[0].title}
            </Heading>
            <Text>

            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing='2'>
            <Button variant='solid' colorScheme='blue'>
              Ingredients
            </Button>
            <Button variant='ghost' colorScheme='blue'>
              Instructions
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </>
  )
}

export default App