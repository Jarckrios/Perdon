document.getElementById('yesButton').addEventListener('click', function() {
    var container = document.querySelector('.container');
    container.innerHTML = `
        <h1>¿Quieres ser mi novia?</h1>
        <div class="buttons">
            <button id="yesNewButton">Sí</button>
            <button id="noNewButton">No</button>
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
