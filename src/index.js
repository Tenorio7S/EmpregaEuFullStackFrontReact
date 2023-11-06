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
        <Route path="/cadastro" element={<p>Oi!</p>} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
