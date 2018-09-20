var firstMove;
window.onload = function() {
  // Scroll the window
  window.scrollTo(0, 30);
  // Stop anyone now scrolling the window
  window.addEventListener('touchstart', function (e) {
      firstMove = true;
      window.scrollTo(0, 30);
  });

  window.addEventListener('touchmove', function (e) {
      if (firstMove) {
          e.preventDefault();
          firstMove = false;
      }
      window.scrollTo(0, 30);
  });

}

// Stop anyone now scrolling the window
window.addEventListener('touchstart', function (e) {
    firstMove = true;
    window.scrollTo(0, 30);
});

window.addEventListener('touchmove', function (e) {
    if (firstMove) {
        e.preventDefault();
        firstMove = false;
    }
    window.scrollTo(0, 30);
});
