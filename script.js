const glassBreakSound = new Audio('Sounds/glass_break.mp3');

document.addEventListener('click', function(e) {
        // Create the image element
        const img = document.createElement('img');
        img.src = 'Textures/brokenglass.png'; // Replace with your image URL
        img.className = 'spawned-image';

        // Position the image at the mouse coordinates
        // Adjust offsets (-25) to center the image on click
        var imgSize = 300;
        var halfSize = imgSize/2;
        img.style.left = (e.clientX - halfSize) + 'px';
        img.style.top = (e.clientY - halfSize/2-15) + 'px';

        document.body.appendChild(img);
        const sound = glassBreakSound.cloneNode();
        sound.play().catch(err => console.log(err));
    });