import { useState, useEffect } from "react";
import { BASE_URL } from "../constants/constants";
import axios from "axios";
import {Title,NameContainer } from '../style'
import { Card } from '../components/Card/Card'
import { useCapturarNome } from "../hooks/useCapturarNomes";
import { useRequestData } from "../hooks/useRequestData";


const UserNamesPage = () => {
//  const {nomeUsuarios} = useCapturarNome()
const [nomeUsuarios, error, isLoading] = useRequestData([], `${BASE_URL}users`)

  return (
    <div>
      <Title>Nomes dos usuários</Title>
      <NameContainer>
        {isLoading && <p>Carregando...</p>}
        {!isLoading && error && <p>Ocorreu um erro. Tente novamente mais tarde.</p>}
        {!isLoading && nomeUsuarios && nomeUsuarios.length === 0 && <p>Lista vazia</p>}
        {nomeUsuarios.map((usuario) => {
          return(
          <Card 
          key={usuario.id} 
          text={usuario.name} 
          backgroudColor={'nome'}
          textColor={'nome'}
          />)
        })}
      </NameContainer>
    </div>
  );
}

export default  UserNamesPage;



