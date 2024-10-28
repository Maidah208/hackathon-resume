"use strict";
function addNewEducationField() {
    // creating new textarea element
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control', 'education-field');
    newNode.placeholder = 'Enter additional education here';
    // getting refrence of experineceContainer
    const education = document.getElementById('educationContainer');
    // Append the new textarea to the education section
    if (education) {
        education.appendChild(newNode);
    }
}
function deleteNewEducationField() {
    // Getting all experience fields
    const educationFields = document.querySelectorAll('#educationContainer .education-field');
    // Check if there are any experience fields to delete
    if (educationFields.length > 1) {
        // Remove the last experience field
        const lastField = educationFields[educationFields.length - 1];
        lastField.remove();
        console.log('Last experience field deleted');
    }
    else {
        console.log('No experience fields to delete');
    }
}
function addNewExperienceField() {
    // creating new textarea element
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control', 'experience-field');
    newNode.placeholder = 'Enter additional experience here';
    // getting refrence of experineceContainer
    const experience = document.getElementById('experienceContainer');
    // Append the new textarea to the experience section
    if (experience) {
        experience.appendChild(newNode);
        console.log('New experience field added');
    }
}
function deleteNewExperienceField() {
    // Getting all experience fields
    const experienceFields = document.querySelectorAll('#experienceContainer .experience-field');
    // Check if there are any experience fields to delete
    if (experienceFields.length > 1) {
        // Remove the last experience field
        const lastField = experienceFields[experienceFields.length - 1];
        lastField.remove();
        console.log('Last experience field deleted');
    }
    else {
        console.log('No experience fields to delete');
    }
}
function addNewSkillsField() {
    // creating new textarea element
    let newNode = document.createElement('textarea');
    newNode.classList.add('form-control', 'skills-field');
    newNode.placeholder = 'Enter additional experience here';
    // getting refrence of skillsContainer
    const skills = document.getElementById('skillsContainer');
    // Append the new textarea to the skills section
    if (skills) {
        skills.appendChild(newNode);
        console.log('New experience field added');
    }
}
function deleteNewSkillsField() {
    // Getting all experience fields
    const skillsFields = document.querySelectorAll('#skillsContainer .skills-field');
    // Check if there are any experience fields to delete
    if (skillsFields.length > 1) {
        // Remove the last experience field
        const lastField = skillsFields[skillsFields.length - 1];
        lastField.remove();
        console.log('Last experience field deleted');
    }
    else {
        console.log('No experience fields to delete');
    }
}
function generateResume(event) {
    var _a, _b;
    // Prevent form submission
    event.preventDefault();
    // Get values from input fields
    const name = document.getElementById('nameField').value;
    const contact = document.getElementById('contactField').value;
    const email = document.getElementById('emailField').value;
    const address = document.getElementById('addressField').value;
    const objective = document.getElementById('objectiveField').value;
    // Validate required fields
    if (!name || !contact || !email || !address || !objective) {
        alert("Please fill out all required fields.");
        return; // Stop further execution if validation fails
    }
    // Populate the resume template with user input
    document.getElementById('nameFieldTemplate').innerHTML = name;
    document.getElementById('contactFieldTemplate').innerHTML = contact;
    document.getElementById('emailFieldTemplate').innerHTML = email;
    document.getElementById('addressFieldTemplate').innerHTML = address;
    document.getElementById('objectiveFieldTemplate').innerHTML = objective;
    // Experience
    let experiences = document.getElementsByClassName('experience-field');
    let experience_str = '';
    for (let experience of Array.from(experiences)) {
        if (experience.value) {
            experience_str += `<li>${experience.value}</li>`;
        }
    }
    document.getElementById('experience-field-template').innerHTML = experience_str;
    // Education
    let educations = document.getElementsByClassName('education-field');
    let education_str = '';
    for (let education of Array.from(educations)) {
        if (education.value) {
            education_str += `<li>${education.value}</li>`;
        }
    }
    document.getElementById('education-field-template').innerHTML = education_str;
    // Skills
    let skills = document.getElementsByClassName('skills-field');
    let skills_str = '';
    for (let skill of Array.from(skills)) {
        if (skill.value) {
            skills_str += `<li>${skill.value}</li>`;
        }
    }
    document.getElementById('skills-field-template').innerHTML = skills_str;
    // Show the generated resume and hide the form
    (_a = document.getElementById('resume-form-container')) === null || _a === void 0 ? void 0 : _a.setAttribute('style', 'display: none');
    (_b = document.getElementById('resume-template-container')) === null || _b === void 0 ? void 0 : _b.setAttribute('style', 'display: block');
}
function downloadResume() {
    window.print();
}
function editResume() {
    var _a, _b;
    // Show the resume form container
    (_a = document.getElementById('resume-form-container')) === null || _a === void 0 ? void 0 : _a.setAttribute('style', 'display: block');
    // Hide the resume template container
    (_b = document.getElementById('resume-template-container')) === null || _b === void 0 ? void 0 : _b.setAttribute('style', 'display: none');
}
window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');
    if (name) {
        displayResume(name); // Display the resume if the 'name' parameter is found
    }
    else {
        document.getElementById('resume-form-container').style.display = 'block';
        document.getElementById('resume-template-container').style.display = 'none';
    }
});
function shareResume() {
    const name = document.getElementById('nameField').value;
    const contact = document.getElementById('contactField').value;
    const email = document.getElementById('emailField').value;
    const address = document.getElementById('addressField').value;
    const objective = document.getElementById('objectiveField').value;
    const education = Array.from(document.getElementsByClassName('education-field')).map(field => field.value);
    const experience = Array.from(document.getElementsByClassName('experience-field')).map(field => field.value);
    const skills = Array.from(document.getElementsByClassName('skills-field')).map(field => field.value);
    const resumeData = { name, contact, email, address, objective, education, experience, skills };
    localStorage.setItem(`resume_${name}`, JSON.stringify(resumeData));
    const sharableURL = `${window.location.origin}${window.location.pathname}?name=${encodeURIComponent(name)}`;
    window.open(sharableURL, '_blank');
}
function displayResume(name) {
    const formContainer = document.getElementById('resume-form-container');
    const resumeContainer = document.getElementById('resume-template-container');
    formContainer.style.display = 'none';
    resumeContainer.style.display = 'block';
    const resumeData = localStorage.getItem(`resume_${name}`);
    if (resumeData) {
        const parsedData = JSON.parse(resumeData);
        document.getElementById('nameFieldTemplate').textContent = parsedData.name;
        document.getElementById('addressFieldTemplate').textContent = parsedData.address;
        document.getElementById('contactFieldTemplate').textContent = parsedData.contact;
        document.getElementById('emailFieldTemplate').textContent = parsedData.email;
        document.getElementById('objectiveFieldTemplate').textContent = parsedData.objective;
        const educationList = document.getElementById('education-field-template');
        educationList.innerHTML = '';
        parsedData.education.forEach((item) => {
            const li = document.createElement('li');
            li.textContent = item;
            educationList.appendChild(li);
        });
        const skillsList = document.getElementById('skills-field-template');
        skillsList.innerHTML = '';
        parsedData.skills.forEach((item) => {
            const li = document.createElement('li');
            li.textContent = item;
            skillsList.appendChild(li);
        });
        const experienceList = document.getElementById('experience-field-template');
        experienceList.innerHTML = '';
        parsedData.experience.forEach((item) => {
            const li = document.createElement('li');
            li.textContent = item;
            experienceList.appendChild(li);
        });
    }
}
