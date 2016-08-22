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

                var url = "http://localhost:8080/forgotPassword";// TODO: get this from BASEURL_PYRAMID
                $http({
                    method: "POST",
                    url: url,
                    data: $scope.viewModel,  // pass in data as JSON
                    headers: {"Content-Type": "application/json"}
                })
                .then(
                    function (response) {
                        console.log("forgotPassword success response: " + response);
                        // TODO: on successful response, redirect user to home page.
                    },

                    function (response) {
                        console.log("forgotPassword error response: " + response);
                        // TODO: on error response, do not show any error message. Instead, redirect user to home page
                    }
                );
            }
        }
    ]
);