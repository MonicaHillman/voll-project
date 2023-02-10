import style from './Cabecalho.module.css';
import logo from './Logo.png';

function Cabecalho() {

    return (
        <header className={style.cabecalho}>
            <img src={logo}
                alt="logo"
                className={style.logo} />
            <div>
                <a href="#">Sair</a>
            </div>
        </header>
    )
}

export default Cabecalho;