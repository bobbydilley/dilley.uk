window.onload = function() {
  window.scrollBy(0, 30);
}

var firstMove;

window.addEventListener('touchstart', function (e) {
    firstMove = true;
});

window.addEventListener('touchmove', function (e) {
    if (firstMove) {
        e.preventDefault();

        firstMove = false;
    }
});
