import { BarChart, Bar, XAxis, YAxis } from 'recharts';

const data = [
    { nome: 'Ana Lúcia', consultas: 20 },
    { nome: 'Lucas Campos', consultas: 30 },
    { nome: 'Lúcia Pádua', consultas: 40 },
    { nome: 'Júlio Dantas', consultas: 50 },
    { nome: 'Marina Gonçalves', consultas: 60 },
];

function Grafico() {
    return (
        <>
            <BarChart
                width={1000}
                height={400}
                layout="vertical"
                data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
                <XAxis type="number" />
                <YAxis type="category" dataKey="nome" />
                <Bar dataKey="consultas" fill="#8884d8" barSize={30} />
            </BarChart>
        </>
    )
}

export default Grafico;