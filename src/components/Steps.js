import {
    Stepper,
    StepperSteps,
    StepperStep,
    StepperCompleted,
    Button,
   Br

  } from '@saas-ui/react'
import {
    Text,
    Spacer,
    Box,
    ButtonGroup,
    VStack,
    Center,
    HStack
    
} from "@chakra-ui/react";
import React from 'react'
import { HiCheck,HiArrowRight } from "react-icons/hi";
import {FiCheckCircle} from "react-icons/fi";

 export function WithContent() {
    const [step, setStep] = React.useState(0)
  
    const back = () => {
      setStep(step - 1)
    }
  
    const next = () => {
      setStep(step + 1)
    }
  
    const steps = [
      {
        name: 'step 1',
        title: 'Device',
        children: 
         <>
            
                 <Box h="50px"/>
                 <Text fontSize="md">Follow the instruction on device</Text>
               
                 <VStack mt="10px">
                   <Button variant="subtle" width='full'  height='50px'rounded="xl">
                     <HiArrowRight fontSize='20px'/>
                        <span>&nbsp; &nbsp;</span>
                         <Text  align="center">Select the Wallet On the Device</Text>
                         <Spacer/>
                         <HiCheck fontSize='20px'/>
                     </Button>
                   <Button variant="subtle" width='full'  height='50px'rounded="xl">
                   <HiArrowRight fontSize='20px'/>
                      <span>&nbsp; &nbsp;</span>
                      <Text  align="center">Select the Wallet On the Device</Text>
                      <Spacer/>
                      <HiCheck fontSize='20px'/>
                   </Button>
                   <Button variant="subtle" width='full'  height='50px'rounded="xl">
                   <HiArrowRight fontSize='20px'/>
                      <span>&nbsp; &nbsp;</span>
                      <Text  align="center">Select the Wallet On the Device</Text>
                      <Spacer/>
                      <HiCheck fontSize='20px'/>
                   </Button>
                  
                  </VStack>
                  <Box h="20px"/>
          
          
         </>,
      },
      {
        name: 'step 2',
        title: 'Verification',
        children: <Box>
           <Box height="30px"/>
           <Box borderWidth={1} borderColor="gray.200" borderStyle="dashed" rounded="xl" height='120px'alignContent='center' bgColor='gray.600'>
            <Center>
              <Text fontSize="2xl" color='yellow.400' as='b' marginTop={10}>25BKJNKNLJL58fjkdhfk26dnfds15</Text>
            </Center>
            </Box>
            <Box height="50px"/>
            <Text fontSize="md">Verify the address on the device</Text>
            <Box height="20px"/>
            <Button variant="subtle" width='full'  height='50px'rounded="xl">
                   <HiArrowRight fontSize='20px'/>
                      <span>&nbsp; &nbsp;</span>
                      <Text  align="center">Please match the address to be shown in X1 Wallet</Text>
                      <Spacer/>
                      <HiCheck fontSize='20px'/>
              </Button>
            <Box height="20px"/>
        </Box>,
      },
      {
        name: 'step 3',
        title: 'Receive',
        children: <Box>
          <Box height="30px"/>
          <Text fontSize="md">Coin Address</Text>
          <Box height="20px"/>
          <Box  rounded="xl" height='60px'alignContent='center' bgColor='gray.800' alignItems='center'>
            <HStack>
              <Center>
              <Text fontSize="2xl" color='yellow.400' as='b' marginTop={3} marginLeft={5}>25BKJNKNLJL58fjkdhfk26dnfds15</Text>
              
              </Center>
               <span>&nbsp;&nbsp;&nbsp;</span>
              <Button label='Copy' marginTop={5}/>
              </HStack>
            </Box>
          <Box height="20px"/>
          <HStack><FiCheckCircle/>
          <Text fontSize="md">Address Verified</Text>
          </HStack>
          <Box height="20px"/>
          </Box>,
      },
    ]
  
    return (
      <>
        <Stepper step={step} mb="2" varian='subtle'>
          {steps.map((args, i) => (
            <StepperStep key={i} {...args} />
          ))}
          <StepperCompleted py="4">
            <Center>
            <Button>Re Verify</Button>
            </Center>
          </StepperCompleted>
        </Stepper>
        <ButtonGroup width="100%">
          <Button
            label="Back"
            onClick={back}
            isDisabled={step === 0}
            variant="ghost"
          />
          <Spacer />
          <Button
            label="Next"
            onClick={next}
            isDisabled={step >= 3}
            colorScheme="primary"
          />
        </ButtonGroup>
      </>
    )
  }
  