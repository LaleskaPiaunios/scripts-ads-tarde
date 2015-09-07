//Classe Animal
function Animal(nome) {
    this.nome = nome || 'Sem nome';
}
//Método que retorna um barulho genérico para o animal
Animal.prototype.fazerBarulho = function () {
    return 'Rrrrrrr!';
};

//Subclasse Gato
function Gato(nome) {
    Animal.call(this, nome);
}

Gato.prototype = new Animal();
Gato.prototype.constructor = Cao;

//Método fazerBarulho sobrescito parar retornar o miado do gato
Gato.prototype.fazerBarulho = function () {
    return 'Miaaaaaau!';
};

//Subclasse Cão
function Cao(nome) {
    Animal.call(this, nome);
}

Cao.prototype = new Animal();
Cao.prototype.constructor = Cao;

//Método fazerBarulho sobrescito parar retornar o latido do cão
Cao.prototype.fazerBarulho = function () {
    return 'Auuuuuuu!';
};

//Classe que adiciona animais
function Manada() {
    this.animais = [];
    this.adicionandoAnimal = function (animal) {
        this.animais.push(animal);
    };
}

//Imprime o barulho de animais sepadados por ","
function ManadaVirgula() {
    this.imprimeBaruho = function () {
        var animaisVirgula = "";
        for (var i = 0; i < this.animais.lenght; i++) {
            if (i + 1 != this.animais.length) {
                animaisVirgula = animaisVirgula + this.animais[i] +", ";  
            } else {
                animaisVirgula = animaisVirgula + this.animais[i];
            }
        }
        console.log(animaisVirgula);
    };
}

//Imprime o barulho de animais sepadados por "#"
function ManadaSustenido() {
    this.imprimeBaruho = function () {
        var animaisSustenido = "";
       for(var i = 0; i < this.animais.lenght; i++) {
            if (i + 1 != this.animais.length) {
                animaisSustenido = animaisSustenido + this.animais[i] +"# ";  
            } else {
                animaisSustenido = animaisSustenido + this.animais[i];
            }
        }
        console.log(animaisSustenido);
    };
}

//Herdando de Manada
ManadaVirgula.prototype = new Manada();
ManadaSustenido.prototype = new Manada();

//Instanciando objetos 
var animal = new Animal();
var gato = new Gato("Mia");
var cao = new Cao("August");

console.log(animal.fazerBarulho());
console.log(cao.fazerBarulho());
console.log(gato.fazerBarulho());

//Instanciando ManadaVirgula
var manadaVirgula = new ManadaVirgula();
//Adicionando cão e gato
manadaVirgula.adicionandoAnimal(cao.nome);
manadaVirgula.adicionandoAnimal(gato.nome);
//Imprimindo barulho de ambos separados por vírgula
manadaVirgula.imprimeBarulho()

//Instanciando ManadaVirgula
var manadaSustenido = new ManadaSustenido();
//Adicionando cão e gato
manadaSustenido.adicionandoAnimal(cao.nome);
manadaSustenido.adicionandoAnimal(gato.nome);
//Imprimindo barulho de ambos separados por sustenido
manadaSustenido.imprimeBarulho();