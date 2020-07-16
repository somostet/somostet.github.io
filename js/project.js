function loadInfo(project_name){
    var nombre_p = Enterprise[project_name].name;
    var encargado = Enterprise[project_name].owner;
    var link = Enterprise[project_name].link;
    var proyectos = Enterprise[project_name].projects;
    var str_html = "";
    var app_name = "";
    var app_desc = "";
    var app_plat = "";
    var app_ver = "";
    var app_logo = "./images/Bannertet.png";

    for(var cadap in proyectos){
        app_name = proyectos[cadap].name;
        app_desc = proyectos[cadap].description;
        app_plat = proyectos[cadap].platforms;
        app_ver = proyectos[cadap].version;
        app_logo = proyectos[cadap].logo;
        str_html += `
        
        <tr>
            <td>
             <center> <img src="./images/img/${app_logo}"/  width="150" height="150"> </center>
            <td>
        </tr>

        <tr>
            <td>
                <p class="text-justify">
                    ${app_name} <br><br>
                    ${app_desc} <br><br>
                    <a href="https://altkemist.github.io/altkemist/index.html" class="btn btn-outline-primary btn-block"><i class="fa fa-flask" aria-hidden="true"></i> Ver más <i class="fa fa-flask" aria-hidden="true"></i></a>
                </p>

            </td>

        </tr>
        `
    }
    $("#modal1").modal("show");
    $("#mtitle").html(nombre_p);
    $("#cuerpom").html(str_html);
}

// Macro objeto
Enterprise = {
    ark : {
        name:'Altkemist',
        owner:'Isaac Quinzada',
        projects:{
            'Reproductor Mercuris':{
                name:'Reproductor Mercuris',
                description:'Escucha la música que más te gusta con el mejor rendimiento y de la forma que desees. Un reproductor de música gratuito y eficiente. Reproduce tus canciones favoritas en mp3; disfrútalas añadiendo una imagen de tu gusto, lograrás combinaciones sorprendentes. Puedes elegir entre la canción que deseas escuchar o una playlist en concreto. Personalízalo a tu gusto con fondos, fondos animados, transparencia, volumen y colores. Tú decides cómo escuchar tus canciones favoritas. ',
                platforms:'PC',
                version:'1.1.0',
                logo:'mercuris.png'
            },
            'SmallTin - Lista de Anime':{
                name:'SmallTin - Lista de Anime',
                description:'Mantén completamente ordenado las series y películas que sigues actualmente. Crea y administra tu propia lista de Anime. Una aplicación completamente gratis, sencilla y eficiente. ',
                platforms:'PC',
                version:'1.0.0',
                logo:'smalltin.png'
            },
            'AyV Calculadora':{
                name:'AyV Calculadora',
                description:'Calculadora geométrica que te permite obtener el área y volumen de las figuras más comunes. Elige entre cubo, cono, esfera, paralelepípedo, cilindro. ',
                platforms:'Android',
                version:'1.0.0',
                logo:'ayvc.png'
            },
            'Generar en Formato APA':{
                name:'Generar en Formato APA',
                description:'¿Has tenido dificultades a la hora de realizar bibliografías? Esta aplicación solucionará todos tus problemas. Elige entre web, artículo, enciclopedia, periódico, revista y libro. ',
                platforms:'Android',
                version:'1.0.0',
                logo:'formatoapa.png'
            },
            'VAltkemist & BreakDisc':{
                name:'VAltkemist & BreakDisc',
                description:'Esta aplicación es de uso completamente experimental y su función es la de llenar el espacio en un disco o memoria externa. Posee una versión alternativa para sobrepasar dicho espacio y corromper el disco. Se necesita JAVA versión 7 como mínimo. ',
                platforms:'PC, Linux, MAC',
                version:'1.0.0',
                logo:'valtkemist.png'
            }
        },
        link:'https://altkemist.github.io/altkemist/proyectos.html'
    }
}
