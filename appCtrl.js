
app.controller('directoryCtrl', function($scope,directoryFactory){
$scope.people = directoryFactory.people;
$scope.change = directoryFactory.change;
$scope.delete = directoryFactory.delete;
});
