let animais = JSON.parse(localStorage.getItem('animais')) || [];

const form = document.getElementById('formAnimal');
const tabela = document.getElementById('tabelaAnimais');
const btnSalvar = document.getElementById('btnSalvar');
const btnCancelar = document.getElementById('btnCancelar');

function salvarNoStorage() {
    localStorage.setItem('animais', JSON.stringify(animais));
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const id = document.getElementById('animalId').value;
    const nome = document.getElementById('nome').value.trim();
    const especie = document.getElementById('especie').value;
    const porte = document.getElementById('porte').value;
    const raca = document.getElementById('raca').value.trim() || 'SRD';
    const idade = document.getElementById('idade').value || '0';
    const saude = document.getElementById('saude').value;
    const status = document.getElementById('status').value;
    const descricao = document.getElementById('descricao').value.trim() || '-';
    const tutor = document.getElementById('tutor').value.trim() || 'Sem tutor';

    if (id) {
        const index = animais.findIndex(a => a.id == id);
        if (index !== -1) {
            animais[index] = { id: Number(id), nome, especie, porte, raca, idade, saude, status, descricao, tutor };
        }
    } else {
        const novoAnimal = {
            id: Date.now(),
            nome,
            especie,
            porte,
            raca,
            idade,
            saude,
            status,
            descricao,
            tutor
        };
        animais.push(novoAnimal);
    }

    salvarNoStorage();
    limparFormulario();
    renderizarTabela();
});

function editarAnimal(id) {
    const animal = animais.find(a => a.id === id);
    if (!animal) return;

    document.getElementById('animalId').value = animal.id;
    document.getElementById('nome').value = animal.nome;
    document.getElementById('especie').value = animal.especie;
    document.getElementById('porte').value = animal.porte || '';
    document.getElementById('raca').value = animal.raca === 'SRD' ? '' : animal.raca;
    document.getElementById('idade').value = animal.idade;
    document.getElementById('saude').value = animal.saude || '';
    document.getElementById('status').value = animal.status || 'Disponível';
    document.getElementById('descricao').value = animal.descricao === '-' ? '' : (animal.descricao || '');
    document.getElementById('tutor').value = animal.tutor === 'Sem tutor' ? '' : (animal.tutor || '');

    btnSalvar.textContent = 'Salvar Alterações';
    btnCancelar.style.display = 'inline-block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function excluirAnimal(id) {
    if (confirm('Deseja realmente excluir este registro?')) {
        animais = animais.filter(a => a.id !== id);
        salvarNoStorage();
        renderizarTabela();
    }
}

function limparFormulario() {
    form.reset();
    document.getElementById('animalId').value = '';
    btnSalvar.textContent = 'Cadastrar Animal';
    btnCancelar.style.display = 'none';
}

function renderizarTabela() {
    const termo = document.getElementById('campoBusca').value.toLowerCase();
    tabela.innerHTML = '';

    const filtrados = animais.filter(animal => 
        animal.nome.toLowerCase().includes(termo) ||
        animal.especie.toLowerCase().includes(termo) ||
        (animal.tutor && animal.tutor.toLowerCase().includes(termo)) ||
        (animal.status && animal.status.toLowerCase().includes(termo))
    );

    if (filtrados.length === 0) {
        tabela.innerHTML = '<tr><td colspan="9" style="text-align:center;">Nenhum animal encontrado.</td></tr>';
        return;
    }

    filtrados.forEach(animal => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><strong>${animal.nome}</strong></td>
            <td>${animal.especie} (${animal.raca})</td>
            <td>${animal.porte || '-'}</td>
            <td>${animal.idade} ano(s)</td>
            <td>${animal.saude || '-'}</td>
            <td><span class="badge">${animal.status || '-'}</span></td>
            <td>${animal.descricao || '-'}</td>
            <td>${animal.tutor || 'Sem tutor'}</td>
            <td>
                <button class="btn-editar" onclick="editarAnimal(${animal.id})">Alterar</button>
                <button class="btn-excluir" onclick="excluirAnimal(${animal.id})">Excluir</button>
            </td>
        `;
        tabela.appendChild(tr);
    });
}

renderizarTabela();

