$(document).ready(function() {

var contenedor = $('#body');
var tiempo = 5000;
contenedor.css({'background-image':'url(img/bg1.jpg)'});

function image(){
setTimeout(function() {
contenedor.fadeTo(300, 0.3, function() {
$(this).css({'background-image':'url(img/bg2.jpg)'});
otra_imagen();}).fadeTo('slow', 1); },tiempo); }

function otra_imagen(){
setTimeout(function() {
contenedor.fadeTo(300, 0.3, function() {
$(this).css({'background-image':'url(img/bg1.jpg)'});
otra_img();
}).fadeTo(300, 0.3); },tiempo);
}

function otra_img(){
setTimeout(function() {
contenedor.fadeTo(300, 0.3, function() {
$(this).css({'background-image':'url(img/bg2.jpg)'});
image();
}).fadeTo(300, 0.3); },tiempo);
}

otra_imagen();

});
