var img = 0;

<<<<<<< HEAD
    setTimeout(carousel, 1000000);
=======
function carousel() {
  if (img === 0) {
    $(".landing-page").css("background-image", "url(img/bg1.jpg)");
    img = 1;
  } else {
    $(".landing-page").css("background-image", "url(img/bg2.jpg)");
    img = 0;
  }

  setTimeout(carousel, 3000);
>>>>>>> origin/master
}

carousel();
