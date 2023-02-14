import React, { ReactNode } from 'react';
import style from './ContainerCard.module.css';

function ContainerCard({ children }: { children: React.ReactNode }) {
    return (
        <section className={style.secao}>
            {children}
        </section>
    )
}

export default ContainerCard;