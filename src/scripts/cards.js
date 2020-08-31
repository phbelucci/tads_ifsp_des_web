function cardLayout(contentJSON){
    let card = $("<div></div>");
    /*card.addClass("card text-white bg-success mb-3")*/
    card.addClass("card w-50");
    card.addClass("text-white");
    card.addClass("bg-success");
    card.addClass("mb-3");

    var at24 = (contentJSON.atendimento24) ? "Sim" : "Não";
    let cardHeader = $("<div></div>");
    cardHeader.addClass("card-header");
    cardHeader.text(contentJSON.header + "  ->  24 horas: " + at24);
    card.append(cardHeader);

    let cardImg = $("<img/>");
    cardImg.attr("width", 250);
    cardImg.attr("height", 150);
    cardImg.attr("src", contentJSON.imagem);
    card.append(cardImg);

    let cardBody = $("<div></div>");
    cardBody.addClass("card-body");
    card.append(cardBody);

    let cardTitle = $("<h5></h5>");
    cardTitle.addClass("card-title");
    cardTitle.text("Fornecedor: " + contentJSON.nome);
    cardBody.append(cardTitle);

    let cardBairro = $("<p></p>");
    cardBairro.addClass("card-text");
    cardBairro.text("Bairro: " + contentJSON.bairro);
    cardBody.append(cardBairro);

    let cardEndereco = $("<p></p>");
    cardEndereco.addClass("card-text");
    cardEndereco.text("Endereço: " + contentJSON.endereco);
    cardBody.append(cardEndereco);

    let cardCidade = $("<p></p>");
    cardCidade.addClass("card-text");
    cardCidade.text("Cidade: " + contentJSON.cidade);
    cardBody.append(cardCidade);
    
   return card;
}

/* --------  CARTÃO HTML  ----------
<div class="card text-white bg-success mb-3" style="max-width: 18rem;">
    <div class="card-header">Header</div>
    <img class="card-img-top" src="..." alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">Success card title</h5>
            <p class="card-text"> Info: info</p>
            <p class="card-text"> Info: info</p>
            <p class="card-text"> Info: info</p>
        </div>
</div>
*/