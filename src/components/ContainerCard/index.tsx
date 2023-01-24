import React from 'react';
import style from './ContainerCard.module.css';

class ContainerCard extends React.Component<{ children?: React.ReactNode }> {
    render() {
        return (
            <section className={style.secao}>
                {this.props.children}
            </section>
        )
    }
}

export default ContainerCard;