import React, { useState } from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import { Button, TextField } from "@material-ui/core";
import { RegisterForm } from "./styled";
import axios from "axios";

const Container = styled.div`
  display: grid;
  gap: 8px;
`;

const baseUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labEddit/signup";

function RegisterPage() {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onChangeUserName = (event) => {
    setUserName(event.target.value);
  };

  const createdUser = (event) => {
    event.preventDefault();

    const body = {
      email: email,
      password: password,
      username: username,
    };
    axios
      .post(baseUrl, body)
      .then((response) => {
        alert("Usuário cadastrado");
        //window.localStorage.setItem("token", response.data.token);
        //setUserName("")
        //setEmail("")
        //setPassword("")
        console.log(response.data);
      })
      .catch((error) => {
        alert("Usuário não foi cadastrado")
      });
  };

  return (
    <Container>
      <Typography variant="h3" align={"center"} gutterBottom>
        Cadastro
      </Typography>
      <RegisterForm onSubmit={createdUser}>
        <TextField
        onChange={onChangeUserName}
        value={username}
        name={"username"} 
        label={"Nome do usuário"} type={"text"} />
        <TextField 
         onChange={onChangeEmail}
         value={email}
         name={"email"}
         label={"Email"} type={"email"} />
        <TextField 
        onChange={onChangePassword}
        value={password}
        name={"password"}
        label={"Senha"} type={"password"} />

        <Button variant={"contained"} color="primary" type={"submit"}>
          Cadastrar
        </Button>
      </RegisterForm>
    </Container>
  );
}

export default RegisterPage;
