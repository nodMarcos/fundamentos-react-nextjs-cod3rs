import { useState } from "react"
import Layout from "../components/Layout"

export default function Integracao() {

    const [codigo, setCodigo] = useState(0);
    const [cliente, setCliente] = useState({})

    async function obterCliente(){
        const resp = await fetch(`http://localhost:3000/api/clientes/${codigo}`)
        
        const dados = await resp.json();
        setCliente(dados)
        
        //fetch(`http://localhost:3000/api/clientes/${codigo}`)     
        //    .then(res => res.json())
        //    .then(dados => setCliente(dados))
    }

    return (
     <Layout>
         <div>
             <input type="number" onChange={(e) => setCodigo(e.target.value)} value={codigo}/>
             <button onClick={obterCliente}>Obter Cliente</button>
         </div>
         <ul>
             <li>Código: {cliente.id} </li>
             <li>Nome: {cliente.nome}</li>
             <li>Email: {cliente.email}</li>
         </ul>
     </Layout>   
    )
}