$(document).ready(function() {
    $('form').on('submit', function(e) {
        e.preventDefault();
        const novoItem = $('#newitem').val();
        const itemLista = $('<li></li>').text(novoItem);
        $('ul').append(itemLista);        
        $('#novo-item').val('');
    });

    
    $('ul').on('click', 'li', function() {
        $(this).toggleClass('riscado');
    });
});
