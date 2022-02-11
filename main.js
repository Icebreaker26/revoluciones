var slideImg = document.getElementById('slideImg');

var images = new Array(
    "image1.jpg",
    "image2.jpeg",
    "image4.png",
    "image2.webp"
);

var len = images.length;
var i = 0;

function slider() {
    if (i > len - 1) {

        i = 0;
    }
    slideImg.src = images[i];
    i++;

    setTimeout("slider()", 3000);
};