var img = 0;

function carousel() {
  if (img === 0) {
    $(".landing-page").css("background-image", "url(img/bg1.jpg)");
    img = 1;
  } else if (img == 1) {
    $(".landing-page").css("background-image", "url(img/bg2.jpg)");
    img = 2;
  } else if (img == 2) {
    $(".landing-page").css("background-image", "url(img/bg3.jpg)");
    img = 0;
  }

  setTimeout(carousel, 15000);
}

carousel();
