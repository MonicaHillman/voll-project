import { Typography } from '@mui/material';
import Botao from './components/Botao';
import Cabecalho from './components/Cabecalho';
import Card from './components/ContainerCard/Card';
import Container from './components/Container';
import ContainerCard from './components/ContainerCard';
import Grafico from './components/Grafico';
import Rodape from './components/Rodape';
import Subtitulo from './components/Subtitulo';
import Tabela from './components/Tabela';
import Titulo from './components/Titulo';

function App() {
  return (
    <>
      <Cabecalho />
      <Container>
        <Titulo>Área Administrativa</Titulo>
        <Botao>Cadastrar especialista</Botao>
        <Titulo nome="consulta">Consultas do Dia</Titulo>
        <Tabela />
        <Botao>Ver mais</Botao>
        <Titulo nome="grafico">Consultas mensais por especialista</Titulo>
        <Subtitulo>Dezembro/22</Subtitulo>
        <Grafico />
        <Titulo nome="avaliacao">Avaliações de especialistas</Titulo>
        <Subtitulo>Dezembro/22</Subtitulo>
        <ContainerCard>
          <Card />
          <Card />
          <Card />
          <Card />
        </ContainerCard>
        <Botao>Ver mais</Botao>
      </Container>
      <Rodape />
    </>
  );
}

export default App;
