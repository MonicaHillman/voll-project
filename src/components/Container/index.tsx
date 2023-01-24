import React from 'react';
import style from './Container.module.css';

class Container extends React.Component<{ children?: React.ReactNode }> {
    render() {
        return (
            <section className={style.container}>
                {this.props.children}
            </section>
        )
    }
}

export default Container;