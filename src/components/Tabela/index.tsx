import { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import { Paper, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow } from '@mui/material';
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
    const [consultas, setConsultas] = useState<IConsulta[]>([]);

    useEffect(() => {
        fetch('http://localhost:3000/consultas').then(
            resposta => resposta.json()
        ).then((dados => setConsultas(dados)))
    }, [])

    console.log(consultas)
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
                    {consultas.map((row) => (
                        <LinhaEstilizada key={row.id}>
                            <ColunaEstilizada component="th" scope="row">
                                {row.data}
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
        </TableContainer>
    )
}

export default Tabela;