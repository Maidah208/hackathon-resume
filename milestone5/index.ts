// get refrences to the form and display area
const form = document.getElementById('resumeForm') as HTMLFormElement
const resumeDisplayElement = document.getElementById('resumeDisplay') as HTMLDivElement
const shareableLinkContainer = document.getElementById('shareableLinkContainer') as HTMLDivElement
const shareableLinkElement = document.getElementById('shareableLink') as HTMLAnchorElement
const downloadPDFButton = document.getElementById('downloadPDF') as HTMLButtonElement
const shareResumeButton = document.getElementById('shareResumeButton') as HTMLButtonElement

// Handle form submission
form.addEventListener('submit', (event: Event) => {
    event.preventDefault ()  // prevent page reload

    //collect input values
    const username = (document.getElementById('username') as HTMLInputElement).value; 
    const name = (document.getElementById('name') as HTMLInputElement).value; 
    const email = (document.getElementById('email') as HTMLInputElement).value; 
    const phoneNumber = (document.getElementById('phoneNumber') as HTMLInputElement).value; 
    const about = (document.getElementById('about') as HTMLTextAreaElement).value; 
    const education = (document.getElementById('education') as HTMLTextAreaElement).value; 
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value; 
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;

    //save data in localstorage with the username as the key
    const resumeData = {
        name,
        email,
        phoneNumber,
        about,
        education,
        skills,
        experience
    }
    localStorage.setItem(username, JSON.stringify(resumeData)) // saving the data locally

    //generate resume dynamically
    const htmlResume = `
    <div class="generatedResume">
        <h2><b> Editable Resume </b><h2>
        <h3> Personal Information </h3>
        <p><b> Name:</b> <span contenteditable="true">${name}</span></p>
        <p><b> Email:</b> <span contenteditable="true">${email}</span></p>
        <p><b> Phone Number:</b> <span contenteditable="true"> ${phoneNumber}</span> </p>

        <div id="seperator"></div>
        <h3> About </h3>
        <p contenteditable="true">${about} </p>

        <div id="seperator"></div>
        <h3> Education </h3>
        <p contenteditable="true">${education} </p>

        <div id="seperator"></div>
        <h3> Skills </h3>
        <p contenteditable="true">${skills} </p>
        
        <div id="seperator"></div>
        <h3> Experience </h3>
        <p contenteditable="true">${experience} </p>
    </div>`

    //Display the generated resume
    resumeDisplayElement.innerHTML =htmlResume
    
    //generate a shareable URL with the usernameonly
    const sharableURL = `${window.location.origin}?username=${encodeURIComponent(username)}`

    //Display the shareable link
    shareableLinkContainer.style.display = 'block'
    shareableLinkElement.href = sharableURL
    shareableLinkElement.textContent = sharableURL
});

//Handle PDF download button
downloadPDFButton.addEventListener('click', () => {
    window.print();
});

// Handle Share Resume button click
shareResumeButton.addEventListener('click', () => {
    shareableLinkElement.click(); // Simulate a click on the hidden link
});

//prefill the form based on the username in the uRL
window.addEventListener('DOMContentLoaded', () =>{
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('username');

    if(username) {
        //autofill form if data is found in local storage
        const savedResumeData = localStorage.getItem(username);

        if (savedResumeData) {
            const resumeData = JSON.parse(savedResumeData);
            (document.getElementById('username') as HTMLInputElement).value = username;
            (document.getElementById('name') as HTMLInputElement).value = resumeData.name;
            (document.getElementById('email') as HTMLInputElement).value = 
            resumeData.email;
            (document.getElementById('phoneNumber') as HTMLInputElement).value = resumeData.phoneNumber;
            (document.getElementById('about') as HTMLTextAreaElement).value = resumeData.about;
            (document.getElementById('education') as HTMLTextAreaElement).value = resumeData.education;
            (document.getElementById('skills') as HTMLTextAreaElement).value = resumeData.skills;
            (document.getElementById('experience') as HTMLTextAreaElement).value = resumeData.experience;
        }
    }
});