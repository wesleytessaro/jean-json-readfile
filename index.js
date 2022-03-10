function insertOnTable1(coluna1, coluna2) {
  tabela = document.getElementById("tabela1");
  linha = tabela.insertRow(-1);
  coluna1_ = linha.insertCell(0);
  coluna2_ = linha.insertCell(1);
  coluna1_.innerHTML = coluna1;
  coluna2_.innerHTML = coluna2;
}

function insertOnTable2(distancia, resistencia, umidade) {
  tabela = document.getElementById("tabela2");
  linha = tabela.insertRow(-1);
  coluna1_ = linha.insertCell(0);
  coluna2_ = linha.insertCell(1);
  coluna3_ = linha.insertCell(2);
  coluna4_ = linha.insertCell(3);
  coluna5_ = linha.insertCell(4);
  coluna1_.innerHTML = distancia;
  coluna2_.innerHTML = resistencia;
  coluna3_.innerHTML = umidade;
  coluna4_.innerHTML = "";
  coluna5_.innerHTML = "";
}

function ler(input) {
  let file = input.files[0];
  let reader = new FileReader();
  reader.readAsText(file);

  reader.onload = function () {
    
    texto=reader.result.replace(/(\r\n|\n|\r)/gm," ");
	texto=texto.replace(/\s+/g,"");
	console.log(texto);
    let jsonArquivos = JSON.parse(texto);
    //Recupera as informações do campo dos formulários
    tabela = document.getElementById("tabela1");
    tabela.innerHTML = "";
    tratamento = document.getElementById("tratamento").value;
    transecao = document.getElementById("transecao").value;
    distancia = document.getElementById("distancia").value;
    insertOnTable1("Tratamento", tratamento);
    insertOnTable1("Transeção", transecao);
    insertOnTable1("Tratamento", tratamento);
    insertOnTable1("Distância", distancia);
    insertOnTable1("ID", file.name);
    insertOnTable1("Latitude:", jsonArquivos["latitude"]);
    insertOnTable1("Longitude:", jsonArquivos["longitude"]);
    insertOnTable1("Horário Coleta:", jsonArquivos["hora"]);

    for (let i = 0; i < jsonArquivos["umidade"].length; i++) {
      insertOnTable2(jsonArquivos["distancia"][i],jsonArquivos["resistencia"][i],jsonArquivos["umidade"][i]);
    }

    /*
    alert("codigo:"+codigo);
    alert("nome:"+codigo);
    //Encontra o elemento tabela
    tabela = document.getElementById("tabela1");
    linha = tabela.insertRow(-1);
    coluna1 = linha.insertCell(0);
    coluna2 = linha.insertCell(1);

    //Inclui o valor do campo do formulário em sua respectiva coluna
    coluna1.innerHTML = codigo;
    coluna2.innerHTML = nome;
 */

    console.log(jsonArquivos["umidade"][0]);
  };

  reader.onerror = function () {
    console.log(reader.error);
  };
}
