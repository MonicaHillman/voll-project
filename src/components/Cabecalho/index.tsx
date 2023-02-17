import logo from './assets/Logo.png';
import perfil from './assets/Perfil.png';
import styled from 'styled-components';

const CabecalhoEstilizado = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2em 4em;
`

const Container = styled.div`
    align-items: center;
    display: flex;
    flex-grow: .1;
    justify-content: space-around;
`

const LinkEstilizado = styled.a`
    color: var(--azul-escuro);
    font-weight: 700;
`

function Cabecalho() {
    return (
        <CabecalhoEstilizado >
            <img src={logo}
                alt="logo" />
            <Container >
                <img src={perfil}
                    alt="Imagem de perfil do usuário" />
                <LinkEstilizado href="#">Sair</LinkEstilizado>
            </Container>
        </CabecalhoEstilizado>
    )
}

export default Cabecalho;