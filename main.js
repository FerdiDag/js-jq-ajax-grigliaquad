// Create in HTML una griglia di 36 quadratini (6x6).
// Ad ogni click su un quadratino, parte una richiesta ajax per recuperare un numero random tra 1 e 9.
// Se il numero restituito dall'api è <= 5, il quadrato su cui l'utente ha cliccato diventa giallo; se invece il numero restituito dall'api è > 5, il quadrato su cui l'utente ha cliccato diventa verde.
// In entrambi i casi, andiamo ad inserire nel quadrato il numero restituito dall'api.
// BONUS: generare la griglia in jQuery utilizzando handlebars
//



$(document).ready(function() {




    $('.quadrato').on('click', function() {
        var quadratoCurrent = $(this);
        $.ajax({
            url: "https://flynn.boolean.careers/exercises/api/random/int",
            'method': 'GET',
            success: function(data) {
                var numero_pc = data.response;
                console.log(numero_pc);


                quadratoCurrent.text(numero_pc);
                if (numero_pc <= 5) {
                    quadratoCurrent.css('background-color', 'yellow');
                } else if (numero_pc > 5) {
                    quadratoCurrent.css('background-color', 'black');
                }




            },
            error: function() {
                alert("E' avvenuto un errore.");
            }

        });




    });




});


// function minoreOmaggiore(numeropc) {

// minoreOmaggiore(numero_cliccato)
