document.addEventListener('DOMContentLoaded', function () {
    const playPauseButton = document.getElementById('play-pause');
    let isPlaying = false;

    playPauseButton.addEventListener('click', function () {
        if (isPlaying) {
            playPauseButton.innerHTML = '<i class="ri-play-fill"></i>';
            // Pausar a música
        } else {
            playPauseButton.innerHTML = '<i class="ri-pause-fill"></i>';
            // Tocar a música
        }
        isPlaying = !isPlaying;
    });

    const progressBar = document.getElementById('progress-bar');
    progressBar.addEventListener('input', function () {
        // Atualizar o tempo da música conforme o progresso
    });

    document.getElementById('prev').addEventListener('click', function () {
        //anterior
    });

    document.getElementById('next').addEventListener('click', function () {
        //próxima
    });

    document.getElementById('like').addEventListener('click', function () {
        // like
    });
});
