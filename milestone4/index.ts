const form = document.getElementById('resumeForm') as HTMLFormElement
const resumeDisplayElement = document.getElementById('resumeDisplay') as HTMLDivElement

form.addEventListener('submit', (event: Event) => {
    event.preventDefault ()

    const name = (document.getElementById('name') as HTMLInputElement).value; 
    const email = (document.getElementById('email') as HTMLInputElement).value; 
    const phoneNumber = (document.getElementById('phoneNumber') as HTMLInputElement).value; 
    const about = (document.getElementById('about') as HTMLTextAreaElement).value; 
    const education = (document.getElementById('education') as HTMLTextAreaElement).value; 
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value; 
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;


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

    if(resumeDisplayElement){
        resumeDisplayElement.innerHTML = htmlResume
    }
}
)