import './stylesheet.css'

// Create the parent object logic for manipulating data from toDoChild child objects
const toDoParent = {
    allProjects: [],
    summary:  function() {
        console.log(this.title, this.description, this.dueDate, this.priority, this.notes, this.checklist)
    }

}

// Factory function to create a To Do item
function createProject(getName) {

    let project = Object.create(toDoParent)

    project.name = getName + Math.random(10);
    project.allItems = [];
    toDoParent.allProjects.push(project)

    return project;
}

function createToDoItem(getTitle, getDescription, getDueDate, getPriority, getNotes, getChecklist, project) {

    let toDoChild = Object.create(project)

    toDoChild.id = getTitle + Math.random(10)
    toDoChild.title = getTitle
    toDoChild.description = getDescription
    toDoChild.dueDate = getDueDate
    toDoChild.priority = getPriority
    toDoChild.notes = getNotes
    toDoChild.checklist = getChecklist

    project.allItems.push(toDoChild)

    // Can create its own functions here too like this
    // toDoItem.summary = function() {
    //     console.log(this.title, this.description, this.dueDate, this.priority, this.notes, this.checklist)
    // }

    return toDoChild;
};

console.log("-----------------------")

const defaultProject = new createProject("Default_Project")  
let user = createToDoItem("Title of item","description of item","date","high priority","notes for todo item","checked item",defaultProject);
createToDoItem("Title of item","description of item","date","high priority","notes for todo item","checked item",defaultProject);
createToDoItem("Title of item","description of item","date","high priority","notes for todo item","checked item",defaultProject);
createToDoItem("Title of item","description of item","date","high priority","notes for todo item","checked item",defaultProject);
createToDoItem("Title of item","description of item","date","high priority","notes for todo item","checked item",defaultProject);
createToDoItem("Title of item","description of item","date","high priority","notes for todo item","checked item",defaultProject);
createToDoItem("Title of item","description of item","date","high priority","notes for todo item","checked item",defaultProject);

console.log("user proto",Object.getPrototypeOf(user))

// console.log(Object.getPrototypeOf(user))
// Object.setPrototypeOf(user, toDoParent);
// console.log(toDoParent.isPrototypeOf(user))
// console.log(typeof user)
// console.log(Object.getPrototypeOf(user))
// console.log(Object.getOwnPropertyNames(toDoParent).filter(item => typeof toDoParent[item] === 'function'))

user.summary()
// console.log(user)
console.log("defaultProject's items:",defaultProject.allItems)
console.log("toDoParent's projects:",toDoParent.allProjects)

// defaultProject.allItems.forEach(element => {

//     let fill = document.createElement("div")
//     fill.classList.add("task")

//     fill.textContent = element.id
    
//     document.getElementById("tasks-list").appendChild(fill)

// })

let currentProject;

startupRenderProjectTasks()


function startupRenderProjectTasks() {
    if (document.getElementById("tasks-list").firstChild == undefined) {
        
        defaultProject.allItems.forEach(element => {

            let fill = document.createElement("div")
            fill.classList.add("task")
        
            fill.textContent = element.id
            
            document.getElementById("tasks-list").appendChild(fill)
        
        })


    }

}

let projectDefault = document.createElement("div")
projectDefault.innerText = defaultProject.name
projectDefault.classList.add("project")
projectDefault.addEventListener("click", () => {
    updateRenderProjectTasks(projectDefault)
})
document.getElementById("projects-list").appendChild(projectDefault)
currentProject = projectDefault

console.log("currentProject",currentProject)



// Add event listeners to populate DOM with tasks
let button = document.getElementById("add-task")
button.addEventListener("click", () => {

    //Create element to append to DOM
    let task = document.createElement("div")
    task.classList.add("task")
    button.nextElementSibling.appendChild(task)

    console.log("check project status",document.getElementById("tasks-list").firstChild == undefined);

    // Go through each project object until its first element name matches the one on the DOM
    toDoParent.allProjects.forEach( element => {
        console.log("element",element.allItems)
        console.log("currentProject",currentProject.textContent)
        console.log("element.name",element.name)
        if (element.name == currentProject.textContent) {

            //Insert data from object to element
            console.log("element",element.name)
            // Create a task object and supply it with the corresponding project
            let taskPlaceholder = createToDoItem("Title","description of item","date","high priority","notes for todo item","checked item", element)
            //Insert data from object to element
            console.log("taskPlaceholder",taskPlaceholder)
            console.log("new proto",Object.getPrototypeOf(taskPlaceholder))
            console.log("user proto",Object.getPrototypeOf(user))
            task.textContent = taskPlaceholder.id;
        }
    })

    if (document.getElementById("tasks-list").firstChild.textContent == currentProject[0]) {
        alert("no project")
        }
    
    // console.log(createToDoItem("Title","description of item","date","high priority","notes for todo item","checked item",))
    // //Insert data from object to element
    // task.textContent = defaultProject.allItems[defaultProject.allItems.length - 1].id;
    // console.log(defaultProject)

})

// Add event listeners to populate DOM with projects
let addProject = document.getElementById("add-project")
addProject.addEventListener("click", () =>  {

    let project = document.createElement("div")
    project.classList.add("project")
    addProject.nextElementSibling.appendChild(project)

    let projectHolder = createProject("Project")
    project.textContent = toDoParent.allProjects[toDoParent.allProjects.length - 1].name
    console.log(toDoParent.allProjects)

    project.addEventListener("click", () => {
        updateRenderProjectTasks(project, projectHolder)
    })

})


function updateRenderProjectTasks(projectNode) {

    console.log("entered renderProjectTasks ",projectNode.textContent)

    // Set current working project
    currentProject = projectNode;

    toDoParent.allProjects.forEach( element => {
        if(element.name === projectNode.textContent) {
            
            document.querySelectorAll(".task").forEach(element => {element.remove()})

            // let projectHolder = document.getElementById("tasks-list")
            console.log("entering forEach ",element)
            element.allItems.forEach(element => {
                console.log("entered forEach ",projectNode.textContent)

                let fill = document.createElement("div")
                fill.classList.add("task")

                fill.textContent = element.id
                console.log("Hello",element)
    
                document.getElementById("tasks-list").appendChild(fill)

             })
        }
    })

}



