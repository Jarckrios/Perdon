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

function updateApologyMessage() {
    if (currentPhrase < phrases.length) {
        document.getElementById('apologyMessage').textContent = phrases[currentPhrase];
        currentPhrase++;
        yesButton.style.transform = `scale(${1 + currentPhrase * 0.1})`;
    }
}

noButton.addEventListener('click', function() {
    updateApologyMessage();
});

noButton.addEventListener('mouseover', function() {
    var randomX = Math.floor(Math.random() * (window.innerWidth - noButton.clientWidth));
    var randomY = Math.floor(Math.random() * (window.innerHeight - noButton.clientHeight));
    noButton.style.position = 'absolute';
    noButton.style.left = randomX + 'px';
    noButton.style.top = randomY + 'px';
});

noButton.addEventListener('click', function(event) {
    event.preventDefault();
});

yesButton.addEventListener('click', function() {
    var container = document.querySelector('.container');
    container.innerHTML = `
        <h1>¿Quieres ser mi novia?</h1>
        <div class="buttons">
            <button id="yesNewButton" class="yes">Sí</button>
            <button id="noNewButton" class="no">No</button>
        </div>
        <div id="newMessage"></div>
    `;

    var yesNewButton = document.getElementById('yesNewButton');
    var noNewButton = document.getElementById('noNewButton');
    var newMessageDiv = document.getElementById('newMessage');

    yesNewButton.addEventListener('click', function() {
        newMessageDiv.innerHTML = "&#128150; &#128150; &#128150; ¡Te amo! &#128150; &#128150; &#128150;";
        newMessageDiv.classList.add('hearts');
    });

    noNewButton.addEventListener('mouseover', function() {
        var randomX = Math.floor(Math.random() * (window.innerWidth - noNewButton.clientWidth));
        var randomY = Math.floor(Math.random() * (window.innerHeight - noNewButton.clientHeight));
        noNewButton.style.position = 'absolute';
        noNewButton.style.left = randomX + 'px';
        noNewButton.style.top = randomY + 'px';
    });

    noNewButton.addEventListener('click', function(event) {
        event.preventDefault();
    });
});
