keepApp.service('notesService', function () {
    this.notes = [];
    this.addNote = function(title, content) {
        var note = { title: title, content: content};
        this.notes.push(note);
    }
});