import styled from 'styled-components';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import useDadosGrafico from './useDadosGrafico';
import IProfissional from '../../types/IProfissional';
import IConsulta from '../../types/IConsulta';

const SecaoEstilizada = styled.section`
background-color: var(--branco);
border-radius: 16px;
`

interface Props {
    profissionais: IProfissional[] | null,
    consultas: IConsulta[] | null
}

interface IData {
    nome: string,
    consultas: number
}

function Grafico({ profissionais, consultas }: Props) {
    let data: Array<IData> = useDadosGrafico({ profissionais, consultas });

    return (
        <SecaoEstilizada>
            <ResponsiveContainer width="100%" height={350}>
                <BarChart
                    layout="vertical"
                    data={data}
                    margin={{ top: 25, right: 40, left: 40, bottom: 20 }}
                >
                    <XAxis
                        type="number"
                    />
                    <YAxis
                        type="category"
                        dataKey="nome"
                    />
                    <Bar dataKey="consultas" fill='#0B3B60' barSize={30} />
                </BarChart>
            </ResponsiveContainer >
        </SecaoEstilizada>
    )
}

export default Grafico;