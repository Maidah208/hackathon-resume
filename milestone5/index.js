// get refrences to the form and display area
var form = document.getElementById('resumeForm');
var resumeDisplayElement = document.getElementById('resumeDisplay');
var shareableLinkContainer = document.getElementById('shareableLinkContainer');
var shareableLinkElement = document.getElementById('shareableLink');
var downloadPDFButton = document.getElementById('downloadPDF');
var shareResumeButton = document.getElementById('shareResumeButton');
// Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // prevent page reload
    //collect input values
    var username = document.getElementById('username').value;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phoneNumber = document.getElementById('phoneNumber').value;
    var about = document.getElementById('about').value;
    var education = document.getElementById('education').value;
    var skills = document.getElementById('skills').value;
    var experience = document.getElementById('experience').value;
    //save data in localstorage with the username as the key
    var resumeData = {
        name: name,
        email: email,
        phoneNumber: phoneNumber,
        about: about,
        education: education,
        skills: skills,
        experience: experience
    };
    localStorage.setItem(username, JSON.stringify(resumeData)); // saving the data locally
    //generate resume dynamically
    var htmlResume = "\n    <div class=\"generatedResume\">\n        <h2><b> Editable Resume </b><h2>\n        <h3> Personal Information </h3>\n        <p><b> Name:</b> <span contenteditable=\"true\">".concat(name, "</span></p>\n        <p><b> Email:</b> <span contenteditable=\"true\">").concat(email, "</span></p>\n        <p><b> Phone Number:</b> <span contenteditable=\"true\"> ").concat(phoneNumber, "</span> </p>\n\n        <div id=\"seperator\"></div>\n        <h3> About </h3>\n        <p contenteditable=\"true\">").concat(about, " </p>\n\n        <div id=\"seperator\"></div>\n        <h3> Education </h3>\n        <p contenteditable=\"true\">").concat(education, " </p>\n\n        <div id=\"seperator\"></div>\n        <h3> Skills </h3>\n        <p contenteditable=\"true\">").concat(skills, " </p>\n        \n        <div id=\"seperator\"></div>\n        <h3> Experience </h3>\n        <p contenteditable=\"true\">").concat(experience, " </p>\n    </div>");
    //Display the generated resume
    resumeDisplayElement.innerHTML = htmlResume;
    //generate a shareable URL with the usernameonly
    var sharableURL = "".concat(window.location.origin, "?username=").concat(encodeURIComponent(username));
    //Display the shareable link
    shareableLinkContainer.style.display = 'block';
    shareableLinkElement.href = sharableURL;
    shareableLinkElement.textContent = sharableURL;
});
//Handle PDF download button
downloadPDFButton.addEventListener('click', function () {
    window.print();
});
// Handle Share Resume button click
shareResumeButton.addEventListener('click', function () {
    shareableLinkElement.click(); // Simulate a click on the hidden link
});
//prefill the form based on the username in the uRL
window.addEventListener('DOMContentLoaded', function () {
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get('username');
    if (username) {
        //autofill form if data is found in local storage
        var savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
            var resumeData = JSON.parse(savedResumeData);
            document.getElementById('username').value = username;
            document.getElementById('name').value = resumeData.name;
            document.getElementById('email').value =
                resumeData.email;
            document.getElementById('phoneNumber').value = resumeData.phoneNumber;
            document.getElementById('about').value = resumeData.about;
            document.getElementById('education').value = resumeData.education;
            document.getElementById('skills').value = resumeData.skills;
            document.getElementById('experience').value = resumeData.experience;
        }
    }
});
