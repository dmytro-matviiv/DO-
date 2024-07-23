document.getElementById('yesBtn').addEventListener('click', function() {
    alert('Я тебе люблю!');
});

document.getElementById('noBtn').addEventListener('click', function() {
    let button = document.getElementById('noBtn');
    let randomX = Math.random() * (window.innerWidth - button.clientWidth);
    let randomY = Math.random() * (window.innerHeight - button.clientHeight);
    
    button.style.position = 'absolute';
    button.style.left = randomX + 'px';
    button.style.top = randomY + 'px';
});
