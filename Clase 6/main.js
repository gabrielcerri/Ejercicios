window.onload = (function() {
  const button = document.querySelector('.button') //Selecciono el elemento con la clase .button y lo guardo en 'button'
  const button2 = document.querySelector('.button2')
  const button3 = document.querySelector('.button3')
  const input = document.querySelector('.input')
  const lista = document.querySelector('.lista')

  let anterioresItems = []


function limpiarLista() {
  let contenidoDeLista = anterioresItems
  let elementosLista = document.querySelector('.lista')
  
  elementosLista.innerHTML = ''
  
  contenidoDeLista.splice(0, contenidoDeLista.length)
}

  function ponleFocus(){
      document.querySelector('.input').focus()
      }
      ponleFocus()

  function agregarItem() {
    const itemDelUsuario = input.value

    if (itemDelUsuario !== '') {

      if (!anterioresItems.includes(itemDelUsuario)) {
        anterioresItems.push(itemDelUsuario)

        const nuevoElemento = document.createElement('div')
        nuevoElemento.append(itemDelUsuario)
        nuevoElemento.setAttribute('class', 'item')
        
        const botonesBorrar = document.createElement('button')
        botonesBorrar.innerHTML = 'x'

        botonesBorrar.onclick = function() {
          anterioresItems.splice(anterioresItems.indexOf(itemDelUsuario), 1)
          lista.removeChild(nuevoElemento)
        }

        nuevoElemento.append(botonesBorrar)

        lista.append(nuevoElemento)

        ponleFocus()

        
        } else {
          alert('Ya existe el item!')
        }
        input.value = ''
    } else {
          alert('Ingrese un item!')
        }
  }


  input.onkeydown = function(event) {
    if (event.key === 'Enter') {
    agregarItem()
    }
  }

  button2.onclick = function() {
    const itemDelUsuario = input.value

    if (anterioresItems.includes(itemDelUsuario)) {
      const indiceDelItemDelUsuario = anterioresItems.indexOf(itemDelUsuario)
      console.log(indiceDelItemDelUsuario)

      const elementoDelItemDelUsuario = document.querySelectorAll('.lista div')[indiceDelItemDelUsuario]

      anterioresItems.splice(anterioresItems.indexOf(itemDelUsuario), 1) //Elimina del array
      //splice(desde donde queremos borrar, cantidad de elementos que quiero borrar)
      lista.removeChild(elementoDelItemDelUsuario) //Elimina del DOM

      input.value = ''
      } 
  }

  button.onclick = function() {
    agregarItem()
  }

  button3.onclick = function() {
    limpiarLista()
    
  }
})