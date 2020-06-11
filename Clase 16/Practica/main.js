window.onload = function () { 
	/*Recordatorio: intentar con display para ocultar y aparecer cada vez que
	  					la edad sea mayor o menor*/
	const nombre = document.querySelector('.nombre')
	const boton = document.querySelector('.boton')
	const cartelVerde = document.querySelector('.verde')
	const cartelRojo = document.querySelector('.rojo')

	let aux = 0

	boton.onclick = function () {
		let edad= document.querySelector('.nombre').value

		if(edad<18) {
			cartelRojo.style.display = 'block'

			aux = 1

		} else if(edad>=18){
		cartelVerde.style.display = 'block'
			aux = 2
		}
	}

	nombre.onclick = function () {
		cartelRojo.style.display = 'none'
		cartelVerde.style.display = 'none'
	}

    nombre.onkeydown = function (event) {
    	let edad= document.querySelector('.nombre').value
	   	 if (event.key === 'Enter') {			   	 	
	   	 	if(!isNaN(edad)){

		   	 	if(edad<18){
					cartelRojo.style.display = 'block'
					


				} else if(edad>=18){
				cartelVerde.style.display = 'block'
					
				}
			} else {
				alert('Only numbers!')
			}
		}

	}


	
}