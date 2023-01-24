import React from 'react';

class Subtitulo extends React.Component<{ children?: React.ReactNode }> {
    render() {
        return (
            <h3>{this.props.children}</h3>
        )
    }
}

export default Subtitulo;