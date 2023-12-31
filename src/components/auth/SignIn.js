import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const FormContainer = styled.div`
  background-color: #fff;
  padding: 20px 50px;
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

const FlexDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
`;

const LoginButton = styled.button`
  background-color: #815034;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  height: 50px;
  width: 200px;
  cursor: pointer;
  font-size: 17px;
`;

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .then(() => {
        navigate("/");
      })
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
        <form onSubmit={handleSubmit}>
          <FormControl
            type="email"
            placeholder="Email"
            value={email}
            id="signInEmail"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormControl
            type="password"
            placeholder="Password"
            value={password}
            id="signInPassword"
            name="password"
            autoComplete={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FlexDiv>
            <label>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                color="#815034"
              />{" "}
              Remember Me
            </label>
            <a href="#">Forgot Password</a>
          </FlexDiv>
          <LoginButton type="submit">Sign In</LoginButton>
        </form>
      </FormContainer>
    </Container>
  );
}

export default SignIn;
