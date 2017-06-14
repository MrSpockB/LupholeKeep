keepApp.controller('AddNoteCtrl', ['$scope', 'notesService', function($scope, notesService) {
    $scope.showAll = false;
    $scope.title = "";
    $scope.content = "";
    $scope.color = "";
    $scope.data = notesService.data;

    $scope.addNote = function() {
        var color = $scope.color || '#FFF';
        notesService.addNote($scope.title, $scope.content, color);
        $scope.resetValues();
    }
    $scope.resetValues = function() {
        $scope.title = "";
        $scope.content = "";
        $scope.color = "";
        $scope.showAll = false;
    }
}]);