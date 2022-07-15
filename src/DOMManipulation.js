import { toDoParent, createProject, createToDoItem, defaultProject, user } from './index'
import getDay from 'date-fns/getDay'

let currentProject;
let currentView;

// Creates the description of the task and appends it to the DOM under the task
function expandTaskDescriptionListeners(element, descriptionElement) {

    let appendElement = element.parentElement.parentElement
    if (appendElement.childNodes[1] == undefined) {

        // Create task action buttons
        let taskActions = document.createElement("div")
        taskActions.classList.add("task-actions")
        appendElement.appendChild(taskActions)

        // Create Description Title
        let taskDesc = document.createElement("div")
        taskDesc.classList.add("description-title")
        taskDesc.innerText = "Description:"
        taskActions.appendChild(taskDesc)

        // Create Description
        taskDesc = document.createElement("div")
        taskDesc.classList.add("description")
        taskDesc.innerText = descriptionElement
        taskActions.appendChild(taskDesc)

    } else {
        appendElement.childNodes[1].remove()
    }
}

// Renders the task on the DOM based on the provided toDoItem
function renderTaskToDom (element) {

    //Render the items task data to the div

    let appendTheTask = document.getElementById("tasks-list")
    //Create the task wrapper
    let taskWrapper = document.createElement("div")
    taskWrapper.classList.add("example-task-wrapper")
    taskWrapper.id = element.name
    appendTheTask.appendChild(taskWrapper)
    //Create task info
    let taskInfo = document.createElement("div")
    taskInfo.classList.add("example-task-info")
    taskInfo.id = element.id
    taskWrapper.appendChild(taskInfo)

    // ---- Create the task info structure and data ----

    // Create check task button
    let taskCheck = document.createElement("div")
    if (element.checked === "Unchecked") taskCheck.classList.add("check-task")
    else taskCheck.classList.add("checked-task")
    taskCheck.addEventListener("click", function() {
        toggleCheckTask(taskCheck)
    })
    taskInfo.appendChild(taskCheck, element.description)

    // Create title
    let taskTitle = document.createElement("p")
    taskTitle.classList.add("title")
    taskTitle.textContent = element.title
    taskInfo.appendChild(taskTitle)

    taskTitle.addEventListener("click", () => {

        expandTaskDescriptionListeners(taskTitle, element.description)
    })
        
    //Create Date
    let taskDate = document.createElement("div")
    taskDate.classList.add("due-date")
    if (element.dueDate != "No Due Date") {
        taskDate.textContent = reformatDate(element.dueDate, "day")
        taskDate.textContent += reformatDate(element.dueDate, "dd.month.yyyy.")
    } else {
        taskDate.textContent = element.dueDate
    }
    taskInfo.appendChild(taskDate)

    // Create task priority
    let taskItem = document.createElement("div")
    taskItem.classList.add("task-priority")
    taskItem.textContent = element.priority
    if (element.priority == "Urgent Priority") {
        taskItem.style.border = ".05rem solid rgba(255, 0, 0, 0.5)"
        taskItem.style.color = "red"
        taskItem.style.fontWeight = "400"
    } else if (element.priority == "Regular Priority") {
        taskItem.style.border = ".05rem solid rgb(100, 100, 100)"
        taskItem.style.color = "black"
        taskItem.style.fontWeight = "400"
    } else if (element.priority == "Low Priority") {
        taskItem.style.border = ".05rem solid rgb(73, 190, 0)"
        taskItem.style.color = "green"
        taskItem.style.fontWeight = "400"
    }
    taskInfo.appendChild(taskItem)

    // Create edit task button
    let taskEdit = document.createElement("div")
    taskEdit.classList.add("edit-task")
    taskEdit.textContent = "Edit"
    taskEdit.addEventListener("click", function() {
        addEditTaskListeners(taskEdit, element)
    })
    taskInfo.appendChild(taskEdit)

    // Create delete task button
    let taskIDel = document.createElement("div")
    taskIDel.classList.add("delete-task")
    taskIDel.textContent = "Delete"
    taskIDel.addEventListener("click", function() {
        deleteTask(taskIDel)
    })
    taskInfo.appendChild(taskIDel)
}

// Creates the add a tasks interface an passes the inputted data to submitAddNewTask()
function addTaskInterface() {

    const button = document.getElementById("add-task")
    button.addEventListener("click", () => {

    let divHidden = document.createElement("div")
    divHidden.id = "div-hidden"
    document.body.appendChild(divHidden)

    let form = document.createElement("form")
    let closeEdit = document.createElement("div")
    closeEdit.id = "cancel-button"
    closeEdit.textContent = " Cancel "
    closeEdit.addEventListener("click", () => {
        closeEdit.parentElement.parentElement.remove()
    })
    form.appendChild(closeEdit)

    let add5tasks = document.createElement("div")
    add5tasks.id = "add-5-tasks"
    add5tasks.textContent = " Add 5 filler tasks "
    add5tasks.addEventListener("click", function() {
        tasksInitialEventAdder()
    })
    form.appendChild(add5tasks)

    let label = document.createElement("label")
    label.htmlFor = "title"
    label.textContent = "Title"
    label.id = "label-task-title-input"
    let input = document.createElement("input")
    input.name = "title"
    input.type = "text"
    input.id = "task-title-input"
    input.minLength = "1"
    input.required = true
    form.appendChild(label)
    form.appendChild(input)

    label = document.createElement("label")
    label.htmlFor = "date"
    label.textContent = "Due Date"
    input = document.createElement("input")
    input.id = "date-input"
    input.name = "date"
    input.type = "date"
    form.appendChild(label)
    form.appendChild(input)

    label = document.createElement("label")
    label.textContent = "Set Priority: "
    input = document.createElement("div")
    input.id = "priority-div"

    // Radio choices
    let radio = document.createElement("input")
    radio.type = "radio"
    radio.name = "priority-radio"
    radio.id = "low-priority"
    radio.value = "Low Priority"
    let radioLabel = document.createElement("label")
    radioLabel.htmlFor = "low-priority"
    radioLabel.textContent = "Low Priority"
    input.appendChild(radio)
    input.appendChild(radioLabel)

    radio = document.createElement("input")
    radio.type = "radio"
    radio.name = "priority-radio"
    radio.id = "regular-priority"
    radio.value = "Regular Priority"
    radio.checked = true;
    radioLabel = document.createElement("label")
    radioLabel.htmlFor = "regular-priority"
    radioLabel.textContent = "Regular Priority"
    input.appendChild(radio)
    input.appendChild(radioLabel)

    radio = document.createElement("input")
    radio.type = "radio"
    radio.name = "priority-radio"
    radio.id = "urgent-priority"
    radio.value = "Urgent Priority"
    radioLabel = document.createElement("label")
    radioLabel.htmlFor = "urgent-priority"
    radioLabel.textContent = "Urgent Priority"
    input.appendChild(radio)
    input.appendChild(radioLabel)

    form.appendChild(label)
    form.appendChild(input)

    label = document.createElement("label")
    label.setAttribute("for","description")
    label.textContent = "Add Description"
    input = document.createElement("textarea")
    input.name = "description"
    input.setAttribute("rows", "5")
    input.setAttribute("cols", "70")
    input.style.fontFamily = 'Open Sans'
    input.style.fontSize = "1rem"
    form.appendChild(label)
    form.appendChild(input)

    let submitButton = document.createElement("div")
    submitButton.id = "form-submit"
    submitButton.textContent = "Submit"
    submitButton.addEventListener("click", function() {
        submitNewTask (form)
    })
    form.appendChild(submitButton)

    divHidden.appendChild(form)

    })
}

// Redormates the dates based on the desired output
function reformatDate(input, outputFormat) {

    if (input == "No Due Date") return "No Due Date"
    let year;
    let month;
    let day;

    if (outputFormat == "dd.mm.yyyy.") { // input format: yyyy-mm-dd
        //format date from html date element to object format
        year = input.slice(0,4)
        month = input.slice(5, 7)
        day = input.substr(-2)
        console.log("input: yyyy-mm-dd output:",day + "." + month + "." + year + ".")
        return day + "." + month + "." + year + "."
        
    } else if (outputFormat == "yyyy-mm-dd") { // input format: dd.month.yyyy.
        //format date from Object date to html date element format
        year = input.substr(-5)
        year = year.slice(0,4)
        month = input.slice(3, 5)
        day = input.slice(0, 2)
        input = year + "-" + month + "-" + day
        return (input)

    } else if (outputFormat == "dd.month.yyyy.") { // input format dd.mm.yyyy.
        // format date from Object date to render format for DOM
        day = input.slice(0, 2)
        console.log("day",day)
        year = input.substr(-5)
        year = year.slice(0,4)
        console.log("year",year)
        month = input.slice(3, 5)
        console.log("month",month)
        if (month == "01") month = "January"
        else if (month == "02") month = "February"
        else if (month == "03") month = "March"
        else if (month == "04") month = "April"
        else if (month == "05") month = "May"
        else if (month == "06") month = "June"
        else if (month == "07") month = "July"
        else if (month == "08") month = "August"
        else if (month == "09") month = "September"
        else if (month == "10") month = "October"
        else if (month == "11") month = "November"
        else if (month == "12") month = "December"
        //#region ---- mm to month formatter
        // if (input.slice(3,6) == "Jan") input.replace("January", "01")
        // else if (input.slice(3,6) == "Feb") input = input.replace("February", "02")
        // else if (input.slice(3,6) == "Mar") input = input.replace("March", "03")
        // else if (input.slice(3,6) == "Apr") input = input.replace("April", "04")
        // else if (input.slice(3,6) == "May") input = input.replace("May", "05")
        // else if (input.slice(3,6) == "Jun") input = input.replace("June", "06")
        // else if (input.slice(3,6) == "Jul") input = input.replace("July", "07")
        // else if (input.slice(3,6) == "Aug") input = input.replace("August", "08")
        // else if (input.slice(3,6) == "Sep") input = input.replace("September", "09")
        // else if (input.slice(3,6) == "Oct") input = input.replace("October", "10")
        // else if (input.slice(3,6) == "Nov") input = input.replace("November", "11")
        // else if (input.slice(3,6) == "Dec") input = input.replace("December", "12")
        //#endregion

        return day + "." + month + "." + year + "."

    } else if (outputFormat = "day") { // input format dd.mm.yyyy.
        // format date from Object date to render day to the DOM with date-fns module
        year = input.substr(-5)
        year = year.slice(0,4)
        month = input.slice(3, 5)
        day = input.slice(0, 2)

        input = year + " " + month + " " + day
        input = getDay(new Date(input))

        if (input == "0") input = "Sunday, "
        else if (input == "1") input = "Monday, "
        else if (input == "2") input = "Thursday, "
        else if (input == "3") input = "Wednesday, "
        else if (input == "4") input = "Tuesday, "
        else if (input == "5") input = "Friday, "
        else if (input == "6") input = "Saturday, "
        return (input)
    }

}

// Creates the edit a task interface on the provided element
function addEditTaskListeners(taskItem, element) {

    let divHidden = document.createElement("div")
    divHidden.id = "div-hidden"
    document.body.appendChild(divHidden)

    let form = document.createElement("form")
    let closeEdit = document.createElement("div")
    closeEdit.id = "cancel-button"
    closeEdit.textContent = " Cancel "
    closeEdit.addEventListener("click", () => {
        closeEdit.parentElement.parentElement.remove()
    })
    form.appendChild(closeEdit)

    let label = document.createElement("label")
    label.htmlFor = "title"
    label.textContent = "Edit Title"
    let input = document.createElement("input")
    input.name = "title"
    input.type = "text"
    input.value = element.title
    form.appendChild(label)
    form.appendChild(input)

    label = document.createElement("label")
    label.htmlFor = "date"
    label.textContent = "Change Date"
    input = document.createElement("input")
    input.id = "date-input"
    input.name = "date"
    input.type = "date"
    input.value = reformatDate(element.dueDate,"yyyy-mm-dd")
    form.appendChild(label)
    form.appendChild(input)

    label = document.createElement("label")
    label.textContent = "Change Priority: "
    input = document.createElement("div")
    input.id = "priority-div"

    // Radio choices
    let radio = document.createElement("input")
    radio.type = "radio"
    radio.name = "priority-radio"
    radio.id = "low-priority"
    radio.value = "Low Priority"
    let radioLabel = document.createElement("label")
    radioLabel.htmlFor = "low-priority"
    radioLabel.textContent = "Low Priority"
    if (element.priority == radio.value) radio.checked = true
    input.appendChild(radio)
    input.appendChild(radioLabel)

    radio = document.createElement("input")
    radio.type = "radio"
    radio.name = "priority-radio"
    radio.id = "regular-priority"
    radio.value = "Regular Priority"
    radioLabel = document.createElement("label")
    radioLabel.htmlFor = "regular-priority"
    radioLabel.textContent = "Regular Priority"
    if (element.priority == radio.value) radio.checked = true
    input.appendChild(radio)
    input.appendChild(radioLabel)

    radio = document.createElement("input")
    radio.type = "radio"
    radio.name = "priority-radio"
    radio.id = "urgent-priority"
    radio.value = "Urgent Priority"
    radioLabel = document.createElement("label")
    radioLabel.htmlFor = "urgent-priority"
    radioLabel.textContent = "Urgent Priority"
    if (element.priority == radio.value) radio.checked = true
    input.appendChild(radio)
    input.appendChild(radioLabel)

    form.appendChild(label)
    form.appendChild(input)

    label = document.createElement("label")
    label.setAttribute("for","description")
    label.textContent = "Edit Description"
    input = document.createElement("textarea")
    input.name = "description"
    input.setAttribute("rows", "5")
    input.setAttribute("cols", "70")
    input.style.fontFamily = 'Open Sans'
    input.style.fontSize = "1rem"
    input.value = element.description
    form.appendChild(label)
    form.appendChild(input)

    let submitButton = document.createElement("div")
    submitButton.id = "form-submit"
    submitButton.textContent = "Submit"
    // ---- set the taskItem to parent parent element for the project id and pass it
    taskItem = taskItem.parentElement.parentElement
    submitButton.addEventListener("click", function() {
        submitTaskChanges(form, element, taskItem)
    })
    form.appendChild(submitButton)

    divHidden.appendChild(form)
}

// Toggles check task state
function toggleCheckTask(taskCheck) {

    let itemId = taskCheck.parentElement.parentElement.firstChild.id
    console.log("itemId:",itemId)
    console.log()
    
    console.log("toDoParent.allProjects",toDoParent.allProjects)
    toDoParent.allProjects.every(element => {
        if (element.name === currentProject) {
            element.allItems.every( item => {
                if (item.id === itemId) {
                    if (item.checked == "Unchecked") {
                        item.checked = "Checked"
                        taskCheck.classList.remove("check-task")
                        taskCheck.classList.add("checked-task")
                        return false
                    } else if (item.checked == "Checked") {
                        item.checked = "Unchecked"
                        taskCheck.classList.remove("checked-task")
                        taskCheck.classList.add("check-task")
                        return false
                    }
                }
                console.log(item.id)
                return true
            })
            return false
        }
        console.log("element.name",element.name)
        return true
    })
} 

// Delete current task
function deleteTask(taskDel) {

    let itemId = taskDel.parentElement.id
    console.log("element.allItems",defaultProject.allItems)

    toDoParent.allProjects.every(element => {
        if (element.name === currentProject) {
            let counter = 0;
            element.allItems.forEach( element => {
                if (element.id === itemId) {
                    for (const key in element) {
                        delete element[key];
                    }
                    element.allItems.splice(counter,1)
                }
                counter++
            })
            // for (let i = 0; i < element.allItems.length; i++) {
            //     if (element.allItems[i].id === itemId) {
            //         console.log("element.allItems",element.allItems)
            //         for (const key in element.allItems[i]) {
            //             delete element.allItems[i][key];
            //         }
            //         delete element.allItems[i]
            //         // element.allItems[i].splice(i,1)
            //         console.log("element.allItems",element.allItems)
                    
            //     }
            // }
            return false
        }
        return true
    })

    taskDel.parentElement.parentElement.remove()


}

// Changes the objects data to the provided ones from addTaskInterface()
function submitNewTask(form) {

    if ( form.elements[0].value == "") {
        let taskTitleInput = document.getElementById("task-title-input")
        let taskLabelTitle = document.getElementById("label-task-title-input")

        taskTitleInput.classList.add("task-title-input-invalid")

        let spanInfo = document.createElement("span")
        spanInfo.id = "span-error-task-title-input"
        spanInfo.textContent = "*Please input a title"
        taskLabelTitle.appendChild(spanInfo)
        return
    }
    console.log("form.elements",form.elements)

    let elementPriority;
    if (form.elements[2].checked == true) {
        elementPriority = form.elements[2].value
    } else if (form.elements[3].checked == true) {
        elementPriority = form.elements[3].value
    } else if (form.elements[4].checked == true) {
        elementPriority = form.elements[4].value
    }
    let elementTitle = form.elements[0].value
    let elementDueDate = form.elements[1].value
    let elementDescription = form.elements[5].value
    let elementNotes
    let elementChecked
    
    if (elementDueDate.length > 5) {
        elementDueDate = reformatDate(elementDueDate, "dd.mm.yyyy.")
    } else elementDueDate = "No Due Date"

    let projectToPass;
    toDoParent.allProjects.every( element => {
        if (element.name == currentProject) {
            projectToPass = element
            return false
        }
        return true
    })
    console.log("projectToPass",projectToPass)
    
    let element = createToDoItem(
        elementTitle, 
        elementDescription, 
        elementDueDate,
        elementPriority,
        elementNotes,
        elementChecked,
        projectToPass)

        console.log("dateValue",element.dateValue)
    form.parentElement.remove()
    renderTaskToDom(element)
}

// Changes the objects data to the provided addEditTaskListeners()
function submitTaskChanges(form, element, taskItem) {

    console.log(form.elements)
    
    element.title = form.elements[0].value
    let elementDueDate = form.elements[1].value

    //format date
    if (elementDueDate.length == 10) {
        elementDueDate = reformatDate(elementDueDate, "dd.mm.yyyy.")
    } else elementDueDate = "No Due Date"
    console.log("elementDueDate",elementDueDate)
    element.dueDate = elementDueDate
    
    if (form.elements[2].checked == true) {
        element.priority = form.elements[2].value
    } else if (form.elements[3].checked == true) {
        element.priority = form.elements[3].value
    } else if (form.elements[4].checked == true) {
        element.priority = form.elements[4].value
    }
    element.description = form.elements[5].value

    let passInto = document.querySelectorAll(".example-task-wrapper");
    // passing zero because the element pass the current project id
    // probably wont work when updated to house inbox tasks
    updateRenderProjectTasks(taskItem)
    form.parentElement.remove()
}

// Renders default project tasks on the DOM
function startupRenderProjectTasks() {

    if (document.getElementById("tasks-list").firstChild == null) {
        
        console.log("firstChild Null")
        defaultProject.allItems.forEach(element => {

            //Render the items data to the div
            renderTaskToDom(element)
        
        })
    }
}

// Renders the current libraries to the projects on the sidebar in the DOM
function startupLibrarySidebarRenderer() {

    let projectDefault = document.createElement("div")
    projectDefault.textContent = defaultProject.title
    projectDefault.classList.add("project")
    projectDefault.id = defaultProject.name
    projectDefault.addEventListener("click", () => {
        updateRenderProjectTasks(projectDefault)
    })
    document.getElementById("projects-list").appendChild(projectDefault)
    console.log("currentProject",projectDefault)
    currentProject = projectDefault.id

    document.getElementById(projectDefault.id).classList.add("project-current")

    console.log("currentProject",currentProject)
}

// Renders Events from the project to the DOM
function tasksInitialEventAdder() {

    // Go through each project object until its first element name matches the one on the DOM
    toDoParent.allProjects.every( element => {
        console.log("element",element.allItems)
        console.log("currentProject",currentProject)
        console.log("element.name",element.name)
        if (element.name == currentProject) {

            for (let i = 0; i<5;i++){
                //Insert data from object to element
                console.log("element.name",element.name)
                // Create a task object and supply it with the corresponding project
                let taskPlaceholder = createToDoItem("Pick up Laundry","I need to pick up my Laundry from the washing machine next is some lorem ipsum: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id expedita soluta voluptatum aliquam excepturi eligendi.","17.06.2022.","Urgent Priority","notes for todo item","Unchecked", element)
                //Insert data from object to element
                console.log("taskPlaceholder",taskPlaceholder)
                console.log("new proto",Object.getPrototypeOf(taskPlaceholder))
                console.log("user proto",Object.getPrototypeOf(user))

                //Render the items data to the div
                renderTaskToDom(taskPlaceholder)
            }
            return false
        }
        return true
    })

}

// Make a random name
function makeName(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}

// Create an interface to create a new project and pass value to createNewProject()
function addNewProject () {

    // Add event listeners to populate DOM with projects
    let addProject = document.getElementById("add-project")
    addProject.addEventListener("click", () =>  {

        let hideDiv = document.createElement("div")
        hideDiv.id = "div-hidden"
        document.body.append(hideDiv)

        let backDiv = document.createElement("div")
        backDiv.id = "back-div"
        hideDiv.append(backDiv)

        let divContent = document.createElement("p")
        divContent.textContent = "Create a New Project "
        divContent.id = "create-project-text"
        backDiv.append(divContent)

        divContent = document.createElement("label")
        divContent.htmlFor = "new-project-label"
        divContent.id = "new-project-label"
        divContent.textContent = "Name:"
        divContent.placeholder = "New Project Name "
        backDiv.append(divContent)

        let inputDiv = document.createElement("input")
        inputDiv.id = "new-project-input"
        inputDiv.name = "new-project-input"
        inputDiv.minLength = "1"
        inputDiv.placeholder = "New Project Name "
        divContent.append(inputDiv)

        divContent = document.createElement("button")
        divContent.id = "create-project-button"
        divContent.textContent = "Create"
        backDiv.append(divContent)

        divContent.addEventListener("click", function()  {

            createNewProject()
            
        })

        divContent = document.createElement("button")
        divContent.id = "cancel-project-button"
        divContent.textContent = "Cancel"
        backDiv.append(divContent)

        divContent.addEventListener("click", () => {
            document.getElementById("div-hidden").remove()
        })

    })
}

// Create a new project and append it with the provided name from addNewProject()
function createNewProject() {

    if(document.getElementById("new-project-input").value) {

        let pass = document.getElementById("new-project-input").value
        let projectHolder = createProject(pass)

        let addProject = document.getElementById("add-project")
        let project = document.createElement("div")
        project.classList.add("project")
        addProject.parentElement.append(project)
        project.id = projectHolder.name
        project.textContent = projectHolder.title
        console.log(toDoParent.allProjects)
        console.log("project to pass",project)

        document.getElementById("div-hidden").remove()

        project.addEventListener("click", () => {
            updateRenderProjectTasks(project)
        })

    } else {
        let span = document.createElement("span")
        span.textContent = "Please input a name."
        document.getElementById("new-project-label").appendChild(span)
    }
}

// Update the task renderer based on the selected Projects
function updateRenderProjectTasks(projectNode) {

    console.log("entered renderProjectTasks ",projectNode)

    // If already in the project don't rerender
    if (currentProject == projectNode.id) return

    // Set the background color
    document.querySelector(".project-current").classList.remove("project-current")
    document.getElementById(projectNode.id).classList.add("project-current")

    // Set current working project
    currentProject = projectNode.id

    toDoParent.allProjects.forEach( element => {
        if(element.name === projectNode.id) {
            
            document.querySelectorAll(".example-task-wrapper").forEach(element => {element.remove()})

            // let projectHolder = document.getElementById("tasks-list")
            console.log("entering forEach ",element)
            element.allItems.forEach(element => {
                console.log("entered forEach ",projectNode.textContent)

                renderTaskToDom(element)

            })
        }
    })

}

//#region ---- Sidebar Logic and Rendering ----
document.getElementById("inbox").addEventListener("click", function() {
    document.querySelectorAll(".example-task-wrapper").forEach(element => {element.remove()})
    inboxTasksRender()
})
function inboxTasksRender() {
    toDoParent.allProjects.forEach( element => {
        element.allItems.forEach(element => {
            renderTaskToDom(element)
        })
    })
}

document.getElementById("today").addEventListener("click", function() {
    document.querySelectorAll(".example-task-wrapper").forEach(element => {element.remove()})
    todayTaskRenderer()
})

function todayTaskRenderer() {
    toDoParent.allProjects.forEach( element => {
        element.allItems.forEach(element => {
            if (element.dueDate === "16.July.2022") renderTaskToDom(element)
        })
    })
}

document.getElementById("this-week").addEventListener("click", function() {
    document.querySelectorAll(".example-task-wrapper").forEach(element => {element.remove()})
    weekTaskRenderer()
})

function weekTaskRenderer() {
    toDoParent.allProjects.forEach( element => {
        element.allItems.forEach(element => {
            if (element.dueDate.slice(3,7) === "July") renderTaskToDom(element)
        })
    })
}

document.getElementById("this-month").addEventListener("click", function() {
    document.querySelectorAll(".example-task-wrapper").forEach(element => {element.remove()})
    monthTaskRenderer()
})

function monthTaskRenderer() {
    toDoParent.allProjects.forEach( element => {
        element.allItems.forEach(element => {
            if (element.dueDate.slice(3,7) === "July") renderTaskToDom(element)
        })
    })
}
//#endregion

// Adds the Sort by list on click listener
let orderByNode = document.getElementById("sort-by")
orderByNode.addEventListener("click", () => {
        
    if (document.getElementById("dropdown").style.visibility == "unset"){
        document.getElementById("dropdown").style.visibility = "hidden"
    } else {
        document.getElementById("dropdown").style.visibility = "unset"
    }

})

// Hides the Sort by list from the DOM
window.onclick = function(event) {
    if (!event.target.matches('#sort-by')) {
        document.getElementById("dropdown").style.visibility = "hidden"
    }
  }

// Sorts the current Project tasks by priority
document.getElementById("sort-priority").addEventListener("click", function() {
    sortByPriority() 
})
function sortByPriority() {

    document.querySelectorAll(".example-task-wrapper").forEach(element => {element.remove()})
    toDoParent.allProjects.every( element => {
        if (element.name === currentProject) {
            element.allItems.forEach(element => {
                if (element.priority === "Urgent Priority") renderTaskToDom(element)
            })
            return false
        }
        return true
    })
    toDoParent.allProjects.every( element => {
        if (element.name === currentProject) {
            element.allItems.forEach(element => {
                if (element.priority === "Regular Priority") renderTaskToDom(element)
            })
            return false
        }
        return true
    })
    toDoParent.allProjects.every( element => {
        if (element.name === currentProject) {
            element.allItems.forEach(element => {
                if (element.priority === "Low Priority") renderTaskToDom(element)
            })
            return false
        }
        return true
    })


}

// Sorts the current tasks by date
document.getElementById("sort-date").addEventListener("click", function(event) {
    sortByDate(event)
})
function sortByDate(event) {

    let orderedDates = [];

    toDoParent.allProjects.every( element => {
        if (element.name == currentProject) {
            element.allItems.forEach(element => {
                orderedDates.push([element.dateValue, element.id])
                console.log("element.dueDate:",element.id)
                console.log("element.dateValue:",element.dateValue)
            })
            return false
        }
        return true
    })
    orderedDates.sort()
    console.log("orderedDates:",orderedDates)

    document.querySelectorAll(".example-task-wrapper").forEach(element => {element.remove()})
    if (event.srcElement.classList.contains("closer-to-farther")){
        event.srcElement.classList.remove("closer-to-farther")
        event.srcElement.classList.add("farther-to-closer")
        event.srcElement.innerText = "Due Date: Ascending"
        orderedDates.reverse()
    } else {
        event.srcElement.classList.remove("farther-to-closer")
        event.srcElement.classList.add("closer-to-farther")
        event.srcElement.innerText = "Due Date: Descending"
    }


    toDoParent.allProjects.every( element => {
        if (element.name == currentProject) {
            do {
                element.allItems.every(element => {
                    if (element.id == orderedDates[0][1]) {
                        console.log("item[1]", orderedDates[0][1])
                        renderTaskToDom(element)
                        orderedDates.shift()
                        return false
                    }
                    return true
                })
            } while (orderedDates.length != 0)
        }
        return true
    })    




}

export { startupRenderProjectTasks, startupLibrarySidebarRenderer, addNewProject, updateRenderProjectTasks, addTaskInterface}