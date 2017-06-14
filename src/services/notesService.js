keepApp.service('notesService', function () {
    this.data = { searchTerm: '' };
    this.notes = [{title: 'Titulo1', content: 'Contenido1', color:'#CCC', edit: false}];

    this.addNote = function(title, content, color) {
        var note = { title: title, content: content, color: color, edit: false};
        this.notes.push(note);
    };
    this.editNote = function(index, title, content, color) {
        this.notes[index].title = title;
        this.notes[index].content = content;
        this.notes[index].color = color;
    }
    this.removeNote = function(index) {
        this.notes.splice(index, 1);
    };
});