import axios from "axios";

//criar uma api personalizada
//create recebe um bojrto de configuração
//Base URL  é o endereco que vamos consultar.
const vagasApi = axios.create({baseURL: "http://localhost:8000/vagas"});

function getVagas(){
    const response = vagasApi.get("/");

    return response. data
}

export {
    getVagas
}