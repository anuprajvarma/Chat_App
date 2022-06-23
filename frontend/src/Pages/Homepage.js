import React from 'react'
import { Container, Box, Text, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Signup from '../components/Authentication/Signup'
import Login from '../components/Authentication/Login'

const Homepage = () => {
    return (
        <Container maxW='xl' centerContent=''>
            <Box display='flex' justifyContent='center' p={3} bg='white'
                w='100' m='200px 0 15px 0' borderRadius='lg' borderWidth='1px'>
                <Text fontSize={'4xl'} fontFamily={'work sans'}>Talk-A-Tive</Text>
            </Box>
            <Box bg='white' w='100%' p={4} borderRadius='lg' borderWidth='lpx'>
                <Tabs variant='soft-rounded' colorScheme='green'>
                    <TabList>
                        <Tab width='50%'>Login</Tab>
                        <Tab width='50%'>Sign up</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <Login />
                        </TabPanel>
                        <TabPanel>
                            <Signup />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </Container>
    )
}

export default Homepage
