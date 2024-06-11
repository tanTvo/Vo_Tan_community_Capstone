import {Box, Flex, Link, Text, VStack } from "@chakra-ui/layout"
import { Avatar } from "@chakra-ui/avatar";
import {BsInstagram} from "react-icons/bs"



const UserHeader = () => {
    return(<VStack gap={4} alignItems={"start"}>
        
        
       <Flex justifyContent={"space-between"} w={"full"}>
        <Box>
            <Text fontSize={"2x1"} fontWeight={"bold"}>
                Tan Vo
            </Text>
            <Flex gap={2} alignItems={"center"}>
                <Text fontSize={"sm"}>TVo</Text>
                <Text fontSize={"xs"} bg={"gray.dark"} color={"gray.light"} p={1} borderRadius={"full"}>supaman.gov</Text>
            </Flex>
        </Box>
        <Box  >
        <Avatar
            name="Tan"
            src= "/tan-avatar.png"
            size={"x1"}
        />
    


        </Box>

       </Flex>

       <Text>
        Bootcamp software engineer graduate, versatile in many things
       </Text>
       <Flex w={"full"} justifyContent={"space-between"}>
            <Flex gap={2} alignItems={"center"}>
                <Text color={"gray.light"}>3.2k followers</Text>
                <Box w="1" h="1" bg={"gray.light"} borderRadius={"full"}></Box>
                <Link color={"gray.light"}>instagram.com</Link>
            </Flex>
            <Flex>
                <Box className="icon-container">
                    <BsInstagram size={24} cursor={"pointer"}/>
                </Box>
            </Flex>
       </Flex>
        
            </VStack>

    )
    
}


export default UserHeader;