window.onload=function(){
	function construtorObs() {

    var observer = {};
    var listaDeObs = [];
    var contador = 0;

    observer.addListener = function (obs) {
        listaDeObs.push(obs);
    };
        //executando evento
    function execEvent() {
        for (var i = 0; i < listaDeObs.length; i++) {
            var funcObs = listaDeObs[i];
            funcObs();
        }
    }
        //função contar
    function contar() {
        contador += 1;
        return contador;
    }

    observer.contar = contar;
    observer.execEvent = execEvent;
    return observer;
}

var obs = construtorObs();

var listener1 = function () {
    console.log("Listener 1");
};
var listener2 = function () {
    console.log("Listener 2");
};
    var listener3 = function () {
    console.log("Listener 3");
};

    //adicionando listeners
obs.addListener(listener1);
obs.addListener(listener2);
obs.addListener(listener3);
obs.execEvent();

document.getElementById("btn-conta").addEventListener("click", function () {
    document.getElementById("contador").value = obs.contar();
});
};