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
                var url = "http://localhost:8080/register";// TODO: get this from BASEURL_PYRAMID
                $http({
                    method: "POST",
                    url: url,
                    data: $scope.viewModel,  // pass in data as JSON
                    headers: {"Content-Type": "application/json"}
                })
                .then(
                    function (response) {
                        console.log("register success response: " + response);
                        // TODO: on successful response, redirect user to dashboard
                    },

                    function (response) {
                        console.log("register error response: " + response);
                        // TODO: on error response, popup error message and keep user on the same page
                        window.alert("Registration failed, please try again.");
                    }
                );
            };
        }
    ]
);