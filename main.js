var lienzo=document.getElementById("papel")
var trazos=lienzo.getContext("2d")
var color="red"
trazos.beginPath()
trazos.strokeStyle=color
trazos.lineWidth=3
trazos.arc(80,100,10,0,2*Math.PI)
trazos.stroke()
function mousedown(e){
    color=document.getElementById("entrada_texto").value
 var x=e.clientX-lienzo.offsetLeft
 var y=e.clientY-lienzo.offsetTop
 circulo(x,y)
}
function circulo(x,y){
    trazos.beginPath()
    trazos.strokeStyle=color
    trazos.lineWidth=3
    trazos.arc(x,y,10,0,2*Math.PI)
    trazos.stroke()
}
lienzo.addEventListener("mousedown",mousedown)
function boton1(){
    trazos.clearRect(0,0,lienzo.width,lienzo.height)
}