var play = document.getElementById("play")
const video_conteiner = document.querySelector("aside")
const start_video = document.getElementById("video-conteiner")
play.onclick = ()=>{
    video_conteiner.className="show"
    // creo un iframe con un enlace dentro del contenedor
    start_video.innerHTML =      
                      "<iframe src='https://www.youtube-nocookie.com/embed/31Voz1H40zI?controls=0&amp;start=30&autoplay=1' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>"
}

video_conteiner.onclick = ()=>{
    video_conteiner.className ="hide"
    // vacio el iframe
    start_video.innerHTML = "<iframe> </iframe>"

}
