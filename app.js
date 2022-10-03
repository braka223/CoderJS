/*
-Objetos y array,Metodos de arrys✔
-Funciones y Condicionales✔
-Agregar DOM dinamico con Eventos✔
-Sintaxis avanzada
-Libreria a usar (Toastify)✔
-manejo de promesas con Fetch
-caragar datos con JSON LOCAL o desde una API

*/

//api
window.addEventListener(`load`,()=>{

let temperaturaValor = document.getElementById(`temperatra-valor`)
let temperaturaDescripcion = document.getElementById(`temperatra-descripcion`)

let ubicacion = document.getElementById(`ubicacion`)
let iconoAnimado = document.getElementById(`icono-animado`)

let velocidadViento = document.getElementById (`viento-velocidad`) 

 let lon 
 let lat 

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(posicion=>{
       lon = posicion.coords.longitude
       lat = posicion.coords.latitude

       const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=es&appid=5f08bdfa85a584696d2c093c3b2cbf42`
      
 
       fetch(url)
       .then(response =>{ return response.json() })
       .then (data =>{
  
        let temp = Math.round(data.main.temp - 273)
        temperaturaValor.textContent = `${temp}°c`

        let descTemperatura = data.weather[0].description
        temperaturaDescripcion.textContent = descTemperatura.toUpperCase()

        let ubic = data.name
        ubicacion.textContent = ubic.toUpperCase()

        let viento = Math.round(data.wind.speed + 18,83)
        velocidadViento.textContent = `${viento} km`


        switch (data.weather[0].main) {
          case `Clouds`: //1
            iconoAnimado.src=`animated/cloudy.svg`
              console.log(`Nublado`)
            break;      
      
          case `Clear`: //2
            iconoAnimado.src=`animated/day.svg`
                console.log(`Limpio`)
            break;
      
          case `thunderstore`://3 - tormenta
              iconoAnimado.src=`animated/thunder.svg`
               console.log(`Tormentas`)
            break;

            case `Drizzle`: //4 llovizna
            iconoAnimado.src=`animated/rainy-2.svg`
              console.log(`llovizna`)
          break;
        
          case `Rain`: //5 llovizna
            iconoAnimado.src=`animated/rainy-7.svg`
              console.log(`llovia`)
          break;
      
          case `snow`: //6 nieve
            iconoAnimado.src=`animated/snowy-5.svg`
              console.log(`Nieve`)
          break;
        
          case `Atmosphere`: //7
             iconoAnimado.src=`animated/swather.svg`
               console.log(`Atmosfera`)
          break;      
          
   }

})

       .catch(error=>{ console.log(error)})

})

}
})





//creo un constructor con sus respectivos nombre
class Producto{
    constructor(id,nombre,colores,precio,stock,cantidad,img){
        this.id = id;
        this.nombre = nombre;
        this.colores = colores;
        this.precio = precio;
        this.stock = stock
        this.cantidad = cantidad
        this.img = img
    
    }
}

//productos a pushear y link directos de una pagina de fotos
const auriculares1 = new Producto (1 ,`WF-C500`, `Blancos`,15000,5,1,"https://arsonyb2c.vtexassets.com/arquivos/ids/357616-1600-auto?v=637684903200600000&width=1600&height=auto&aspect=true") // version blaancos
const auriculares2 = new Producto (2 ,`True Wireless WF-1000XM4`,`Negros`,50000,10,1, "https://arsonyb2c.vtexassets.com/arquivos/ids/357009-800-auto?v=637588122166530000&width=800&height=auto&aspect=true") /// version negros dorados
const auriculares3 = new Producto (3 ,`LinkBuds S`,`Creme`,35000,8,1, "https://arsonyb2c.vtexassets.com/arquivos/ids/360081-1600-auto?v=637944290353100000&width=1600&height=auto&aspect=true")// version s crema
const auriculares4 = new Producto (4 ,`WH-CH510`,`Blanco`,9000,15,1,"https://arsonyb2c.vtexassets.com/arquivos/ids/274967-1600-auto?v=637033504576900000&width=1600&height=auto&aspect=true") // versiones Cascos blancos
const auriculares5 = new Producto (5 ,`EXTRA BASS™-WH-XB700`,`Negro`,15000,15,1,"https://www.tradeinn.com/f/13772/137721462/sony-auriculares-inalambricos-wh-xb700-extra-bass.jpg") // version cascos negros
const auriculares6 = new Producto (6 ,`EXTRA BASS™-WH-XB910N`,`Negro`,20000,10,1,"https://arsonyb2c.vtexassets.com/arquivos/ids/274972-1600-auto?v=637033504642200000&width=1600&height=auto&aspect=true") //version cascos negros

// pusheo TODOS los arcticulos
let carritoAuriculares = [];
carritoAuriculares.push(auriculares1,auriculares2,auriculares3,auriculares4,auriculares5,auriculares6);


// llamo al dom y inyecto todos los productos con clases aparte asi armo las tarjetas con CSS

let padre = document.getElementById(`padre`) /// padre a pintar

//Carrito de array con un metodo .forEach para que itere productos por varios articulos
carritoAuriculares.forEach(produc =>{
  padre.innerHTML += `
  <div class="Tarjeta1"> 
  <div class="producto" id="${produc.id}">
  <img src="${produc.img} ">
  <div class="informacion">
    <span class="tipo-envio" >Envio con Normalidad</span>
    <span >${produc.nombre} </span>
    <span class="precio" >$${produc.precio} </span>
    <span class="costo-envio" >Envio Gratis</span>
    <span class="Descripcion">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti eius nesciunt nemo dolorum totam rerum labore natus quam, numquam iste dicta illum nihil sed consequuntur voluptate enim asperiores iusto. Illum?
    .</span>
 <div class="calificacion">
 <span>Estrellas</span>
 <samp>9623</samp></div>
 <samp class="ubicacion">ciudad</samp>
</div>
 <button type="button" class="btn btn-primary item-agregar">Agregar</button>
</div>
</div>`
});

// uso el "QuerySelectorALL" para usar todo los BOTONES con un selector solo y coloco el evento denteo de esos botones
// una vez que lo consiga busco el evento Target de esa info y lo pongo en String numerico, obteniendo eso puedo usar el evento a clickear
// uso un metodo que vi para desglosar los botones y  poder usar mas metodos 
let btns = document.querySelectorAll(`.item-agregar`)
btns = [...btns]
console.log(btns)

let agregarAlCarro = document.getElementById(`agregarCarro`)

//con todos esos botones le agrego un forEach para que estuche un evento en cada boton
//use un "Traversing the Dom" que vi en internet,para poder encontar el evento a llamar
btns.forEach(btn=>{
    btn.addEventListener(`click`,event =>{
 
// busco un Id del produ para que se muestre en los carritos
 
let id = Number(event.target.parentNode.id)

let productoFind = carritoAuriculares.find(item => item.id == id)

//si no existe en el arreglo ; que me lo ppushee y si existe que lo sume con un ++ en cantidad
if (arrayDeCompra.includes(productoFind)) {
    productoFind.cantidad++;
} else {
    arrayDeCompra.push(productoFind)
}


agregarAlCarro.innerHTML =` `

// Uso de liberira de Notificacion de Toastify

Toastify({
    duration: 3000,
    close: true,
    gravity: "top", // `top` or `bottom`
    position: "center", // `left`, `center` or `right`
    stopOnFocus: true, // Prevents dismissing of toast on hover
    style: {
    newWindow: true,
    background: "linear-gradient(to right,#000000,#434343)"
    },
    text: `Se agrego un producto al carrito`,
     onClick: function(){} // Callback after click
    }).showToast();

refresca();
elevarNumero();
sumaTotal(); 

quitarProducto();
})
})

//Funcion para la suma de productos
//meto una "Reduce" para la suma de todo los articulos si se acumula

let totalAPagar = document.getElementById(`totalAPagar`)

let sumaGeneral = 0
function sumaTotal() {
    let sumaGeneral
    let total = arrayDeCompra.reduce(( suma,item)=>{
        sumaGeneral = suma + item.cantidad*item.precio
       return sumaGeneral
    },0);
       totalAPagar.innerHTML =`$${total}`
   }

function refresca() {
  agregarAlCarro.innerHTML =` ` 

  arrayDeCompra.forEach(item=>{
  agregarAlCarro.innerHTML += `
  <div class="cart-row" ${item.id}>
  <div class="cart-item cart-column" >
  <span class="cart-item-title">${item.nombre} </span>
    </div>
  <span class="cart-price cart-column">$${item.precio} </span>
  <div class="cart-quantity cart-column">
    <input class="cart-quantity-input" min="1" type="number" value="${item.cantidad}">
  <button class="btn btn-danger" type="button">REMOVE</button>
  </div>
  </div>`


 

})
 quitarProducto ();
}


function elevarNumero() {
    let valuarCantidad = document.querySelectorAll(`.cart-quantity-input`)
    valuarCantidad = [...valuarCantidad];
  
    valuarCantidad.forEach(item=> {
      item.addEventListener(`click`,(event)=>{
      let evaluarActual = event.target.parentElement.parentElement.childNodes[1].innerText;

      let valuado = Number(event.target.value);
    
      let actualObjeto = arrayDeCompra.find(item =>item.nombre == evaluarActual)    

     actualObjeto.cantidad = valuado;
        

      sumaTotal()
    })
   
    })
}

function quitarProducto (){
    let removerBoton = document.querySelectorAll(`.btn-danger`)
    removerBoton =[...removerBoton]
   removerBoton.forEach(btn=> {
   btn.addEventListener (`click`,event=>{
    let removerBotonActual = event.target.parentElement.parentElement.childNodes[1].innerText;

    let eliminarActual = arrayDeCompra.find(item=>item.nombre == removerBotonActual)


    arrayDeCompra = arrayDeCompra.filter (item=>item != eliminarActual)

    console.log(arrayDeCompra)


    sumaTotal();
    elevarNumero();
    refresca()
 
});
});

}


//Iniciar sescion cuando se va a pagar

/*Descubri que para hacer un login despues de comprar los productos dandole en "pagar" y tabajar con el formulario de iniciar sesion
inyectando un INNER en la misma funcion tenia que trabajar en la misma funcion asi guardarlo en el localStorag*/


let botonPaga= document.getElementById(`botonPaga`)
let registro = document.getElementById(`form1`)

botonPaga.addEventListener(`click`,pagarRegistarse)
function pagarRegistarse() {
registro.innerHTML =`

<form  id="formulario1" >

 <section id="formulario " class=" formulario">
 <h4>Datos de Tarjeta</h4>

 <input id="titular" class="registros" type="text" placeholder="Titular de la tarjeta">

 <input id="domicilio" class="registros" type="text" placeholder="Domicilio a enviar">

 <input id="tarjeta" class="registros" type="number" placeholder="Numero de tarjeta">

 <input id="vencimiento" class="registros" type="number" placeholder="Fecha de vencimiento">

 <input id="cvv" class="registros" type="number" placeholder="Cvv">

 <input id="enviar" class="botonForm" type="submit" value="Iniciar el pago">
   </section> 

</form>



  `

 

let formularioDePaga = document.getElementById(`formulario1`)

let titular = document.getElementById(`titular`)
let domicilio = document.getElementById(`domicilio`)
let tarjeta = document.getElementById(`tarjeta`)
let vencimiento = document.getElementById(`vencimiento`)
let cvv = document.getElementById(`cvv`)

// formularioDePaga.addEventListener(`submit`, datosDeEnvio)

formularioDePaga.addEventListener(`submit`, function (event) {
  console.log(event)
  event.preventDefault();
  event.target;
  let pagoFinalDebito ={
   titular : titular.value,
   domicilio : domicilio.value,
   tarjeta : tarjeta.value,
   vencimiento : vencimiento.value,
   cvv : cvv.value

  }
  localStorage.setItem(`datosUsuarios`,JSON.stringify(pagoFinalDebito)); 

swal({
  title: "Orden Registrada con Exito !! Espero que disfrutes tus Auriculares 🎧 !",
  text: "Se Despachara Pronto 🚚 !",
  icon: "success",
});

})

}




//array vacio para pushearlo a la hora de compra 
arrayDeCompra =[];
