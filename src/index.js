import { startupRenderProjectTasks, startupLibrarySidebarRenderer, tasksInitialEventAdder, addNewProject, addTaskInterface} from './DOMManipulation'
import {getDay, getWeek, isToday} from 'date-fns'
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

function storageAvailable(type) {
    let storage;
    try {
        storage = window[type];
        const x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}

if (storageAvailable('localStorage')) {
    // Yippee! We can use localStorage awesomeness

    console.log(localStorage)
    if (localStorage.length != 0) {
        // try {
            if (window.localStorage.length < 1) {
                window.localStorage.clear()
                const toDoListProject = new createProject("To Do List Project")
                const testProject = new createProject("Test Project")  

                createToDoItem("Complete The To Do List","Do it.","16.07.2022.","Urgent Priority","notes for todo item","Checked",toDoListProject);
                createToDoItem("Solve the quantum paradigm","Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis obcaecati consequuntur distinctio, fugiat ad magnam, ex optio ducimus officia minus reprehenderit quaerat! Eos, dolorum esse!","18.08.2022.","Urgent Priority","notes for todo item","Unchecked",toDoListProject);
                createToDoItem("Pick up Money","Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis obcaecati consequuntur distinctio, fugiat ad magnam, ex optio ducimus officia minus reprehenderit quaerat! Eos, dolorum esse!","17.07.2022.","Urgent Priority","notes for todo item","Unchecked",toDoListProject);
                createToDoItem("Figure the Almond Principle","Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis obcaecati consequuntur distinctio, fugiat ad magnam, ex optio ducimus officia minus reprehenderit quaerat! Eos, dolorum esse!","16.07.2022.","Low Priority","notes for todo item","Unchecked",toDoListProject);
                createToDoItem("Compute the Pi figure number","Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis obcaecati consequuntur distinctio, fugiat ad magnam, ex optio ducimus officia minus reprehenderit quaerat! Eos, dolorum esse!","13.09.2022.","Regular Priority","notes for todo item","Unchecked",toDoListProject);
                createToDoItem("Continue the disillusion of the delusion","Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis obcaecati consequuntur distinctio, fugiat ad magnam, ex optio ducimus officia minus reprehenderit quaerat! Eos, dolorum esse!","05.07.2022.","Urgent Priority","notes for todo item","Unchecked",toDoListProject);
                createToDoItem("Solve the Quadratic Minpel's Equation","Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis obcaecati consequuntur distinctio, fugiat ad magnam, ex optio ducimus officia minus reprehenderit quaerat! Eos, dolorum esse!","18.08.2022.","Low Priority","notes for todo item","Unchecked",toDoListProject);
                createToDoItem("Smack that number key","Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis obcaecati consequuntur distinctio, fugiat ad magnam, ex optio ducimus officia minus reprehenderit quaerat! Eos, dolorum esse!","12.07.2022.","Low Priority","notes for todo item","Unchecked",toDoListProject);
                createToDoItem("Solve the Quadratic Minpel's Equation","Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis obcaecati consequuntur distinctio, fugiat ad magnam, ex optio ducimus officia minus reprehenderit quaerat! Eos, dolorum esse!","18.08.2022.","Low Priority","notes for todo item","Unchecked",testProject);
                createToDoItem("Smack that number key","Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis obcaecati consequuntur distinctio, fugiat ad magnam, ex optio ducimus officia minus reprehenderit quaerat! Eos, dolorum esse!","12.07.2022.","Low Priority","notes for todo item","Unchecked",testProject);
                
            }
            else {
                for (let i=0;i<window.localStorage.length;i++) {

                    try {
                        let projectToLoad = JSON.parse(window.localStorage.getItem(window.localStorage.key(i)))
                    console.log(JSON.parse(window.localStorage.getItem(window.localStorage.key(i))))
                    Object.setPrototypeOf(projectToLoad, toDoParent)
                    console.log(projectToLoad)
                    toDoParent.allProjects.push(projectToLoad)
                    projectToLoad.allItems.forEach(element => {
                        Object.setPrototypeOf(element, projectToLoad)
                    });
                    }
                    catch (err) { }
                }
            }
    }
        // catch {
        //     alert("Can not access local Storage. All data will be lost on page refresh or close.")
        // }

        // finally {}
  }
  else {
    // Too bad, no localStorage for us
    alert("Can not access local Storage. All data will be lost on page refresh or close.")
  }

console.log("-----------------------")




//#region ---- Default_Project Task Object data insertion ----
// window.localStorage.clear()
// const toDoListProject = new createProject("To Do List Project")
// const testProject = new createProject("Test Project")  



// createToDoItem("Complete The To Do List","Do it.","16.07.2022.","Urgent Priority","notes for todo item","Unchecked",toDoListProject);
// createToDoItem("Solve the quantum paradigm","Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis obcaecati consequuntur distinctio, fugiat ad magnam, ex optio ducimus officia minus reprehenderit quaerat! Eos, dolorum esse!","18.08.2022.","Urgent Priority","notes for todo item","Unchecked",toDoListProject);
// createToDoItem("Pick up Money","Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis obcaecati consequuntur distinctio, fugiat ad magnam, ex optio ducimus officia minus reprehenderit quaerat! Eos, dolorum esse!","17.07.2022.","Urgent Priority","notes for todo item","Unchecked",toDoListProject);
// createToDoItem("Figure the Almond Principle","Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis obcaecati consequuntur distinctio, fugiat ad magnam, ex optio ducimus officia minus reprehenderit quaerat! Eos, dolorum esse!","16.07.2022.","Low Priority","notes for todo item","Unchecked",toDoListProject);
// createToDoItem("Compute the Pi figure number","Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis obcaecati consequuntur distinctio, fugiat ad magnam, ex optio ducimus officia minus reprehenderit quaerat! Eos, dolorum esse!","13.09.2022.","Regular Priority","notes for todo item","Unchecked",toDoListProject);
// createToDoItem("Continue the disillusion of the delusion","Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis obcaecati consequuntur distinctio, fugiat ad magnam, ex optio ducimus officia minus reprehenderit quaerat! Eos, dolorum esse!","05.07.2022.","Urgent Priority","notes for todo item","Unchecked",toDoListProject);
// createToDoItem("Solve the Quadratic Minpel's Equation","Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis obcaecati consequuntur distinctio, fugiat ad magnam, ex optio ducimus officia minus reprehenderit quaerat! Eos, dolorum esse!","18.08.2022.","Low Priority","notes for todo item","Unchecked",toDoListProject);
// createToDoItem("Smack that number key","Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis obcaecati consequuntur distinctio, fugiat ad magnam, ex optio ducimus officia minus reprehenderit quaerat! Eos, dolorum esse!","12.07.2022.","Low Priority","notes for todo item","Unchecked",toDoListProject);
// createToDoItem("Solve the Quadratic Minpel's Equation","Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis obcaecati consequuntur distinctio, fugiat ad magnam, ex optio ducimus officia minus reprehenderit quaerat! Eos, dolorum esse!","18.08.2022.","Low Priority","notes for todo item","Unchecked",testProject);
// createToDoItem("Smack that number key","Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis obcaecati consequuntur distinctio, fugiat ad magnam, ex optio ducimus officia minus reprehenderit quaerat! Eos, dolorum esse!","12.07.2022.","Low Priority","notes for todo item","Unchecked",testProject);



// toDoParent.allProjects.forEach( project => {
    
//     window.localStorage.setItem(project.name, JSON.stringify(project))
//     console.log("AA")
// })


// for (let i=0;i<localStorage.length;i++) {

//     if (localStorage.key(i).slice(0,7) == "Project") {
//         let projectToLoad = JSON.parse(localStorage.getItem(localStorage.key(i)))
//         console.log(JSON.parse(localStorage.getItem(localStorage.key(i))))
//         Object.setPrototypeOf(projectToLoad, toDoParent)
//         console.log(projectToLoad)
//         toDoParent.allProjects.push(projectToLoad)
//     }
// }

// toDoParent.allProjects.every( project => {
//     project.allItems.forEach( item => {
//         window.localStorage.setItem(item.id, JSON.stringify(item))
//     })
// })


// toDoParent.allProjects.forEach( project => {
//     window.localStorage.setItem(project.name, JSON.stringify(project))
//     project.allItems.forEach( item => {
//         window.localStorage.setItem(item.id, JSON.stringify(item))
//     })
// })

// console.log("ITEM TASK",JSON.parse(window.localStorage.getItem('Complete The To Do List')))

// console.log("localStorage",localStorage)
// for (var i = 0; i < localStorage.length; i++){
//     console.log("JSON.parse(item)", JSON.parse(localStorage.getItem(localStorage.key(i))))
//     let holder = JSON.parse(localStorage.getItem(localStorage.key(i)))
//     Object.setPrototypeOf(holder, testProject)
//     testProject.allItems.push(holder)
//     // $('body').append(localStorage.getItem(localStorage.key(i)));
// }

// console.log("testProject.allItems[4].name",testProject.allItems[4])

// let objectFromStorage = JSON.parse(localStorage.getItem('Solve the quantum paradigm'))

// console.log("objectFromStorage",objectFromStorage.id)
//         window.localStorage.clear()
//         console.log("Solve the quantum paradigm",localStorage.getItem('Solve the quantum paradigm'))
        

// console.log("testProject.allItems",testProject.allItems)

// let itemToChange = testProject.allItems[0]
// console.log("itemToChange",itemToChange)
// Object.setPrototypeOf(itemToChange, toDoListProject);
// console.log("itemToChange",itemToChange)

//#endregion


startupRenderProjectTasks()
startupLibrarySidebarRenderer()
addTaskInterface()
addNewProject()

//#region ---- Leftover, practice, tested code ----

// console.log("user proto",Object.getPrototypeOf(user))

// console.log(Object.getPrototypeOf(user))
// Object.setPrototypeOf(user, toDoParent);
// console.log(toDoParent.isPrototypeOf(user))
// console.log(typeof user)
// console.log(Object.getPrototypeOf(user))
// console.log(Object.getOwnPropertyNames(toDoParent).filter(item => typeof toDoParent[item] === 'function'))

// user.summary()
// console.log(user)
// console.log("defaultProject's items:",defaultProject.allItems)
// console.log("toDoParent's projects:",toDoParent.allProjects)

// var today = new Date();
// var dd = String(today.getDate()).padStart(2, '0');
// var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
// var yyyy = today.getFullYear();
// today = yyyy + " " + mm + " " + dd

// console.log("today for week",today)
// let week = getWeek( new Date(today))
// console.log("current week",week)

// today = mm + '.' + dd + '.' + yyyy + ".";
// console.log("Today's Date",today);
//#endregion

export { toDoParent, createToDoItem, createProject }



