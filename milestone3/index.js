var form = document.getElementById('resumeForm');
var resumeDisplayElement = document.getElementById('resumeDisplay');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phoneNumber = document.getElementById('phoneNumber').value;
    var about = document.getElementById('about').value;
    var education = document.getElementById('education').value;
    var skills = document.getElementById('skills').value;
    var experience = document.getElementById('experience').value;
    var htmlResume = "\n    <div class=\"generatedResume\">\n        <h2><b> Resume </b></h2>\n        <h3> Personal Information </h3>\n        <p><b> Name:</b> ".concat(name, " </p>\n        <p><b> Email:</b> ").concat(email, " </p>\n        <p><b> Phone Number:</b> ").concat(phoneNumber, " </p>\n\n        <div id=\"seperator\"></div>\n        <h3> About </h3>\n        <p>").concat(about, " </p>\n\n        <div id=\"seperator\"></div>\n        <h3> Education </h3>\n        <p>").concat(education, " </p>\n\n        <div id=\"seperator\"></div>\n        <h3> Skills </h3>\n        <p>").concat(skills, " </p>\n        \n        <div id=\"seperator\"></div>\n        <h3> Experience </h3>\n        <p>").concat(experience, " </p>\n    </div>");
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = htmlResume;
    }
});
