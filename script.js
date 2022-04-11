var app = angular.module('myapp', [])
const url = 'https://api.sampleapis.com/futurama/characters'
app.controller('mycontroller', function($scope, $http) {
    $http.get(url).then(function(response) {
         console.log(response);
         $scope.alldata = response.data
    }, function(err) {
        console.log(err)
    })
})