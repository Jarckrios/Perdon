var phrases = [
    "¿Estás segura?",
    "¿Estás completamente segura?",
    "Pero segura, segura",
    "Por favor",
    "Por favor, por favor",
    "Ándale, perdóname",
    "¡Ya perdóname!",
    "No puede decir que no",
    "Si dices que no eres enana",
    "Enana, enana",
    "Enana, enana, enana"
];
var currentPhrase = 0;
var yesButton = document.getElementById('yesButton');
var noButton = document.getElementById('noButton');

document.getElementById('yesButton').addEventListener('click', function() {
    var container = document.querySelector('.container');
    container.innerHTML = `
        <h1>¿Quieres ser mi novia?</h1>
        <div class="buttons">
            <button id="yesNewButton" class="yes">Sí</button>
            <button id="noNewButton" class="no">No</button>
        </div>
        <div id="newMessage"></div>
    `;

    document.getElementById('yesNewButton').addEventListener('click', function() {
        var newMessageDiv = document.getElementById('newMessage');
        newMessageDiv.innerHTML = "&#128150; &#128150; &#128150; ¡Te amo! &#128150; &#128150; &#128150;";
        newMessageDiv.classList.add('hearts');
    });

    document.getElementById('noNewButton').addEventListener('mouseover', function() {
        var button = document.getElementById('noNewButton');
        var randomX = Math.floor(Math.random() * (window.innerWidth - button.clientWidth));
        var randomY = Math.floor(Math.random() * (window.innerHeight - button.clientHeight));
        button.style.position = 'absolute';
        button.style.left = randomX + 'px';
        button.style.top = randomY + 'px';
    });

    document.getElementById('noNewButton').addEventListener('click', function(event) {
        event.preventDefault();
    });
});

document.getElementById('noButton').addEventListener('click', function() {
    if (currentPhrase < phrases.length) {
        document.getElementById('apologyMessage').textContent = phrases[currentPhrase];
        currentPhrase++;
        yesButton.style.transform = `scale(${1 + currentPhrase * 0.1})`;
    }
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
