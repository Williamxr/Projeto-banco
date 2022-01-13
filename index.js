import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Ricardo", 11122233309);
const cliente2 = new Cliente("Alice", 133322211109);

const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001);
contaCorrenteRicardo.depositar(500);


const valorSacado = contaCorrenteRicardo.sacar(50);
console.log(valorSacado);

console.log(contaCorrenteRicardo);

const conta2 = new ContaCorrente(cliente2, 1002);
console.log(conta2);

let valor = 200;
contaCorrenteRicardo.transferir(valor, conta2);
console.log(conta2.saldo);
console.log(contaCorrenteRicardo);