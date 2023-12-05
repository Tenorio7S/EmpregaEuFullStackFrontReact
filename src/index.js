import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
/*
BrowserRouter - responsavel por encapsular as rotas 
Routes - anunciador das rotas
Route -  as rotas propriamente dita
*/

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./componentes/Header";
import Home from "./rotas/Home";
import Vagas from "./rotas/Vagas";
import Cadastro from "./rotas/Cadastro";
import Sobre from "./rotas/Sobre";
import Login from "./rotas/Login";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      {/* inserir o Header para aparecer em todas as paginas */}
      <Header />
      <Routes>
        {/* parametros, path: caminho do site,  element: o que será carregado
        na pagina  */}
        <Route path="/Sobre" element={<Sobre/>}/>
        <Route path="/Cadastro" element={<Cadastro/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Vagas" element={<Vagas/>}/>
        <Route path="/Login" element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
