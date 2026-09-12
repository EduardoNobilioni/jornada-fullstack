// Variáveis e tipos de dados
const nome = "João";
const idade = 30;
const possuiCadastro = true;
const clienteAtivo = true;
let saldo = 1000.50;
const valorCompra = 750.00;

function calcularDesconto(valorCompra, clienteAtivo) {
    let desconto = 0;

    if (clienteAtivo) {
        desconto = valorCompra * 0.10;
    }

    return desconto;
}

const valorDesconto = calcularDesconto(valorCompra, clienteAtivo);

function calcularValorFinal(valorCompra, valorDesconto) {
    return valorCompra - valorDesconto;
}

const valorFinal = calcularValorFinal(valorCompra, valorDesconto);

saldo = atualizarSaldo(saldo, 100);
console.log("Saldo atualizado: ", saldo);

console.log("Informações do Cliente:");
console.log("Nome:", nome);
console.log("Idade:", idade);
console.log("Cliente Ativo:", clienteAtivo);
console.log("Saldo:", saldo);

console.log("Valor da Compra:", valorCompra);
console.log("Valor do Desconto:", valorDesconto);
console.log("Valor final da compra:", valorFinal);
console.log("--------------------------------------------------");
// Tipos de dados
console.log("Tipo de nome:", typeof nome);
console.log("Tipo de idade:", typeof idade);
console.log("Tipo de clienteAtivo:", typeof clienteAtivo);
console.log("Tipo de saldo:", typeof saldo);

function atualizarSaldo(saldoAtual, valor) {
    saldoAtual += valor;
    return saldoAtual;
}
console.log("--------------------------------------------------");
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

console.log("--------------------------------------------------");

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
console.log("--------------------------------------------------");
if (cadastroNecessario) {
    console.log("O cliente precisa realizar cadastro.");
}else{
    console.log("O cliente já possui cadastro.");}
console.log("--------------------------------------------------");

const clientesArray = ["João", "Maria", "Carlos", "Ana", "Pedro"];

for (let i = clientesArray.length - 1; i >= 0; i--) {
    console.log("Cliente:", clientesArray[i]);
}

const saldos = [500, 1200, 0, 850, 2000];

for (let i = 0; i < saldos.length; i++) {
    if (saldos[i] >= 1000) {
        console.log("Saldo:", saldos[i]);
    }
}

const idades = [15, 22, 17, 30, 18, 12];

for (let i = 0; i < idades.length; i++) {
    if (idades[i] >= 18) {
        console.log("Idade:", idades[i]);
    }
}
console.log("--------------------------------------------------");


const clientesObjetos = [
    { nome: "João", idade: 30, ativo: true },
    { nome: "Maria", idade: 17, ativo: true },
    { nome: "Carlos", idade: 25, ativo: false },
    { nome: "Ana", idade: 22, ativo: true }
];

for (let i = 0; i < clientesObjetos.length; i++) {
    const cliente = clientesObjetos[i];
    if (cliente.idade >= 18 && cliente.ativo) {
        console.log("Cliente autorizado:", cliente.nome);}
    else {
        console.log("Cliente não autorizado:", cliente.nome);
        }
    }
    let totalAutorizados = 0;
    for (let i = 0; i < clientesObjetos.length; i++) {
        const cliente = clientesObjetos[i];
        if (cliente.idade >= 18 && cliente.ativo) {
            totalAutorizados++;
        }
    }
    console.log("Total de clientes autorizados:", totalAutorizados);
    
    let totalNaoAutorizados = 0;
    for (let i = 0; i < clientesObjetos.length; i++) {
        const cliente = clientesObjetos[i];
        if (cliente.idade < 18 || !cliente.ativo) {
            totalNaoAutorizados++;
        }
    }
    console.log("Total de clientes não autorizados:", totalNaoAutorizados);