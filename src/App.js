import {
 
  Box,
  Collapse,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Icon,
  IconButton,
  Center,
  Image,
  Text,
  useColorModeValue,
  useDisclosure,
  ButtonGroup,
  Avatar,
  HStack,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,

} from "@chakra-ui/react";

import {BsArrowLeftRight } from "react-icons/bs";
import { IoIosWallet } from "react-icons/io";
import { FiMenu, FiCheck,FiLock ,FiDisc,FiPlus,FiHome,FiSettings,FiArrowDownLeft,FiArrowUpRight} from "react-icons/fi";
import {GrBitcoin} from "react-icons/gr";
import {SiEthereum,SiBinance} from "react-icons/si";
import { MdKeyboardArrowRight } from "react-icons/md";
import React from "react";
import {  Button,useModals } from '@saas-ui/react';
import {WithContent} from './components/Steps';
import Logo from './logo.svg';

export default function App() {
  const sidebar = useDisclosure();
  const wallets = useDisclosure();
  const color = useColorModeValue("gray.600", "gray.300");
  const modals = useModals();

  const NavItem = (props) => {
    const { icon, children, ...rest } = props;
    return (
      <Flex
        align="center"
        px="4"
        pl="4"
        py="3"
        cursor="pointer"
        color={useColorModeValue("inherit", "gray.400")}
        _hover={{
          bg: useColorModeValue("gray.100", "gray.900"),
          color: useColorModeValue("gray.900", "gray.200"),
        }}
        role="group"
        fontWeight="semibold"
        transition=".15s ease"
        {...rest}
      >
        {icon && (
          <Icon
            mx="2"
            boxSize="4"
            _groupHover={{
              color: color,
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    );
  };

  const SidebarContent = (props) => (
    <Box
      as="nav"
      pos="fixed"
      top="0"
      left="0"
      zIndex="sticky"
      h="full"
      pb="10"
      overflowX="hidden"
      overflowY="auto"
      bg={useColorModeValue("white", "gray.800")}
      borderColor={useColorModeValue("inherit", "gray.700")}
      borderRightWidth="1px"
      w="60"
      {...props}
    >
      <Flex px="4" py="5" align="center">
      
       <Image src={Logo} alt="logo" />
        
      </Flex>
      <Flex
        direction="column"
        as="nav"
        fontSize="sm"
        color="gray.600"
        aria-label="Main Navigation"
      >
        <NavItem icon={FiHome}>Portfolio</NavItem>
        
        <NavItem icon={IoIosWallet} onClick={wallets.onToggle}>
          Wallets
          <Icon
            as={MdKeyboardArrowRight}
            ml="auto"
            transform={wallets.isOpen && "rotate(90deg)"}
          />
        </NavItem>
        <Collapse in={wallets.isOpen}>
          <NavItem pl="12" py="2" isactive>
            Wallet 1
          </NavItem>
          <NavItem pl="12" py="2">
          <Button borderWidth="4px" borderStyle="dashed" rounded="md" h="6" variant="ghost">
            + add wallet
            </Button>
          </NavItem>
        </Collapse>
        <NavItem icon={BsArrowLeftRight}>Last Transactions</NavItem>
        <NavItem icon={FiSettings}>Settings</NavItem>
      </Flex>
    </Box>
  );
  return (
    <Box
      as="section"
      bg={useColorModeValue("gray.50", "gray.700")}
      minH="100vh"
    >
      <SidebarContent display={{ base: "none", md: "unset" }} />
      <Drawer
        isOpen={sidebar.isOpen}
        onClose={sidebar.onClose}
        placement="left"
      >
        <DrawerOverlay />
        <DrawerContent>
          <SidebarContent w="full" borderRight="none" />
        </DrawerContent>
      </Drawer>
      <Box ml={{ base: 0, md: 60 }} transition=".3s ease">
        <Flex
          as="header"
          align="center"
          justify="space-between"
          w="full"
          px="4"
          bg={useColorModeValue("white", "gray.800")}
          borderBottomWidth="1px"
          borderColor={useColorModeValue("inherit", "gray.700")}
          h="14"
        >
          <IconButton
            aria-label="Menu"
            display={{ base: "inline-flex", md: "none" }}
            onClick={sidebar.onOpen}
            icon={<FiMenu />}
            size="sm"
          />
          

          <Flex align="center">
              <HStack spacing="4">
                <Box w= "950px"/>
              <FiCheck color="#4848F6"/> <Text color="#F5CEA3">Synchronized</Text>
          
          <ButtonGroup gap='2'>
            <IconButton icon={<FiDisc/>} />
            <IconButton icon={<FiLock color="#CAA276"/>} />
          </ButtonGroup>
          </HStack>
          </Flex>
        </Flex>

        <Box as="main" p="4">
          {/* Add content here, remove div below  */}
          <HStack spacing="4">
            <Box w= "1070px">
              <Text fontSize="2xl" fontWeight="semibold" color="#C78D4E">
                Wallet 1
              </Text>
            </Box>
            <Button color="#CAA276" leftIcon={<FiPlus/>} w="30">
              Add Coin
            </Button>
          </HStack>   
          <Box height="30"/>
          
          <HStack spacing="4">

            </HStack>
          <TableContainer>
          <Table variant='striped'>
           <Thead>
           <Tr>
             <Th>COINS</Th>
              <Th>HOLDING</Th>
              <Th >VALUE</Th>
              <Th>RECEIVE</Th>
              <Th>SEND</Th>
             </Tr>
            </Thead>
            <Tbody>
      <Tr>
        <Td><HStack><GrBitcoin fontSize='25' color='#DB953C'/><Text>BITCOIN</Text></HStack></Td>
        <Td>BTC 0.0025600</Td>
        <Td >USD 0.5268</Td>
        <Td><Button label="RECEIVE" variant='ghost' color="#8484F1" leftIcon={<FiArrowDownLeft/>} onClick={() => modals.open({
          title: (
          <Text align='center'>Receive</Text>
          ),
          body: (
           
               <WithContent/>
             
          ),
         size: "xl",
        })
      }/></Td>
      <Td><Button label="SEND" variant='ghost' color="#CAA276"leftIcon={<FiArrowUpRight/>} onClick={() => modals.open({
          title: (
          <Text align='center'>Send</Text>
          ),
          body: (
           
               <WithContent/>
             
          ),
         size: "xl",
        })
      }/></Td>
      </Tr>
      <Tr>
        <Td><HStack><SiEthereum fontSize='25' color='#8484F1'/><Text>ETHEREUM</Text></HStack></Td>
        <Td>ETH 0.0025600</Td>
        <Td>USD 0.5268</Td>
        <Td><Button label="RECEIVE" variant='ghost' color="#8484F1" leftIcon={<FiArrowDownLeft/>} onClick={() => modals.open({
          title: (
          <Text align='center'>Receive</Text>
          ),
          body: (
           
               <WithContent/>
             
          ),
         size: "xl",
        })
      }/></Td>
      <Td><Button label="SEND" variant='ghost'color="#CAA276" leftIcon={<FiArrowUpRight/>} onClick={() => modals.open({
          title: (
          <Text align='center'>Send</Text>
          ),
          body: (
           
               <WithContent/>
             
          ),
         size: "xl",
        })
      }/></Td>
      </Tr>
    
      <Tr>
        <Td><HStack><SiBinance fontSize='25' color='#DB953C'/><Text>BITCOIN</Text></HStack></Td>
        <Td>BNB 0.0025600</Td>
        <Td>USD 0.5268</Td>
        <Td><Button label="RECEIVE" variant='ghost' color="#8484F1" leftIcon={<FiArrowDownLeft/>} onClick={() => modals.open({
          title: (
          <Text align='center'>Receive</Text>
          ),
          body: (
           
               <WithContent/>
             
          ),
         size: "xl",
        })
      }/></Td>
      <Td><Button label="SEND" variant='ghost'color="#CAA276" leftIcon={<FiArrowUpRight/>} onClick={() => modals.open({
          title: (
          <Text align='center'>Send</Text>
          ),
          body: (
           
               <WithContent/>
             
          ),
         size: "xl",
        })
      }/></Td>
      
      </Tr>
      <Tr>
        <Td><HStack><GrBitcoin fontSize='25' color='#DB953C'/><Text>BITCOIN</Text></HStack></Td>
        <Td>BTC 0.0025600</Td>
        <Td >USD 0.5268</Td>
        <Td><Button label="RECEIVE" variant='ghost' color="#8484F1" leftIcon={<FiArrowDownLeft/>} onClick={() => modals.open({
          title: (
          <Text align='center'>Receive</Text>
          ),
          body: (
           
               <WithContent/>
             
          ),
         size: "xl",
        })
      }/></Td>
      <Td><Button label="SEND" variant='ghost' color="#CAA276" leftIcon={<FiArrowUpRight/>} onClick={() => modals.open({
          title: (
          <Text align='center'>Send</Text>
          ),
          body: (
           
               <WithContent/>
             
          ),
         size: "xl",
        })
      }/></Td>
      </Tr>
      <Tr>
        <Td><HStack><SiEthereum fontSize='25' color='#8484F1'/><Text>ETHEREUM</Text></HStack></Td>
        <Td>ETH 0.0025600</Td>
        <Td>USD 0.5268</Td>
        <Td><Button label="RECEIVE" variant='ghost' color="#8484F1" leftIcon={<FiArrowDownLeft/>} onClick={() => modals.open({
          title: (
          <Text align='center'>Receive</Text>
          ),
          body: (
           
               <WithContent/>
             
          ),
         size: "xl",
        })
      }/></Td>
      <Td><Button label="SEND" variant='ghost' color="#CAA276" leftIcon={<FiArrowUpRight/>} onClick={() => modals.open({
          title: (
          <Text align='center'>Send</Text>
          ),
          body: (
           
               <WithContent/>
             
          ),
         size: "xl",
        })
      }/></Td>
      </Tr>
    
      <Tr>
        <Td><HStack><SiBinance fontSize='25' color='#DB953C'/><Text>BITCOIN</Text></HStack></Td>
        <Td>BNB 0.0025600</Td>
        <Td>USD 0.5268</Td>
        <Td><Button label="RECEIVE" variant='ghost' color="#8484F1" leftIcon={<FiArrowDownLeft/>} onClick={() => modals.open({
          title: (
          <Text align='center'>Receive</Text>
          ),
          body: (
           
               <WithContent/>
             
          ),
         size: "xl",
        })
      }/></Td>
      <Td><Button label="SEND" variant='ghost'  color="#CAA276" leftIcon={<FiArrowUpRight/>} onClick={() => modals.open({
          title: (
          <Text align='center'>Send</Text>
          ),
          body: (
           
               <WithContent/>
             
          ),
         size: "xl",
        })
      }/></Td>
      
      </Tr>
    </Tbody>
    </Table>
  </TableContainer>
        </Box>

        
      </Box>
    </Box>
  );
}
