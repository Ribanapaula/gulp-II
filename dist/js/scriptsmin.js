
$(function(){$('.owl-carousel').owlCarousel();let titulos=$('h4')
let itens=$('.featured-item')
let destaques=$('#featured')
console.log(titulos.first());$('.featured-item a').addClass('btn btn-dark stretch-link');$('.featured-item:first h4').append('<span class="badge bg-info">Novo</span>')
$('.featured-item h4').dblclick(function(){$(this).css({'color':'#f00','background':'#ff0','font-weight':'100',});});$('.featured-item a').on('blur',function(event){event.preventDefault();alert('Produto esgotado');})})