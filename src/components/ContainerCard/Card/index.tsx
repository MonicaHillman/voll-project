import { Rating } from '@mui/material';
import { useState } from 'react';
import style from './Card.module.css';

function conectaAPI() {

}

function Card() {
    const [value, setValue] = useState();

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

            {<Rating
                name="simple-controlled"
                className={style.avaliacao}
                value={value}
                onChange={() => {
                    setValue(value);
                }}
            />}
        </div>
    )
}

export default Card;