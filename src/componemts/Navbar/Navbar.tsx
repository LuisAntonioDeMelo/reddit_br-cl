import { auth } from "@/firebase/clientApp";
import { Flex, Image } from "@chakra-ui/react";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import RightContent from "./RightContent/RightContent";
import SearchInput from "./SearchInput";

export const Navbar: React.FC = () => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <Flex bg="white" height="44px" padding="6px 12px">
      <Flex align="center">
        <Image src="/images/reddit-logo.png" height="30px" />
        <Image
          src="/images/reddit-logo-text.png"
          paddingLeft="1.5"
          paddingRight="1.5"
          height="15px"
          display={{ base: "none", md: "unset" }}
        />
      </Flex>
      <SearchInput />
      {/*<Directory />
       */}
      <RightContent user={user} />
    </Flex>
  );
};
