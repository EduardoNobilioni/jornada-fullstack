// Variáveis e tipos de dados
let nome = "João";
let idade = 30;
let possuiCadastro = true;
let clienteAtivo = true;
let saldo = 1000.50;
let valorCompra = 750.00;

console.log("Nome:", nome);
console.log("Idade:", idade);
console.log("Cliente Ativo:", clienteAtivo);
console.log("Saldo:", saldo);
console.log("Valor da Compra:", valorCompra);

// Tipos de dados
console.log("Tipo de nome:", typeof nome);
console.log("Tipo de idade:", typeof idade);
console.log("Tipo de clienteAtivo:", typeof clienteAtivo);
console.log("Tipo de saldo:", typeof saldo);


function atualizarSaldo(saldoAtual, valor) {
    saldoAtual += valor;
    return saldoAtual;
}
saldo = atualizarSaldo(saldo, 100);
console.log("Saldo atualizado: ", saldo);

// Operadores de comparação
console.log("Maior de idade:", idade >= 18);
console.log("Idade ==30", idade =="30");
console.log("Idade ===30", idade ==="30");

// Operadores lógicos

function podeComprar(idade, clienteAtivo) {
    return idade >= 18 && clienteAtivo;
}
let compraAutorizada = podeComprar(idade, clienteAtivo);

function precisaCadastrar(possuiCadastro) {
    return !possuiCadastro;
}
let cadastroNecessario = precisaCadastrar(possuiCadastro );

function classificarCliente(saldo) {
    if (saldo >= 1000) {
    return ("Cliente Premium");
} else if (saldo > 0) {
    return ("Cliente Regular");
} else {
    return ("Cliente sem saldo");
}
}
let classificacaoCliente = classificarCliente(saldo);
console.log("Classificação do cliente:", classificacaoCliente);

let podeReceberPromocao = clienteAtivo || possuiCadastro;
console.log("Pode receber promoção:", podeReceberPromocao);

function autorizarCompra(idade, clienteAtivo, possuiCadastro,saldo, valorCompra ) {
    if (idade >= 18 && clienteAtivo && possuiCadastro && saldo >= valorCompra) {
        return true;
    }
    return false;
}

let autorizacao= autorizarCompra(idade, clienteAtivo, possuiCadastro, saldo, valorCompra);    

if (autorizacao) {
    console.log("Compra autorizada.");
}else{
    console.log("Compra não autorizada.");
}

if (cadastroNecessario) {
    console.log("O cliente precisa realizar cadastro.");
}else{
    console.log("O cliente já possui cadastro.");}