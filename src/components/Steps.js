import {
    Stepper,
    StepperSteps,
    StepperStep,
    StepperCompleted,


  } from '@saas-ui/react'
import {
    Text,
    Spacer,
    Box,
    ButtonGroup,
    VStack,
    Center,
    HStack,
    Button,
    useColorModeValue
    
} from "@chakra-ui/react";
import React from 'react'
import { HiCheck,HiArrowRight } from "react-icons/hi";
import {FiCheckCircle} from "react-icons/fi";

 export  function WithContent() {
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
                   <Button width='full'  height='50px' rounded="xl" leftIcon={<HiArrowRight color="#F5CEA3" />} rightIcon={ <HiCheck fontSize='20px'/>}>
                     
                        
                         <Text  align="center" color="#8484F1"   >Select the Wallet On the Device</Text>
                         <Spacer ml="10px"/>
                          
                     </Button>
                     <Button width='full'  height='50px' rounded="xl" leftIcon={<HiArrowRight color="#F5CEA3" />} rightIcon={ <HiCheck fontSize='20px'/>}>
                     
                        
                     <Text  align="center" color="#8484F1"   >Select the Coin On the Device</Text>
                     <Spacer ml="10px"/>
                      
                    </Button>
                    <Button width='full' height='50px'rounded="xl" leftIcon={<HiArrowRight color="#F5CEA3" />} rightIcon={ <HiCheck fontSize='20px'/>}>
                     
                        
                     <Text  align="center" color="#8484F1" >Tap the 1 Card out of 4</Text>
                     <Spacer ml="10px"/>
                      
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
           <Box borderWidth={1} borderColor="gray.200" borderStyle="dashed" rounded="xl" height='auto'alignContent='center' bg={useColorModeValue("gray.50", "gray.700")}>
            <Center>
              <Text fontSize="auto" color='yellow.400' as='b' marginTop='3' marginBottom='3'>25BKJNKNLJL58fjkdhfk26dnfds15</Text>
            </Center>
            </Box>
            <Box height="50px"/>
            <Text fontSize="md">Verify the address on the device</Text>
            <Box height="20px"/>
            <Button width='full'  height='50px'rounded="xl">
                   <HiArrowRight fontSize='20px'/>
                      <span>&nbsp; &nbsp;</span>
                      <Text  align="center">Please match the address</Text>
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
          <Box  borderWidth={1} rounded="xl" height='auto'alignContent='center' bg={useColorModeValue("gray.50", "gray.700")} >
            <Center>
               <HStack spacing='3'>
              
              <Text fontSize="auto" color='yellow.400' as='b' marginTop='3' marginBottom='3'>25BKJNKNLJL58fjkdhfk26dnfds15</Text>
              
              <Button >
              Copy</Button>
              </HStack>
            </Center>
            </Box>
          <Box height="20px"/>
          <HStack><FiCheckCircle color='green'/>
          <Text fontSize="md" color='green'>Address Verified</Text>
          </HStack>
          <Box height="20px"/>
          </Box>,
      },
    ]
  
    return (
      <>
        <Stepper step={step} mb="2" colorScheme='yellow'>
          {steps.map((args, i) => (
            <StepperStep key={i} {...args} />
          ))}
          <StepperCompleted py="4">
            <Center>
            <Button >Re Verify</Button>
            </Center>
          </StepperCompleted>
        </Stepper>
        <ButtonGroup width="100%">
          <Button
            
            onClick={back}
            isDisabled={step === 0}
            variant="ghost"
          >
          Back
          </Button>
          <Spacer />
          <Button
            
            onClick={next}
            isDisabled={step >= 3}
            colorScheme="yellow"
          >
          Next
          </Button>
        </ButtonGroup>
      </>
    )
  }
  
