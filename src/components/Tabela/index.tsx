import { styled } from '@mui/material/styles';
import { Paper, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow } from '@mui/material';
import useFetch from '../../useFetch';
import IConsulta from '../../types/IConsulta';

const ColunaEstilizada = styled(TableCell)(() => ({
    [`&.${tableCellClasses.head}`]: {
        color: '#0B3B60',
        fontWeight: 700,

    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const LinhaEstilizada = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
        align: 'right'
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

function Tabela() {
    const { data, error } = useFetch<IConsulta[]>({ url: 'consultas' });
    if (error) { console.log(error) }

    return (
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
                    {data?.map((row) => (
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
    )
}

export default Tabela;