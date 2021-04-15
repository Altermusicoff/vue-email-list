
// TODO TODAY:
// REPO: vue - email - list
// GOAL: Attraverso l'apposita API di Boolean generare 10 indirizzi email e stamparli in pagina all'interno di una lista.


function addClickListener() {
    const btn = $('#btn');
    btn.click(tenEmailGenerator);
}
function emailGenerator() {
    $.ajax({
        url: 'https://flynn.boolean.careers/exercises/api/random/mail',
        method: 'GET',
        success: function (data) {
            const res = data.response;
            console.log(res);
            const target = $('#target');
            target.append('<li>' + res + '</li>');
        },
        error: function () {
            console.log('error');
        }
    });
}

function tenEmailGenerator(){
   
    for (let i = 0; i < 10; i++) {
        emailGenerator();    
    }
}

function init() {
    addClickListener();
}
document.addEventListener('DOMContentLoaded', init);