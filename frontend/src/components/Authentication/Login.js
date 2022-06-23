import React, { useState } from 'react'
import { FormControl, VStack, FormLabel, Input, InputGroup, InputRightElement, Button } from '@chakra-ui/react'


const Login = () => {
    const [show, setShow] = useState(false);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const passwordhandler = () => {
        if (show) {
            setShow(false);
        } else {
            setShow(true)
        }
    }
    const submitHandler = () => { };


    return (
        <VStack spacing='5px'>
            <FormControl id='email' isRequired>
                <FormLabel htmlFor='email'>Email</FormLabel>
                <Input onChange={(e) => setEmail(e.target.value)} />
            </FormControl>

            <FormControl id='password' isRequired>
                <FormLabel htmlFor='passwork'>Password</FormLabel>
                <InputGroup>
                    <Input type={show ? 'text' : 'password'} onChange={(e) => setPassword(e.target.value)} />
                    <InputRightElement width='70px'>
                        <Button h='5px' size='2px' onClick={passwordhandler}>
                            {show ? 'Hide' : 'show'}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>
            <Button colorScheme='blue' width='100%' style={{ margin: 15 }} onClick={submitHandler}>
                Login
            </Button>
        </VStack>
    )
}

export default Login
