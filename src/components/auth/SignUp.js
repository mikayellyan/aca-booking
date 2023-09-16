import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormContainer = styled.div`
  width: 430px;
  background-color: #fff;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
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

const SignInLink = styled(Link)`
  display: block;
  margin-top: 10px;
  text-decoration: none;
  color: #815034;
  font-weight: bold;
`;

function SignUp(props) {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const path = props.path || "/";

  const signUp = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(userCredential.user, {
        displayName: `${name} ${surname}`,
      });
      navigate(path);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container
      style={
        location.pathname === "/signup"
          ? {
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              position: "absolute",
            }
          : {}
      }
    >
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
            placeholder="Name"
            value={name}
            id="signUpName"
            name="name"
            onChange={(e) => setName(e.target.value)}
          />
          <FormControl
            type="text"
            placeholder="Surname"
            value={surname}
            id="signUpSurname"
            name="surname"
            onChange={(e) => setSurname(e.target.value)}
          />
          <FormControl
            type="email"
            placeholder="Email"
            value={email}
            id="signUpEmail"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormControl
            type="password"
            placeholder="Password"
            value={password}
            id="signUpPassword"
            name="password"
            autoComplete={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <SignUpButton type="submit" onSignUp={props.onSignUp}>
            Sign Up
          </SignUpButton>

          <SignInLink to="/signin">Already have an account? Sign In</SignInLink>
        </form>
      </FormContainer>
    </Container>
  );
}

export default SignUp;
