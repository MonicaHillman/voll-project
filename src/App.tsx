import React from 'react';
import Cabecalho from './components/Cabecalho';
import Card from './components/Card';
import Container from './components/Container';
import ContainerCard from './components/ContainerCard';
import Grafico from './components/Grafico';
import Rodape from './components/Rodape';
import Subtitulo from './components/Subtitulo';
import Tabela from './components/Tabela';
import Titulo from './components/Titulo';

function App() {
  return (
    <div className="App">
      <Cabecalho />
      <Container>
        <Titulo>Consultas do Dia</Titulo>
        <Tabela />
        <Titulo>Consultas mensais por especialista</Titulo>
        <Subtitulo>Dezembro/22</Subtitulo>
        <Grafico />
        <Titulo>Avaliações de especialistas</Titulo>
        <Subtitulo>Dezembro/22</Subtitulo>
        <ContainerCard>
          <Card />
          <Card />
          <Card />
          <Card />
        </ContainerCard>
      </Container>
      <Rodape />
    </div>
  );
}

export default App;
