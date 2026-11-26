const iosDisabled = false;
const iosFix = false;
const androidDisabled = false;
const androidFix = false;

$('.parallax-window.layer5').parallax({imageSrc: 'old/Textures/parallax/city/5.webp', speed: 0.5, 
    'androidDisabled': androidDisabled, 'androidFix': androidFix, 'iosDisabled': iosDisabled, 'iosFix':iosFix});

$('.parallax-window.layer4').parallax({imageSrc: 'old/Textures/parallax/city/4.webp', speed: 0.4, 
    'androidDisabled': androidDisabled, 'androidFix': androidFix, 'iosDisabled': iosDisabled, 'iosFix':iosFix});

$('.parallax-window.layer3').parallax({imageSrc: 'old/Textures/parallax/city/3.webp', speed: 0.3, 
    'androidDisabled': androidDisabled, 'androidFix': androidFix, 'iosDisabled': iosDisabled, 'iosFix':iosFix});

$('.parallax-window.layer2').parallax({imageSrc: 'old/Textures/parallax/city/2.webp', speed: 0.2, 
    'androidDisabled': androidDisabled, 'androidFix': androidFix, 'iosDisabled': iosDisabled, 'iosFix':iosFix});

$('.parallax-window.layer1').parallax({imageSrc: 'old/Textures/parallax/city/1.webp', speed: 0.1, 
    'androidDisabled': androidDisabled, 'androidFix': androidFix, 'iosDisabled': iosDisabled, 'iosFix':iosFix});



jQuery(window).trigger('resize').trigger('scroll');