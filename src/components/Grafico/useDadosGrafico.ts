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
        data = profissionais.map((profissional) => ({
            nome: profissional.nome,
            consultas: consultas.filter((consulta) =>
                consulta.profissional.some((p) => p.nome === profissional.nome)
            ).length,
        }));
    }

    return data
}

export default useDadosGrafico;