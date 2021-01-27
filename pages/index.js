import React, { useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import Head from 'next/head';

// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px){
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');
  console.log('retorno do useState', name, setName);
  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
      <title>Greed Island</title>
      </Head>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
            <form onSubmit={function (infosDoEvento){
              infosDoEvento.preventDefault();
              router.push(`/quiz?name=${name}`);
              console.log('Fazendo uma submissao por meio do react');
            }}>
              <input 
                onChange={function (infosDoEvento) {
                console.log(infosDoEvento.target.value);
                // name = infosDoEvento.target.value;
                setName(infosDoEvento.target.value);
              }} 
                placeholder="Qual seu nome usuario de Nen?"/>
              <button type="submit" disabled={name.length === 0}>
                Jogar como {name}
              </button>
            </form>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <h1>Hunter x Hunter</h1>
            <p>Quiz das 100 perguntas da Greed Island</p>
          </Widget.Content>
        </Widget>
        <Footer/>
      </QuizContainer>
      
      <GitHubCorner projectUrl="https://github.com/Mazzeu"/>
    </QuizBackground>
  );
}
