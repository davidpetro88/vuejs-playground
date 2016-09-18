require(['jquery','./liquidos'], function ($, liquidos) {
    $('#content').html(liquidos.join(' | '));
    console.log(liquidos)
});
