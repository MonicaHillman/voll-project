import { Rating } from '@mui/material';
import React from 'react';
import style from './Card.module.css';
/*
const [value, setValue] = React.useState<number | null>(2);
*/

class Card extends React.Component {
    render() {

        return (
            <div className={style.card}>
                <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                    alt="Foto de perfil"
                    className={style.imagem} />
                <div>
                    <p>Dr. Ana Lúcia</p>
                    <p>Angiologista</p>
                </div>

                {/* <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                />  */}
            </div>
        )
    }
}

export default Card;