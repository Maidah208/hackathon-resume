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
    var htmlResume = "\n    <div class=\"generatedResume\">\n        <h2><b> Editable Resume </b><h2>\n        <h3> Personal Information </h3>\n        <p><b> Name:</b> <span contenteditable=\"true\">".concat(name, "</span></p>\n        <p><b> Email:</b> <span contenteditable=\"true\">").concat(email, "</span></p>\n        <p><b> Phone Number:</b> <span contenteditable=\"true\"> ").concat(phoneNumber, "</span> </p>\n\n        <div id=\"seperator\"></div>\n        <h3> About </h3>\n        <p contenteditable=\"true\">").concat(about, " </p>\n\n        <div id=\"seperator\"></div>\n        <h3> Education </h3>\n        <p contenteditable=\"true\">").concat(education, " </p>\n\n        <div id=\"seperator\"></div>\n        <h3> Skills </h3>\n        <p contenteditable=\"true\">").concat(skills, " </p>\n        \n        <div id=\"seperator\"></div>\n        <h3> Experience </h3>\n        <p contenteditable=\"true\">").concat(experience, " </p>\n    </div>");
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = htmlResume;
    }
});
