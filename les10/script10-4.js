// 1. klik op thumbnail afvangen
$('#strip').on('click', 'img', function (e) {
    // 2. bron van nieuwe afbeelding alvast opslaan in variabele.
    const source = $(this).attr('src');
    const caption = $(this).attr('title');

    // 3. grote afbeelding uitfaden
    $('#container img').fadeOut('fast', function () {
        // 4. na uitfaden de src verwisselen en nieuwe afbeelding infaden.
        $(this).attr('src', source).fadeIn('fast');
        $('#caption').text(caption);
    });
});
