import Botao from './components/Botao';
import Cabecalho from './components/Cabecalho';
import Container from './components/Container';
import Grafico from './components/Grafico';
import Rodape from './components/Rodape';
import Subtitulo from './components/Subtitulo';
import Tabela from './components/Tabela';
import Titulo from './components/Titulo';
import Avaliacao from './components/Avaliacao';
import useDadosProfissional from './useDadosProfissional';
import useDadosConsulta from './useDadosConsulta';

function App() {
  const { data: consultas, error: consultaErro } = useDadosConsulta();
  const { data: profissionais, error: profissionalErro } = useDadosProfissional();

  if (consultaErro || profissionalErro) {
    console.log('Houve um problema no carregamento')
  }

  return (
    <>
      <Cabecalho />
      <Container>
        <Titulo>Área Administrativa</Titulo>
        <Botao>Cadastrar especialista</Botao>
        <Titulo imagem="consulta">Consultas do Dia</Titulo>
        <Tabela />
        <Botao>Ver mais</Botao>
        <Titulo imagem="grafico">Consultas mensais por especialista</Titulo>
        <Subtitulo>Dezembro/22</Subtitulo>
        <Grafico profissionais={profissionais} consultas={consultas} />
        <Titulo imagem="avaliacao">Avaliações de especialistas</Titulo>
        <Subtitulo>Dezembro/22</Subtitulo>
        <Avaliacao profissionais={profissionais} />
      </Container>
      <Rodape />
    </>
  );
}

export default App;
