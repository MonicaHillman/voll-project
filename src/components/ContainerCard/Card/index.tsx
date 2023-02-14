import { Rating } from '@mui/material';
import { useState } from 'react';
import IProfissional from '../../../types/IProfissional';
import style from './Card.module.css';

function Card({ dadosProfissional }: { dadosProfissional: IProfissional }) {
    const [value, setValue] = useState(dadosProfissional.nota);
    return (
        <div className={style.card}>
            <div className={style.informacoes}>
                <img
                    src={dadosProfissional.imagem}
                    alt="Foto de perfil"
                    className={style.imagem} />
                <div>
                    <p>{dadosProfissional.nome}</p>
                    <p>{dadosProfissional.especialidade}</p>
                </div>
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