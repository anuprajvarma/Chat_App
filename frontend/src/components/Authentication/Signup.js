import React, { useState } from 'react'
import { FormControl, VStack, FormLabel, Input, InputGroup, InputRightElement, Button, useToast } from '@chakra-ui/react'
import axios from 'axios';
import { useHistory } from 'react-router-dom'

const Signup = () => {
    const [show, setShow] = useState(false);
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmpassword, setConfirmpassword] = useState();
    const [pic, setPic] = useState('');
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

    const postDetails = (pics) => {
        setLoading(true);
        if (pics === undefined) {
            toast({
                title: 'Please Select an Image!',
                description: "We've created your account for you.",
                status: 'warning',
                duration: 5000,
                isClosable: true,
            })
            return;
        }
        //console.log(pics)
        if (pics.type === "image/jpeg" || pics.type === "image/png") {
            const data = new FormData();
            data.append("file", pics);
            data.append("upload_preset", "chat-app");
            data.append("cloud_name", "anupraj");
            //console.log(data)
            fetch("https://api.cloudinary.com/v1_1/anupraj/image/upload", {
                method: 'POST',
                body: data,
            }).then((res) => res.json())
                .then(data => {
                    console.log(data);
                    setPic(data.toString());
                    setLoading(false);
                }).catch((err) => {
                    console.log(err);
                    //console.log(data.url.toString());
                    setLoading(false);
                });
        }
        else {
            toast({
                title: 'please select an image',
                description: "We've created your account for you.",
                status: 'success',
                duration: 5000,
                isClosable: true,
            });
            setLoading(false);
            return;
        }
    };

    const submitHandler = async () => {
        setLoading(true);
        if (!name || !email || !password || !confirmpassword) {
            toast({
                title: 'please Fill all the Fields',
                status: 'success',
                duration: 5000,
                isClosable: true,
            });
            setLoading(false);
            return;
        }
        if (password !== confirmpassword) {
            toast({
                title: 'password do not match',
                status: 'success',
                duration: 5000,
                isClosable: true,
            });
            return;
        }
        console.log(name, email, password, pic);
        try {
            const config = {
                headers: {
                    "Content-type": "application/json",
                },
            };

            const { data } = await axios.post("/api/user", { name, email, password, pic }, config);
            toast({
                title: 'Registration Succesfully',
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
                    <Input type={show ? 'text' : 'password'} onChange={(e) => setConfirmpassword(e.target.value)} />
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
            <Button colorScheme='blue' width='100%' style={{ margin: 15 }} onClick={submitHandler} isLoading={loading}>
                Sign Up
            </Button>
        </VStack>
    )
}

export default Signup
