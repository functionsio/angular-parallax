'use strict';

angular.module('angular-parallax', [
]).directive('parallax', ['$window', function($window) {
  return {
    restrict: 'A',
    scope: {
      parallaxRatio: '@',
      parallaxVerticalOffset: '@',
      parallaxHorizontalOffset: '@'
    },
    link: function($scope, elem, $attrs) {
      var setPosition = function () {
        // horizontal positioning
        elem.css('left', $scope.parallaxHorizontalOffset + "px");

        var calcValY = $window.pageYOffset * ($scope.parallaxRatio ? $scope.parallaxRatio : 1.1 );
        if (calcValY <= $window.innerHeight) {
          var topVal = (calcValY < $scope.parallaxVerticalOffset ? $scope.parallaxVerticalOffset : calcValY);
          elem.css('top', topVal + "px");
        }
      };

      setPosition();

      // Handle events
      var bind = function() {
        angular.element($window).bind("scroll", setPosition);
        angular.element($window).bind("touchmove", setPosition);
      };
      var unbind = function() {
        angular.element($window).unbind("scroll", setPosition);
        angular.element($window).unbind("touchmove", setPosition);
      };
      $scope.$on('$destroy', function() {
        unbind();
      });
      attrs.$observe('parallax', function(val) {
        if (val) {
          bind()
        } else {
          unbind();
        }
      })
    }  // link function
  };
}]).directive('parallaxBackground', ['$window', function($window) {
  return {
    restrict: 'A',
    transclude: true,
    template: '<div ng-transclude></div>',
    scope: {
      parallaxRatio: '@',
    },
    link: function($scope, elem, attrs) {
      var setPosition = function () {
        var calcValY = (elem.prop('offsetTop') - $window.pageYOffset) * ($scope.parallaxRatio ? $scope.parallaxRatio : 1.1 );
        // horizontal positioning
        elem.css('background-position', "50% " + calcValY + "px");
      };

      // set our initial position - fixes webkit background render bug
      angular.element($window).bind('load', function(e) {
        setPosition();
        $scope.$apply();
      });

      // Handle events
      var bind = function() {
        angular.element($window).bind("scroll", setPosition);
        angular.element($window).bind("touchmove", setPosition);
      };

      // Unbind events on
      var unbind = function() {
        angular.element($window).unbind("scroll", setPosition);
        angular.element($window).unbind("touchmove", setPosition);
      }
      $scope.$on('$destroy', function() {
        unbind();
      });
      attrs.$observe('parallaxBackground', function(val) {
        if (val) {
          bind();
        } else {
          unbind();
        }
      })
    }  // link function
  };
}]);
