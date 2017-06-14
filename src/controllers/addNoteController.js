keepApp.controller('AddNoteCtrl', ['$scope', 'notesService', function($scope, notesService) {
    $scope.showAll = false;
    $scope.title = "";
    $scope.content = "";
    $scope.addNote = function() {
        notesService.addNote($scope.title, $scope.content);
        $scope.title = "";
        $scope.content = "";
        $scope.showAll = false;
    }
}]);