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
}]);