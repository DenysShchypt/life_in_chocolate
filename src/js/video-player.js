const play = window.addEventListener('DOMContentLoaded', function () {
    const video = document.querySelector(".video");
    video.addEventListener("click", function () {
        if (video.classList.contains("ready")) {
            return
        };

        video.classList.add("ready"); 
        video.innerHTML = '<iframe class="how-made-video" src="https://www.youtube.com/embed/xPe1jMuX32s" style="border: none" allowfullscreen title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"> </iframe>' 

    })
    
})