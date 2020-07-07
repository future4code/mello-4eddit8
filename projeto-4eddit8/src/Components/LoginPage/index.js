import React from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import { Button, TextField} from '@material-ui/core';
import { LoginForm } from './styled'

const Container = styled.div`
 display: grid;
    gap: 8px;

`;

function LoginPage() {
  return (
    <Container >
      <Typography variant="h3" align= {"center"} gutterBottom>Login</Typography>
      <LoginForm>
        <TextField label={"Email"} type={"email"} />
        <TextField label={"Senha"} type={"password"} />

        <Button variant={"contained"} color="primary" type={"submit"}>Entrar</Button>
      </LoginForm>

      <Button variant={"outlined"}  color="" type={"submit"}>Cadastrar</Button>

    </Container>
  );
}

export default LoginPage;
