import React, { useState } from "react";
import styled from "styled-components";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const FormContainer = styled.div`
  background-color: #fff;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 50px;
  padding-bottom: 50px;
  border-radius: 15px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  opacity: 0.5;
`;

const FormControl = styled.input`
  margin: 10px 0;
  padding: 10px;
  border: none;
  border-bottom: 1px solid #815034;
  width: 100%;
  box-sizing: border-box;
  &:focus {
    outline: none;
  }
`;

const SignUpButton = styled.button`
  background-color: #815034;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  height: 50px;
  width: 200px;
  cursor: pointer;
  font-size: 17px;
`;

function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => console.log(userCredential))
      .catch((error) => console.error(error));
  };

  return (
    <Container>
      <FormContainer>
        <div>
          <img
            src="https://static.vecteezy.com/system/resources/previews/008/302/515/non_2x/eps10-brown-user-icon-or-logo-in-simple-flat-trendy-modern-style-isolated-on-white-background-free-vector.jpg"
            width={"150px"}
          />
        </div>
        <form onSubmit={signUp}>
          <FormControl
            type="text"
            placeholder="First Name"
            value={firstName}
            id="firstName"
            name="firstName"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <FormControl
            type="text"
            placeholder="Last Name"
            value={lastName}
            id="lastName"
            name="lastName"
            onChange={(e) => setLastName(e.target.value)}
          />
          <FormControl
            type="email"
            placeholder="Email"
            value={email}
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormControl
            type="password"
            placeholder="Password"
            value={password}
            id="password"
            name="password"
            autoComplete={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <SignUpButton type="submit">Sign Up</SignUpButton>
        </form>
      </FormContainer>
    </Container>
  );
}

export default SignUp;
