//importando axios instalando o axios npm install axios 
/*
Impoter a biblioteca que você vai usar para fazer as requisições HTTP
*/
import axios from "axios";

//criar Apis personalizadas com AXIOS, create recebe pelo menos um objeto
//nesse caso o baseURL é o caminho que axios vai utilizar  para buscar os dados como era feito no postman

const vagasAPI = axios.create({ baseURL: "http://localhost:8000/vagas" });

//primeira funcao sera o do get 

async function getVagas(){
    // //pegar todas a vagas sem precisar passar parametros 
    //  const response = await vagasAPI.get('/')

    //  //retorna todos os livros da nossa requisicao  
    //  return response.data
    try{
        const response = await vagasAPI.get('/')
        return response.data
    }

    catch(error){
        console.error("erro ao buscar dados na api ", error)
    }
}

//aqui vamos dar o export de varias funcoes por issno nao utilizaremos o default
export {
    getVagas
}
