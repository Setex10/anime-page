const synopsis = document.querySelectorAll('.synopsis');
import {api} from './index.js';


function synopsisHtml (img, title, synopsisAnime, trailer){
    synopsis.forEach(item => {
        item.innerHTML = `<div class="m-auto flex w-11/12 phone:flex-col phone:justify-center phone:space-y-5 tablet:flex-row 
        tablet:space-y-0 tablet:space-x-3">
        <img src="${img}" alt="${title}"
    class="phone:w-full phone:h-80 tablet:w-3/4 laptop:w-96">
    <div class="flex flex-col space-y-4">
        <h1 class="text-cyan-400 phone:text-4xl font-semibold">${title}</h1>
        <p class="text-white phone:text-xl phone:leading-7">${synopsisAnime}</p>
        
        <button class="bg-cyan-400 phone:w-1/2 text-white rounded-sm p-2">
        <a href="${trailer}" class="font-semibold text-center text-xl">
        Ver Trailer
        </a>
        </button>
    </div>
    </div>`
    })
}

const random = async() =>{

    try{
        const peticion = await fetch(`${api}/random/anime?sfw=true`);
    const data = await peticion.json();
    const datos = await data.data;

    let img = await datos.images.jpg.large_image_url;
    let title = await datos.title;
    let synopsisAnime = await datos.synopsis;
    let trailer = await datos.trailer.url;

    synopsisHtml(img, title, synopsisAnime, trailer);

    } catch (error) {
        console.log(error);
    }
}

setTimeout(() => {
    random();
} , 3000);



