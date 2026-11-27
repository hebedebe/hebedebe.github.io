const iosDisabled = true;
const iosFix = false;
const androidDisabled = true;
const androidFix = false;

function parallax(layer, path) {
    $('.parallax-window.layer'+layer).parallax(
        {
            imageSrc: path, 
            speed: layer*0.1, 
            androidDisabled: androidDisabled, 
            androidFix: androidFix, 
            iosDisabled: iosDisabled, 
            iosFix: iosFix
        }
    );
}
    

if (typeof screen.orientation !== 'undefined') { 
    //we are on desktop
    parallax(5, "old/Textures/parallax/city/5.webp")
    parallax(4, "old/Textures/parallax/city/4.webp")
    parallax(3, "old/Textures/parallax/city/3.webp")
    parallax(2, "old/Textures/parallax/city/2.webp")
    parallax(1, "old/Textures/parallax/city/1.webp")
    jQuery(window).trigger('resize').trigger('scroll');

} else { 
    //we are on mobile
    $('main').style.background = "auto";
}