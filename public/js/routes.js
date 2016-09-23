'use strict';

angular.module('app').config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
    function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/dataInfo');

        $stateProvider
          .state('dataInfo',{
            url:'/dataInfo',
            templateUrl:'js/page/dataInfo.html',
            controller:'dataInfoCtrl'
           })

     }
]);