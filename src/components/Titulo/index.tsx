import React from 'react';
import style from './Titulo.module.css';

function Titulo({ children, nome }: { children: React.ReactNode, nome?: String }) {
    return (
        <div className={style.container}>
            <span className={`${style.imagem} ${style[`${nome}`]}`} />
            <h2 className={style.titulo}>{children}</h2>
        </div>
    )
} 

export default Titulo;