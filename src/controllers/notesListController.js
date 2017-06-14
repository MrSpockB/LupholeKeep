keepApp.controller('notesListCtrl', ['$scope', 'notesService', function($scope, notesService) {
    $scope.notes = notesService.notes;
}]);