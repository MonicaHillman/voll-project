import React from 'react';
import whatsapp from './assets/whatsapp.png';
import instagram from './assets/instagram.png';
import google from './assets/google.png';
import facebook from './assets/facebook.png';
import style from './Rodape.module.css';

class Rodape extends React.Component {
    render() {
        return (
            <footer className={style.rodape}>
                <ul className={style.lista}>
                    <li><a href="#"><img src={facebook} alt="logo do facebook" /></a></li>
                    <li><a href="#"><img src={whatsapp} alt="logo do whatsapp" /></a></li>
                    <li><a href="#"><img src={google} alt="logo do google" /></a></li>
                    <li><a href="#"><img src={instagram} alt="logo do instagram" /></a></li>
                </ul>
                <p>2023 © Desenvolvido por Alura | Projeto fictício sem fins comerciais.</p>
            </footer>
        )
    }
}

export default Rodape;