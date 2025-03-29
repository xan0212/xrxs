document.addEventListener('DOMContentLoaded', () => {
    const transition = document.querySelector('.transition-screen');
    
    // Show main content immediately for testing
    setTimeout(() => {
        transition.style.opacity = '0';
        document.body.classList.add('loaded');
        
        setTimeout(() => {
            transition.remove();
        }, 1000);
    }, 1500);

    // Basic drag scroll
    const gallery = document.querySelector('.gallery');
    let isDown = false;
    let startX;
    let scrollLeft;

    gallery.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - gallery.offsetLeft;
        scrollLeft = gallery.scrollLeft;
    });

    gallery.addEventListener('mouseleave', () => isDown = false);
    gallery.addEventListener('mouseup', () => isDown = false);

    gallery.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - gallery.offsetLeft;
        const walk = (x - startX) * 2;
        gallery.scrollLeft = scrollLeft - walk;
    });
});