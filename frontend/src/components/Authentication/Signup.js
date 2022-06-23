import React, { useState } from 'react'
import { FormControl, VStack, FormLabel, Input, InputGroup, InputRightElement, Button } from '@chakra-ui/react'

const Signup = () => {
    const [show, setShow] = useState(false);
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmpassword, setConfirmpassword] = useState();
    const [pic, setPic] = useState();

    const passwordhandler = () => {
        if (show) {
            setShow(false);
        } else {
            setShow(true)
        }
    }

    const postDetails = (pics) => { };

    const submitHandler = () => { };


    return (
        <VStack spacing='5px'>
            <FormControl id='first-name' isRequired>
                <FormLabel htmlFor='name'>Name</FormLabel>
                <Input onChange={(e) => setName(e.target.value)} />
            </FormControl>
            <FormControl id='email' isRequired>
                <FormLabel htmlFor='email'>Email</FormLabel>
                <Input onChange={(e) => setEmail(e.target.value)} />
            </FormControl>

            <FormControl id='password' isRequired>
                <FormLabel htmlFor='password'>Password</FormLabel>
                <InputGroup>
                    <Input type={show ? 'text' : 'password'} onChange={(e) => setPassword(e.target.value)} />
                    <InputRightElement width='70px'>
                        <Button h='5px' size='2px' onClick={passwordhandler}>
                            {show ? 'Hide' : 'show'}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>

            <FormControl id='confirmpassword' isRequired>
                <FormLabel htmlFor='confirmpassword'>Confirm Password</FormLabel>
                <InputGroup>
                    <Input type={show ? 'text' : 'password'} onChange={(e) => setPassword(e.target.value)} />
                    <InputRightElement width='70px'>
                        <Button h='5px' size='2px' onClick={passwordhandler}>
                            {show ? 'Hide' : 'show'}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>
            <FormControl>
                <FormLabel>Upload your Picture</FormLabel>
                <Input type='file' p={.5} accept='image/' onChange={(e) => postDetails(e.target.files[0])}>
                </Input>
            </FormControl>
            <Button colorScheme='blue' width='100%' style={{ margin: 15 }} onClick={submitHandler}>
                Sign Up
            </Button>
        </VStack>
    )
}

export default Signup
