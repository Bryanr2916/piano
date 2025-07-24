const keys = document.querySelectorAll(".tecla");

keys.forEach(key => {
    key.addEventListener("click", ($event) => playNote(key, $event));
});

function playNote(key, $event) {
    $event.stopPropagation();
    const noteAudio = document.getElementById(key.dataset.note);
    noteAudio.currentTime = 0;
    noteAudio.play();
    key.classList.add("active");
    
    setInterval(() => {
        key.classList.remove("active");
    }, 500);
}