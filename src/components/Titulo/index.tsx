import React from 'react';
class Titulo extends React.Component<{ children?: React.ReactNode }> {
    render() {
        return (
            <h2>{this.props.children}</h2>
        )
    }
}

export default Titulo;