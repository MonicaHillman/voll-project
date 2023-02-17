import IProfissional from "../../types/IProfissional"
import Botao from "../Botao"
import SecaoCard from "./SecaoCard"
import Card from "./SecaoCard/Card"

function Avaliacao({ profissionais }: { profissionais: IProfissional[] | null }) {

    return (
        <SecaoCard>
            {profissionais?.map((dado) => {
                return <Card key={dado.id} profissional={dado} />
            })}

            {profissionais?.length! > 4 && <Botao>Ver mais</Botao>}
        </SecaoCard>
    )
}

export default Avaliacao;