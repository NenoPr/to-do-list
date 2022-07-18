import { toDoParent, createProject, createToDoItem } from './index'
import {getDay, getWeek, isToday} from 'date-fns'

let currentProject;
let inboxView;

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
    taskCheck.addEventListener("click", function(pointer) {
        toggleCheckTask(pointer)
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
    taskEdit.addEventListener("click", function(pointer) {
        addEditTaskListeners(taskEdit, element, pointer)
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

    let divDateAndProject = document.createElement("div")
    divDateAndProject.id = "date-and-project"

    label = document.createElement("label")
    label.htmlFor = "date"
    label.textContent = "Due Date"
    label.id = "label-date-input"
    divDateAndProject.appendChild(label)
    input = document.createElement("input")
    input.id = "date-input"
    input.name = "date"
    input.type = "date"
    label.appendChild(input)

    label = document.createElement("label")
    label.htmlFor = "project"
    label.textContent = "Project"
    label.id = "label-project-input-for-task"
    divDateAndProject.appendChild(label)
    input = document.createElement("select")
    input.id = "project-input-for-task"
    input.name = "project"
    input.size = "1"
    toDoParent.allProjects.every(element => {
        if (currentProject == element.name) {
            let option = document.createElement("option")
            option.value = element.name
            option.innerText = element.title
            input.appendChild(option)
            return false
        }
        return true
    })
    toDoParent.allProjects.forEach(element => {
        if (currentProject != element.name) {
            let option = document.createElement("option")
            option.value = element.name
            option.innerText = element.title
            input.appendChild(option)
        }
    })
    label.appendChild(input)

    form.appendChild(divDateAndProject)

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

// Reformats the dates based on the desired output
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

    } else if (outputFormat == "yyyy mm dd") { // input format: dd.month.yyyy.
        //format date from Object date be parsed for date-fn module to get the week
        year = input.substr(-5)
        year = year.slice(0,4)
        month = input.slice(3, 5)
        day = input.slice(0, 2)
        input = year + " " + month + " " + day
        return (input)

    } else if (outputFormat == "dd.month.yyyy.") { // input format dd.mm.yyyy.
        // format date from Object date to render format for DOM
        day = input.slice(0, 2)
        year = input.substr(-5)
        year = year.slice(0,4)
        month = input.slice(3, 5)
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
function addEditTaskListeners(taskItem, element, pointer) {

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

    let divDateAndProject = document.createElement("div")
    divDateAndProject.id = "date-and-project"

    label = document.createElement("label")
    label.htmlFor = "date"
    label.textContent = "Due Date"
    label.id = "label-date-input"
    divDateAndProject.appendChild(label)
    input = document.createElement("input")
    input.id = "date-input"
    input.name = "date"
    input.type = "date"
    input.value = reformatDate(element.dueDate,"yyyy-mm-dd")
    label.appendChild(input)

    label = document.createElement("label")
    label.htmlFor = "project"
    label.textContent = "Project"
    label.id = "label-project-input-for-task"
    divDateAndProject.appendChild(label)
    input = document.createElement("select")
    input.id = "project-input-for-task"
    input.name = "project"
    input.size = "1"
    toDoParent.allProjects.every(element => {
        if (currentProject == element.name) {
            let option = document.createElement("option")
            option.value = element.name
            option.innerText = element.title
            input.appendChild(option)
            return false
        }
        return true
    })
    toDoParent.allProjects.forEach(element => {
        if (currentProject != element.name) {
            let option = document.createElement("option")
            option.value = element.name
            option.innerText = element.title
            input.appendChild(option)
        }
    })
    label.appendChild(input)

    form.appendChild(divDateAndProject)

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
        submitTaskChanges(form, element, pointer)
    })
    form.appendChild(submitButton)

    divHidden.appendChild(form)
}

// Toggles check task state
function toggleCheckTask(pointer) {

    let itemId = pointer.srcElement.parentElement.id
    console.log("itemId:",itemId)
    console.log()
    
    console.log("toDoParent.allProjects",toDoParent.allProjects)
    toDoParent.allProjects.forEach(project => {
        project.allItems.forEach( item => {
            if (item.id == itemId) {
                console.log("item.id",item.id)
                if (item.checked == "Unchecked") {
                    item.checked = "Checked"
                    pointer.srcElement.classList.remove("check-task")
                    pointer.srcElement.classList.add("checked-task")
                } else if (item.checked == "Checked") {
                    item.checked = "Unchecked"
                    pointer.srcElement.classList.remove("checked-task")
                    pointer.srcElement.classList.add("check-task")
                }
                window.localStorage.setItem(project.name, JSON.stringify(project))
            }
            console.log(item.id)
        })
        // console.log("element.name",element.name)
    })

} 

// Delete current task
function deleteTask(taskDel) {

    let itemId = taskDel.parentElement.id

    toDoParent.allProjects.every(project => {
        if (project.name === currentProject) {
            let counter = 0;
            project.allItems.forEach( element => {
                if (element.id === itemId) {
                    for (const key in element) {
                        delete element[key];
                    }
                    element.allItems.splice(counter,1)
                    window.localStorage.setItem(project.name, JSON.stringify(project))
                }
                counter++
            })
            return false
        }
        return true
    })

    taskDel.parentElement.parentElement.remove()
    window.localStorage.setItem(elementProject.name, JSON.stringify(elementProject))


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
    } else if (form.elements[2].value == "") {
        let taskLabelTitle = document.getElementById("label-task-title-input")
        let spanInfo = document.createElement("span")
        spanInfo.id = "span-error-task-title-input"
        spanInfo.textContent = "*Please Create a Project First"
        taskLabelTitle.appendChild(spanInfo)

    }
    console.log("form.elements",form.elements)

    let elementPriority;
    if (form.elements[3].checked == true) {
        elementPriority = form.elements[3].value
    } else if (form.elements[4].checked == true) {
        elementPriority = form.elements[4].value
    } else if (form.elements[5].checked == true) {
        elementPriority = form.elements[5].value
    }
    let elementTitle = form.elements[0].value
    let elementDueDate = form.elements[1].value
    let elementProject = form.elements[2].value
    let elementDescription = form.elements[6].value
    let elementNotes
    let elementChecked
    
    if (elementDueDate.length > 5) {
        elementDueDate = reformatDate(elementDueDate, "dd.mm.yyyy.")
    } else elementDueDate = "No Due Date"

    toDoParent.allProjects.every( element => {
        if (element.name == elementProject) {
            elementProject = element
            return false
        }
        return true
    })
    console.log("projectToPass",elementProject)

    if (elementProject == undefined) {
        let noTasks = document.createElement("p")
        noTasks.classList.add("example-task-wrapper")
        noTasks.style.textAlign = "center"
        noTasks.style.justifySelf = "center"
        noTasks.style.width = "fit-content"
        noTasks.textContent = "Create a Project First."
        document.getElementById("tasks-list").append(noTasks)
        form.parentElement.remove()
        return
    }
    
    let element = createToDoItem(
        elementTitle, 
        elementDescription, 
        elementDueDate,
        elementPriority,
        elementNotes,
        elementChecked,
        elementProject)

    console.log("dateValue",element.dateValue)
    form.parentElement.remove()

    window.localStorage.setItem(elementProject.name, JSON.stringify(elementProject))
    
    if (elementProject.title == document.getElementById("current-view-port").innerText) {
        document.querySelectorAll(".example-task-wrapper").forEach(element => {element.remove()})
        elementProject.allItems.forEach( element => {
            renderTaskToDom(element)
        })
    }
}

// Changes the objects data to the provided addEditTaskListeners()
function submitTaskChanges(form, element, pointer) {

    console.log(form.elements)
    
    element.title = form.elements[0].value
    let elementDueDate = form.elements[1].value
    let elementProject = form.elements[2].value

    //format date
    if (elementDueDate.length == 10) {
        elementDueDate = reformatDate(elementDueDate, "dd.mm.yyyy.")
    } else elementDueDate = "No Due Date"
    console.log("elementDueDate",elementDueDate)
    element.dueDate = elementDueDate
    
    if (form.elements[3].checked == true) {
        element.priority = form.elements[3].value
    } else if (form.elements[4].checked == true) {
        element.priority = form.elements[4].value
    } else if (form.elements[5].checked == true) {
        element.priority = form.elements[5].value
    }
    element.description = form.elements[6].value

    console.log("POINTERRRRRRR",pointer.srcElement.parentElement.parentElement)
    let CurrentProjectID = pointer.srcElement.parentElement.parentElement.id

    let currentWorkingProjectForTheTask;
    toDoParent.allProjects.forEach( element => {
        if (element.name == CurrentProjectID) {
            currentWorkingProjectForTheTask = element
        }
    })

    console.log("taskItem.name",CurrentProjectID)
    console.log("elementProject",elementProject)
    console.log("currentWorkingProjectForTheTask",currentWorkingProjectForTheTask)
    
    if (CurrentProjectID != currentWorkingProjectForTheTask.id) {

        let counter = 0;
        let newProjectToPass;
        toDoParent.allProjects.every( project => {
            if (project.name == elementProject) {
                newProjectToPass = project;
                console.log("newProjectToPass",newProjectToPass)
                return false
            }
            return true
        })

        toDoParent.allProjects.every( project => {
            console.log("project.name ",currentWorkingProjectForTheTask)
            if (project.name == currentWorkingProjectForTheTask.name) {
                project.allItems.every( task => {
                    if (task.id == element.id) {
                        console.log("HEREEE",project.allItems[counter])
                        console.log("HEREEE",task.id)
                        project.allItems.splice((project.allItems.indexOf(task)),1)
                        newProjectToPass.allItems.push(task)
                        Object.setPrototypeOf(task, newProjectToPass)
                        console.log("HEREEE",project.allItems[counter])
                        counter++
                        return false
                    }
                    return true
                })
                return false
            }
            return true
        })
        window.localStorage.setItem(newProjectToPass.name, JSON.stringify(newProjectToPass))
        window.localStorage.setItem(currentWorkingProjectForTheTask.name, JSON.stringify(currentWorkingProjectForTheTask))

        document.querySelectorAll(".example-task-wrapper").forEach(element => {element.remove()})
        currentWorkingProjectForTheTask.allItems.forEach( element => {
            renderTaskToDom(element)
        })
    }

    let passInto = document.querySelectorAll(".example-task-wrapper");
    // passing zero because the element pass the current project id
    // probably wont work when updated to house inbox tasks
    // updateRenderProjectTasks(taskItem)
    form.parentElement.remove()
}

// Renders default project tasks on the DOM
function startupRenderProjectTasks() {

    if (document.getElementById("tasks-list").firstChild == null) {
        
        console.log("firstChild Null")
        if (toDoParent.allProjects[0] != undefined) {
            toDoParent.allProjects[0].allItems.forEach(element => {

                //Render the items data to the div
                console.log("RENDERD ELEMENT", element)
                renderTaskToDom(element)
            
            })
        }
        try {
            if (toDoParent.allProjects[0].title != undefined) {
                document.getElementById("current-view-port").textContent = toDoParent.allProjects[0].title
            }
        }
        catch {}
    }
}

// Renders the current libraries to the projects on the sidebar in the DOM
function startupLibrarySidebarRenderer() {

    if (toDoParent.allProjects[0] != undefined) {
        toDoParent.allProjects.forEach( element => {

            let projectToAppend = document.createElement("div")
            projectToAppend.textContent = element.title
            projectToAppend.classList.add("project")
            projectToAppend.id = element.name
            projectToAppend.addEventListener("click", () => {
                updateRenderProjectTasks(projectToAppend)
            })
            console.log("currentProject",projectToAppend)
            console.log("currentProject",currentProject)

            let projectWrapper = document.createElement("div")
            projectWrapper.classList.add("project-sidebar-wrapper")
            projectWrapper.append(projectToAppend)

            let projectOptions = document.createElement("div")
            projectOptions.classList.add("project-options-sidebar")
            projectWrapper.append(projectOptions)

            let editProject = document.createElement("div")
            editProject.classList.add("rename-project")
            editProject.innerText = "Rename"
            projectOptions.append(editProject)
            editProject.addEventListener("click", function(pointer) {
                renameProject(pointer)
            })

            let deleteProjectSidebar = document.createElement("div")
            deleteProjectSidebar.classList.add("delete-project")
            deleteProjectSidebar.innerText = "Delete"
            projectOptions.append(deleteProjectSidebar)
            deleteProjectSidebar.addEventListener("click", function(pointer) {
                deleteProject(pointer)
            })

            document.getElementById("projects-list").appendChild(projectWrapper)

            if (document.getElementById("div-hidden")) {
                document.getElementById("div-hidden").remove()
            }

        })
        currentProject = toDoParent.allProjects[0].id
        document.getElementById("add-project").nextElementSibling.childNodes[0].classList.add("project-current")
        document.querySelectorAll(".project-options-sidebar").forEach( node => {
            node.remove()
        })
    }
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
        project.id = projectHolder.name
        project.textContent = projectHolder.title
        console.log(toDoParent.allProjects)
        console.log("project to pass",project)

        let projectWrapper = document.createElement("div")
        projectWrapper.classList.add("project-sidebar-wrapper")
        projectWrapper.append(project)

        let projectOptions = document.createElement("div")
        projectOptions.classList.add("project-options-sidebar")
        projectWrapper.append(projectOptions)

        let editProject = document.createElement("div")
        editProject.classList.add("rename-project")
        editProject.innerText = "Rename"
        projectOptions.append(editProject)
        editProject.addEventListener("click", function(pointer) {
            renameProject(pointer)
        })

        let deleteProjectSidebar = document.createElement("div")
        deleteProjectSidebar.classList.add("delete-project")
        deleteProjectSidebar.innerText = "Delete"
        projectOptions.append(deleteProjectSidebar)
        deleteProjectSidebar.addEventListener("click", function(pointer) {
            deleteProject(pointer)
        })

        document.getElementById("projects-list").appendChild(projectWrapper)

        document.getElementById("div-hidden").remove()

        project.addEventListener("click", () => {
            updateRenderProjectTasks(project)
        })

        updateRenderProjectTasks(project)

        window.localStorage.setItem(projectHolder.name, JSON.stringify(projectHolder))

    } else {
        let span = document.createElement("span")
        span.textContent = "Please input a name."
        document.getElementById("new-project-label").appendChild(span)
    }
}

function renameProject(pointer) {

    console.log("pointer.srcElement.id", pointer.srcElement.parentElement.previousElementSibling.id)

    let projectNameHolder = pointer.srcElement.parentElement.previousElementSibling

    let hideDiv = document.createElement("div")
        hideDiv.id = "div-hidden"
        document.body.append(hideDiv)

        let backDiv = document.createElement("div")
        backDiv.id = "back-div"
        hideDiv.append(backDiv)

        let divContent = document.createElement("p")
        divContent.textContent = "Rename a Project "
        divContent.id = "create-project-text"
        backDiv.append(divContent)

        divContent = document.createElement("label")
        divContent.htmlFor = "new-project-label"
        divContent.id = "new-project-label"
        divContent.textContent = "New Name:"
        backDiv.append(divContent)

        let inputDiv = document.createElement("input")
        inputDiv.id = "new-project-input"
        inputDiv.name = "new-project-input"
        inputDiv.minLength = "1"
        inputDiv.value = projectNameHolder.innerText
        divContent.append(inputDiv)

        divContent = document.createElement("button")
        divContent.id = "create-project-button"
        divContent.textContent = "Rename"
        backDiv.append(divContent)

        divContent.addEventListener("click", function()  {

            submitRenameProject(projectNameHolder)
            
        })

        divContent = document.createElement("button")
        divContent.id = "cancel-project-button"
        divContent.textContent = "Cancel"
        backDiv.append(divContent)

        divContent.addEventListener("click", () => {
            document.getElementById("div-hidden").remove()
        })
}

function submitRenameProject(node) {

    toDoParent.allProjects.every( project => {
        if (project.name == node.id) {
            console.log("MATCH!")
            project.title = document.getElementById("new-project-input").value
            node.innerText = project.title
            console.log("project.title",project.title)
            window.localStorage.setItem(project.name, JSON.stringify(project))
            return false
        }
        return true
    })
    document.getElementById("div-hidden").remove()

}

function deleteProject(pointer) {
    
    console.log("pointer.srcElement.id", pointer.srcElement.parentElement.previousElementSibling.id)

    let projectNameHolder = pointer.srcElement.parentElement.previousElementSibling

    let hideDiv = document.createElement("div")
        hideDiv.id = "div-hidden"
        document.body.append(hideDiv)

        let backDiv = document.createElement("div")
        backDiv.id = "back-div-delete"
        hideDiv.append(backDiv)

        let divContent = document.createElement("p")
        divContent.textContent = "Are you Sure You want to delete the project?"
        divContent.style.gridArea = "1 / 1 / 1 / 3"
        divContent.style.fontSize = "2rem"
        divContent.style.textAlign = "center"
        backDiv.append(divContent)

        divContent = document.createElement("button")
        divContent.id = "create-project-button"
        divContent.style.backgroundColor = "red"
        divContent.textContent = "Delete"
        divContent.style.gridArea = "2 / 1 / 2 / 1"
        backDiv.append(divContent)

        divContent.addEventListener("click", function()  {

            submitDeleteProject(projectNameHolder)
            
        })

        divContent = document.createElement("button")
        divContent.id = "cancel-project-button"
        divContent.textContent = "Cancel"
        divContent.style.gridArea = "2 / 2 / 2 / 3"
        backDiv.append(divContent)

        divContent.addEventListener("click", () => {
            document.getElementById("div-hidden").remove()
        })
}

function submitDeleteProject(node) {

    toDoParent.allProjects.every( project => {
        if (project.name == node.id) {
            toDoParent.allProjects.splice((toDoParent.allProjects.indexOf(project)),1)
            window.localStorage.removeItem(project.name)
            node.parentElement.remove()
            return false
        }
        return true
    })
    document.getElementById("div-hidden").remove()
}

// Update the task renderer based on the selected Projects
function updateRenderProjectTasks(projectNode) {

    console.log("entered renderProjectTasks ",projectNode)

    // If already in the project don't rerender
    // if (currentProject == projectNode.id) return

    // Set the background color
    if (document.querySelector(".project-current") != null) {
        document.querySelector(".project-current").classList.remove("project-current")
    }
    projectNode.classList.add("project-current")

    // Remove background selection color from sidebar items
    document.getElementById("inbox").classList.remove("active-sidebar")
    document.getElementById("today").classList.remove("active-sidebar")
    document.getElementById("this-week").classList.remove("active-sidebar")
    document.getElementById("this-month").classList.remove("active-sidebar")

    // Set current working project
    currentProject = projectNode.id

    document.querySelectorAll(".project-options-sidebar").forEach( node => {
        node.remove()
    })


    let projectOptions = document.createElement("div")
    projectOptions.classList.add("project-options-sidebar")
    projectNode.parentElement.append(projectOptions)

    let editProject = document.createElement("div")
    editProject.classList.add("rename-project")
    editProject.innerText = "Rename"
    projectOptions.append(editProject)
    editProject.addEventListener("click", function(pointer) {
        renameProject(pointer)
    })

    let deleteProjectSidebar = document.createElement("div")
    deleteProjectSidebar.classList.add("delete-project")
    deleteProjectSidebar.innerText = "Delete"
    projectOptions.append(deleteProjectSidebar)
    deleteProjectSidebar.addEventListener("click", function(pointer) {
        deleteProject(pointer)
    })


    toDoParent.allProjects.forEach( element => {
        if(element.name === projectNode.id) {
            
            document.querySelectorAll(".example-task-wrapper").forEach(element => {element.remove()})
            document.getElementById("current-view-port").textContent = element.title

            // let projectHolder = document.getElementById("tasks-list")
            console.log("entering forEach ",element)
            element.allItems.forEach(element => {
                console.log("entered forEach ",projectNode.textContent)

                renderTaskToDom(element)

            })
            inboxView = false
        }
    })

}

//#region ---- Sidebar Logic and Rendering ----
// Renders all tasks from every project to the DOM
document.getElementById("inbox").addEventListener("click", function() {
    inboxTasksRender()
})
function inboxTasksRender() {
    document.querySelectorAll(".example-task-wrapper").forEach(element => {element.remove()})
    toDoParent.allProjects.forEach( element => {
        element.allItems.forEach(element => {
            renderTaskToDom(element)
        })
    })

    if (document.getElementById("tasks-list").firstChild === null) {
        let noTasks = document.createElement("p")
        noTasks.classList.add("example-task-wrapper")
        noTasks.style.textAlign = "center"
        noTasks.style.justifySelf = "center"
        noTasks.style.width = "fit-content"
        noTasks.textContent = "No Tasks."
        document.getElementById("tasks-list").append(noTasks)
    }

    document.getElementById("inbox").classList.add("active-sidebar")
    document.getElementById("today").classList.remove("active-sidebar")
    document.getElementById("this-week").classList.remove("active-sidebar")
    document.getElementById("this-month").classList.remove("active-sidebar")

    document.getElementById("current-view-port").textContent = "All Tasks"

    if (document.querySelector(".project-current").classList.contains("project-current") != null) {
        document.querySelector(".project-current").classList.remove("project-current")
    }
    inboxView = true;

}

// Renders only todays tasks to the DOM
document.getElementById("today").addEventListener("click", function() {
    document.querySelectorAll(".example-task-wrapper").forEach(element => {element.remove()})
    todayTaskRenderer()
})
function todayTaskRenderer() {

    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    today = dd + '.' + mm + '.' + yyyy + ".";

    toDoParent.allProjects.forEach( element => {
        element.allItems.forEach(element => {
            console.log("element.dueDate",element.dueDate)
            console.log(today)
            if (element.dueDate == today) renderTaskToDom(element)
        })
    })

    if (document.getElementById("tasks-list").firstChild === null) {
        let noTasks = document.createElement("p")
        noTasks.classList.add("example-task-wrapper")
        noTasks.style.textAlign = "center"
        noTasks.style.justifySelf = "center"
        noTasks.style.width = "fit-content"
        noTasks.textContent = "No Tasks for Today."
        document.getElementById("tasks-list").append(noTasks)
    }

    document.getElementById("inbox").classList.remove("active-sidebar")
    document.getElementById("today").classList.add("active-sidebar")
    document.getElementById("this-week").classList.remove("active-sidebar")
    document.getElementById("this-month").classList.remove("active-sidebar")

    document.getElementById("current-view-port").textContent = "Today's Tasks"

    if (document.querySelector(".project-current").classList.contains("project-current") != null) {
        document.querySelector(".project-current").classList.remove("project-current")
    }

    inboxView = false;
}

// Renders only this weeks tasks to the DOM
document.getElementById("this-week").addEventListener("click", function() {
    document.querySelectorAll(".example-task-wrapper").forEach(element => {element.remove()})
    weekTaskRenderer()
})
function weekTaskRenderer() {

    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();
    today = yyyy + " " + mm + " " + dd

    let currentWeek = reformatDate(today, "yyyy mm dd")
    currentWeek = getWeek( new Date(today))

    toDoParent.allProjects.forEach( element => {
        element.allItems.forEach(element => {
            let tasksWeek = reformatDate(element.dueDate, "yyyy mm dd")
            let elementYear = tasksWeek.slice(0,4)
            tasksWeek = getWeek( new Date(tasksWeek))
            if (tasksWeek === currentWeek && yyyy == elementYear) renderTaskToDom(element)
        })
    })

    if (document.getElementById("tasks-list").firstChild === null) {
        let noTasks = document.createElement("p")
        noTasks.classList.add("example-task-wrapper")
        noTasks.style.textAlign = "center"
        noTasks.style.justifySelf = "center"
        noTasks.style.width = "fit-content"
        noTasks.textContent = "No Tasks for the current Week."
        document.getElementById("tasks-list").append(noTasks)
    }

    document.getElementById("inbox").classList.remove("active-sidebar")
    document.getElementById("today").classList.remove("active-sidebar")
    document.getElementById("this-week").classList.add("active-sidebar")
    document.getElementById("this-month").classList.remove("active-sidebar")

    document.getElementById("current-view-port").textContent = "This Week's Tasks"

    if (document.querySelector(".project-current").classList.contains("project-current") != null) {
        document.querySelector(".project-current").classList.remove("project-current")
    }
    inboxView = false;
}

// Renders only this month's tasks to the DOM
document.getElementById("this-month").addEventListener("click", function() {
    document.querySelectorAll(".example-task-wrapper").forEach(element => {element.remove()})
    monthTaskRenderer()
})
function monthTaskRenderer() {

    let today = new Date();
    let currentMonth = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    // padStart Sets the maximum width of the string we want to extract and fills it with te next specified element from the left/beginning of the string in this case is "0"

    toDoParent.allProjects.forEach( element => {
        element.allItems.forEach(element => {
            if (element.dueDate.slice(3,5) === currentMonth) renderTaskToDom(element)
        })
    })


    if (document.getElementById("tasks-list").firstChild === null) {
        let noTasks = document.createElement("p")
        noTasks.classList.add("example-task-wrapper")
        noTasks.style.textAlign = "center"
        noTasks.style.justifySelf = "center"
        noTasks.style.width = "fit-content"
        noTasks.textContent = "No Tasks for the current Month."
        document.getElementById("tasks-list").append(noTasks)
    }

    document.getElementById("inbox").classList.remove("active-sidebar")
    document.getElementById("today").classList.remove("active-sidebar")
    document.getElementById("this-week").classList.remove("active-sidebar")
    document.getElementById("this-month").classList.add("active-sidebar")

    document.getElementById("current-view-port").textContent = "This Month's Tasks"

    if (document.querySelector(".project-current").classList.contains("project-current") != null) {
        document.querySelector(".project-current").classList.remove("project-current")
    }
    inboxView = false;
}
//#endregion


//#region  ---- Sort By Logic and Rendering ----
// Sorts the current Project tasks by priority
document.getElementById("sort-priority").addEventListener("click", function(pointer) {
    sortByPriority(pointer)
})
function sortByPriority(pointer) {

    
    if (pointer.srcElement.classList.contains("low-to-high")) {
        pointer.srcElement.classList.remove("low-to-high")
        pointer.srcElement.classList.add("high-to-low")
        pointer.srcElement.innerText = "Priority: Descending"
        document.getElementById("sort-by-text").innerText = "Priority: Descending"
    } else {
        pointer.srcElement.classList.remove("high-to-low")
        pointer.srcElement.classList.add("low-to-high")
        pointer.srcElement.innerText = "Priority: Ascending"
        document.getElementById("sort-by-text").innerText = "Priority: Ascending"

    }

    if (document.getElementById("current-view-port").innerText == "All Tasks") {
        document.querySelectorAll(".example-task-wrapper").forEach(element => {element.remove()})
        if (pointer.srcElement.classList.contains("high-to-low")) {
            toDoParent.allProjects.forEach( element => {
                element.allItems.forEach(element => {
                    if (element.priority === "Urgent Priority") renderTaskToDom(element)
                })
            })
            toDoParent.allProjects.forEach( element => {
                element.allItems.forEach(element => {
                    if (element.priority === "Regular Priority") renderTaskToDom(element)
                })
            })
            toDoParent.allProjects.forEach( element => {
                element.allItems.forEach(element => {
                    if (element.priority === "Low Priority") renderTaskToDom(element)
                })
            })
        } else {
            toDoParent.allProjects.forEach( element => {
                element.allItems.forEach(element => {
                    if (element.priority === "Low Priority") renderTaskToDom(element)
                })
            })
            toDoParent.allProjects.forEach( element => {
                element.allItems.forEach(element => {
                    if (element.priority === "Regular Priority") renderTaskToDom(element)
                })
            })
            toDoParent.allProjects.forEach( element => {
                element.allItems.forEach(element => {
                    if (element.priority === "Urgent Priority") renderTaskToDom(element)
                })
            })
        }
    } else {
        let textWrapper = document.getElementById("tasks-list").childNodes
        let itemList = [];
        textWrapper.forEach( element => {
            itemList.push(element.firstChild.id)
        })
        document.querySelectorAll(".example-task-wrapper").forEach(element => {element.remove()})
        if (pointer.srcElement.classList.contains("high-to-low")) {
            itemList.forEach( item => {
                toDoParent.allProjects.forEach( element => {
                    element.allItems.forEach(element => {
                        if (element.id == item) {
                            if (element.priority === "Urgent Priority") renderTaskToDom(element)
                        }
                    })
                })
            })
            itemList.forEach( item => {
                toDoParent.allProjects.forEach( element => {
                    element.allItems.forEach(element => {
                        if (element.id == item) {
                            if (element.priority === "Regular Priority") renderTaskToDom(element)
                        }
                    })
                })
            })
            itemList.forEach( item => {
                toDoParent.allProjects.forEach( element => {
                    element.allItems.forEach(element => {
                        if (element.id == item) {
                            if (element.priority === "Low Priority") renderTaskToDom(element)
                        }
                    })
                })
            })
        } else {
            itemList.forEach( item => {
                toDoParent.allProjects.forEach( element => {
                    element.allItems.forEach(element => {
                        if (element.id == item) {
                            if (element.priority === "Low Priority") renderTaskToDom(element)
                        }
                    })
                })
            })
            itemList.forEach( item => {
                toDoParent.allProjects.forEach( element => {
                    element.allItems.forEach(element => {
                        if (element.id == item) {
                            if (element.priority === "Regular Priority") renderTaskToDom(element)
                        }
                    })
                })
            })
            itemList.forEach( item => {
                toDoParent.allProjects.forEach( element => {
                    element.allItems.forEach(element => {
                        if (element.id == item) {
                            if (element.priority === "Urgent Priority") renderTaskToDom(element)
                        }
                    })
                })
            })
        }
    }

    document.querySelectorAll(".task-priority").forEach( element => {
        element.style.fontWeight = "900"
    })

    document.getElementById("sort-check").innerText = "Check"
    document.getElementById("sort-check").classList = "order-by-options checked-last"

    document.getElementById("sort-date").innerText = "Due Date"
    document.getElementById("sort-date").classList = "order-by-options farther-to-closer"

    document.getElementById("sort-creation-date").innerText = "Creation Date"
    document.getElementById("sort-creation-date").classList = "order-by-options last-created-first"
}

// Sorts the current tasks by date
document.getElementById("sort-date").addEventListener("click", function(event) {
    sortByDate(event)
})
function sortByDate(event) {

    let orderedDates = [];

    let textWrapper = document.getElementById("tasks-list").childNodes
    let itemList = [];
    textWrapper.forEach( element => {
        itemList.push(element.firstChild.id)
    })
    document.querySelectorAll(".example-task-wrapper").forEach(element => {element.remove()})

    itemList.forEach( item => {
        toDoParent.allProjects.forEach( element => {
            element.allItems.forEach(element => {
                if (element.id == item) {
                    orderedDates.push([element.dateValue, element.id])
                    // console.log("element.dueDate:",element.id)
                    // console.log("element.dateValue:",element.dateValue)
                }
            })
        })
    })

    orderedDates.sort()
    console.log("orderedDates:",orderedDates)

    document.querySelectorAll(".example-task-wrapper").forEach(element => {element.remove()})
    if (event.srcElement.classList.contains("closer-to-farther")){
        event.srcElement.classList.remove("closer-to-farther")
        event.srcElement.classList.add("farther-to-closer")
        event.srcElement.innerText = "Due Date: Ascending"
        document.getElementById("sort-by-text").innerText = "Due Date: Descending"

        orderedDates.reverse()
    } else {
        event.srcElement.classList.remove("farther-to-closer")
        event.srcElement.classList.add("closer-to-farther")
        event.srcElement.innerText = "Due Date: Descending"
        document.getElementById("sort-by-text").innerText = "Due Date: Ascending"
    }

    do {
        toDoParent.allProjects.every( element => {
            element.allItems.every(task => {
                console.log("orderedDates.length",orderedDates.length)
                if (orderedDates.length == 0) {
                    return false;
                }
                if (task.id == orderedDates[0][1]) {
                    console.log("item[1]", orderedDates[0][1])
                    renderTaskToDom(task)
                    orderedDates.shift()
                    if (orderedDates.length == 0) {
                        return false;
                    }
                }
                return true
            })
            if (orderedDates.length == 0) {
                return false;
            }
            return true
        }) 
    } while (orderedDates.length != 0) 

    document.querySelectorAll(".due-date").forEach( element => {
        element.style.fontWeight = "900"
    })

    document.getElementById("sort-check").innerText = "Check"
    document.getElementById("sort-check").classList = "order-by-options checked-last"

    document.getElementById("sort-priority").innerText = "Priority"
    document.getElementById("sort-priority").classList = "order-by-options low-to-high"

    document.getElementById("sort-creation-date").innerText = "Creation Date"
    document.getElementById("sort-creation-date").classList = "order-by-options last-created-first"

}

// Sorts the current tasks by checked
document.getElementById("sort-check").addEventListener("click", function(pointer) {
    sortByCheckedStatus(pointer)
})
function sortByCheckedStatus(pointer) {

    if (pointer.srcElement.classList.contains("checked-first")) {
        pointer.srcElement.classList.remove("checked-first")
        pointer.srcElement.classList.add("checked-last")
        pointer.srcElement.innerText = "Checked: First"
        document.getElementById("sort-by-text").innerText = "Checked: Last"


    } else {
        pointer.srcElement.classList.remove("checked-last")
        pointer.srcElement.classList.add("checked-first")
        pointer.srcElement.innerText = "Checked: Last"
        document.getElementById("sort-by-text").innerText = "Checked: First"

    }


    if (inboxView) {

        if (pointer.srcElement.classList.contains("checked-first")) {
            toDoParent.allProjects.every( element => {
                if (element.name === currentProject) {
                    element.allItems.forEach(element => {
                        if (element.checked === "Checked") renderTaskToDom(element)
                    })
                    return false
                }
                return true
            })
            toDoParent.allProjects.every( element => {
                if (element.name === currentProject) {
                    element.allItems.forEach(element => {
                        if (element.checked === "Unchecked") renderTaskToDom(element)
                    })
                    return false
                }
                return true
            })
        } else {
            toDoParent.allProjects.every( element => {
            if (element.name === currentProject) {
                element.allItems.forEach(element => {
                    if (element.checked === "Unchecked") renderTaskToDom(element)
                })
                return false
            }
            return true
            })
            toDoParent.allProjects.every( element => {
                if (element.name === currentProject) {
                    element.allItems.forEach(element => {
                        if (element.checked === "Checked") renderTaskToDom(element)
                    })
                    return false
                }
                return true
            })
        }
    } else {

        let textWrapper = document.getElementById("tasks-list").childNodes
        let itemList = [];
        textWrapper.forEach( element => {
            itemList.push(element.firstChild.id)
        })
        document.querySelectorAll(".example-task-wrapper").forEach(element => {element.remove()})

        if (pointer.srcElement.classList.contains("checked-first")) {
            itemList.forEach( item => {
                toDoParent.allProjects.forEach( element => {
                    element.allItems.forEach(element => {
                        if (element.id == item) {
                            if (element.checked === "Checked") renderTaskToDom(element)
                        }
                    })
                })
            })
            itemList.forEach( item => {
                toDoParent.allProjects.forEach( element => {
                    element.allItems.forEach(element => {
                        if (element.id == item) {
                            if (element.checked === "Unchecked") renderTaskToDom(element)
                        }
                    })
                })
            })
        } else {
            itemList.forEach( item => {
                toDoParent.allProjects.forEach( element => {
                    element.allItems.forEach(element => {
                        if (element.id == item) {
                            if (element.checked === "Unchecked") renderTaskToDom(element)
                        }
                    })
                })
            })
            itemList.forEach( item => {
                toDoParent.allProjects.forEach( element => {
                    element.allItems.forEach(element => {
                        if (element.id == item) {
                            if (element.checked === "Checked") renderTaskToDom(element)
                        }
                    })
                })
            })
        }
    }

    document.getElementById("sort-priority").innerText = "Priority"
    document.getElementById("sort-priority").classList = "order-by-options low-to-high"
    document.getElementById("sort-date").innerText = "Due Date"
    document.getElementById("sort-date").classList = "order-by-options farther-to-closer"
    document.getElementById("sort-creation-date").innerText = "Creation Date"
    document.getElementById("sort-creation-date").classList = "order-by-options last-created-first"
}

// Sorts task items by creation date
document.getElementById("sort-creation-date").addEventListener("click", function(pointer) {
    sortByCreationDate(pointer);

})
function sortByCreationDate(pointer) {

    let textWrapper = document.getElementById("tasks-list").childNodes
    let itemList = [];
    textWrapper.forEach( element => {
        itemList.push(element.firstChild.id)
    })

    let sortedItemListByObjectOrder = [];
    toDoParent.allProjects.forEach( element => {
        element.allItems.forEach(element => {
            itemList.forEach( item => {
                if (item == element.id) sortedItemListByObjectOrder.push(element.id)
            })
        })
    })

    document.querySelectorAll(".example-task-wrapper").forEach(element => {element.remove()})
    if (pointer.srcElement.classList.contains("last-created-first")) {
        pointer.srcElement.classList.remove("last-created-first")
        pointer.srcElement.classList.add("first-created-first")
        pointer.srcElement.innerText = "Creation Date: Descending"
        document.getElementById("sort-by-text").innerText = "Creation Date: Ascending"

        sortedItemListByObjectOrder.reverse()
    } else {
        pointer.srcElement.classList.remove("first-created-first")
        pointer.srcElement.classList.add("last-created-first")
        pointer.srcElement.innerText = "Creation Date: Ascending"
        document.getElementById("sort-by-text").innerText = "Creation Date: Descending"

    }

    console.log("itemList[0]",itemList[0])
    sortedItemListByObjectOrder.forEach( item => {
        toDoParent.allProjects.forEach( element => {
            element.allItems.forEach(element => {
                if (element.id == item) {
                    renderTaskToDom(element)
                }
            })
        })
    })


    document.getElementById("sort-priority").innerText = "Priority"
    document.getElementById("sort-priority").classList = "order-by-options low-to-high"
    document.getElementById("sort-date").innerText = "Due Date"
    document.getElementById("sort-date").classList = "order-by-options farther-to-closer"
    document.getElementById("sort-check").innerText = "Check"
    document.getElementById("sort-check").classList = "order-by-options checked-last"
}

//#endregion

// Adds the Sort by list on click listener
let orderByNode = document.getElementById("sort-by-text")
orderByNode.addEventListener("click", () => {
        
    if (document.getElementById("dropdown").style.visibility == "unset"){
        document.getElementById("dropdown").style.visibility = "hidden"
    } else {
        document.getElementById("dropdown").style.visibility = "unset"
    }

})

// Hides the Sort by list from the DOM
window.onclick = function(event) {
    if (!event.target.matches('#sort-by-text')) {
        document.getElementById("dropdown").style.visibility = "hidden"
    }
}

export { startupRenderProjectTasks, startupLibrarySidebarRenderer, addNewProject, updateRenderProjectTasks, addTaskInterface}