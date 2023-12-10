document.getElementById('random').addEventListener('click', function displayNumber() {
    document.getElementById('demo').innerHTML = Math.floor(Math.random() * 100);
});
