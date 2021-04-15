
// TODO TODAY:
// REPO: vue - email - list
// GOAL: Attraverso l'apposita API di Boolean generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

function addClickListener() {
    const btn = $('#btn');
    btn.click(emailGenerator);
}
function emailGenerator() {
    $.ajax({
        url: 'https://flynn.boolean.careers/exercises/api/random/mail',
        method: 'GET',
        success: function (data) {
            const res = data.response;
            console.log(res);
        },
        error: function () {
            console.log('error');
        }
    });
}

function generateEmail(value){
    const target = $("target");

    for (let i = 0; i < 10; i++) {
        const target = targets[i];
        
    }
}

// function generateBox(type) {
//     const target = $('#target');
//     if (type) {
//         target.append('<div class="box bg-red"></div>');
//     } else {
//         target.append('<div class="box bg-green"></div>');
//     }
// }
function init() {
    addClickListener();
}
document.addEventListener('DOMContentLoaded', init);