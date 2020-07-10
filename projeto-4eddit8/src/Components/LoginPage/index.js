import React, { useState } from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import { Button, TextField } from "@material-ui/core";
import { LoginForm } from "./styled";
import axios from "axios";

const Container = styled.div`
  display: grid;
  gap: 8px;
`;

const baseUrl =
  "https://us-central1-labenu-apis.cloudfunctions.net/labEddit/login";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onSubmitLogin = (event) => {
    event.preventDefault();

    const body = {
      email: email,
      password: password,
    };
    axios
      .post(baseUrl, body)
      .then((response) => {
        window.localStorage.setItem("token", response.data.token);
        setEmail("")
        setPassword("")
        alert("Usuário logado");
      })

      .catch((error) => {
        alert("Email ou senha incorreta");
      });
  };

  return (
    <Container>
      <Typography variant="h3" align={"center"} gutterBottom>
        Login
      </Typography>
      <LoginForm onSubmit={onSubmitLogin}>
        <TextField
          onChange={onChangeEmail}
          value={email}
          name={"email"}
          label={"Email"}
          type={"email"}
        />

        <TextField
          onChange={onChangePassword}
          value={password}
          name={"password"}
          label={"Senha"}
          type={"password"}
        />

        <Button variant={"contained"} color="primary" type={"submit"}>
          Entrar
        </Button>
      </LoginForm>

      <Button variant={"outlined"} color="" type={"submit"}>
        Cadastrar
      </Button>
    </Container>
  );
}

export default LoginPage;
