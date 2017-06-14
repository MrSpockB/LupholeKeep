keepApp.service('notesService', function ($http) {
    var vm = this;
    this.data = { searchTerm: '' };
    this.notes = [];

    this.addNote = function(title, content, color, categories, checkList) {
        var checkListFinal = [];
        checkList.map(function(item){
            if(item.text !== "") {
                checkListFinal.push(item);
            }
        });
        var note = {
            title: title,
            content: content,
            color: color,
            edit: false,
            categories: categories,
            checkList: checkListFinal
        };
        $http.post('http://0.0.0.0:3000/api/notes/', note)
            .then(function(resp){
                note.id = resp.data.id;
                vm.notes.push(note);
            });
    };
    this.removeNote = function(index) {
        var id = this.notes[index].id;
        $http.delete('http://0.0.0.0:3000/api/notes/' + id);
        this.notes.splice(index, 1);
    };

    this.getNotes = function() {
        return $http.get('http://0.0.0.0:3000/api/notes');
    }
});