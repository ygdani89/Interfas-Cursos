/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
  imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
  lenguajes: "HTML y CSS",
  bimestre: "1er bimestre",
},
{
  imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
  lenguajes: "Javascript",
  bimestre: "2do bimestre",
},
{
  imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
  lenguajes: "React JS",
  bimestre: "3er bimestre",
},
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */



function obtenerDatosDelUsuario() {



  let nombre1 = prompt('Cual es tu Nombre ?');
  datosPersona.nombre = nombre1;
  let edad1 = 2023 - prompt('Año de nacimiento');
  datosPersona.edad = edad1;
  let ciudad1 = prompt('Cual es tu ciudad ?');
  datosPersona.ciudad = ciudad1;

  let intJs = confirm(' Estas interesado en JavaScript ?');
  if (intJs == true) {
    intJs = "SI"
  } else if (intJs != true) {
    intJs = "NO"
  };
  datosPersona.interesPorJs = intJs;


}




function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */

  obtenerDatosDelUsuario();

  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  let nombre2 = document.getElementById('nombre');
  nombre2.textContent = datosPersona.nombre

  let edad2 = document.getElementById('edad')
  edad2.textContent = datosPersona.edad

  let ciudad2 = document.getElementById('ciudad');
  ciudad2.textContent = datosPersona.ciudad


  let intJs2 = document.getElementById('javascript');
  intJs2.textContent = datosPersona.interesPorJs

  
};

let bandera = false;




function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */


  


  if (bandera == false) {

    
    listado.forEach(e => {

      let contenedor = document.getElementById('fila');


      let cajita = document.createElement('div');
      cajita.classList.toggle('caja')

      var imagen1 = document.createElement('img');

      imagen1.setAttribute("src", `${e.imgUrl}`);

      imagen1.textContent = e.imgUrl;


      let titulo1 = document.createElement('h2');
      titulo1.textContent = e.lenguajes;


      let bime = document.createElement('p');
      bime.textContent = e.bimestre;


      cajita.appendChild(imagen1)
      cajita.appendChild(titulo1)
      cajita.appendChild(bime)

      contenedor.appendChild(cajita)

    });


    bandera = true;

  }




};

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */

  let cuerpo = document.getElementById('sitio');

  cuerpo.classList.toggle('dark')


}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */

let texto1 = document.getElementById('sobre-mi');
let bandera1 = false;
window.addEventListener('keypress', function (e) {


  if (e.key === "f" && bandera1 == false) {
    texto1.classList.toggle('oculto');


    bandera1 =true;
  }


})

