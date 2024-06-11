import {Box, Flex, Link, Text, VStack } from "@chakra-ui/layout"
import { Avatar } from "@chakra-ui/avatar";
import {BsInstagram} from "react-icons/bs"
import { Portal } from "@chakra-ui/portal";
import { CgMoreO } from "react-icons/cg";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import { useToast } from "@chakra-ui/toast";




const UserHeader = () => {
    const toast = useToast()
    const copyURL = () =>{
       const currentURL = window.location.href;
       navigator.clipboard.writeText(currentURL).then(() =>{
        toast({
          title: 'Account created.',
          description: "Profile link copied.",
          status: 'success',
          duration: 300,
          isClosable: true,
        })
       });
    } ;
    return(
    <VStack gap={4} alignItems={"start"}>
        
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
            size={{
                base: "md",
                md: "xl"
            }}
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
                <Box className="icon-container">
                    <Menu>
                    <MenuButton>
                    <CgMoreO size={24} cursor={"pointer"}/>
                    </MenuButton>
                    <Portal>
                    <MenuList bg={"gray.dark"}>
                      <MenuItem bg={"gray.dark"} onClick={copyURL}>Copy Link</MenuItem>
                     </MenuList>
                    </Portal>
                    </Menu>
                </Box>
            </Flex>
       </Flex>
        <Flex w={"full"}>
            <Flex flex={1} borderBottom={"1.5px solid white"} justifyContent={"center"} pb="3" cursor={"pointer"}>
                <Text fontWeight={"bold"}>Crumbs</Text>
            </Flex>
            <Flex  flex={1} borderBottom={"1px solid gray"} justifyContent={"center"} color={"gray.light"} pb="3" cursor={"pointer"}>Replies</Flex>
        </Flex>
            </VStack>

    )
    
}


export default UserHeader;