keepApp.controller('notesListCtrl', ['$scope', 'notesService', function($scope, notesService) {
    $scope.notes = notesService.notes;
    $scope.data = notesService.data;

    $scope.removeNote = function(index) {
        notesService.removeNote(index);
    };
    $scope.changeEditMode = function(index) {
        var editValue = $scope.notes[index].edit;
        $scope.notes[index].edit = !editValue;
    }
    $scope.filterCards = function(element) {
        var term = $scope.data.searchTerm.toLowerCase();
        var titleLowerCase = element.title.toLowerCase();
        var contentLowerCase = element.content.toLowerCase();
        return titleLowerCase.includes(term) || contentLowerCase.includes(term)
    };
}]);