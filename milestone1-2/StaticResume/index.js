var toggleButton = document.getElementById('toggle-button');
var skills = document.getElementById('additional-skills');
toggleButton.addEventListener('click', function () {
    if (skills.style.display === 'none') {
        skills.style.display = 'block';
    }
    else {
        skills.style.display = 'none';
    }
});
