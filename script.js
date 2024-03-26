window.addEventListener('scroll', () => {
    document.querySelectorAll('.portfolio-item').forEach(item => {
        const itemPosition = item.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;

        if (itemPosition < viewportHeight - 100) {
            item.classList.add('visible');
        }
    });
});