var liquidos = require('./liquidos');
var $ = require('jquery');
$('#content').html(liquidos.join(' | '));
console.log(liquidos)