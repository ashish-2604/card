document.addEventListener('DOMContentLoaded', () => {
    const pages = document.querySelectorAll('.card-page');
    const music = document.getElementById('background-music');
    const musicControl = document.getElementById('music-control');
    let currentPageIndex = 0;

    const navigateToNextPage = () => {
        if (currentPageIndex < pages.length - 1) {
            pages[currentPageIndex].classList.remove('active');
            currentPageIndex++;
            pages[currentPageIndex].classList.add('active');
        }
    };

    // Auto-advance pages
    setTimeout(() => {
        navigateToNextPage();
        setTimeout(() => {
            navigateToNextPage();
            setTimeout(() => {
                navigateToNextPage();
            }, 6000); // 6 seconds for family details
        }, 8000); // 8 seconds for event details
    }, 4000); // 4 seconds for intro

    // Music control
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
});
