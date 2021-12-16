import Navegador from '../components/Navegador';

export default function Inicio() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            flexWrap: 'wrap'
        }}>
            <Navegador destino='/estiloso'  text='Estilozin'/>
            <Navegador destino='/exemplo' color='darkviolet' text='Exemplo'/>
            <Navegador destino='/jsx' color='crimson' text='JSX'/>
            <Navegador destino='/navegacao' color='green' text='Navegação #01'/>
            <Navegador destino='/cliente/sp-2/123' color='blue' text='Navegação #02'/>

        </div>
    )
}
