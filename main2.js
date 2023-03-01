var lienzo=document.getElementById("papel")
var trazos=lienzo.getContext("2d")
var color="red"
var posicionx
var posiciony
var ancho_de_linea=6
var ancho_pantalla=screen.width
var alto_pantalla=screen.height
var nuevo_ancho=ancho_pantalla-10
var nuevo_alto=alto_pantalla-30

if(ancho_pantalla < 992)
{
    document.getElementById("papel").width=nuevo_ancho
    document.getElementById("papel").height=nuevo_alto
}

function touchstart(e)
{
    color=document.getElementById("entrada_texto").value
    ancho_de_linea=document.getElementById("ancho_texto").value
    posicionx=e.touches[0].clientX-lienzo.offsetLeft
    posiciony=e.touches[0].clientY-lienzo.offsetTop
}
function touchmove(e)
{
    var posX=e.touches[0].clientX-lienzo.offsetLeft
    var posY=e.touches[0].clientX-lienzo.offsetLeft
    trazos.beginPath()
    trazos.strokeStyle=color
    trazos.lineWidth=ancho_de_linea
    trazos.moveTo(posicionx, posiciony)
    trazos.lineTo(posX, posY)
    trazos.stroke()
    posicionx=posX
    posiciony=posY
}
lienzo.addEventListener("touchstart",touchstart)
lienzo.addEventListener("touchmove",touchmove)

function boton1(){
trazos.clearRect(0,0,lienzo.width,lienzo.height)
}