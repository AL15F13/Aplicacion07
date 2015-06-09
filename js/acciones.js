// JavaScript Document
$(document).ready(function(e) {
document.addEventListener("deviceready",function(){
	
	CargarNombreJugador();
	function CargarNombreJugador ()
	{
		basedatos.transaction(function(ejecutar){
		var sql = "SELECT NomberUsuario FROM Usuario";  //El campo se llama "NomberUsuario(no cambiar)"
		ejecutar.executeSql(sql, undefined,
		        function(ejecutar, resultado){
		var datosJugador = resultado.rows.item(0);
		$('#jugador').text(datosJugador.NombreUsuario);
				});
		});
	}
	
	var basedatos = window.sqlitePlugin.
	openDatabase({name: "coloresBD.db",
	createFromLocation: 1});
	
	audio = window.plugins.LowLatencyAudio;
	audio.preloadFX ('B1', 'audio/C.mp3', function () {},
	   function(msg){alert("Error "+msg);});
		audio.preloadFX ('B2', 'audio/D.mp3', function () {},
	    function(msg){alert("Error "+msg);});
		audio.preloadFX ('B3', 'audio/E.mp3', function () {},
	    function(msg){alert("Error "+msg);});
		audio.preloadFX ('B4', 'audio/F.mp3', function () {},
	    function(msg){alert("Error "+msg);});
		
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
		audio.play(q)
		return q.substring(1); //Regresa la cadena (ID)a partir del caracter 01
	}	
		
		$('.cuadro').on('tap', function (){
			$('#pantalla').append(quien($(this).attr('id'))); //Especifica la cadena (ID)
			$(this).removeClass('pulsado');
		});
		
		$('#btn_configurar').on('tap', function(){
			$('#txt_nombre').val($('#jugador').text());
		});//BTN_Configurar
		
		$('#btn_guardar').on('tap', function(){
			var nuevonombre = $('#txt_nombre').val();
			basedatos.transaction (function(consulta){
			  consulta.executeSql("UPDATE Usuario SET NombreUsuario = ? WHERE ClaveUsuario = '1';",[nuevonombre]);
			
			});
			cargarnombrejugador();
		});
	
	
});//device ready 
});

