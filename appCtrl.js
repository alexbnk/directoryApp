
app.controller('todoCtrl', function($scope,todoFactory){
$scope.tasks = todoFactory.tasks;
$scope.change = todoFactory.change;
$scope.delete = todoFactory.delete;
$scope.add = todoFactory.add;
});
