import Layout from "../components/Layout";

export default function Jsx() {
    const titulo = 'JSX é um conceito central';

    function subtitulo() {
       return <h2>{"muito top".toUpperCase()}</h2>
    }


   return (
       <Layout titulo='Entendendo JSX'>
       <div>
           <h1>{titulo}</h1>
           {subtitulo()}
           <p>
               {
                   JSON.stringify({nome: 'jão', idade: 30})
               }
           </p>
       </div>
       </Layout>
   )
}