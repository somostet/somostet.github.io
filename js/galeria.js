function loadImages(){
    var imagenes = [1,2,3,4,5,6,7,8,9,10,11,12];
    var galeria = document.getElementById('galeria');


    for(imagen of imagenes){
        galeria.innerHTML += `
        <a href="#" onclick="openModal(${imagen})" data-toggle="modal" data-target="#id${imagen}">
                    <div class="card"><img src="./images/Galeria/${imagen}.png" class="card-img-top"></div>
        </a>
        `
    }
}

function openModal(val){
    $("#modal1").modal("show");
    $("#cuerpom").html('<img src="./images/Galeria/'+val+'.png" class="img-fluid">');
}