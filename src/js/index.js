
const apiUrl = "https://api.jikan.moe/v4"
export const api = apiUrl;

const main = document.getElementById('main');

async function Main(){
    const peticion = await fetch(`${apiUrl}/anime/38000`);
    const data = await peticion.json();

    function presentacion(title, img) {

        main.innerHTML = `
        <div class="flex justify-center space-x-4 w-full phone:flex-col tablet:flex-row">
            <img src="${img}" 
            alt="logo" class="phone:w-3/4 phone:m-auto tablet:w-2/5 laptop:w-1/4 laptop:ml-40 laptop:h-4/5">
            <div class="flex flex-col m-2">
            <h1 class="phone:text-5xl laptop:text-6xl Monitor4K:text-8xl font-semibold text-cyan-50 m-auto mb-0 text-center">${title}</h1>
            <p class="laptop:text-4xl Monitor4K:text-6xl w-4/5 m-auto text-3xl text-zinc-100 text-center laptop:leading-relaxed">Disruta todo los capitulos de Kimetsu no Yaiba Totalmente <span class="font-semibold text-sky-400">GRATIS</span>
            en nuestra plataforma y con la mejor calidad</p>
            </div>
        </div>
        `
    }
    presentacion(data.data.title, data.data.images.jpg.large_image_url);
}

Main();

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

function generarHtml(idCarrusel, title, img, trailer){
    let carrusel = document.getElementById(`carrusel${idCarrusel}`);

    carrusel.innerHTML += ` 
    <div class="swiper-slide mt-2 rounded phone:w-10 ">
    <a href="${trailer}"><img src="${img}" alt="${title}" class="imgAnime relative m-auto phone:w-11/12 phone:h-4/5 hover:cursor-pointer" 
    id="${title}"></a>
    
</div>
    `
}

async function peticion (link, idCarrusel, idSwiper){

    try {
        const peticion = await fetch(`${apiUrl}${link}`);
    const data = await peticion.json();
    const datos = await data.data;
        datos.forEach(element => {
            generarHtml(`${idCarrusel}`, element.title, element.images.jpg.large_image_url, element.trailer.url);
        });
        swiperCaracterísticas(`${idSwiper}`);
    } catch (error) {
        console.log(error);
    }

}



peticion("/anime", "Uno", 1);
peticion("/anime?type=movie", "Dos", 2);


setTimeout(() => {
    peticion("/anime?min_score=9&order_by=rank", "Tres", 3);
    peticion("/anime?status=airing", "Cuatro", 4);
} , 3000);

setTimeout(() => {
    peticion("/anime?genres=5", "Cinco", 5);
    peticion("/anime?genres=22", "Seis", 6);
} , 5500);

