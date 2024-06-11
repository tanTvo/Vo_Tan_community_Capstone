import { Avatar, Flex } from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";



const PostPage = () => {
    return <>
    <Flex>
        <Flex w={"full"} alignItems={"center"} gap={3}>
            <Avatar src='tan-avatar.png' size={"md"} name="Tan Vo"/>
            <Flex> 
                <Text fontSize={"sm"} fontWeight={"bold"}>Tanvo</Text>
                <Image src='/verified.png' w='4' h={4} ml={4}/>
            </Flex>
        </Flex>
        <Flex gap={4} alignItems={"center"}>
            <Text fontSize={"sm"} color={"gray.light"}>
                1d
            </Text>
            <BsThreeDots/>
        </Flex>
    </Flex>
    <Text>Lets talk about life</Text>
    </>
};





export default PostPage;