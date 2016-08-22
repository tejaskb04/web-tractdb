/**
 * Created by Tejas on 8/7/2016.
 */
var app = angular.module("registerApp", []);

app.controller("registerController",
    [
        "$scope", "$http", "$window",
        function($scope, $http, $window) {
            $scope.viewModel = {};
            $scope.submitRegisterForm = function() {
                console.log("register submit called");
                window.alert(this.viewModel.account);
                window.alert(this.viewModel.password);
            }
        }
    ]
);