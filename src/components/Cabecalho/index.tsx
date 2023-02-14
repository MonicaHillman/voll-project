import style from './Cabecalho.module.css';
import logo from './assets/Logo.png';
import perfil from './assets/Perfil.png';

function Cabecalho() {

    return (
        <header className={style.cabecalho}>
            <img src={logo}
                alt="logo"
                className={style.logo} />
            <div className={style.container}>
                <img src={perfil}
                    alt="Imagem de perfil do usuário" />
                <a href="#">Sair</a>
            </div>
        </header>
    )
}

export default Cabecalho;