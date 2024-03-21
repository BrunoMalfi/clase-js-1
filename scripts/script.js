//first javascript script 

//alert('JavaScript funcionando correctamente');


//Variables begin -------------------
console.log('---------Variables-------')
let variableSinValor ; 
let booleano1 = true; 
let booleano2 = false; 
const PI = 3.14 ;
const PIlong = 3.14159 ;
const TAU = PI*2 ; 
const miNombre ='Bruno';
const miNumeroFav=2.71828;  
const crack = 'Hola soy un crack' ;
const TemplateLiteral = `Mi nombre es ${miNombre} y siempre saludo diciendo : ${crack}`;

  console.log('NombreNum |','Mi nombre es '+miNombre+' y mi núme favorito es '+miNumeroFav);
  console.log('UpperCrack |', 'Seré un crack en JavaScript al terminar el bootcamp'.toUpperCase());
  console.log('first 5 |',crack.substring(0,5));
  console.log('miNumeroFav to string |',typeof (miNumeroFav +'') + ' si convertimos miNumeroFav a string com el método toString tenemos que: '+ typeof(miNumeroFav.toString()))
  console.log('TemplateLiteral |',TemplateLiteral);
  console.log('PI |', PI + ' PI con más decimales : '+PIlong+ 'Pi con más decimales reducidos a 2 :  '+PIlong.toPrecision(3))
//Variables end  -----------------------------------------------------------------------------------------------------------------------------------------

//Arrays begin --------------------------------------------
console.log('---------Arrays-------')
const arrayVacio = [];
const arrayNumeros = [0,1,2,3,4,5,6,7,8,9];
const arrayNumeros2 = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
const arrayNumerosPares = [0,2,4,6,8];
const arrayNumerosNeg = [0,-1,-2,-3,-4,-5,-6,-7,-8,-9];
const holaMundo = ['Hola','Mundo'];
const loGuardoTodo = ['hola','que',23,43.33,'tal'];
const arryDeArrays=[[756, 'nombre'], [225, 'apellido'], [298, 'direccion']];

console.log('Array Lenght |', loGuardoTodo.length);
loGuardoTodo.push('Nuevo Elemento');
console.log('Array with extra data |', loGuardoTodo);
console.log('  seraching que  |', loGuardoTodo[1]);
loGuardoTodo.push('Euralio');
console.log('Array with extra data |', loGuardoTodo);
//Arrays end --------------------------------------------------------------------------

//Object begin ------------------------------------------
console.log('---------Objects-------');
const coche ={
  marca: 'honda',
  modelo: 'civic',
  matricula:'ABC1234',
};
const casa ={
  codPosttal: '46117',
  calle: 'calle felicidad',
  portal:'A',
  piso: 12 , 
};
const FullStackDeveloper={
  lenguajes:['javascript','php','java','c','c++','c#'],
  proyectos:['mi página personal','mi foro','mi aplicación multiplataforma','mi aplicacion para windows'],
};
const Perro= {
  nombre:'Sparky',
  raza:'Pastor Alemán',
  color:'negro y rojo fuego',
  edad: '3 años',
};
const Noticia={
  titular:'Gatito perdido',
  cuerpo:'Se busca gato de nombre Garfield, es de color naranja',
};
const Persona= {
  nombre:'Bruno',
  apellidos:'Malfi Fabeiro',
  edad: 33,
};
const Portatil={
  marca:'apple',
};
const Concierto={
  grupos:['grupo1','grupo2','grupo3','grupo4'],
};
const Led = {
  lampara1:'rojo',
  lampara2:'verde',
  lampara3: 'aszul',
};
const RGB = [Led.lampara1 , Led.lampara2, Led.lampara3];
const O_Error={
  codigo:204,
};
const Grupo = {
  integrantes:['integrante1','integrante2','integrante3','integrante4'],
};
const integrantes = Grupo.integrantes;
const impresora={
  tinta:{
    rojo:'30%',
    verde:'50%',
    azul:'65%',
  },
};
const nivelesTinta=impresora.tinta;
const Movil={
  espicificaciones:{
    porcesador:'M1',
    ram:'8GB',
    rom:'1T',
    screensize:'6 ich',
  }
}
const especificaciones = Movil["espicificaciones"]

console.log('Object Persona |',Persona);
console.log('Object FullStackDev |',FullStackDeveloper.lenguajes[0]);
console.log('Object Portatil |',Portatil.marca);
console.log('Object Portatil [marca]|',Portatil["marca"]);
console.log('Object Concierto (grupos) |', Concierto.grupos);
console.log('Array RGB|', RGB);
console.log('Object O_error |',O_Error.codigo);
console.log('Array integrantes|', integrantes);
console.log('Object nivelesTinta|',nivelesTinta);
console.log('Object especificaciones de movil |',especificaciones);
Portatil.marca='MSI';
console.log('Object Portatil |',Portatil.marca);
Concierto.grupos.push('Guns N Roses');
console.log('Object Concierto (grupos) |', Concierto.grupos);
Concierto.fecha = '2024-03-13';
console.log('Object Concierto (fecha) |', Concierto.fecha);
Concierto.fecha = new Date();
console.log('Object Concierto (fecha) |', Concierto.fecha);
console.log('Object Grupo numero de integrates |',Grupo.integrantes.length);
Grupo.integrantes.pop();
console.log('Object Grupo numero de integrates |',Grupo.integrantes.length);
//Object end -------------------------