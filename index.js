$("#pesquisar").attr("disabled", "disabled")

$("#pesquisar").click(function (event) {
    (event).preventDefault();
});


$("#dataEntrada").change(function () {
    if ($("#dataEntrada").val() != undefined) {
        $("#pesquisar").prop("disabled", false)
    }
    else {
        $("#pesquisar").prop("disabled", true)
    }
    console.log($("#dataEntrada").val())
})


$("#pesquisar").click(function () {
    let data = $("#dataEntrada").val()
    $.ajax({
        url: `https://api.nasa.gov/planetary/apod?api_key=iZEuFGgcYOC3yrXgeBc9gWf0665GvlnYUZz47cfo&date=${data}`,

        success: function (results) {
            console.log(results)
            if (results.media_type == "image") {
                $("#retornoResultado").html(`<h3 id="texto"> ${results.title}</h3> <img id="fotoResultado" src="${results.url}"/>`);
            }
            else if (results.media_type == "other") {
                $('#retornoResultado').html(`<h3 id="texto">Infelizmente a imagem não existe</h3> <img id="fotoResultado" width="500" height="400" src="./404-page-space-vector-8930204.jpg" />`);
            }
            if (results.media_type == "video") {
                $("#retornoResultado").html(`<iframe id="fotoResultado" src="${results.url}"/>`);
            }

        },
        error: function () {
            $('#retornoResultado').html(`<img id="fotoResultado" width="500" height="500" src="./404-page-space-vector-8930204.jpg" />`)
            alert("Digite uma data válida")
        }
    })


})





