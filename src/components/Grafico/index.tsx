import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import IConsulta from '../../types/IConsulta';
import IProfissional from '../../types/IProfissional';
import useFetch from '../../useFetch';
import style from './Grafico.module.css';

function Grafico() {
    const dadosProfissional = useFetch<IProfissional[]>({ param: 'profissionais' });
    const dadosConsulta = useFetch<IConsulta[]>({ param: 'consultas' });
    let data: Array<Object> = [];

    if (dadosConsulta.data) {
        let numeroConsultas = 0;
        for (let indice = 0; indice < dadosProfissional?.data!.length; indice++) {
            numeroConsultas = dadosConsulta?.data!.reduce(function (obj, b) {
                if (b.profissional[0].nome === dadosProfissional?.data![indice].nome) {
                    obj++
                }
                return obj
            }, 0);
            data.push({ 'nome': dadosProfissional?.data![indice].nome, 'consultas': numeroConsultas })
        }
    }

    return (
        <ResponsiveContainer width="100%" height={350} className={style.container}>
            <BarChart
                layout="vertical"
                data={data}
                margin={{ top: 25, right: 40, left: 40, bottom: 20 }}
            >
                <XAxis
                    type="number"
                    style={{
                        fontFamily: 'var(--fonte-secundaria)',
                    }} />
                <YAxis
                    type="category"
                    dataKey="nome"
                    style={{
                        fontFamily: 'var(--fonte-secundaria)',
                    }} />
                <Bar dataKey="consultas" fill='#0B3B60' barSize={30} />
            </BarChart>
        </ResponsiveContainer >
    )
}

export default Grafico;