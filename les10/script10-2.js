const button = $('#stopanimatie');
const arrowLeft = $('#arrow_left');

button.on('click', function () {
    // stop animatie
    arrowLeft.finish();
});

// rotate arrow clockwise
arrowLeft.animate(
    { deg: 360 },
    {
        duration: 5000,
        step: function (now) {
            // in the step-callback (that is fired each step of the animation),
            // you can use the `now` parameter which contains the current
            // animation-position (`0` up to `angle`)
            arrowLeft.css({
                transform: 'rotate(' + now + 'deg)'
            });
        },
        complete: function () {
            alert('animatie gereed');
        },
    }
);