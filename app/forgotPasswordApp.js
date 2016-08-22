/**
 * Created by Tejas on 8/7/2016.
 */
var app = angular.module("forgotPasswordApp", []);

app.controller("forgotPasswordController",
    [
        "$scope", "$http", "$window",
        function($scope, $http, $window) {
            $scope.viewModel = {};
            $scope.submitForgotPasswordForm = function() {
                console.log("forgotPassword submit called");
                window.alert(this.viewModel.account);
            }
        }
    ]
);