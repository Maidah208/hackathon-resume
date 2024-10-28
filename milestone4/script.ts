function addNewEducationField(){
    // creating new textarea element
    let newNode = document.createElement('textarea')
    newNode.classList.add('form-control', 'education-field')
    newNode.placeholder = 'Enter additional education here';

    // getting refrence of experineceContainer
    const education = document.getElementById('educationContainer')

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
    } else {
        console.log('No experience fields to delete');
    }
}

function addNewExperienceField(){
    // creating new textarea element
    let newNode = document.createElement('textarea')
    newNode.classList.add('form-control', 'experience-field')
    newNode.placeholder = 'Enter additional experience here';

    // getting refrence of experineceContainer
    const experience = document.getElementById('experienceContainer')

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
    } else {
        console.log('No experience fields to delete');
    }
}

function addNewSkillsField(){
    // creating new textarea element
    let newNode = document.createElement('textarea')
    newNode.classList.add('form-control', 'skills-field')
    newNode.placeholder = 'Enter additional experience here';

    // getting refrence of skillsContainer
    const skills = document.getElementById('skillsContainer')

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
    } else {
        console.log('No experience fields to delete');
    }
}

function generateResume(event: Event) {
    // Prevent form submission
    event.preventDefault();

    // Get values from input fields
    const name = (document.getElementById('nameField') as HTMLInputElement).value;
    const contact = (document.getElementById('contactField') as HTMLInputElement).value;
    const email = (document.getElementById('emailField') as HTMLInputElement).value;
    const address = (document.getElementById('addressField') as HTMLInputElement).value;
    const objective = (document.getElementById('objectiveField') as HTMLInputElement).value;

    // Validate required fields
    if (!name || !contact || !email || !address || !objective) {
        alert("Please fill out all required fields.");
        return; // Stop further execution if validation fails
    }

    // Populate the resume template with user input
    (document.getElementById('nameFieldTemplate') as HTMLElement).innerHTML = name;
    (document.getElementById('contactFieldTemplate') as HTMLElement).innerHTML = contact;
    (document.getElementById('emailFieldTemplate') as HTMLElement).innerHTML = email;
    (document.getElementById('addressFieldTemplate') as HTMLElement).innerHTML = address;
    (document.getElementById('objectiveFieldTemplate') as HTMLElement).innerHTML = objective;

    // Experience
    let experiences = document.getElementsByClassName('experience-field') as HTMLCollectionOf<HTMLInputElement>;
    let experience_str = '';
    for (let experience of Array.from(experiences)) {
        if (experience.value) {
            experience_str += `<li>${experience.value}</li>`;
        }
    }
    (document.getElementById('experience-field-template') as HTMLElement).innerHTML = experience_str;

    // Education
    let educations = document.getElementsByClassName('education-field') as HTMLCollectionOf<HTMLInputElement>;
    let education_str = '';
    for (let education of Array.from(educations)) {
        if (education.value) {
            education_str += `<li>${education.value}</li>`;
        }
    }
    (document.getElementById('education-field-template') as HTMLElement).innerHTML = education_str;

    // Skills
    let skills = document.getElementsByClassName('skills-field') as HTMLCollectionOf<HTMLInputElement>;
    let skills_str = '';
    for (let skill of Array.from(skills)) {
        if (skill.value) {
            skills_str += `<li>${skill.value}</li>`;
        }
    }
    (document.getElementById('skills-field-template') as HTMLElement).innerHTML = skills_str;

    // Show the generated resume and hide the form
    document.getElementById('resume-form-container')?.setAttribute('style', 'display: none');
    document.getElementById('resume-template-container')?.setAttribute('style', 'display: block');
}


function editResume() {
    // Show the resume form container
    document.getElementById('resume-form-container')?.setAttribute('style', 'display: block');
    
    // Hide the resume template container
    document.getElementById('resume-template-container')?.setAttribute('style', 'display: none');
}
