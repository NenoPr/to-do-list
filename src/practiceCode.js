

const toDOItem = {
    title: "title name 1",
    description: "description",
    dueDate: "dueDate",
    priority: "priority",
    notes: "notes",
    checklist: "checklist",

    summary: function() {
        console.log("First way:",this.title, this.description, this.dueDate, this.priority, this.notes, this.checklist)
    },

    giveName: function() {
        return console.log(this.title);
    }
}

toDOItem.giveName()

let value = undefined
let name2 = value ? value : "Works"
console.log(name2)