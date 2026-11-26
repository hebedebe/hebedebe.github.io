const iosDisabled = false;
const androidDisabled = false;

$('.parallax-window.layer5').parallax({imageSrc: 'old/Textures/parallax/city/5.webp', speed: 0.5, 'androidDisabled': androidDisabled, 'iosDisabled': iosDisabled});
$('.parallax-window.layer4').parallax({imageSrc: 'old/Textures/parallax/city/4.webp', speed: 0.4, 'androidDisabled': androidDisabled, 'iosDisabled': iosDisabled});
$('.parallax-window.layer3').parallax({imageSrc: 'old/Textures/parallax/city/3.webp', speed: 0.3, 'androidDisabled': androidDisabled, 'iosDisabled': iosDisabled});
$('.parallax-window.layer2').parallax({imageSrc: 'old/Textures/parallax/city/2.webp', speed: 0.2, 'androidDisabled': androidDisabled, 'iosDisabled': iosDisabled});
$('.parallax-window.layer1').parallax({imageSrc: 'old/Textures/parallax/city/1.webp', speed: 0.1, 'androidDisabled': androidDisabled, 'iosDisabled': iosDisabled});


jQuery(window).trigger('resize').trigger('scroll');