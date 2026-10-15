function mostrarInfo(comida) {

    const informacoes = {

        "bolo de milho":
            "Bolo de milho\n\nBolo macio e saboroso, feito com milho e perfeito para acompanhar um café quentinho.",

        "paçoca":
            "Paçoca\n\nDoce tradicional feito com amendoim e açúcar, muito presente nas festas juninas.",

        "maçã do amor":
            "Maçã do amor\n\nMaçã coberta por uma deliciosa camada vermelha e crocante de açúcar.",

        "pipoca":
            "Pipoca\n\nUm clássico do arraiá, simples, crocante e impossível de deixar de lado.",

        "cachorro-quente":
            "Cachorro-quente\n\nLanche popular das festas, geralmente preparado com salsicha, molho e vários acompanhamentos.",

        "pinhão":
            "Pinhão\n\nSemente típica do Sul, muito consumida quentinha e cozida nas festas de inverno.",

        "arroz-doce":
            "Arroz-doce\n\nSobremesa cremosa feita com arroz, leite, açúcar e canela.",

        "canjica":
            "Canjica\n\nDoce cremoso preparado com milho branco, leite, açúcar e canela.",

        "cueca virada":
            "Cueca virada\n\nMassa doce frita e crocante, geralmente polvilhada com açúcar.",

        "pão de queijo":
            "Pão de queijo\n\nTradicional quitute feito com polvilho e queijo, muito querido no Brasil.",

        "rapadura":
            "Rapadura\n\nDoce tradicional feito a partir da cana-de-açúcar, com sabor intenso e textura firme.",

        "bolos caseiros":
            "Bolos caseiros\n\nBolos simples e deliciosos, como fubá, chocolate e cenoura, que deixam o arraiá ainda mais gostoso."

    };

    alert(informacoes[comida] || "Informação não encontrada.");

}


const campoPesquisa = document.getElementById("campoPesquisa");
const cards = document.querySelectorAll(".card");
const semResultado = document.getElementById("semResultado");


campoPesquisa.addEventListener("input", function () {

    const pesquisa = campoPesquisa.value
        .toLowerCase()
        .trim();

    let encontrou = false;


    cards.forEach(function (card) {

        const nome = card
            .getAttribute("data-nome")
            .toLowerCase();

        if (nome.includes(pesquisa)) {

            card.style.display = "block";
            encontrou = true;

        } else {

            card.style.display = "none";

        }

    });


    if (encontrou) {

        semResultado.style.display = "none";

    } else {

        semResultado.style.display = "block";

    }

});