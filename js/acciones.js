// JavaScript Document
$(document).ready(function(e) {
//document.addEventListener("deviceready",function(){
	
		
	$('#btn_jugar').on('tap', function(){
		var pantalla = $.mobile.getScreenHeight();
		var encabezado = $('.ui-header').outerHeight();
		var pie = $('.ui-footer').outerHeight();
		var contenido = $('ui.content').outerHeight();
		var alto = (pantalla - encabezado - pie)/2;
		$('.cuadro').height(alto);
		});//btnjugar.click
		
		$('.cuadro').on('tap', function(){
			$(this).addClass('pulsado');
			});//mousedown
		
		function quien (q)
	{
		//audio.play(q)
		return q.substring(1); //Regresa la cadena (ID)a partir del caracter 01
	}	
		
		$('.cuadro').on('tap', function (){
			$('#pantalla').append(quien($(this).attr('id'))); //Especifica la cadena (ID)
			$(this).removeClass('pulsado');
		});
		
	
	//div	
	//div
//});//device ready 
});

