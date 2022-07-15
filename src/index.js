import { startupRenderProjectTasks, startupLibrarySidebarRenderer, tasksInitialEventAdder, addNewProject, updateRenderProjectTasks, addTaskInterface} from './DOMManipulation'
import { compareAsc, format } from 'date-fns'
import './stylesheet.css'

// Create the parent object logic for manipulating data from toDoChild child objects
const toDoParent = {
    allProjects: [],
    summary:  function() {
        console.log(this.title, this.description, this.dueDate, this.priority, this.notes, this.checked)
    },
}

// Factory function to create a To Do item
function createProject(getName) {
    
    let project = Object.create(toDoParent)

    project.title = getName
    project.name = getName + Math.random(10);
    project.allItems = [];
    toDoParent.allProjects.push(project)

    return project;
}

// Create a To Do object
function createToDoItem(getTitle, getDescription, getDueDate, getPriority, getNotes, getChecked, project) {

    let toDoChild = Object.create(project)

    toDoChild.id = getTitle + Math.random(10)
    toDoChild.title = getTitle
    toDoChild.description = getDescription ? getDescription : ""
    toDoChild.dueDate = getDueDate ? getDueDate : "No Due Date"
    toDoChild.priority = getPriority ? getPriority : "Regular Priority"
    toDoChild.notes = getNotes ? getNotes : "No Notes"
    toDoChild.checked = "Unchecked"
    toDoChild.dateValue = (Number(getDueDate.slice(0,2))) + ((Number(getDueDate.slice(3,5)) - 1) * 30) + Number(getDueDate.slice(6,10) * 365)

    project.allItems.push(toDoChild)

    // Can create its own functions here too like this
    // toDoItem.summary = function() {
    //     console.log(this.title, this.description, this.dueDate, this.priority, this.notes, this.checklist)
    // }

    return toDoChild;
};

console.log("-----------------------")

const defaultProject = new createProject("Default_Project")  

//#region ---- Default_Project Task Object data insertion ----
let user = createToDoItem("Solve the quantum paradigm","Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis obcaecati consequuntur distinctio, fugiat ad magnam, ex optio ducimus officia minus reprehenderit quaerat! Eos, dolorum esse!","18.08.2022.","Urgent Priority","notes for todo item","Unchecked",defaultProject);
createToDoItem("Pick up Money","Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis obcaecati consequuntur distinctio, fugiat ad magnam, ex optio ducimus officia minus reprehenderit quaerat! Eos, dolorum esse!","17.07.2022.","Urgent Priority","notes for todo item","Unchecked",defaultProject);
createToDoItem("Figure the Almond Principle","Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis obcaecati consequuntur distinctio, fugiat ad magnam, ex optio ducimus officia minus reprehenderit quaerat! Eos, dolorum esse!","16.07.2022.","Low Priority","notes for todo item","Unchecked",defaultProject);
createToDoItem("Compute the Pi figure number","Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis obcaecati consequuntur distinctio, fugiat ad magnam, ex optio ducimus officia minus reprehenderit quaerat! Eos, dolorum esse!","13.09.2022.","Regular Priority","notes for todo item","Unchecked",defaultProject);
createToDoItem("Continue the disillusion of the delusion","Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis obcaecati consequuntur distinctio, fugiat ad magnam, ex optio ducimus officia minus reprehenderit quaerat! Eos, dolorum esse!","05.07.2022.","Urgent Priority","notes for todo item","Unchecked",defaultProject);
createToDoItem("Solve the Quadratic Minpel's Equation","Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis obcaecati consequuntur distinctio, fugiat ad magnam, ex optio ducimus officia minus reprehenderit quaerat! Eos, dolorum esse!","18.08.2022.","Low Priority","notes for todo item","Unchecked",defaultProject);
createToDoItem("Smack that number key","Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis obcaecati consequuntur distinctio, fugiat ad magnam, ex optio ducimus officia minus reprehenderit quaerat! Eos, dolorum esse!","06.07.2022.","Low Priority","notes for todo item","Unchecked",defaultProject);

//#endregion


console.log("user proto",Object.getPrototypeOf(user))

// console.log(Object.getPrototypeOf(user))
// Object.setPrototypeOf(user, toDoParent);
// console.log(toDoParent.isPrototypeOf(user))
// console.log(typeof user)
// console.log(Object.getPrototypeOf(user))
// console.log(Object.getOwnPropertyNames(toDoParent).filter(item => typeof toDoParent[item] === 'function'))

user.summary()
console.log(user)
console.log("defaultProject's items:",defaultProject.allItems)
console.log("toDoParent's projects:",toDoParent.allProjects)

startupRenderProjectTasks()
startupLibrarySidebarRenderer()
addTaskInterface()
addNewProject()

export { toDoParent, createToDoItem, createProject, defaultProject, user }



