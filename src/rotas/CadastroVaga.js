import React, { useState } from 'react';
import { criarVaga } from '../servicos/vagas'; // Substitua pelo caminho real

function CadastroVaga() {
    const [titulo, setTitulo] = useState('');
    const [empresa, setEmpresa] = useState('');
    const [salario, setSalario] = useState('');

    const handleCadastro = async () => {
        try {
            // Chame a função criarVaga do seu serviço
            const novaVaga = await criarVaga({
                titulo: titulo,
                empresa: empresa,
                salario: salario
            });

            // Faça algo com a nova vaga, se necessário
            console.log('Nova vaga criada:', novaVaga);

            // Limpe os campos do formulário após o cadastro
            setTitulo('');
            setEmpresa('');
            setSalario('');
        } catch (error) {
            console.error('Erro ao cadastrar vaga:', error);
        }
    };

    return (
        <div>
            <h2>Cadastro de Vaga</h2>
            <form>
                <label>Título:</label>
                <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} />

                <label>Empresa:</label>
                <input type="text" value={empresa} onChange={(e) => setEmpresa(e.target.value)} />

                <label>Salário:</label>
                <input type="number" value={salario} onChange={(e) => setSalario(e.target.value)} />

                <button type="button" onClick={handleCadastro}>
                    Cadastrar Vaga
                </button>
            </form>
        </div>
    );
}

export default CadastroVaga;
