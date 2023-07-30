import { 
  Card, 
  CardBody, 
  CardFooter, 
  Image, 
  Stack, 
  Heading, 
  Text, 
  Button, 
  ButtonGroup, 
  Divider,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Box
} from '@chakra-ui/react'
import React from 'react'
import {useDisclosure} from '@chakra-ui/react'
import Ingredients from './Ingredients'
import ModalTabs from './ModalTabs'

const RecipeCard = ({recipe, btnRef}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return(
    <>
      <Box position='relative' padding='5'>
      <Divider />
      <Card maxW='lg' variant='elevated' align='center'>
        <CardBody align='center'>
          <Image  src={"foodImages/" + recipe.filename + ".jpg"} alt={recipe.title} borderRadius='lg' />
          <Stack mt='6' spacing='3'>
            <Heading size='md'>
              {recipe.title}
            </Heading>
            <Text>
      
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing='2'>
            <Button ref={btnRef} onClick={onOpen} variant='solid' colorScheme='blue'>
              See More
            </Button>
            {/* <Button variant='ghost' colorScheme='blue'>
              Instructions
            </Button> */}
          </ButtonGroup>
        </CardFooter>
      </Card>
      </Box>
      <Modal
        onClose={onClose}
        finalFocusRef={btnRef}
        isOpen={isOpen}
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{recipe.title}</ModalHeader>
          <Image  src={"foodImages/" + recipe.filename + ".jpg"} alt={recipe.title} borderRadius='lg' />
          <ModalCloseButton />
          <ModalBody>
            <ModalTabs recipe={recipe} />
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default RecipeCard