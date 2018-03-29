angular.module('XXX').directive('highBarChart', function () {
    return {
        restrict: 'E',
        template: '<div></div>',
        scope: {
            options: '='
        },
        link: function (scope, element) {
            var chart = Highcharts.chart(element[0], scope.options);
            scope.$watch('options', function(newVal) {
                if (newVal) {
                    chart.update(scope.options);
                }
            }, true);
        }
    };
});