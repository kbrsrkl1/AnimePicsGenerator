const btnEl = document.getElementById("btn");

const animeContainerEl = document.querySelector(".anime-container");
const animeImgEl = document.querySelector(".anime-img")

const animeNameEl = document.querySelector(".anime-name")
const animeUrl = "https://i.waifu.pics/MxWWsnO.jpeg";
const apiUrl = `https://api.jikan.moe/v4/anime?q=${encodeURIComponent(animeUrl)}&limit=1`;


btnEl.addEventListener("click", async function(){
    try {
        btnEl.disabled = true;
        btnEl.innerText = "Loading..."
        animeNameEl.innerText = "Updating..."
        animeImgEl.src = "eclipse.svg"
        const randomAnimeId = Math.floor(Math.random() * 500)
        const apiUrl = `https://api.jikan.moe/v4/anime/${randomAnimeId}`;
        const response  =  await fetch(apiUrl);
        const data = await response.json();
        animeContainerEl.style.display = "block";
        animeImgEl.src = data.data.images.jpg.image_url;
        animeNameEl.innerText = data.data.title;
        btnEl.disabled = false;
        btnEl.innerText = "Get Anime"
    } catch (error) {
        animeNameEl.innerText = "An error happened, please try again"        
        btnEl.disabled = false;
        btnEl.innerText = "Get Anime"
    }
})