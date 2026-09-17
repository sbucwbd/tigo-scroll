const scenes = document.querySelectorAll(".scene");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            const scene = entry.target;
            const video = scene.querySelector(".scene-video");

            if (entry.isIntersecting) {

                scene.classList.add("show");

                if (video) {
                    video.play();
                }

            } else {

                if (video) {
                    video.pause();
                }

            }

        });

    },
    {
        threshold: 0.4
    }
);

scenes.forEach((scene) => {
    observer.observe(scene);
});