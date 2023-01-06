import { Button, Container, Heading, Input, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
            <form>
                <VStack alignItems={'stretch'} spacing={'8'} w={['full','96']} m={'auto'} my={'16'}>
                    <Heading>Welcome Back</Heading>
                    <Input placeholder={'Enter your email'} type={'email'} required focusBorderColor={'purple.500'} />
                    <Input placeholder={'Enter Password'} type={'password'} required focusBorderColor={'purple.500'} />
                    <Button variant={"link"} alignSelf={'flex-end'}>
                        <Link to={"/forgetPassword"}>Forget password?</Link>
                    </Button>
                    <Button colorScheme={'purple'} type={'submit'}>LogIn</Button>
                    <Text textAlign={'right'}>
                        New User?{'    '}
                        <Button variant={"link"} alignSelf={'flex-end'}>
                            <Link to={"/signup"}>Sign Up</Link>

                        </Button>
                    </Text>
                </VStack>
            </form>
        </Container>
    )
}

export default Login