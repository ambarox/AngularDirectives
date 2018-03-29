
angular.module('XXX').directive('shortfmt', function ($filter, $document) {
        'use strict';

        return {
            require: '?ngModel',
            scope: {
                val: '='
            },
            link: function (scope, elem, attrs, ngModel) {
                if (!ngModel) {
                    return;
                }

                ngModel.$formatters.push(function (value) {
                    return $filter('shortNumberInput')(value);
                });

                ngModel.$parsers.push(function (viewValue) {
                    var plainNumber = viewValue.replace(/[,\.]/g, '');

                    //setCaretPosition(elem[0].attributes.id.value, b.length, b);
                    var c = parseFloat(plainNumber);
                    if (isNaN(c)) {
                        c = '';
                    }
                    return c;
                });

                elem.bind("keydown keypress", function (event) {
                    setCaretPosition(elem[0].attributes.id.value);
                });

                scope.$watchCollection(function () {
                    return elem[0].value;
                }, function (newValue, oldVal) {
                    var plainNumber = newValue.replace(/[,\.]/g, '');
                    var b = $filter('shortNumberInput')(plainNumber).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
                    elem.val(b);
                });
            }
        };


        function setCaretPosition(elemId) {
            var el = $document[0].getElementById(elemId);
            var val = el.value;
            var caretPos = val.length;
            if (el !== null) {
                if (el.createTextRange) {
                    var range = el.createTextRange();
                    range.move('character', caretPos);
                    range.select();
                    return true;
                }
                else {
                    if (el.selectionStart || el.selectionStart === 0) {
                        el.value = ''; // unset first
                        el.value = val;
                        el.focus();
                        el.setSelectionRange(caretPos, caretPos);
                        return true;
                    }
                }
            }
        }
    }
);
