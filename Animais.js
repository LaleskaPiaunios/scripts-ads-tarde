//Classe Animal
function Animal(nome) {
    this.nome = nome || 'Animal sem nome';
}

//Método que imprime barulho do animal
Animal.prototype.fazerBarulho = function () {
    return 'RRRRRRRRRRRRRR!';
};

//Subclasse Cão
function Cao(nome) {
    Animal.call(this, nome);
}

//Herda de Animal
Cao.prototype = new Animal();
Cao.prototype.constructor = Cao;

//Sobrescreve fazerBarulho com o retorno correto 
Cao.prototype.fazerBarulho = function () {
    return 'Auuuuuuuuuuuuu!';
};

//Subclasse Gato
function Gato(nome) {
    Animal.call(this, nome);
}

//Herda de Animal
Gato.prototype = new Animal();
Gato.prototype.constructor = Gato;
Gato.prototype.fazerBarulho = function () {
    return 'Miauuuuuuuuuuu!';
};

//Classe Manada, adiciona novos animais
function Manada() {
    this.animais = [];
    this.addAnimal = function (animal) {
        this.animais.push(animal);
    };
}

//Imprime nomes dos animais separados por vírgula
function ManadaVirgula() {
    this.imprimeAnimais = function () {
        var animaisVirgula = "";
        for (var i = 0; i < this.animais.length; i++) {
            if (i + 1 != this.animais.length) {
                animaisVirgula = animaisVirgula + this.animais[i] + ",";
            } else {
                animaisVirgula = animaisVirgula + this.animais[i];
            }
        }
        console.log(animaisVirgula);
    };
}

//Imprime o nome dos animais separados por sustenido
function ManadaSustenido() {
    this.imprimeAnimais = function () {
        var animaisSustenido = "";
        for (var i = 0; i < this.animais.length; i++) {
            if (i + 1 != this.animais.length) {
                animaisSustenido = animaisSustenido + this.animais[i] + "#";
            } else {
                animaisSustenido = animaisSustenido + this.animais[i];
            }
        }
        console.log(animaisSustenido);
    };
}

// Herdando de Manada
ManadaVirgula.prototype = new Manada();
ManadaSustenido.prototype = new Manada();

var animal = new Animal();
var cao1 = new Cao("August");
var gato1 = new Gato("Miá");
var cao2 = new Cao("Ursinho");
var gato2 = new Gato("Bradley");

//Adicionando e imprimindo nomes por vírgula
var manadaVirgula = new ManadaVirgula();
manadaVirgula.addAnimal(cao1.nome);
manadaVirgula.addAnimal(gato1.nome);
manadaVirgula.addAnimal(cao2.nome);
manadaVirgula.addAnimal(gato2.nome);
manadaVirgula.imprimeAnimais()

//Adicionando e imprimindo nomes separados por sustenido
var manadaSustenido = new ManadaSustenido();
manadaSustenido.addAnimal(cao1.nome);
manadaSustenido.addAnimal(gato1.nome);
manadaSustenido.addAnimal(cao2.nome);
manadaSustenido.addAnimal(gato2.nome);
manadaSustenido.imprimeAnimais()

//Imprimindo barulhos
console.log(animal.fazerBarulho());
console.log(cao1.fazerBarulho());
console.log(gato1.fazerBarulho());
console.log(cao2.fazerBarulho());
console.log(gato2.fazerBarulho());