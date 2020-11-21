import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styled from "@emotion/styled";
import axios from "axios";

const Title = styled.h1`
  top: 15%;
  left: 50%;
  position: absolute;
  -webkit-transform: translate3d(-50%, -50%, 0);
  -moz-transform: translate3d(-50%, -50%, 0);
  transform: translate3d(-50%, -50%, 0);
  transition: all 0.3s;
  font-size: 96px;
`;

const HelpContainer = styled.div`
  left: 50%;
  top: 30%;
  display: table-cell;
  align-items: center;
  position: absolute;
  -webkit-transform: translate3d(-50%, -50%, 0);
  -moz-transform: translate3d(-50%, -50%, 0);
  transform: translate3d(-50%, -50%, 0);
  transition: all 0.3s;
`

const Container = styled.div`
  left: 50%;
  top: 50%;
  position: absolute;
  -webkit-transform: translate3d(-50%, -50%, 0);
  -moz-transform: translate3d(-50%, -50%, 0);
  transform: translate3d(-50%, -50%, 0);
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
  padding: 40px 55px 45px 55px;
  border-radius: 15px;
  transition: all 0.3s;
`;

export default function Login() {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return username.length > 0 && password.length > 0;
  }

  const handleLogIn = async () => {
    
    let ruralclinic = {
      username: "ruralclinic",
      password: "democlinic",
    }

    let urbanclinic = {
      username: "urbanclinic",
      password: "democlinic",
    }
    if (username === ruralclinic.username && password === ruralclinic.password){
      window.localStorage.setItem(
        "clinic_type", "ruralclinic"
      );
      history.push("/");
    }
    else if (username === urbanclinic.username && password === urbanclinic.password){
      window.localStorage.setItem(
        "clinic_type", "urbanclinic"
      );
      history.push("/");
    }
    else{
      alert("Please try the displayed username and password");
      return;
    }

    
    // let config = {
    //   method: "post",
    //   url: "http://localhost:8000/auth-token/",
    //   data: data,
    // };
    // await axios(config).then((response) => {
    //     console.log(response.data);
        
    //   })
    //   .catch ((error) => {
    //   console.error(error);
    // });
  };

  
  return (
    <>
      <Title>Adya Health</Title>
      <HelpContainer>
      <small>For rural practioner username: ruralclinic password: democlinic</small><br/>
      <small>For specialist practioner username: urbanclinic password: democlinic</small>
      </HelpContainer>
      <Container className="Login">
        <Form onSubmit={handleLogIn}>
          <Form.Group size="lg" controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control
              autoFocus
              type="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>
          <Form.Group size="lg" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button
            variant="primary"
            block
            size="lg"
            type="submit"
            disabled={!validateForm()}
          >
            Login
          </Button>
        </Form>
      </Container>
    </>
  );
}
