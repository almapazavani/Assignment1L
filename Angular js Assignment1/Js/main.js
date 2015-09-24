/// <reference path="../bower_components/angular/angular.js" />

var app = angular.module("logindemo", [])
    .controller("LoginController", function ($scope) {
        $scope.checkLogin = function () {
            if ($scope.username === "nosql" && $scope.password === "html5") {
                alert("Wellcome to hell");
            }
            else {
                alert("Invalid User");
            }
        };
    });