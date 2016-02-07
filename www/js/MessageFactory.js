'user strict';
angular.module('app')
    .factory('MessageFactory', function () {

        var windows = [
            {id: 0, status: true, beforeSide: "1", afterSide: "test", time:"Feb 08 2016"},
            {id: 1, status: true, beforeSide: "12", afterSide: "text1", time:"Feb 07 2016"},
            {id: 2, status: true, beforeSide: "19", afterSide: "text2", time:""},
            {id: 3, status: true, beforeSide: "11", afterSide: "text3", time:""},
            {id: 4, status: true, beforeSide: "7", afterSide: "text4", time:""},
            {id: 5, status: true, beforeSide: "6", afterSide: "", time:""},
            {id: 6, status: true, beforeSide: "20", afterSide: "", time:""},
            {id: 7, status: true, beforeSide: "17", afterSide: "", time:""},
            {id: 8, status: true, beforeSide: "5", afterSide: "", time:""},
            {id: 9, status: true, beforeSide: "24", afterSide: "", time:""},
            {id: 10, status: true, beforeSide: "10", afterSide: "", time:""},
            {id: 11, status: true, beforeSide: "18", afterSide: "", time:""},
            {id: 12, status: true, beforeSide: "16", afterSide: "", time:""},
            {id: 13, status: true, beforeSide: "13", afterSide: "", time:""},
            {id: 14, status: true, beforeSide: "4", afterSide: "", time:""},
            {id: 15, status: true, beforeSide: "21", afterSide: "", time:""},
            {id: 16, status: true, beforeSide: "3", afterSide: "", time:""},
            {id: 17, status: true, beforeSide: "23", afterSide: "", time:""},
            {id: 18, status: true, beforeSide: "9", afterSide: "", time:""},
            {id: 19, status: true, beforeSide: "15", afterSide: "", time:""},
            {id: 20, status: true, beforeSide: "22", afterSide: "", time:""},
            {id: 21, status: true, beforeSide: "2", afterSide: "", time:""},
            {id: 22, status: true, beforeSide: "14", afterSide: "", time:""},
            {id: 23, status: true, beforeSide: "8", afterSide: "", time:""}
        ];

        return {
            all: function () {
                return windows;
            },
            get: function (pos) {
                return windows[pos];
            }
        }

    });
