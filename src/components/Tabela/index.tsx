import { styled } from '@mui/material/styles';
import { Paper, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow } from '@mui/material';
import useFetch from '../../useFetch';
import IConsulta from '../../types/IConsulta';
import Botao from '../Botao';

const ColunaEstilizada = styled(TableCell)(() => ({
    [`&.${tableCellClasses.head}`]: {
        color: 'var(--azul-escuro)',
        fontSize: 18,
        fontWeight: 700,
        font: 'var(--fonte-principal)'
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 16,
        font: 'var(--fonte-principal)'
    },
}));

const LinhaEstilizada = styled(TableRow)(() => ({
    [`&:nth-of-type(odd)`]: {
        backgroundColor: 'var(--cinza-claro)',
        align: 'right'
    },
}));

function Tabela({ consultas }: { consultas: IConsulta[] | null }) {

    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <ColunaEstilizada>Data</ColunaEstilizada>
                            <ColunaEstilizada>Horário</ColunaEstilizada>
                            <ColunaEstilizada>Profissional</ColunaEstilizada>
                            <ColunaEstilizada>Especialidade</ColunaEstilizada>
                            <ColunaEstilizada>Paciente</ColunaEstilizada>
                            <ColunaEstilizada>Modalidade</ColunaEstilizada>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {consultas?.map((row) => (
                            <LinhaEstilizada key={row.id}>
                                <ColunaEstilizada component="th" scope="row">
                                    {new Date(row.data).toLocaleDateString()}
                                </ColunaEstilizada>
                                <ColunaEstilizada>{row.horario}</ColunaEstilizada>
                                <ColunaEstilizada>{row.profissional[0].nome}</ColunaEstilizada>
                                <ColunaEstilizada>{row.profissional[0].especialidade}</ColunaEstilizada>
                                <ColunaEstilizada>{row.paciente}</ColunaEstilizada>
                                <ColunaEstilizada>{row.modalidade}</ColunaEstilizada>
                            </LinhaEstilizada>
                        ))}
                    </TableBody>
                </Table>

            </TableContainer >
            <Botao>Ver mais</Botao>
        </>
    )
}

export default Tabela;