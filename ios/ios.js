var firstMove;
window.onload = function() {
  // Scroll the window
  window.scrollTo(0, 30);
  // Stop anyone now scrolling the window
  window.addEventListener('touchstart', function (e) {
    e.preventDefault();
      firstMove = true;
      window.scrollTo(0, 30);
  });

  window.addEventListener('touchmove', function (e) {
    e.preventDefault();
      if (firstMove) {
          e.preventDefault();
          firstMove = false;
      }
      window.scrollTo(0, 30);
  });

}

// Stop anyone now scrolling the window
window.addEventListener('touchstart', function (e) {
  e.preventDefault();
    firstMove = true;
    window.scrollTo(0, 30);
});

window.addEventListener('touchmove', function (e) {
  e.preventDefault();
    if (firstMove) {
        e.preventDefault();
        firstMove = false;
    }
    window.scrollTo(0, 30);
});
