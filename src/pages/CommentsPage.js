import { useState, useEffect } from "react";
import { BASE_URL } from "../constants/constants";
import axios from "axios";
import {Title,PostContainer } from '../style'
import { Card } from '../components/Card/Card'
import { useCapturarPostagens } from "../hooks/useCapturarPostagens";
import { useRequestData } from "../hooks/useRequestData";


const  CommentsPage = () => {
  // const [posts] = useCapturarPostagens()
  const [posts, error, isLoading] = useRequestData([], `${BASE_URL}comment`)

  return (
    <div>
      <Title>Comentários dos usuários</Title>
      <PostContainer>
      {isLoading && <p>Carregando...</p>}
      {!isLoading && error && <p>Ocorreu um erro. Tente novamente mais tarde.</p>}
      {!isLoading && !error && posts && posts.length === 0 && <p>Lista vazia</p>}
      {posts.map((post) => {
        //console.log(post);
        return(
          <Card 
          key={post.id} 
          text={post.body} 
          backgroudColor={'#1dc690'}
          textColor={'#ffffff'}
          />)
      })}
      </PostContainer>
    </div>
  );
}

export default CommentsPage;



