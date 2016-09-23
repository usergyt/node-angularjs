 
angular.module('dataInfoModule',['dataInfoServerModule'])
    .controller('dataInfoCtrl', ['$scope','dataInfoServer','domains','$state',function($scope,dataInfoServer,domains,$state){
    dataInfoServer.getDataInfo({"name":"test"},'api/tasks').success(function(data){
     $scope.bankInfo=data.wheatfield_bankn_query_response.bankinfos.bankinfo;
        $scope.selectedName=$scope.bankInfo[0];// 默认值
   })
    }]);

