$(function() { 
	var emailreg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;	
	$(".boton").click(function(){  
		$(".error").fadeOut().remove();
		
		if ($(".rut").val() === "") {  
			$(".rut").focus().after('<span class="error">Ingrese su rut</span>');  
			return false;  
		} 
        if ($(".nombre").val() === "") {  
			$(".nombre").focus().after('<span class="error">Ingrese su nombre</span>');  
			return false;  
		}  
		if ($(".ape").val() === "") {  
			$(".ape").focus().after('<span class="error">Ingrese su apellido</span>');  
			return false;  
		} 
        if ($(".email").val() === "" || !emailreg.test($(".email").val())) {
			$(".email").focus().after('<span class="error">Ingrese un email correcto</span>');  
			return false;  
		}  
		if ($(".motivo").val() === "") {  
			$(".motivo").focus().after('<span class="error">Ingrese su motivo</span>');  
			return false;  
		} 
		if ($(".monto").val() === "") {  
			$(".monto").focus().after('<span class="error">Ingrese monto</span>');  
			return false;  
		} 
        if ($(".asunto").val() === "") {  
			$(".asunto").focus().after('<span class="error">Ingrese un asunto</span>');  
			return false;  
		}  
        if ($(".mensaje").val() === "") {  
			$(".mensaje").focus().after('<span class="error">Ingrese un mensaje</span>');   
			return false;  
		}  
    });  
	$(".rut, .ape, .nombre, .motivo, .monto, .asunto, .mensaje").bind('blur keyup', function(){  
        if ($(this).val() != "") {  			
			$('.error').fadeOut();
			return false;  
		}  
	});	
	$(".email").bind('blur keyup', function(){  
        if ($(".email").val() != "" && emailreg.test($(".email").val())) {	
			$('.error').fadeOut();  
			return false;  
		}  
	});
	$(".botonp").click(function(){  
		$(".error").fadeOut().remove();
		
		if ($(".rutp").val() === "") {  
			$(".rutp").focus().after('<span class="error">Ingrese su rut</span>');  
			return false;  
		} 
        if ($(".nombrep").val() === "") {  
			$(".nombrep").focus().after('<span class="error">Ingrese su nombre</span>');  
			return false;  
		}  
		if ($(".apep").val() === "") {  
			$(".apep").focus().after('<span class="error">Ingrese su apellido</span>');  
			return false;  
		} 
		  
		if ($(".smspp").val() === "") {  
			$(".smspp").focus().after('<span class="error">Ingrese un numero contacto</span>');   
			return false;  
		}
        if ($(".mensajep").val() === "") {  
			$(".mensajep").focus().after('<span class="error">Ingrese un mensaje</span>');   
			return false;  
		}  
	});  
	$(".rutp, .apep, .nombrep, .asuntop, .smspp, .mensajep").bind('blur keyup', function(){  
        if ($(this).val() != "") {  			
			$('.error').fadeOut();
			return false;  
		}  
	});
	$(".botonf").click(function(){  
		$(".error").fadeOut().remove();
		
		if ($(".rutf").val() === "") {  
			$(".rutf").focus().after('<span class="error">Ingrese su rut</span>');  
			return false;  
		} 
        if ($(".nombref").val() === "") {  
			$(".nombref").focus().after('<span class="error">Ingrese su nombre</span>');  
			return false;  
		}  
		if ($(".apef").val() === "") {  
			$(".apef").focus().after('<span class="error">Ingrese su apellido</span>');  
			return false;  
		} 
        if ($(".mensajef").val() === "") {  
			$(".mensajef").focus().after('<span class="error">Ingrese un mensaje</span>');   
			return false;  
		}  
    });  
	$(".rutf, .apef, .nombref, .asuntof, .mensajef").bind('blur keyup', function(){  
        if ($(this).val() !== "") {  			
			$('.error').fadeOut();
			return false;  
		}  
	});	
});