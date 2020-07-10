import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import { Button, TextField,  } from "@material-ui/core";
import { LoginForm, ButtonRegister, Container } from "./styled";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";


const baseUrl =
  "https://us-central1-labenu-apis.cloudfunctions.net/labEddit/login";

function LoginPage() {

  let history = useHistory()

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
        history.push('/timeline')
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
      
      <ButtonRegister>
        <Link to={"/register"} >
          <Button variant={"outlined"} color="" type={"submit"}>
          Quero me cadastar
          </Button>
        </Link>
      </ButtonRegister>

    </Container>
  );
}

export default LoginPage;
