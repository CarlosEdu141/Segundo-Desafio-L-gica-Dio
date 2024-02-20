// Função para calcular o saldo de vitórias
function calculo(vitorias, derrotas) {
    let saldo = vitorias - derrotas;
    return saldo;
}

// Variáveis
let saldoVitorias = calculo(1543, 1528);
let nivel = 0;

// Lógica para determinar o nível
if (saldoVitorias <= 10) {
    nivel = "Ferro"; 
} else if (saldoVitorias <= 20) {
    nivel = "Bronze";
} else if (saldoVitorias <= 50) {
    nivel = "Prata";
} else if (saldoVitorias <= 80) {
    nivel = "Ouro";
} else if (saldoVitorias <= 90) {
    nivel = "Diamante";
} else if (saldoVitorias <= 100) {
    nivel = "Lendário";
} else {
    nivel = "Imortal";
}
// Print
console.log("O Herói tem um saldo de " + saldoVitorias + " vitórias e está no nível de " + nivel);
