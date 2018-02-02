/*Cuando el documento este listo ejecuta el codigo que esta adentro de lo contrario no lo ejecuta*/
$(document).ready(function() {
	//Buscamos un elemento con id show y esperamos que de click , cuando lo hace se activa una funcion anonima
	$("#show").click(function () {
		//Ubicamos el elemento con id pass y que quitamos una propiedad por medio de la funcion removeAttr que lo que hace es quitarle el tipo , como es un input por lo general son text , en este caso es un input de tipopassword que luego queda como tipo text
		$("#pass").removeAttr("type");
		//Seleccionamos el elemento con id show para agregar una clase y luego removemos otra clase por medio de funciones anidades de Jquery
		$("#show").addClass("fa-eye-slash").removeClass("fa-eye");
	});

	//Seleccionamos el elemento con id show y esperamos el evento doble click para que lance una funcion anonima
	$("#show").dblclick(function () {
		//Seleccionamos el elemento con id pass y con el metodo o funcion attr le colocamos un atributo de typo password al elemento porque es un input
		$("#pass").attr("type" , "password");
		$("#show").addClass("fa-eye").removeClass("fa-eye-slash");
	});
});