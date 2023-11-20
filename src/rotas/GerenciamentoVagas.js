import React, { useState, useEffect } from 'react';
import { getVagas,  atualizarVaga, excluirVaga } from '../servicos/vagas'; // Substitua pelo caminho real

function GerenciamentoVagas() {
    const [vagas, setVagas] = useState([]);
    const [edicao, setEdicao] = useState(null);
    const [titulo, setTitulo] = useState('');
    const [empresa, setEmpresa] = useState('');
    const [salario, setSalario] = useState('');

    useEffect(() => {
        // Carregar a lista de vagas ao montar o componente
        carregarVagas();
    }, []);

    const carregarVagas = async () => {
        try {
            // Chame a função getVagas do seu serviço
            const listaVagas = await getVagas();

            // Atualize o estado com a lista de vagas
            setVagas(listaVagas);
        } catch (error) {
            console.error('Erro ao carregar vagas:', error);
        }
    };

    const handleEditar = (vaga) => {
        // Ao clicar em "Editar", preencha o formulário com os dados da vaga
        setEdicao(vaga._id);
        setTitulo(vaga.titulo);
        setEmpresa(vaga.empresa);
        setSalario(vaga.salario);
    };

    const handleAtualizar = async () => {
        try {
            // Chame a função atualizarVaga do seu serviço
            await atualizarVaga(edicao, {
                titulo: titulo,
                empresa: empresa,
                salario: salario
            });

            // Limpe os campos do formulário após a atualização
            setEdicao(null);
            setTitulo('');
            setEmpresa('');
            setSalario('');

            // Recarregue a lista de vagas
            carregarVagas();
        } catch (error) {
            console.error('Erro ao atualizar vaga:', error);
        }
    };

    const handleExcluir = async (id) => {
        try {
            // Chame a função excluirVaga do seu serviço
            await excluirVaga(id);

            // Recarregue a lista de vagas após a exclusão
            carregarVagas();
        } catch (error) {
            console.error('Erro ao excluir vaga:', error);
        }
    };

    return (
        <div>
            <h2>Gerenciamento de Vagas</h2>
            <ul>
                {vagas.map((vaga) => (
                    <li key={vaga._id}>
                        {vaga.titulo} - {vaga.empresa} - ${vaga.salario}
                        <button onClick={() => handleEditar(vaga)}>Editar</button>
                        <button onClick={() => handleExcluir(vaga._id)}>Excluir</button>
                    </li>
                ))}
            </ul>
            {edicao !== null && (
                <div>
                    <h3>Editar Vaga</h3>
                    <label>Título:</label>
                    <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} />

                    <label>Empresa:</label>
                    <input type="text" value={empresa} onChange={(e) => setEmpresa(e.target.value)} />

                    <label>Salário:</label>
                    <input type="number" value={salario} onChange={(e) => setSalario(e.target.value)} />

                    <button onClick={handleAtualizar}>Atualizar</button>
                </div>
            )}
        </div>
    );
}

export default GerenciamentoVagas;
