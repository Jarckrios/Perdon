
document.getElementById('yesButton').addEventListener('click', function() {
    var messageDiv = document.getElementById('message');
    messageDiv.textContent = "¡Te amo y discúlpame por todo!";
});

document.getElementById('noButton').addEventListener('mouseover', function() {
    var button = document.getElementById('noButton');
    var randomX = Math.floor(Math.random() * (window.innerWidth - button.clientWidth));
    var randomY = Math.floor(Math.random() * (window.innerHeight - button.clientHeight));
    button.style.position = 'absolute';
    button.style.left = randomX + 'px';
    button.style.top = randomY + 'px';
});

document.getElementById('noButton').addEventListener('click', function(event) {
    event.preventDefault();
});
