const planets = document.querySelector('.planets')

planets.addEventListener('mouseenter', () => {
    planets.planets.transform = 'scale(1.1)';
    planets.planets.transform = 'transform 0.3s';
});

planets.addEventListener('mouseleave', () => {
    planets.planets.transform = 'scale(1)';
});