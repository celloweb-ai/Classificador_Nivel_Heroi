/**
 * Classificador de Nível de Herói
 * Desafio DIO - Bootcamp
 * 
 * Este programa classifica heróis com base em sua experiência (XP)
 * utilizando estruturas de decisão em JavaScript.
 */

/**
 * Classifica o nível do herói baseado na quantidade de XP
 * @param {number} xp - Quantidade de experiência do herói
 * @returns {string} - Nível do herói
 */
function classificarNivel(xp) {
    if (xp < 1000) {
        return "Ferro";
    } else if (xp >= 1001 && xp <= 2000) {
        return "Bronze";
    } else if (xp >= 2001 && xp <= 5000) {
        return "Prata";
    } else if (xp >= 5001 && xp <= 7000) {
        return "Ouro";
    } else if (xp >= 7001 && xp <= 8000) {
        return "Platina";
    } else if (xp >= 8001 && xp <= 9000) {
        return "Ascendente";
    } else if (xp >= 9001 && xp <= 10000) {
        return "Imortal";
    } else {
        return "Radiante";
    }
}

/**
 * Exibe a classificação do herói
 * @param {string} nome - Nome do herói
 * @param {number} xp - Quantidade de experiência do herói
 */
function exibirClassificacao(nome, xp) {
    const nivel = classificarNivel(xp);
    console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
}

// Exemplo de uso
const nomeHeroi = "Thor";
const xpHeroi = 7500;

exibirClassificacao(nomeHeroi, xpHeroi);

// Exportar funções para uso em outros módulos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { classificarNivel, exibirClassificacao };
}
