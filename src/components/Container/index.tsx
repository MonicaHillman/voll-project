import React from 'react';
import style from './Container.module.css';

function Container({ children }: {
    children: React.ReactNode
}) {
    return (
        <section className={style.container}>
            {children}
        </section>
    )

}

export default Container;