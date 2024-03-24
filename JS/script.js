
/* function getData() {/*  */
 
    /* console.log(url);

    var clientId = `fVezc4nd9RCXdePTloDC73KLjLaxpxr2ra_RR7wJob0`
    var query = document.getElementById(`search`).value;*/

/*     var q = document.getElementById(`searchInput`).value;

    var url = `https://images-api.nasa.gov/search?q=${q}`;


    axios.get(url, {responseType: `json`})
        .then (function (res) {
            console.log(res.data)

            console.log(res.data.collection.items[0].links[0].href);
        })

        .catch (function(err) {
            console.error(err)
        })

}
 */

document.addEventListener(`DOMContentLoaded`, function() {
    if (window.location.pathname.endsWith('main.html')) {

        console.log(`Estamos en main`)
        main();
        console.log(`se ejecuta main()`)
        
    } else if (window.location.pathname.endsWith(`element.html`)){
        console.log(`Estamos en element.html`);

        var infoElement = localStorage.getItem(`selectedItem`);
        infoElement = JSON.parse(infoElement);
        console.log(infoElement);

        console.log(infoElement.links[0].href);

        /* Cambiamos el nav fixed por uno static */

        

        
        // 0. Element(div) ya esta creado
        var elementDiv = document.getElementById(`elementDiv`);
    
        // 1. Creamos div.imagenElement
        var divImagenElement = document.createElement(`div`);
        divImagenElement.className = `imagenElement`;
    
        // 2. Creamos img
        var imagenElement = document.createElement(`img`);
        imagenElement.src = infoElement.links[0].href;
    
        console.log(imagenElement);
    
        // 3. Creamos div.textcontainer
    
        var textContainerDiv = document.createElement(`div`);
        textContainerDiv.className = `text-container`;
    
        // 4. Creamos h2
        var titleElement = document.createElement(`h2`);
        titleElement.textContent = `${infoElement.data[0].title}`;
    
        // 5. Creamos p
        var paragraphElement = document.createElement(`p`);
        paragraphElement.innerHTML = `${infoElement.data[0].description}<br><br><strong>Date:</strong> ${infoElement.data[0].date_created}`
    
        // 6. Metemos div.imagenElement en Element(div)
        elementDiv.appendChild(divImagenElement);
    
        // 7. Metemos div.textcontainer en Element(div)
        elementDiv.appendChild(textContainerDiv);
    
        // 8. Metemos imagenElement en div.imagenElement
        divImagenElement.appendChild(imagenElement);
    
        // 9. Metemos h2 en div.textcontainer
    
        textContainerDiv.appendChild(titleElement);
    
        // 10. Metemos p en div.textcontainer
    
        textContainerDiv.appendChild(paragraphElement);
    
        console.log(elementDiv);
        
        
    }
})



function main() {

    function initial() {
        console.log(`se ejecuta initial()`)
        // 0. Cambiamos la clase del contenedor resultadosDiv
        var resultadosDiv = document.getElementById(`resultados`);
        resultadosDiv.className = `resultados_inicial`
        resultadosDiv.innerHTML = '';

        // 1.Creamos div#incial
        var initialDiv = document.createElement(`div`);
        initialDiv.className = `initial`

        // * Creamos contenedor de imagen
        var imgContainer = document.createElement(`div`)
        imgContainer.className = `contenedor_imagen_indice`;
        // * Creamos imagen
        var InitialImg = document.createElement(`img`);
        InitialImg.src = `../IMG/earth-outer-space.jpg`

        // 2.Creamos h2
        var initialTitle = document.createElement(`h2`);
        initialTitle.textContent = `Bienvenido a la Exploración del Cosmos`;

        // 3. Creamos p
        var initialParagraph = document.createElement(`p`);
        initialParagraph.innerHTML = `<strong>1. La Tierra</strong><br>
        - Sección dedicada a nuestro hogar planetario.<br>
        - Imágenes impresionantes de la Tierra vista desde el espacio.<br>
        - Datos interesantes sobre la Tierra, su estructura, clima y vida.<br><br>
    
        <strong>2. El Sol</strong><br>
        - Exploración de nuestra estrella más cercana.<br>
        - Fotografías solares y observaciones solares en diferentes longitudes de onda.<br>
        - Información sobre la importancia del Sol para la vida en la Tierra y su ciclo solar.<br><br>
    
        <strong>3. El Sistema Solar</strong><br>
        - Visión general de los planetas, lunas, asteroides y cometas que componen nuestro sistema solar.<br>
        - Secciones dedicadas a cada planeta con imágenes y datos clave.<br>
        - Información sobre misiones espaciales que han explorado nuestro sistema solar.<br><br>
    
        <strong>4. Nuestra Galaxia: La Vía Láctea</strong><br>
        - Introducción a la Vía Láctea, nuestra galaxia hogar.<br>
        - Imágenes de la Vía Láctea tomadas desde diferentes ubicaciones de la Tierra y desde el espacio.<br>
        - Datos sobre la estructura y la composición de la Vía Láctea, así como sobre los objetos celestes que contiene.<br><br>
    
        <strong>5. Explorando el Universo</strong><br>
        - Sección dedicada a la exploración del universo más allá de nuestro sistema solar.<br>
        - Galería de imágenes de nebulosas, cúmulos estelares, galaxias distantes y otros objetos celestes.<br>
        - Información sobre telescopios espaciales y terrestres utilizados para estudiar el universo.<br><br>
    
        <strong>6. Recursos Adicionales</strong><br>
        - Enlaces a libros, documentales, sitios web y aplicaciones relacionadas con la astronomía y la exploración espacial.<br>
        - Sugerencias para seguir explorando el cosmos y profundizar en el tema.<br><br>
    
        <strong>7. Contacto y Comentarios</strong><br>
        - Formulario de contacto para preguntas, comentarios o sugerencias de los visitantes.<br>
        - Enlaces a las redes sociales para mantenerse actualizado sobre las últimas noticias espaciales.<br>`;

        console.log(resultadosDiv);

        // 4. Metemos initialDiv en resultadosDiv
        resultadosDiv.appendChild(initialDiv);

        // 5. Metemos h2 en initialDiv
        initialDiv.appendChild(initialTitle);

        // * Metemos imgContainer en initialDiv
        initialDiv.appendChild(imgContainer);
        // * Metemos initialImg en imgContainer
        imgContainer.appendChild(InitialImg);

        // 6. Metemos p en initialDiv
        initialDiv.appendChild(initialParagraph);



    }

    function inicioResultsTerra() {
        axios.get(`https://images-api.nasa.gov/search?q=earth%2020...`, {responseType: `json`})
            .then (function (res) {
    
                var data = res.data.collection;
    
                console.log(data)
    
                //Title
                console.log(data.items[0].data[0].title);
                //Img
                console.log(data.items[0].links[0].href);

                //Procuramos que resultadosDiv tenga clase .resultados
    
                var resultadosDiv = document.getElementById(`resultados`);
                resultadosDiv.className = `resultados`;
                resultadosDiv.innerHTML = '';
    
                for(var i = 0; i < data.items.length; i++) {
    
                    // 1. Creamos div class = "ariculos_main"
                    var divArticulo = document.createElement(`div`);
                    divArticulo.className = `articulos_main`;
    
                    // 2. Creamos div class = "imagenes"
    
                    var divImagenes = document.createElement(`div`);
                    divImagenes.className = `imagenes`;
    
                    // 3. Creamos p
    
                    var titleImg = document.createElement(`p`);
                    titleImg.textContent = `${data.items[i].data[0].title}`
    
                    // 4. Creamos img
    
                    var imagen = document.createElement(`img`);
                    imagen.src = `${data.items[i].links[0].href}`;
    
                    // 5. Metemos div class = "ariculos_main" en resultados
    
                    /* var resultadosDiv = document.getElementById(`resultados`); */
    
                    resultadosDiv.appendChild(divArticulo);
    
                    // 6. Metemos divImagen en divArticulo"
    
                    divArticulo.appendChild(divImagenes);
    
                    // 7. Metemos imagen en divImagenes
    
                    divImagenes.appendChild(imagen);
    
                    // 8. Metemos p en divArticulo
    
                    divArticulo.appendChild(titleImg);
    
                    // 9. Agregamos un addEventListener a cada uno de los elementos
                    // Usamos una clousure (function(index) {}) (i) )
                    
                    (function(index) {
                        divArticulo.addEventListener(`click`, function() {
                            console.log(data.items[index]);
                            var infoElement = JSON.stringify(data.items[index]);
                            localStorage.setItem(`selectedItem`, infoElement)
                            window.location.replace(`../HTML/element.html`)
                        });
                    })(i);

                    console.log(divArticulo);
                }


    
            })
    
            .catch (function(err) {
                console.error(err)
            })
    }
    
    function inicioResultsSolarSystem() {
        axios.get(`https://images-api.nasa.gov/search?q=Kepler%2020...`, {responseType: `json`})
            .then (function (res) {
    
                var data = res.data.collection;
    
                console.log(data)
    
                //Title
                console.log(data.items[0].data[0].title);
                //Img
                console.log(data.items[0].links[0].href);
    
                var resultadosDiv = document.getElementById(`resultados`);
                resultadosDiv.className = `resultados`;
                resultadosDiv.innerHTML = '';
    
                for(var i = 0; i < data.items.length; i++) {
    
                    // 1. Creamos div class = "ariculos_main"
                    var divArticulo = document.createElement(`div`);
                    divArticulo.className = `articulos_main`;
    
                    // 2. Creamos div class = "imagenes"
    
                    var divImagenes = document.createElement(`div`);
                    divImagenes.className = `imagenes`;
    
                    // 3. Creamos p
    
                    var titleImg = document.createElement(`p`);
                    titleImg.textContent = `${data.items[i].data[0].title}`
    
                    // 4. Creamos img
    
                    var imagen = document.createElement(`img`);
                    imagen.src = `${data.items[i].links[0].href}`;
    
                    // 5. Metemos div class = "ariculos_main" en resultados
    
                    /* var resultadosDiv = document.getElementById(`resultados`); */
    
                    resultadosDiv.appendChild(divArticulo);
    
                    // 6. Metemos divImagen en divArticulo"
    
                    divArticulo.appendChild(divImagenes);
    
                    // 7. Metemos imagen en divImagenes
    
                    divImagenes.appendChild(imagen);
    
                    // 8. Metemos p en divArticulo
    
                    divArticulo.appendChild(titleImg);

                    // 9. Agregamos un addEventListener a cada uno de los elementos
                    // Usamos una clousure (function(index) {}) (i) )
                    
                    (function(index) {
                        divArticulo.addEventListener(`click`, function() {
                            console.log(data.items[index]);
                            var infoElement = JSON.stringify(data.items[index]);
                            localStorage.setItem(`selectedItem`, infoElement)
                            window.location.replace(`../HTML/element.html`)
                        });
                    })(i);
                }
            })
            .catch (function(err) {
                console.error(err)
            })
    }
    
    function inicioResultsSun() {
        axios.get(`https://images-api.nasa.gov/search?q=Sun%2020...`, {responseType: `json`})
            .then (function (res) {
    
                var data = res.data.collection;
    
                console.log(data)
    
                //Title
                console.log(data.items[0].data[0].title);
                //Img
                console.log(data.items[0].links[0].href);
    
                var resultadosDiv = document.getElementById(`resultados`);
                resultadosDiv.className = `resultados`;
                resultadosDiv.innerHTML = '';
    
                for(var i = 0; i < data.items.length; i++) {
    
                    // 1. Creamos div class = "ariculos_main"
                    var divArticulo = document.createElement(`div`);
                    divArticulo.className = `articulos_main`;
    
                    // 2. Creamos div class = "imagenes"
    
                    var divImagenes = document.createElement(`div`);
                    divImagenes.className = `imagenes`;
    
                    // 3. Creamos p
    
                    var titleImg = document.createElement(`p`);
                    titleImg.textContent = `${data.items[i].data[0].title}`
    
                    // 4. Creamos img
    
                    var imagen = document.createElement(`img`);
                    imagen.src = `${data.items[i].links[0].href}`;
    
                    // 5. Metemos div class = "ariculos_main" en resultados
    
                    /* var resultadosDiv = document.getElementById(`resultados`); */
    
                    resultadosDiv.appendChild(divArticulo);
    
                    // 6. Metemos divImagen en divArticulo"
    
                    divArticulo.appendChild(divImagenes);
    
                    // 7. Metemos imagen en divImagenes
    
                    divImagenes.appendChild(imagen);
    
                    // 8. Metemos p en divArticulo
    
                    divArticulo.appendChild(titleImg);

                    // 9. Agregamos un addEventListener a cada uno de los elementos
                    // Usamos una clousure (function(index) {}) (i) )
                    
                    (function(index) {
                        divArticulo.addEventListener(`click`, function() {
                            console.log(data.items[index]);
                            var infoElement = JSON.stringify(data.items[index]);
                            localStorage.setItem(`selectedItem`, infoElement)
                            window.location.replace(`../HTML/element.html`)
                        });
                    })(i);
                }
            })
            .catch (function(err) {
                console.error(err)
            })
    }
    
    function inicioResultsGalaxy() {
        axios.get(`https://images-api.nasa.gov/search?q=galaxy%2020...`, {responseType: `json`})
            .then (function (res) {
    
                var data = res.data.collection;
    
                console.log(data)
    
                //Title
                console.log(data.items[0].data[0].title);
                //Img
                console.log(data.items[0].links[0].href);
    
                var resultadosDiv = document.getElementById(`resultados`);
                resultadosDiv.className = `resultados`;
                resultadosDiv.innerHTML = '';
    
                for(var i = 0; i < data.items.length; i++) {
    
                    // 1. Creamos div class = "ariculos_main"
                    var divArticulo = document.createElement(`div`);
                    divArticulo.className = `articulos_main`;
    
                    // 2. Creamos div class = "imagenes"
    
                    var divImagenes = document.createElement(`div`);
                    divImagenes.className = `imagenes`;
    
                    // 3. Creamos p
    
                    var titleImg = document.createElement(`p`);
                    titleImg.textContent = `${data.items[i].data[0].title}`
    
                    // 4. Creamos img
    
                    var imagen = document.createElement(`img`);
                    imagen.src = `${data.items[i].links[0].href}`;
    
                    // 5. Metemos div class = "ariculos_main" en resultados
    
                    /* var resultadosDiv = document.getElementById(`resultados`); */
    
                    resultadosDiv.appendChild(divArticulo);
    
                    // 6. Metemos divImagen en divArticulo"
    
                    divArticulo.appendChild(divImagenes);
    
                    // 7. Metemos imagen en divImagenes
    
                    divImagenes.appendChild(imagen);
    
                    // 8. Metemos p en divArticulo
    
                    divArticulo.appendChild(titleImg);

                    // 9. Agregamos un addEventListener a cada uno de los elementos
                    // Usamos una clousure (function(index) {}) (i) )
                    
                    (function(index) {
                        divArticulo.addEventListener(`click`, function() {
                            console.log(data.items[index]);
                            var infoElement = JSON.stringify(data.items[index]);
                            localStorage.setItem(`selectedItem`, infoElement)
                            window.location.replace(`../HTML/element.html`)
                        });
                    })(i);
                }
            })
            .catch (function(err) {
                console.error(err)
            })
    }

    function inicioResultsUniverse() {
        axios.get(`https://images-api.nasa.gov/search?q=Universe%2020...`, {responseType: `json`})
            .then (function (res) {
    
                var data = res.data.collection;
    
                console.log(data)
    
                //Title
                console.log(data.items[0].data[0].title);
                //Img
                console.log(data.items[0].links[0].href);
    
                var resultadosDiv = document.getElementById(`resultados`);
                resultadosDiv.className = `resultados`;
                resultadosDiv.innerHTML = '';
    
                for(var i = 0; i < data.items.length; i++) {
    
                    // 1. Creamos div class = "ariculos_main"
                    var divArticulo = document.createElement(`div`);
                    divArticulo.className = `articulos_main`;
    
                    // 2. Creamos div class = "imagenes"
    
                    var divImagenes = document.createElement(`div`);
                    divImagenes.className = `imagenes`;
    
                    // 3. Creamos p
    
                    var titleImg = document.createElement(`p`);
                    titleImg.textContent = `${data.items[i].data[0].title}`
    
                    // 4. Creamos img
    
                    var imagen = document.createElement(`img`);
                    imagen.src = `${data.items[i].links[0].href}`;
    
                    // 5. Metemos div class = "ariculos_main" en resultados
    
                    /* var resultadosDiv = document.getElementById(`resultados`); */
    
                    resultadosDiv.appendChild(divArticulo);
    
                    // 6. Metemos divImagen en divArticulo"
    
                    divArticulo.appendChild(divImagenes);
    
                    // 7. Metemos imagen en divImagenes
    
                    divImagenes.appendChild(imagen);
    
                    // 8. Metemos p en divArticulo
    
                    divArticulo.appendChild(titleImg);

                    // 9. Agregamos un addEventListener a cada uno de los elementos
                    // Usamos una clousure (function(index) {}) (i) )
                    
                    (function(index) {
                        divArticulo.addEventListener(`click`, function() {
                            console.log(data.items[index]);
                            var infoElement = JSON.stringify(data.items[index]);
                            localStorage.setItem(`selectedItem`, infoElement)
                            window.location.replace(`../HTML/element.html`)
                        });
                    })(i);
                }
            })
            .catch (function(err) {
                console.error(err)
            })
    }

    
    initial();

    var showIncial = document.getElementById(`inicioLink`);
    showIncial.addEventListener(`click`, initial)
    
    var showTerra = document.getElementById(`terraLi`);
    showTerra.addEventListener(`click`, inicioResultsTerra);
    
    var showSolarSystem = document.getElementById(`solarSystemLi`);
    showSolarSystem.addEventListener(`click`, inicioResultsSolarSystem);

    var showSun = document.getElementById(`solLi`);
    showSun.addEventListener(`click`, inicioResultsSun)

    var showGalaxy = document.getElementById(`galaxyLi`);
    showGalaxy.addEventListener(`click`, inicioResultsGalaxy)
    
    var showUniverse = document.getElementById(`unverseLi`);
    showUniverse.addEventListener(`click`, inicioResultsUniverse)


    /* DECLARAMOS PERSINAJES DE LA OBRA */
    var line1__bars = document.querySelector(".line1__bars-menu");
    var line2__bars = document.querySelector(".line2__bars-menu");
    var line3__bars = document.querySelector(".line3__bars-menu");


    function animateBars() {
        console.log("Clicked!");
        line1__bars.classList.toggle("activeline1__bars-menu");
        line2__bars.classList.toggle("activeline2__bars-menu");
        line3__bars.classList.toggle("activeline3__bars-menu");

        var navList = document.getElementById(`navegador`);

        console.log(navList);

        if (navList.classList.contains(`active`)) {
            navList.classList.remove(`active`)
        } else {
            navList.classList.add(`active`);
        }
}

    var barsMenu = document.querySelector(".bars__menu")

    barsMenu.addEventListener("click", animateBars);


}




















