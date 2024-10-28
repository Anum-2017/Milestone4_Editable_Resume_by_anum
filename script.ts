document.getElementById("resumeForm")
?.addEventListener("submit", function (event) {
    event.preventDefault();

    const nameEle = document.getElementById("name") as HTMLInputElement;
    const emailEle = document.getElementById("email") as HTMLInputElement;
    const contactNoEle = document.getElementById("contactNo") as HTMLInputElement;
    const educationEle = document.getElementById("education") as HTMLTextAreaElement;
    const experienceEle = document.getElementById("experience") as HTMLTextAreaElement;
    const skillInputEle = document.getElementById("skill") as HTMLInputElement;
    const skillsListEle = document.getElementById("skills-list") as HTMLUListElement;

    if (
        nameEle && emailEle && contactNoEle &&
        educationEle && experienceEle && skillInputEle && skillsListEle
    ) {
        const name = nameEle.value;
        const email = emailEle.value;
        const contactNo = contactNoEle.value;
        const education = educationEle.value;
        const experience = experienceEle.value;

        // Collect skills from the list
        let skills = '';
        if (skillsListEle.children.length > 0) {
            skills = Array.from(skillsListEle.children).map(skill => skill.textContent).join(', ');
        }

        const resumeOutput = `
            <h1>Resume</h1>
            <h3>Personal Information:</h3>
            <p><b>Name:</b> <span id="nameOutput">${name}</span></p>
            <p><b>Email:</b> <span id="emailOutput">${email}</span></p>
            <p><b>Contact No:</b> <span id="contactNoOutput">${contactNo}</span></p>
            <h3>Education:</h3>
            <p id="educationOutput">${education}</p>
            <h3>Experience:</h3>
            <p id="experienceOutput">${experience}</p>
            <h3>Skills:</h3>
            <p id="skillsOutput">${skills}</p>
            <div class="button-container">
                <button id="editButton">Edit</button>
                <button id="saveButton">Save</button>
            </div>
        `;

        const outputElement = document.getElementById("resumeOutput");
        if (outputElement) {
            outputElement.innerHTML = resumeOutput;

            const editButton = document.getElementById("editButton");
            const saveButton = document.getElementById("saveButton");

            // Enable editing when the Edit button is clicked
            if (editButton) {
                editButton.addEventListener("click", function () {
                    const editableFields = [
                        "nameOutput",
                        "emailOutput",
                        "contactNoOutput",
                        "educationOutput",
                        "experienceOutput",
                        "skillsOutput"
                    ];
                    editableFields.forEach(id => {
                        const field = document.getElementById(id);
                        if (field) {
                            field.setAttribute("contenteditable", "true");
                        }
                    });
                });
            }

            // Save changes when the Save button is clicked
            if (saveButton) {
                saveButton.addEventListener("click", function () {
                    const nameOutput = document.getElementById("nameOutput")?.innerText;
                    const emailOutput = document.getElementById("emailOutput")?.innerText;
                    const contactNoOutput = document.getElementById("contactNoOutput")?.innerText;
                    const educationOutput = document.getElementById("educationOutput")?.innerText;
                    const experienceOutput = document.getElementById("experienceOutput")?.innerText;
                    const skillsOutput = document.getElementById("skillsOutput")?.innerText;

                    // Update original form fields
                    if (nameEle && nameOutput) nameEle.value = nameOutput;
                    if (emailEle && emailOutput) emailEle.value = emailOutput;
                    if (contactNoEle && contactNoOutput) contactNoEle.value = contactNoOutput;
                    if (educationEle && educationOutput) educationEle.value = educationOutput;
                    if (experienceEle && experienceOutput) experienceEle.value = experienceOutput;

                    // Make fields non-editable again
                    const editableFields = [
                        "nameOutput",
                        "emailOutput",
                        "contactNoOutput",
                        "educationOutput",
                        "experienceOutput",
                        "skillsOutput"
                    ];
                    editableFields.forEach(id => {
                        const field = document.getElementById(id);
                        if (field) {
                            field.removeAttribute("contenteditable");
                        }
                    });
                });
            }
        } else {
            console.error("Unable to display the resume. The output element is missing.");
        }
    } else {
        console.error("Error: Please fill out all the required fields.");
    }
});

// Add skill functionality
document.getElementById("add-skill")?.addEventListener("click", function () {
const skillInput = document.getElementById("skill") as HTMLInputElement;
const skillsList = document.getElementById("skills-list") as HTMLUListElement;

if (skillInput.value) {
    const listItem = document.createElement("li");
    listItem.textContent = skillInput.value;
    skillsList.appendChild(listItem);
    skillInput.value = ""; // Clear the input
}
});
