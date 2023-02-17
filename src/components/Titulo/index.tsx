import styled from 'styled-components';
import React from 'react';
import avaliacao from './assets/Avaliacao.png';
import consulta from './assets/Consulta.png';
import grafico from './assets/Grafico.png';

interface Props {
    imagem?: string,
    children?: React.ReactNode
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
background-image:url(${props => props.imagem});
`

const TituloEstilizado = styled.h2`
color: var(--azul-claro);
`

function Titulo({ imagem, children }: Props) {
    return (
        <ContainerEstilizado>
            <SpanEstilizado imagem={imagem} />
            <TituloEstilizado>{children}</TituloEstilizado>
        </ContainerEstilizado>
    )
}

export default Titulo;