document.addEventListener('DOMContentLoaded', () => {
    const pages = document.querySelectorAll('.card-page');
    const startButton = document.getElementById('start-button');
    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');
    const navButtons = document.querySelector('.navigation-buttons');
    const music = document.getElementById('background-music');
    const musicControl = document.getElementById('music-control');
    let currentPageIndex = 0;

    const updateUI = () => {
        pages.forEach((page, index) => {
            page.classList.remove('active');
            if (index === currentPageIndex) {
                page.classList.add('active');
            }
        });

        // Show/hide navigation buttons
        if (currentPageIndex > 0) {
            navButtons.classList.add('active');
        } else {
            navButtons.classList.remove('active');
        }
    };

    const navigate = (direction) => {
        let newIndex = currentPageIndex + direction;
        if (newIndex >= 0 && newIndex < pages.length) {
            currentPageIndex = newIndex;
            updateUI();
        }
    };

    startButton.addEventListener('click', () => {
        navigate(1);
    });

    nextButton.addEventListener('click', () => {
        navigate(1);
    });

    prevButton.addEventListener('click', () => {
        navigate(-1);
    });

    musicControl.addEventListener('click', () => {
        if (music.paused) {
            music.play();
            musicControl.innerHTML = '🎶';
        } else {
            music.pause();
            musicControl.innerHTML = '🔇';
        }
    });

    // Ensure music plays only after user interaction
    document.body.addEventListener('click', () => {
        if (music.paused) {
            music.play().catch(e => console.log('Autoplay failed:', e));
        }
    }, { once: true });

    updateUI();
});