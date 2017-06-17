myapp.controller('loginctl',function($scope,$state,$http){


	$scope.login=function(){
		$http({
			url:'loginview',
			method:'GET',
			params:{
				name:$scope.name,
				password:$scope.pass
			}
		}).then(function(response){
			 console.log(">>>>>responsewdwdwd",response);
			$state.go('user');
		})
	}




});

