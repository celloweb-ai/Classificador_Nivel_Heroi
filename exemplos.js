/**
 * Exemplos de uso do Classificador de Nível de Herói
 * Demonstra o uso com múltiplos heróis e diferentes níveis de XP
 */

const { exibirClassificacao } = require('./index.js');

console.log('\n🗡️  CLASSIFICADOR DE NÍVEL DE HERÓI 🗡️\n');
console.log('='.repeat(50));
console.log('\n');

// Array de heróis para demonstração
const herois = [
    { nome: "Steve Rogers", xp: 500 },
    { nome: "Tony Stark", xp: 1500 },
    { nome: "Thor", xp: 3500 },
    { nome: "Hulk", xp: 6000 },
    { nome: "Viúva Negra", xp: 7500 },
    { nome: "Homem de Ferro", xp: 8500 },
    { nome: "Doutor Estranho", xp: 9500 },
    { nome: "Capitã Marvel", xp: 15000 }
];

// Laço de repetição para classificar todos os heróis
for (let i = 0; i < herois.length; i++) {
    const heroi = herois[i];
    exibirClassificacao(heroi.nome, heroi.xp);
}

console.log('\n');
console.log('='.repeat(50));
console.log('\n✅ Classificação concluída!\n');

// Demonstração com entrada do usuário (exemplo comentado)
/*
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite o nome do herói: ', (nome) => {
    rl.question('Digite a quantidade de XP: ', (xp) => {
        exibirClassificacao(nome, parseInt(xp));
        rl.close();
    });
});
*/
