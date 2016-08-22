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
                var url = "http://localhost:4000/register";// get this from BASEURL_PYRAMID
                $http({
                    method: "POST",
                    url: url,
                    data: $scope.viewModel,  // pass in data as JSON
                    headers: {"Content-Type": "application/json"}
                })
                .then(
                    function (response) {
                        console.log("success response: " + response);
                        window.alert("success response: " + response);
                    },

                    function (response) {
                        console.log("error response: " + response);
                        window.alert("error response: " + response);
                    }
                );
            };
        }
    ]
);