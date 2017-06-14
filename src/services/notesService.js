keepApp.service('notesService', function ($http) {
    var vm = this;
    this.data = { searchTerm: '' };
    this.notes = [];

    this.addNote = function(title, content, color) {
        var note = { title: title, content: content, color: color, edit: false};
        $http.post('http://0.0.0.0:3000/api/notes/', note)
            .then(function(resp){
                note.id = resp.data.id;
                vm.notes.push(note);
            });
    };
    this.editNote = function(index, title, content, color) {
        this.notes[index].title = title;
        this.notes[index].content = content;
        this.notes[index].color = color;
    }
    this.removeNote = function(index) {
        var id = this.notes[index].id;
        $http.delete('http://0.0.0.0:3000/api/notes/' + id);
        this.notes.splice(index, 1);
    };

    this.getNotes = function() {
        return $http.get('http://0.0.0.0:3000/api/notes');
    }
});