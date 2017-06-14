keepApp.controller('AddNoteCtrl', ['$scope', 'notesService', function($scope, notesService) {
    $scope.showAll = false;
    $scope.title = "";
    $scope.content = "";
    $scope.color = "";
    $scope.categories = [ 'Development', 'Marketing', 'Sales' ];
    $scope.checkList = [{ checked: false, text: '' }];
    $scope.data = notesService.data;

    $scope.addNote = function() {
        var color = $scope.color || '#FFF';
        notesService.addNote($scope.title, $scope.content, color, $scope.categories, $scope.checkList);
        $scope.resetValues();
    }
    $scope.resetValues = function() {
        $scope.title = "";
        $scope.content = "";
        $scope.color = "";
        $scope.showAll = false;
        $scope.categories = [ 'Development', 'Marketing', 'Sales' ];
        $scope.checkList = [{ checked: false, text: '' }];
    }
    $scope.addItemToCheckList = function() {
        var item = { checked: false, text: '' };
        $scope.checkList.push(item);
    }
}]);