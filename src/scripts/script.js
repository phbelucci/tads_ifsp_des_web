$(document).ready(function (){
    $("#btnLoad").click(btnLoadClick)
})

function btnLoadClick(){
    var database = firebase.database();
    $.getJSON("https://carro-eletrico.firebaseio.com/unidades.json", carregaCartoes);
}

function carregaCartoes(listaPostos){
    for (contentJSON of listaPostos){
        $("#box-cartoes").append(cardLayout(contentJSON));
    }
}