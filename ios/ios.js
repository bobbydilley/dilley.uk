var firstMove;
window.onload = function() {
  // Scroll the window
  window.scrollBy(0, 30);

  // Stop anyone now scrolling the window
  window.addEventListener('touchstart', function (e) {
      firstMove = true;
  });

  window.addEventListener('touchmove', function (e) {
      if (firstMove) {
          e.preventDefault();

          firstMove = false;
      }
  });
}
