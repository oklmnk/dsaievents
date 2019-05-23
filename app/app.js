
function EventsController($scope, $http) {
    
    $http.get('/assets/js/events.json').success(function(data) {
        $scope.events = data;
    });

}