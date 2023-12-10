$(document).ready(() => {
    const hr = $ ('hr');
    // Prepend loop
    for (let i = 1; i <= 5; i++) {
        hr.before('prepended ' + i +'<br>');
    }
    // Append loop
    for (let i = 1; i <= 5; i++) {
        hr.after('appended ' + i +'<br>');
    }
});