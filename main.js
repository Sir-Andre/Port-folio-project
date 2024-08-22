var canvas = document.getElementById('canvas1'); 
var contexte = canvas.getContext('2d');
var image1 = document.getElementById('image');
var image2 = document.getElementById('image2');
//on récupère notre image depuis notre fichier html pour pouvoir la charger à l'mplacement souhaité dans le canvas

image1.addEventListener('load', show);
image2.addEventListener('load', show);

function show(){
    contexte.drawImage(image1,0,0,300,208);
    contexte.drawImage(image2,460,0,300,208);
}
contexte.fillStyle = '#00f'
contexte.font = 'bold 22px sans-serif,verdana,arial';
contexte.fillText('My maps',330,25);
