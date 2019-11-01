function desenharGraficos(){
    //Grafico de Pizza
    var tabela = new google.visualization.DataTable();
        //colunas da tabela
        tabela.addColumn('string','Categorias');
        tabela.addColumn('number','Valores');
        //linhas da tabela
        tabela.addRows([ 
            ['Educação',2000],
            ['Transporte',500],
            ['Lazer',230],
            ['Saúde',50],
            ['Cartão de Crédito',900],
            ['Alimentação',260]
        ]);
        //opcoes de customização do gráfico
    var opcoes = {
        title:'Tipo de Gastos',
        height: 400, //altura
        width: 900, //largura
        is3D : true, //Deixa o grafico em 3D
        legend: 'bottom',
        pieSliceText: 'value',
        slices: { //offset: 0.2 - elemento responsavel por Afastar um pedaço do grafico
            1:{color: 'grey'}, 
            2:{color: '#A6A6A6'},
            3:{color: 'grey'},
            4:{offset: 0.4},
            5:{color: 'grey'}, 
            }
        //colors: ['grey', 'red', 'yellow', 'blue' , 'pink', 'purple'] //value, label
        //pieHole: 0.4  //Transforma o grafico pizza em Grafico Rosca com tamanho central de 0.4
            };

        //desenhando gráfico
      var grafico = new google.visualization.PieChart(document.getElementById('graficoPizza'));
          grafico.draw(tabela, opcoes);

        //Grafico de Linhas
        tabela = new google.visualization.DataTable();
        //Colunas da tabela
        tabela.addColumn('string','mês');
        tabela.addColumn('number', 'gastos');
        //Linhas da tabela
        tabela.addRows([
            ['jan',800],
            ['fev',400],
            ['mar',1100],
            ['abr',400],
            ['mai',500],
            ['jun',750],
            ['jul',1500],
            ['ago',850],
            ['set',850],
            ['out',400],
            ['nov',1000],
            ['dez',720]
    ]);

     var opcoes = 
       {
      //vAxis = Eixo Vertical , hAxis = Eixo Horizontal
        title: 'Gastos por Mês',
        width: 800,
        height: 400,
        vAxis: {
                format: 'currency', 
                gridlines: {
                            count:0, 
                            color: 'transparent'
                }},
        legend: 'none',
        curveType: 'function' //default: line
        }

    var grafico = new google.visualization.LineChart(document.getElementById('graficoLinha'));
    grafico.draw(tabela, opcoes)

    //Grafico de Colunas
    var tabela = new google.visualization.arrayToDataTable(
        [
            ['Mês','Entrada','Saida'],
            ['jan',2500,1000],
            ['fev',2000,500],
            ['mar',3000,1300],
            ['abr',1500,1700],
            ['mai',5000,2250],
            ['jun',3567,3000],
            ['jul',3452,1468],
            ['ago',1833,5250],
            ['set',3803,5500],
            ['out',1800,1000],
            ['nov',3569,1500],
            ['dez',3000,1740]
        ]);

    var opcoes = {
        title: 'Entradas e saídas da conta',
        width: 800, //largura
        height: 400, //altura
        vAxis: {
                gridlines: {color: 'transparent'},
                format: 'currency', //valores do grafico em moeda.
                title: 'Valores'
                },
        hAxis: {
                title: 'Mês'
                }
    }
        
    var grafico = new google.visualization.ColumnChart(document.getElementById('graficoColuna'));
    grafico.draw(tabela, opcoes);

    //Grafico de Barras

    var newJson = $.ajax({
        url: 'https://gist.githubusercontent.com/alexandreSalomao22/a06a8f9bf19479b0edceee21ec771e0f/raw/c6fe88a04349d6c94fb2608c97ed13541d08d769/dados.json',
        dataType: 'json',
        async: false
    }).responseText

    var tabela = new google.visualization.DataTable(newJson);

        //ordenar pelo indice e ordernar do maior para o menor
        tabela.sort([{column: 1, desc: true}]); 

        var opcoes = {
                title: 'Tipos de Gastos',
                height: 400,//altura
                width: 800, //largura
                vAxis: {gridlines: {count: 0, color: 'transparent'}},
                legend: 'none',
                hAxis: {
                        gridlines: 
                        {
                            color: 'transparent'
                        },
                        format: 'currency',
                        textPosition: 'none' //in - dentro do gráfico / out - default.
                        },
                annotations:
                        {
                        alwaysOutside: true
                        }
        }
        //ColumnChart em pé
        //BarChart deitado estilo Histograma.
        var grafico = new google.visualization.BarChart(document.getElementById('graficoBarras'));
        grafico.draw(tabela, opcoes);


        //Grafico de Barras com JSON
        var dadosJSON = $.ajax({
            //url: 'dados.json',
            url: 'https://gist.githubusercontent.com/alexandreSalomao22/4f7051755d5467e076a869e36cc97e5f/raw/86f7a34cd1ef65e64eced1d665ab345d06f9694a/dados.json',
            dataType: 'json',
            async: false
        }).responseText;

        var tabela = new google.visualization.DataTable(dadosJSON);

        tabela.sort([{column: 1, desc: true}]);

        var opcoes = {
                        title: 'Usuários e Poupanças',
                        height: 400,//altura
                        width: 1200, //largura
                        legend: 'none',
                        hAxis: {
                                gridlines: {
                                            color: 'transparent'
                                            }
                                },
                        textPosition: 'none',
                        annotations:
                        {
                            alwaysOutside: true
                        }
                    }

        var grafico = new google.visualization.BarChart(document.getElementById('graficoBarrasJSON'));
        grafico.draw(tabela, opcoes);

}