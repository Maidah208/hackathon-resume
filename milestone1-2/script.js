function toggleAdditionalSkills() {
    var additionalSkills = document.getElementById('additional-skills');
    // Check if additionalSkills exists and toggle display
    if (additionalSkills) {
        // If the display is set to none, make it block; otherwise, hide it
        additionalSkills.style.display = additionalSkills.style.display === 'none' ? 'block' : 'none';
    }
}
