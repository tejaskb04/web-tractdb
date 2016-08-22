/**
 * Created by Tejas on 8/7/2016.
 */
var app = angular.module("loginApp", []);

app.controller("loginController",
    [
        "$scope", "$http", "$window",
        function($scope, $http, $window) {
            $scope.viewModel = {};
            $scope.submitLoginForm = function() {
                console.log("submit called");
            }
        }
    ]
);