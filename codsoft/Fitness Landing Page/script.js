document.addEventListener("DOMContentLoaded", function() {
    const scrollContainer = document.querySelector('.scroll-container');
    const scrollContent = document.querySelector('.scroll-content');
    const clones = scrollContent.cloneNode(true);
    
    scrollContainer.appendChild(clones);

    function startScrolling() {
        scrollContent.style.animation = 'scroll 20s linear infinite';
        clones.style.animation = 'scroll 20s linear infinite';
    }

    function stopScrolling() {
        scrollContent.style.animation = 'none';
        clones.style.animation = 'none';
    }

    scrollContainer.addEventListener('mouseover', stopScrolling);
    scrollContainer.addEventListener('mouseout', startScrolling);

    startScrolling();
});
