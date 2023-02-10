import React from "react";
import style from './Botao.module.css';

function Botao({ children }: { children: React.ReactNode }) {
    return (
        <button className={style.botao}>{children}</button>
    )
}

export default Botao;