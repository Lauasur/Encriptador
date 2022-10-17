//e-enter
//o-ober
//i-imes
//a-ai
//u-ufat 
const inputMensaje1= document.querySelector("#mensaje");
const inputMensaje2= document.querySelector("#resultado");
const btnEncriptar= document.querySelector("#btn-encriptar");
const btnDesencriptar= document.querySelector("#btn-desencriptar");
const btnCopiar= document.querySelector("#botonCopiar");
 
function validar(){
  const inputMensaje1 = document.querySelector("#mensaje").value;
  if(/[A-Z|ÁÉÍÓÚáéíóú.,]/g.test(inputMensaje1) == true){
   alert("Solo letras minúsculas.No acentos!")}
   else{
    encriptar();
  }
}

function encriptar(){
 
  var texto = document.getElementById("mensaje").value.toLowerCase();
   
    // i es para que afecte tanto mayusculas como minusculas
    // g es para que afecte a toda la linea u oracion
    //m es para a multiples lineas o parrafos
var txtCifrado = texto.replace(/e/img,"enter");
var txtCifrado = txtCifrado.replace(/o/img,"ober");
var txtCifrado = txtCifrado.replace(/i/img,"imes");
var txtCifrado = txtCifrado.replace(/a/img,"ai");
var txtCifrado = txtCifrado.replace(/u/img,"ufat");

document.getElementById("imagenMuneco").style.display= "none";
document.getElementById("resultado").innerHTML= txtCifrado;
document.getElementById("texto").style.display= "none";
document.getElementById("botonCopiar").style.display= "show";
document.getElementById("botonCopiar").style.display="inherit";

 }


function desencriptar(){

  var texto = document.getElementById("resultado").value.toLowerCase();
 
    
var txtCifrado = texto.replace(/enter/img,"e");
var txtCifrado = txtCifrado.replace(/ober/img,"o");
var txtCifrado = txtCifrado.replace(/imes/img,"i");
var txtCifrado = txtCifrado.replace(/ai/img,"a");
var txtCifrado = txtCifrado.replace(/ufat/img,"u");

document.getElementById("imagenMuneco").style.display= "none";
document.getElementById("resultado").innerHTML= txtCifrado;
document.getElementById("texto").style.display= "none";
document.getElementById("botonCopiar").style.display= "show";
document.getElementById("botonCopiar").style.display= "inherit";

}

                       
btnEncriptar.onclick = validar; 
btnDesencriptar.onclick = desencriptar;
btnCopiar.onclick = copiar;

function copiar(){

 var mensajeEncriptado= resultado.value;
  navigator.clipboard.writeText(mensajeEncriptado);
  alert("Mensaje copiado")
}
   
 



 
 
 
 
 
 

     
 
