
let registros = JSON.parse(localStorage.getItem('registros')) || [];


function atualizarTela() {
const lista = document.getElementById('listaRegistros');
lista.innerHTML = '';
let saldo = 0;


registros.forEach(item => {
const li = document.createElement('li');
li.textContent = `${item.tipo === 'ganho' ? '🟢' : '🔴'} ${item.tipo.toUpperCase()}: R$ ${item.valor.toFixed(2)} ${item.descricao ? '- ' + item.descricao : ''}`;
lista.appendChild(li);
saldo += item.tipo === 'ganho' ? item.valor : -item.valor;
});


document.getElementById('saldoAtual').textContent = `Saldo atual: R$ ${saldo.toFixed(2)}`;
localStorage.setItem('registros', JSON.stringify(registros));
}


function adicionarGanho() {
const valor = parseFloat(document.getElementById('valorGanho').value);
if (!valor || valor <= 0) return alert('Digite um valor válido.');
registros.push({ tipo: 'ganho', valor });
document.getElementById('valorGanho').value = '';
atualizarTela();
}


function adicionarGasto() {
const valor = parseFloat(document.getElementById('valorGasto').value);
const descricao = document.getElementById('descricaoGasto').value;
if (!valor || valor <= 0) return alert('Digite um valor válido.');
registros.push({ tipo: 'gasto', valor, descricao });
document.getElementById('valorGasto').value = '';
document.getElementById('descricaoGasto').value = '';
atualizarTela();
}


atualizarTela();