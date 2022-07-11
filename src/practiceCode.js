

const toDOItem = {
    title: "title",
    description: "description",
    dueDate: "dueDate",
    priority: "priority",
    notes: "notes",
    checklist: "checklist",

    summary: function() {
        console.log("First way:",this.title, this.description, this.dueDate, this.priority, this.notes, this.checklist)
    }
}

toDOItem.summary()