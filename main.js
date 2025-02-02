const form = document.getElementById('form-agenda');
const contatos = [];
const telefones = [];

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionarAgenda();
    atualizarAgenda();
})

function adicionarAgenda() {
    contato = document.getElementById('contato');
    telefone = document.getElementById('telefone');

    if (contatos.includes(contato.value)){
        alert('Esse Contato já foi adcionado')
    }else {
        contatos.push(contato.value);
        telefones.push(telefone.value);

        let linha = `<tr>`;
        linha += `<td>${contato.value}</td>`;
        linha += `<td>${telefone.value}</td>`;
        linha += `</tr>`;
    
        linhas += linha;
    }



    contato.value = '';
    telefone.value = '';
};

function atualizarAgenda() {
    const corpoAgenda = document.querySelector('tbody');
    corpoAgenda.innerHTML = linhas;
};