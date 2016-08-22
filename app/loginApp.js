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
                console.log("login submit called");
                
                var url = "http://localhost:8080/login";// TODO: get this from BASEURL_PYRAMID
                $http({
                    method: "POST",
                    url: url,
                    data: $scope.viewModel,  // pass in data as JSON
                    headers: {"Content-Type": "application/json"}
                })
                .then(
                    function (response) {
                        console.log("login success response: " + response);
                        // TODO: on successful response, redirect user to dashboard
                    },

                    function (response) {
                        console.log("login error response: " + response);
                        // TODO: on error response, popup error message and keep user on the same page
                        window.alert("Invalid username or password.");
                    }
                );
            }
        }
    ]
);