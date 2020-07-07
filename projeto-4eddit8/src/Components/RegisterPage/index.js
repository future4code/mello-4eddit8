import React from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import { Button, TextField } from '@material-ui/core';
import { RegisterForm } from './styled'


const Container = styled.div`
 display: grid;
    gap: 8px;

`;

function RegisterPage() {
  return (
    <Container >
      <Typography variant="h3" align= {"center"} gutterBottom>Cadastro</Typography>
      <RegisterForm>
        <TextField label={"Nome do usuário"} type={"text"} />
        <TextField label={"Email"} type={"email"} />
        <TextField label={"Senha"} type={"password"} />

        <Button variant={"contained"} color="primary" type={"submit"}>Cadastrar</Button>
      </RegisterForm>

      

    </Container>
  );
}

export default RegisterPage;
