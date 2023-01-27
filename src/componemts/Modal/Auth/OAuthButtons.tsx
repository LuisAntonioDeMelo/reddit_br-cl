import { Flex, Button, Image } from "@chakra-ui/react";

export const OAuthButtons: React.FC = () => {
  return (
    <Flex direction="column" width="100%" mb={4}>
      <Button variant="oauth" mb={2}>
        <Image src="/images/google-logo.png" height="20px" mr={4} />
        Continue with Google
      </Button>
      <Button variant="oauth"> Same Other Provider</Button>
    </Flex>
  );
};
