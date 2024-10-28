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

function downloadResume(){
    window.print();
}

function editResume() {
    // Show the resume form container
    document.getElementById('resume-form-container')?.setAttribute('style', 'display: block');
    
    // Hide the resume template container
    document.getElementById('resume-template-container')?.setAttribute('style', 'display: none');
}

window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');
    if (name) {
        displayResume(name);  // Display the resume if the 'name' parameter is found
    } else {
        document.getElementById('resume-form-container')!.style.display = 'block';
        document.getElementById('resume-template-container')!.style.display = 'none';
    }
});

function shareResume(){
    const name = (document.getElementById('nameField') as HTMLInputElement).value;
    const contact = (document.getElementById('contactField') as HTMLInputElement).value;
    const email = (document.getElementById('emailField') as HTMLInputElement).value;
    const address = (document.getElementById('addressField') as HTMLInputElement).value;
    const objective = (document.getElementById('objectiveField') as HTMLTextAreaElement).value;
    const education = Array.from(document.getElementsByClassName('education-field') as HTMLCollectionOf<HTMLTextAreaElement>).map(field => field.value);
    const experience = Array.from(document.getElementsByClassName('experience-field') as HTMLCollectionOf<HTMLTextAreaElement>).map(field => field.value);
    const skills = Array.from(document.getElementsByClassName('skills-field') as HTMLCollectionOf<HTMLTextAreaElement>).map(field => field.value);

    const resumeData = { name, contact, email, address, objective, education, experience, skills };
    localStorage.setItem(`resume_${name}`, JSON.stringify(resumeData));

    const sharableURL = `${window.location.origin}${window.location.pathname}?name=${encodeURIComponent(name)}`;
    window.open(sharableURL, '_blank');
}

function displayResume(name: string){
    const formContainer = document.getElementById('resume-form-container') as HTMLElement;
    const resumeContainer = document.getElementById('resume-template-container') as HTMLElement;
    formContainer.style.display = 'none';
    resumeContainer.style.display = 'block';

    const resumeData = localStorage.getItem(`resume_${name}`);
    if (resumeData) {
        const parsedData = JSON.parse(resumeData);

        (document.getElementById('nameFieldTemplate') as HTMLElement).textContent = parsedData.name;
        (document.getElementById('addressFieldTemplate') as HTMLElement).textContent = parsedData.address;
        (document.getElementById('contactFieldTemplate') as HTMLElement).textContent = parsedData.contact;
        (document.getElementById('emailFieldTemplate') as HTMLElement).textContent = parsedData.email;
        (document.getElementById('objectiveFieldTemplate') as HTMLElement).textContent = parsedData.objective;

        const educationList = document.getElementById('education-field-template') as HTMLUListElement;
        educationList.innerHTML = '';
        parsedData.education.forEach((item: string) => {
            const li = document.createElement('li');
            li.textContent = item;
            educationList.appendChild(li);
        });

        const skillsList = document.getElementById('skills-field-template') as HTMLUListElement;
        skillsList.innerHTML = '';
        parsedData.skills.forEach((item: string) => {
            const li = document.createElement('li');
            li.textContent = item;
            skillsList.appendChild(li);
        });

        const experienceList = document.getElementById('experience-field-template') as HTMLUListElement;
        experienceList.innerHTML = '';
        parsedData.experience.forEach((item: string) => {
            const li = document.createElement('li');
            li.textContent = item;
            experienceList.appendChild(li);
        });
    }
}
