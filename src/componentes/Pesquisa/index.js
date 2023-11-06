import Input from '../Input'
import styled from 'styled-components'
// hook do react para manusear o estado de um componente, pode mudar o estado a medida que o usuário digitar 
import { useEffect, useState } from 'react'
import { getVagas } from '../servicos/vagas'
//remover para buscad da fonte de dados 
//import { vagas } from './dadosPesquisa'

const PesquisaContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    height: 470px;
    width: 100%;
`

const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`

const Subtitulo = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`

const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;

    p {
        width: 200px;
    }

    img {
        width: 100px;
    }

    &:hover {
        border: 1px solid white;
    }
`

function Pesquisa() {
    //nome do atributo que regastar seguido do nome do atributo que vai resgatar
    //igualar o useState e passar o valor inicial do estado, que no nosso caso será um array vazio 
    const [vagasPesquisadas, setVagasPesquisadas] = useState([])
    //---implementar so depois inicio 
    // depois vamos criar mais um state para armazenar as vagas que ja existem
    const [vagas, setVagas] = useState([])


    //assim que o site abrir deve carregar as vagas do base, para isso vamos utilizar o useEffect\
    //primeiro parametro é uma funcao vazia e o segundo uma lista vazia
    //
    useEffect (()=>{
        fetchVagas()
    }, [])


    //chamar uma funcao async para ser consumida pela useEffect, ja que ele nao trata essas funcoes assincronas 

    async function fetchVagas(){
        //salvar dentro de uma constante o resultado do get
        const vagasDaAPI = await getVagas ()
        setVagas(vagasDaAPI)
    }
    
    /// para testar

    console.log(vagasPesquisadas);
    return (
        <PesquisaContainer>
            <Titulo>Encontre a vaga tão procurada</Titulo>
            <Subtitulo>busque agora pelo nome do cargo.</Subtitulo>
            <Input
                placeholder="digite nome ou tema da vaga"
                //evento de blur muda a cor do imput além de fazer captura do conteudo pelo parametro evento
                onBlur={evento => {
                    //armazenando o que esta digitado em uma variavel 
                    const textoDigitado = evento.target.value
                    //retorna as vagas filtradas, o filtro recebe uma funcao para cada elmento da lista, se retornar
                    //verdadeiro fica na lista caso retorne falso nao  entra na  lista 
                    //--include -- verifica se esta no nome o texto digitado
                    //remover para buscar de fonte de dados
                    //const resultadoPesquisa = vagas.filter( vaga => vaga.nome.includes(textoDigitado))
                    const resultadoPesquisa =  vagas.filter( vaga => vaga.titulo.includes(textoDigitado))
                    //salvando na variavel do states 
                    setVagasPesquisadas(resultadoPesquisa)
                }}
            />
            {/* utilizando Map para mostrar na tela a lista de vagas */}
            { vagasPesquisadas.map( vaga => (
                <Resultado>
                    <p>{vaga.titulo}</p>
                </Resultado>
            ) ) }
        </PesquisaContainer>
    )
}

export default Pesquisa