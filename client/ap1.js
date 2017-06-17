var myapp =angular.module('AngApp',['ui.router']);

myapp.config(function($stateProvider){

	$stateProvider
		.state('state1',{
			url:'/shivi',
			templateUrl:'login.html',
			controller:'loginctl'
		})

		.state('user',{
			url:'/user',
			templateUrl:'user.html',
			controller:'loginctl'
		})

});

myapp.controller('control1',function($scope,$state){

$scope.demo1=function(){
	console.log('>>>>>>>>>> clicked');
	$state.go('state1');
}

});