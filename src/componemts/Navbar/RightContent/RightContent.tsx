import { AuthModal } from "@/componemts/Modal/Auth/AuthModal";
import { Flex } from "@chakra-ui/react";
import React from "react";
import { AuthButtons } from "./AuthButtons";

export default function RightContent({}) {
  return (
    <>
      <AuthModal />
      <Flex justify="center" align="center">
        <AuthButtons />
      </Flex>
    </>
  );
}
