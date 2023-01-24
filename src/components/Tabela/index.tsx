import React from 'react';
import { styled } from '@mui/material/styles';
import { Paper, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow } from '@mui/material';

const ColunaEstilizada = styled(TableCell)(({ theme }) => ({
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

function criarLinha(
    id: number,
    data: string,
    horario: string,
    profissional: string,
    especialidade: string,
    paciente: string,
    modalidade: string,
) {
    return { id, data, horario, profissional, especialidade, paciente, modalidade };
}

const rows = [
    criarLinha(1, '04/01/1999', '09:00', 'Dra. Ana Lúcia', 'Angiologista', 'Luana Malheiros', 'Particular'),
    criarLinha(2, '04/01/1999', '09:00', 'Dra. Ana Lúcia', 'Angiologista', 'Luana Malheiros', 'Particular'),
    criarLinha(3, '04/01/1999', '09:00', 'Dra. Ana Lúcia', 'Angiologista', 'Luana Malheiros', 'Particular'),
    criarLinha(4, '04/01/1999', '09:00', 'Dra. Ana Lúcia', 'Angiologista', 'Luana Malheiros', 'Particular'),
];


class Tabela extends React.Component {
    render() {
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
                        {rows.map((row) => (
                            <LinhaEstilizada key={row.id}>
                                <ColunaEstilizada component="th" scope="row">
                                    {row.data}
                                </ColunaEstilizada>
                                <ColunaEstilizada>{row.horario}</ColunaEstilizada>
                                <ColunaEstilizada>{row.profissional}</ColunaEstilizada>
                                <ColunaEstilizada>{row.especialidade}</ColunaEstilizada>
                                <ColunaEstilizada>{row.paciente}</ColunaEstilizada>
                                <ColunaEstilizada>{row.modalidade}</ColunaEstilizada>
                            </LinhaEstilizada>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        )
    }
}

export default Tabela;