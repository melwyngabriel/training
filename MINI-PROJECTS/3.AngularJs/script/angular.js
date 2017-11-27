var app=angular.module('myApp',['angularUtils.directives.dirPagination']);
  


/* PAGINATION CODE 
(https://codepen.io/khilnani/pen/qEWojX) */


app.controller('pagingCtrl', ['$scope','$http','$filter',function ($scope,$http,$filter) {
	
    $scope.currentPage = 0;
    $scope.pageSize = 5;
    $scope.data = [];
    $scope.q = '';
    
    $scope.getData = function () {
     
      return $filter('filter')($scope.myData, $scope.q)
     
    }
    
    $scope.numberOfPages=function(){
        return Math.ceil($scope.getData().length/$scope.pageSize);                
    }
    
     $http.get("http://127.0.0.1:1441/data/employees.json").then(function(response){
		
		$scope.myData=response.data.Employees;
		
	});
	
	
	 $scope.orderByMe= function(x){
	 $scope.myOrderBy=x;
	}
}]);


app.filter('startFrom', function() {
    return function(input, start) {
        start = +start; //parse to int
        return input.slice(start);
    }
});
	