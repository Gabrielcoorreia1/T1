const navIcon = document.querySelector('#nav-button i');


document.getElementById('nav-button').addEventListener('click', function() {
    document.querySelector('.nav-bar').classList.toggle('open');
    navIcon.classList.toggle('fa-bars');
    navIcon.classList.toggle('fa-x');
});

