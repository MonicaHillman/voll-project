import styled from 'styled-components';
import React from 'react';
import avaliacao from './assets/Avaliacao.png';
import consulta from './assets/Consulta.png';
import grafico from './assets/Grafico.png';

interface Props {
    imagem?: string,
    children?: React.ReactNode
}

interface IImagens {
    avaliacao: string,
    grafico: string,
    consulta: string
}

const ContainerEstilizado = styled.div`
display: flex;
align-items: center;
`

const SpanEstilizado = styled.span<Props>`
background-repeat: no-repeat;
background-position: center;
background-size: cover;
width: 25px;
height: 25px;
background-image: ${props => props.imagem ? `url(${props.imagem})` : 'none'};
`

const TituloEstilizado = styled.h2`
color: var(--azul-claro);
`

function Titulo({ imagem, children }: Props) {
    const listaDeImagens: IImagens = {
        avaliacao: avaliacao,
        grafico: grafico,
        consulta: consulta,
    }

    return (
        <ContainerEstilizado>
            {imagem && <SpanEstilizado imagem={listaDeImagens[imagem as keyof IImagens]} />}

            <TituloEstilizado>{children}</TituloEstilizado>
        </ContainerEstilizado>
    )
}

export default Titulo;