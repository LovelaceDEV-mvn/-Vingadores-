// Criando os personagens
const personagens = [
    {
        nome: "Steve Rogers",
        codinome: "Capitão América",
        armaPrincipal: "Escudo americano",
        armaSecundaria: "",
        velocidade: 85,
        forca: 75,
        resistencia: 80,
        descricao: function () {
            return `Nome: ${this.nome} (${this.codinome})\nArma Principal: ${this.armaPrincipal}\nVelocidade: ${this.velocidade}\nForça: ${this.forca}\nResistência: ${this.resistencia}`;
        }
    },
    {
        nome: "Tony Stark",
        codinome: "Homem de Ferro",
        armaPrincipal: "Armadura tecnológica",
        armaSecundaria: "Inteligência Artificial",
        velocidade: 90,
        forca: 80,
        resistencia: 85,
        descricao: function () {
            return `Nome: ${this.nome} (${this.codinome})\nArma Principal: ${this.armaPrincipal}\nVelocidade: ${this.velocidade}\nForça: ${this.forca}\nResistência: ${this.resistencia}`;
        }
    },
    {
        nome: "Bruce Banner",
        codinome: "Hulk",
        armaPrincipal: "Força bruta",
        armaSecundaria: "",
        velocidade: 70,
        forca: 100,
        resistencia: 95,
        descricao: function () {
            return `Nome: ${this.nome} (${this.codinome})\nArma Principal: ${this.armaPrincipal}\nVelocidade: ${this.velocidade}\nForça: ${this.forca}\nResistência: ${this.resistencia}`;
        }
    },
    {
        nome: "Thanos",
        codinome: "Titã Louco",
        armaPrincipal: "Manopla do Infinito",
        armaSecundaria: "",
        velocidade: 80,
        forca: 100,
        resistencia: 100,
        descricao: function () {
            return `Nome: ${this.nome} (${this.codinome})\nArma Principal: ${this.armaPrincipal}\nVelocidade: ${this.velocidade}\nForça: ${this.forca}\nResistência: ${this.resistencia}`;
        }
    }
];

// Comparação entre personagens
function compararPersonagens(p1, p2) {
    console.log(`\nComparando ${p1.codinome} e ${p2.codinome}:\n`);
    
    const atributos = ["velocidade", "forca", "resistencia"];

    atributos.forEach(attr => {
        if (p1[attr] > p2[attr]) {
            console.log(`${p1.codinome} vence em ${attr} (${p1[attr]} vs ${p2[attr]})`);
        } else if (p1[attr] < p2[attr]) {
            console.log(`${p2.codinome} vence em ${attr} (${p2[attr]} vs ${p1[attr]})`);
        } else {
            console.log(`Empate em ${attr} (${p1[attr]} vs ${p2[attr]})`);
        }
    });
}

// Testando comparações
console.log(personagens[0].descricao());
console.log(personagens[1].descricao());

compararPersonagens(personagens[0], personagens[3]);
compararPersonagens(personagens[1], personagens[2]);
