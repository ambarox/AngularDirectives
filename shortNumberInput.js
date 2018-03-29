/*
 *
 *  * Copyright (C) Finnovation Private Limited, Inc - All Rights Reserved
 *  * Unauthorized copying of this file, via any medium is strictly prohibited
 *  * Proprietary and confidential
 *  * Created by :  lasitha, 3/28/17 10:00 AM
 *  *
 *  *  ************ Revisions
 *  *  * *******************************************************************************************************
 *  *  *       Date     |     User     |             Description                                               |
 *  *  *********************************************************************************************************
 *  *  *   DD/MM/YYYY   |     Lasitha  |    Initial Page Creation                                              |
 *  *  *********************************************************************************************************
 *
 */

/**
 * Created by lasitha on 3/28/17.
 */
angular.module('CTMWeb').filter('shortNumberInput', function () {
    return function (number) {
        if (number) {
            if (number.toString().contains('K') || number.toString().contains('k') || number.toString().contains('B') || number.toString().contains('b') || number.toString().contains('T') || number.toString().contains('t') || number.toString().contains('M') || number.toString().contains('m')) {

                var endChar = number.slice(-1);
                var convertedNumber = number.slice(0, -1);

                if (endChar === 'K' || endChar === 'k') {
                    number = convertedNumber * 1000;
                } else if (endChar === 'M' || endChar === 'm') {
                    number = convertedNumber * 1000000;
                } else if (endChar === 'B' || endChar === 'b') {
                    number = convertedNumber * 1000000000;
                } else if (endChar === 'T' || endChar === 't') {
                    number = convertedNumber * 1000000000000;
                } else if (isNaN(number)) {
                    return number.toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
                }
            }

            if (!isNaN(number)) {
                return number.toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
            } else {
                return '';
            }
        } else {
            if(!number){
                return '';
            }else {
                return number.toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
            }
        }
    };
});
