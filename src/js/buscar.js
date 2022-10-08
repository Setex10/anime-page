const form = document.getElementById('formBuscar'),
    btnBuscar = document.getElementById('btnBuscar');


const api = "https://api.jikan.moe/v4"

function generarHtml(idCarrusel, title, img, trailer){
    let carrusel = document.getElementById(`carrusel${idCarrusel}`);

    const div = document.createElement("div"),
        a = document.createElement("a"),
        image = document.createElement("img");

    div.classList.add("swiper-slide", "child", "mt-2", "rounded", "phone:w-10");
    a.href = `${trailer}`
    image.src = `${img}`
    image.alt = `${title}`;
    image.classList.add("imgAnime", "relative", "m-auto", 
    "phone:w-11/12", "phone:h-4/5", "hover:cursor-pointer");
    image.setAttribute("id", `${title}`);

    a.appendChild(image);
    div.appendChild(a);

    carrusel.appendChild(div);
}

function swiperCaracterísticas(id){
    let swiper = new Swiper(`.mySwiper${id}`, {
    slidesPerView: 5,
   spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        // when window width is >= 480px
        425: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 0,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 0,
        },
        1440: {
            slidesPerView: 5,
        },
        2560: {
            slidesPerView: 6,
        }

    }
  })
}



form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const inputBuscar = document.getElementById('buscar').value;

    const child = document.querySelectorAll('.child');
    child.length == 0 ? "" : child.forEach(child => child.remove());

    if(inputBuscar == ""){
        alert("Por favor ingrese una busqueda");
    } else {
            try {
                const peticion = await fetch(`${api}/anime?q=${inputBuscar}`);
            const data = await peticion.json();
            const datos = await data.data;

            datos.forEach(element => {
                generarHtml(7, element.title, element.images.jpg.large_image_url, element.url);
                swiperCaracterísticas(7);})
            } catch (error) {
                alert("No se ha encontrado la busqueda")
            }
            
        
    }
})

