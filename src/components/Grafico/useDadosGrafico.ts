import IConsulta from "../../types/IConsulta";
import IProfissional from "../../types/IProfissional";

interface Props {
    profissionais: IProfissional[] | null,
    consultas: IConsulta[] | null
}

interface IData {
    nome: string,
    consultas: number
}

const useDadosGrafico = ({ profissionais, consultas }: Props) => {
    let data: Array<IData> = [];

    if (consultas && profissionais) {
        let numeroConsultas = 0;
        for (let indice = 0; indice < profissionais.length; indice++) {
            numeroConsultas = consultas.reduce(function (obj, b) {
                if (b.profissional[0].nome === profissionais[indice].nome) {
                    obj++
                }
                return obj
            }, 0);
            data.push({ 'nome': profissionais[indice].nome, 'consultas': numeroConsultas })

        }

    }

    return data
}

export default useDadosGrafico;