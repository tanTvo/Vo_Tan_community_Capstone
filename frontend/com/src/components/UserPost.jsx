import { Avatar } from '@chakra-ui/avatar'

import { Box, Flex } from '@chakra-ui/layout'
import {Link} from 'react-router-dom'




const UserPost = () => {
    return (
        <>
    <Link to={"/tanvo/post/1"}> 
        <Flex gap={3} mb={4} py={5}>
        <Flex flexDirection={"column"} alignItems={"center"}>
            <Avatar size="md" name='Tan Vo' src='/tan-avatar.png'/>
            <Box w="1px" h={"full"} bg="gray.light" my={2}></Box>
            <Box position={"relative"} w={"full"}>
                <Avatar
                size="xs"
                name='john doe'
                src='https://bit.ly/dan-abramov'
                position={"absolute"}
                top={"0px"}
                left="15px"
                padding={"2px"}
                />
                   <Avatar
                size="xs"
                name='john doe'
                src='https://bit.ly/sage-adebayo'
                position={"absolute"}
                top={"0px"}
                left="15px"
                padding={"2px"}
                />
                   <Avatar
                size="xs"
                name='john doe'
                src='https://bit.ly/code-beast'
                position={"absolute"}
                top={"0px"}
                left="15px"
                padding={"2px"}
                />
            </Box>
        </Flex>
        </Flex>
        
        </Link>
        </>
    )
}



export default UserPost