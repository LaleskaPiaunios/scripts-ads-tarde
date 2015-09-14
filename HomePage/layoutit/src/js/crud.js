$(document).ready(function () {
  var $formWell = $('#form-well');
  var $formGroups = $('div.form-group');
  var $helpBlocks = $('span.help-block');
  var $nomeInput = $('#nome-input');
  var $idInput = $('#id-input');
  var $creationInput = $('#creation-input');
  var $tabelaCategoria = $('#tabela-categoria')

  $formWell.hide();
  $('#botao-nova-categoria').click(function () {
    $formWell.slideToggle();
  });

  function limparErros() {
    $formGroups.removeClass('has-error');
    $helpBlocks.text('');
  }

  $.get('http://localhost:8080/categorias/rest',function(categorias){
    console.log(categorias);
  },'json');

  function adicionarCategoria(categoria) {
    var linha = '<tr>';
    linha += '<td>' + categoria.nome + '</td>';
    linha += '<td>' + categoria.creation + '</td>';
    linha += '<td>' + categoria.id + '</td>';
    linha += '<td>';
    linha += '<button class="btn btn-inverse btn-sm"><i class="glyphicon glyphicon-trash"></i></button>';
    linha += '</td ></tr>';

    var $linhaObjeto = $(linha);
    var $botao = $linhaObjeto.find('button.btn').click(function () {
      console.log(categoria.id);
      $linhaObjeto.remove();
    });

    $tabelaCategoria.append($linhaObjeto);

  }

  function listarCategorias(categorias){
    $.each(categorias, function(i, cat){
      adicionarCategoria(cat);
    })
  }

  var categoriasIni=[{"id": 4587421365214785, "nome": "Estágio Análise e Desenvolimento de Sistemas", "creation": "10/09/2015 10:45:00"}, {"nome": "Estágio Banco de Dados", "creation": "12/09/2015 18:40:42","id": 7845212639854712}, {"nome": "Estágio Manutenção de Aeronaves", "creation": "13/09/2015 10:12:05","id": 1245784123658951}];
  listarCategorias(categoriasIni);

  function mostrarErros(erros) {
    var helpBlockPrefixo = '#help-block-';
    var formGroupPrefixo = '#form-group-';
    $.each(erros, function (propriedade, valorDaPropriedade) {
      $(helpBlockPrefixo + propriedade).text(valorDaPropriedade);
      $(formGroupPrefixo + propriedade).addClass('has-error');
    });
  }

  $('#form-categoria').submit(function (evento) {
    evento.preventDefault();
    limparErros();
    var nome = $nomeInput.val();
    if (nome === '') {
      mostrarErros({'nome': 'Campo Obrigatório'})
    }
    var id = $idInput.val();
    if (id === '') {
      mostrarErros({'id': 'Campo Obrigatório'})
    }
    var creation = $creationInput.val();
    if (creation === '') {
      mostrarErros({'creation': 'Campo Obrigatório'})
    }
    else {
      adicionarCategoria({"id": id,
        "nome": nome,
        "creation": creation});
      $nomeInput.val('');
      $creationInput.val('');
      $idInput.val('');
    }
  });
});