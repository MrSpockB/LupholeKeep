keepApp.controller('notesListCtrl', ['$scope', '$http', 'notesService', function($scope, $http, notesService) {
    $scope.notes = [];
    notesService.getNotes().then(function(resp) {
        $scope.notes = resp.data;
        notesService.notes = $scope.notes;
    });
    $scope.data = notesService.data;

    $scope.removeNote = function(index) {
        notesService.removeNote(index);
    };
    $scope.changeEditMode = function(index) {
        var editValue = $scope.notes[index].edit;
        var data = {
            title: $scope.notes[index].title,
            content: $scope.notes[index].content,
            color: $scope.notes[index].color

        }
        if(editValue) {
            var id = $scope.notes[index].id;
            $http.patch('http://0.0.0.0:3000/api/notes/' + id, data);
        }
        $scope.notes[index].edit = !editValue;
    }
    $scope.filterCards = function(element) {
        var term = $scope.data.searchTerm.toLowerCase();
        var titleLowerCase = element.title.toLowerCase();
        var contentLowerCase = element.content.toLowerCase();
        return titleLowerCase.includes(term) || contentLowerCase.includes(term)
    };
}]);