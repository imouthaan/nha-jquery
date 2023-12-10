const sprite = $('#sprite');
sprite.css('width', 100);
sprite.css('height', 100);
sprite.css('background-color', 'yellow');

$(document).on('keydown', function (event) {
    console.log(sprite.css('margin-left'));
    switch (event.key) {
        case 'ArrowUp':
            sprite.stop().animate({ marginTop: '-=10' }, 100);
            break;
        case 'ArrowDown':
            sprite.stop().animate({ marginTop: '+=10' }, 100);
            break;
        case 'ArrowLeft':
            sprite.stop().animate({ marginLeft: '-=10' }, 100);
            break;
        case 'ArrowRight':
            sprite.stop().animate({ marginLeft: '+=10' }, 100);
            break;
    }
});
