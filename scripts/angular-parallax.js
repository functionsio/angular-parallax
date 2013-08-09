'use strict';

angular.module('angular-parallax', [
]).directive('parallax', function($window) {
  return {
    restrict: 'A',
    scope: {
      parallaxRatio: '=',
      parallaxVerticalOffset: '=',
      parallaxHorizontalOffset: '=',
    },
    link: function($scope, elem, $attrs) {
      var setPosition = function () {
        var calcVal = $window.pageYOffset * $scope.parallaxRatio;
        elem.css('left', $scope.parallaxHorizontalOffset);       
        elem.css('top', (calcVal < $scope.parallaxVerticalOffset ? $scope.parallaxVerticalOffset : calcVal));       
      }

      setPosition();

      if($scope.parallaxRatio) {
        setPosition();
        angular.element($window).bind("scroll", setPosition);
      }
    }  // link function
  };
}).directive('parallaxBackground', function($window) {
  return {
    restrict: 'A',
    transclude: true,
    template: '<div ng-transclude>' +
              '</div>',
    scope: {
      parallaxRatio: '=',
    },
    link: function($scope, elem, attrs) {
      var setPosition = function () {
        elem.css('background-position-x', "50%");       
        elem.css('background-position-y', (elem.prop('offsetTop') - $window.pageYOffset) * $scope.parallaxRatio + "px");       
      }

      if($scope.parallaxRatio) {
        setPosition();
        angular.element($window).bind("scroll", setPosition);
      }
    }  // link function
  };
});
