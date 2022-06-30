import React, { useState } from 'react'
import { FormControl, VStack, FormLabel, Input, InputGroup, InputRightElement, Button, useToast } from '@chakra-ui/react'
import axios from 'axios';
import { useHistory } from 'react-router-dom'


const Login = () => {
    const [show, setShow] = useState(false);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [loading, setLoading] = useState(false);

    const toast = useToast();
    const history = useHistory();

    const passwordhandler = () => {
        if (show) {
            setShow(false);
        } else {
            setShow(true)
        }
    }
    const submitHandler = async () => {
        setLoading(true);
        if (!email || !password) {
            toast({
                title: 'please Fill all the Fields',
                status: 'success',
                duration: 5000,
                isClosable: true,
            });
            setLoading(false);
            return;
        }
        console.log(email, password);
        try {
            const config = {
                headers: {
                    "Content-type": "application/json",
                },
            };

            const { data } = await axios.post("/api/user/login", { email, password }, config);
            toast({
                title: 'Login Succesfully',
                status: 'success',
                duration: 5000,
                isClosable: true,
            });

            localStorage.setItem("userInfo", JSON.stringify(data));
            setLoading(false);
            history.push('/chats')
        } catch (err) {
            toast({
                title: 'Error Occured',
                description: err.res.data.message,
                status: 'success',
                duration: 5000,
                isClosable: true,
            });
            setLoading(false);
        }
    };


    return (
        <VStack spacing='5px'>
            <FormControl id='email' isRequired>
                <FormLabel htmlFor='email'>Email</FormLabel>
                <Input value={email} onChange={(e) => setEmail(e.target.value)} />
            </FormControl>

            <FormControl id='password' isRequired>
                <FormLabel htmlFor='passwork'>Password</FormLabel>
                <InputGroup>
                    <Input type={show ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} />
                    <InputRightElement width='70px'>
                        <Button h='5px' size='2px' onClick={passwordhandler}>
                            {show ? 'Hide' : 'show'}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>

            <Button colorScheme='blue' width='100%' style={{ margin: 15 }} onClick={submitHandler} isLoading={loading}>
                Login
            </Button>

            <Button colorScheme='red' width='100%' onClick={() => {
                setEmail('anupraj1854@gmail.com');
                setPassword('asdfgh');
            }} >Guest User</Button>
        </VStack>
    )
}

export default Login
