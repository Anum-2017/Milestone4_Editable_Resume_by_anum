var _a, _b;
(_a = document.getElementById("resumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    event.preventDefault();
    var nameEle = document.getElementById("name");
    var emailEle = document.getElementById("email");
    var contactNoEle = document.getElementById("contactNo");
    var educationEle = document.getElementById("education");
    var experienceEle = document.getElementById("experience");
    var skillInputEle = document.getElementById("skill");
    var skillsListEle = document.getElementById("skills-list");
    if (nameEle && emailEle && contactNoEle &&
        educationEle && experienceEle && skillInputEle && skillsListEle) {
        var name_1 = nameEle.value;
        var email = emailEle.value;
        var contactNo = contactNoEle.value;
        var education = educationEle.value;
        var experience = experienceEle.value;
        // Collect skills from the list
        var skills = '';
        if (skillsListEle.children.length > 0) {
            skills = Array.from(skillsListEle.children).map(function (skill) { return skill.textContent; }).join(', ');
        }
        var resumeOutput = "\n            <h1>Resume</h1>\n            <h3>Personal Information:</h3>\n            <p><b>Name:</b> <span id=\"nameOutput\">".concat(name_1, "</span></p>\n            <p><b>Email:</b> <span id=\"emailOutput\">").concat(email, "</span></p>\n            <p><b>Contact No:</b> <span id=\"contactNoOutput\">").concat(contactNo, "</span></p>\n            <h3>Education:</h3>\n            <p id=\"educationOutput\">").concat(education, "</p>\n            <h3>Experience:</h3>\n            <p id=\"experienceOutput\">").concat(experience, "</p>\n            <h3>Skills:</h3>\n            <p id=\"skillsOutput\">").concat(skills, "</p>\n            <div class=\"button-container\">\n                <button id=\"editButton\">Edit</button>\n                <button id=\"saveButton\">Save</button>\n            </div>\n        ");
        var outputElement = document.getElementById("resumeOutput");
        if (outputElement) {
            outputElement.innerHTML = resumeOutput;
            var editButton = document.getElementById("editButton");
            var saveButton = document.getElementById("saveButton");
            // Enable editing when the Edit button is clicked
            if (editButton) {
                editButton.addEventListener("click", function () {
                    var editableFields = [
                        "nameOutput",
                        "emailOutput",
                        "contactNoOutput",
                        "educationOutput",
                        "experienceOutput",
                        "skillsOutput"
                    ];
                    editableFields.forEach(function (id) {
                        var field = document.getElementById(id);
                        if (field) {
                            field.setAttribute("contenteditable", "true");
                        }
                    });
                });
            }
            // Save changes when the Save button is clicked
            if (saveButton) {
                saveButton.addEventListener("click", function () {
                    var _a, _b, _c, _d, _e, _f;
                    var nameOutput = (_a = document.getElementById("nameOutput")) === null || _a === void 0 ? void 0 : _a.innerText;
                    var emailOutput = (_b = document.getElementById("emailOutput")) === null || _b === void 0 ? void 0 : _b.innerText;
                    var contactNoOutput = (_c = document.getElementById("contactNoOutput")) === null || _c === void 0 ? void 0 : _c.innerText;
                    var educationOutput = (_d = document.getElementById("educationOutput")) === null || _d === void 0 ? void 0 : _d.innerText;
                    var experienceOutput = (_e = document.getElementById("experienceOutput")) === null || _e === void 0 ? void 0 : _e.innerText;
                    var skillsOutput = (_f = document.getElementById("skillsOutput")) === null || _f === void 0 ? void 0 : _f.innerText;
                    // Update original form fields
                    if (nameEle && nameOutput)
                        nameEle.value = nameOutput;
                    if (emailEle && emailOutput)
                        emailEle.value = emailOutput;
                    if (contactNoEle && contactNoOutput)
                        contactNoEle.value = contactNoOutput;
                    if (educationEle && educationOutput)
                        educationEle.value = educationOutput;
                    if (experienceEle && experienceOutput)
                        experienceEle.value = experienceOutput;
                    // Make fields non-editable again
                    var editableFields = [
                        "nameOutput",
                        "emailOutput",
                        "contactNoOutput",
                        "educationOutput",
                        "experienceOutput",
                        "skillsOutput"
                    ];
                    editableFields.forEach(function (id) {
                        var field = document.getElementById(id);
                        if (field) {
                            field.removeAttribute("contenteditable");
                        }
                    });
                });
            }
        }
        else {
            console.error("Unable to display the resume. The output element is missing.");
        }
    }
    else {
        console.error("Error: Please fill out all the required fields.");
    }
});
// Add skill functionality
(_b = document.getElementById("add-skill")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
    var skillInput = document.getElementById("skill");
    var skillsList = document.getElementById("skills-list");
    if (skillInput.value) {
        var listItem = document.createElement("li");
        listItem.textContent = skillInput.value;
        skillsList.appendChild(listItem);
        skillInput.value = ""; // Clear the input
    }
});
