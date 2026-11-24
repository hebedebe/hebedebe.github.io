
// Force gif to refresh on page reload
const img = document.querySelector('.main img');
if (img) {
    const timestamp = new Date().getTime();
    img.src = img.src.split('?')[0] + '?t=' + timestamp;
}


// Glass break effect
const glassBreakSound = new Audio('Sounds/glass_break.mp3');
document.addEventListener('click', function(e) {
        const img = document.createElement('img');
        img.src = 'Textures/brokenglass.png';
        img.className = 'spawned-image';

        var imgSize = 300;
        var halfSize = imgSize/2;
        img.style.left = (e.clientX - halfSize) + 'px';
        img.style.top = (e.clientY - halfSize/2-15) + 'px';

        document.body.appendChild(img);
        const sound = glassBreakSound.cloneNode();
        sound.play().catch(err => console.log(err));

        setTimeout(() => {
            img.remove();
        }, 3000);
    });