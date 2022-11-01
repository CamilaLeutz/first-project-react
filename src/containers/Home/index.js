import React, { useState, useRef } from "react";
import {useHistory} from "react-router"
import axios from "axios";

import People from "../../assets/people.svg";
import Arrow from "../../assets/arrow.svg";

import H1 from "../../components/Title"
import ContainerItens from "../../components/ContainerItens";
import Button from "../../components/Button"

import {
  Container,
  Image,
  InputLabel,
  Input,
} from "./styles";


const api = axios.create({ baseURL: "http://localhost:3001" });

function App() {
  const [users, setUsers] = useState([]);
  const history = useHistory();
  const inputName = useRef();
  const inputAge = useRef();

  async function addNewUser() {

    const { data: newUser } = await api.post("/users", {
      name: inputName.current.value,
      age: inputAge.current.value,
    });

    setUsers([...users, newUser]);
    
    history.push("/usuarios")
  }

  return (
    <Container>
      <Image alt="logo-imagem" src={People}></Image>

      <ContainerItens>
        <H1>Olá!</H1>

        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Nome"></Input>

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder="Idade"></Input>

        <Button onClick={addNewUser}>
          Cadastrar <img alt="seta" src={Arrow} /> {/**/ }
        </Button>

      </ContainerItens>
    </Container>
  );
}
export default App;
