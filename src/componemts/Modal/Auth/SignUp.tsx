import { AuthModalState } from "@/atoms/authModalAtom";
import { auth } from "@/firebase/clientApp";
import { Input, Button, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";

//1:40:29
export const SignUp: React.FC = () => {
  const [signUpForm, setSignUpForm] = useState({
    email: "",
    password: "",
    confirm: "",
  });

  const [createUserWithEmailAndPassword, user, loading, userError] =
    useCreateUserWithEmailAndPassword(auth);
  const [error, setError] = useState("");

  const setAuthModalState = useSetRecoilState(AuthModalState);

  //Firebase logic
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    if (error) setError("");
    if (signUpForm.password !== signUpForm.confirm) {
      setError("Passwords do not match");
      return;
    }
    if (signUpForm.password.length < 8) {
      setError("Password is to short");
      return;
    }

    createUserWithEmailAndPassword(signUpForm.email, signUpForm.password);
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSignUpForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <form onSubmit={onSubmit}>
      <Input
        required
        name="email"
        placeholder="email"
        type="email"
        mb={2}
        fontSize="10pt"
        _placeholder={{ color: "gray.500" }}
        _hover={{
          bg: "white",
          border: "1px solid",
          borderColor: "blue.500",
        }}
        _focus={{
          outline: "none",
          bg: "white",
          border: "1px solid",
          borderColor: "blue.500",
        }}
        bg="gray.50"
        onChange={onChange}
      />
      <Input
        required
        name="password"
        placeholder="password"
        type="password"
        mb={2}
        fontSize="10pt"
        _placeholder={{ color: "gray.500" }}
        _hover={{
          bg: "white",
          border: "1px solid",
          borderColor: "blue.500",
        }}
        _focus={{
          outline: "none",
          bg: "white",
          border: "1px solid",
          borderColor: "blue.500",
        }}
        bg="gray.50"
        onChange={onChange}
      />
      <Input
        required
        name="confirm"
        placeholder="confirm password"
        type="password"
        mb={2}
        fontSize="10pt"
        _placeholder={{ color: "gray.500" }}
        _hover={{
          bg: "white",
          border: "1px solid",
          borderColor: "blue.500",
        }}
        _focus={{
          outline: "none",
          bg: "white",
          border: "1px solid",
          borderColor: "blue.500",
        }}
        bg="gray.50"
        onChange={onChange}
      />
      <Text textAlign="center" color="red" fontSize="10pt">
        {error}
      </Text>
      <Button
        width="100%"
        height="36px"
        mt={2}
        mb={2}
        type="submit"
        isLoading={loading}
      >
        {" "}
        Sign Up
      </Button>
      <Flex fontSize="9pt" justifyContent="center">
        <Text mr={1}>Already a redditor?</Text>
        <Text
          color="blue.500"
          fontWeight={700}
          cursor="pointer"
          onClick={() =>
            setAuthModalState((prev) => ({
              ...prev,
              view: "login",
            }))
          }
        >
          LOG IN
        </Text>
      </Flex>
    </form>
  );
};
