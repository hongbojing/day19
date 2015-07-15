angular.module('myApp',[])
.controller('MyController',function($scope){
  $scope.clock={
    now : new Date()
  };
  //define the $scope.clock.now variable
  //if there is no updateClock function then the view will display a static date value

  var updateClock=function(){
    $scope.clock.now=new Date();
  };
  //define the function

  setInterval(function(){
    $scope.$apply(updateClock);
  },1000);
  //execute the function per second
  //updateClock();
})

;

