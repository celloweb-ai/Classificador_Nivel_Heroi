# 🗡️ Classificador de Nível de Herói

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![DIO](https://img.shields.io/badge/DIO-Bootcamp-blue?style=for-the-badge)

## 📋 Sobre o Projeto

Desafio prático do Bootcamp da **Digital Innovation One (DIO)** que implementa um classificador de nível de heróis baseado na quantidade de experiência (XP) acumulada.

Este projeto demonstra o uso de conceitos fundamentais de programação em JavaScript:
- ✅ Variáveis
- ✅ Operadores
- ✅ Estruturas de decisão (if/else)
- ✅ Funções
- ✅ Laços de repetição

## 🎯 Objetivo

Criar um sistema que classifique heróis em diferentes níveis com base em sua experiência (XP), utilizando as seguintes categorias:

| XP | Nível |
|---|---|
| Menor que 1.000 | Ferro |
| Entre 1.001 e 2.000 | Bronze |
| Entre 2.001 e 5.000 | Prata |
| Entre 5.001 e 7.000 | Ouro |
| Entre 7.001 e 8.000 | Platina |
| Entre 8.001 e 9.000 | Ascendente |
| Entre 9.001 e 10.000 | Imortal |
| Maior ou igual a 10.001 | Radiante |

## 🚀 Como Executar

### Pré-requisitos

- Node.js instalado (versão 12 ou superior)
- Git instalado

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/celloweb-ai/classificador-nivel-heroi.git
```

2. Entre no diretório do projeto:
```bash
cd classificador-nivel-heroi
```

3. Execute o programa:
```bash
node index.js
```

## 💻 Uso

### Exemplo Básico

```javascript
const nomeHeroi = "Thor";
const xpHeroi = 7500;

exibirClassificacao(nomeHeroi, xpHeroi);
// Saída: O Herói de nome Thor está no nível de Platina
```

### Testando Múltiplos Heróis

Execute o arquivo de exemplos:
```bash
node exemplos.js
```

## 📂 Estrutura do Projeto

```
classificador-nivel-heroi/
│
├── index.js           # Código principal do classificador
├── exemplos.js        # Exemplos de uso com múltiplos heróis
├── README.md          # Documentação do projeto
├── package.json       # Configurações do projeto
└── .gitignore         # Arquivos ignorados pelo Git
```

## 🔧 Funcionalidades

- **classificarNivel(xp)**: Retorna o nível do herói baseado no XP
- **exibirClassificacao(nome, xp)**: Exibe a mensagem formatada com nome e nível do herói

## 📝 Saída Esperada

O programa exibe uma mensagem no formato:

```
O Herói de nome {nome} está no nível de {nivel}
```

## 🎓 Conceitos Aplicados

### Variáveis
```javascript
const nomeHeroi = "Thor";
const xpHeroi = 7500;
```

### Estruturas de Decisão
```javascript
if (xp < 1000) {
    return "Ferro";
} else if (xp >= 1001 && xp <= 2000) {
    return "Bronze";
}
```

### Funções
```javascript
function classificarNivel(xp) {
    // lógica de classificação
}
```

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Sinta-se à vontade para:

1. Fazer um fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/NovaFuncionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/NovaFuncionalidade`)
5. Abrir um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## 👨‍💻 Autor

**Marcus Vasconcellos**
- GitHub: [@celloweb-ai](https://github.com/celloweb-ai)
- LinkedIn: [Marcus Vasconcellos](https://www.linkedin.com/in/marcusvasconcellos)

## 🙏 Agradecimentos

- [Digital Innovation One (DIO)](https://www.dio.me/) pelo desafio e conteúdo educacional
- Comunidade de desenvolvedores que contribuem com feedback e melhorias

---

⭐ Se este projeto foi útil para você, considere dar uma estrela!
