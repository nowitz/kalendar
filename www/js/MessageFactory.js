'user strict';
angular.module('app')
    .factory('MessageFactory', function () {

        var windows = [
            {id: 0, status: true, beforeSide: "1", afterSide: "test", img: "./img/icon/test.png", time:"Feb 08 2016"},
            {id: 1, status: true, beforeSide: "12", afterSide: "text1", img: "./img/icon/test.png", time:"Feb 07 2016"},
            {id: 2, status: true, beforeSide: "19", afterSide: "text2", img: "", time:""},
            {id: 3, status: true, beforeSide: "11", afterSide: "text3", time:""},
            {id: 4, status: true, beforeSide: "7", afterSide: "text4", time:""},
            {id: 5, status: true, beforeSide: "6", afterSide: "", img: "", time:""},
            {id: 6, status: true, beforeSide: "20", afterSide: "", img: "", time:""},
            {id: 7, status: true, beforeSide: "17", afterSide: "", img: "", time:""},
            {id: 8, status: true, beforeSide: "5", afterSide: "", img: "", time:""},
            {id: 9, status: true, beforeSide: "24", afterSide: "", img: "", time:""},
            {id: 10, status: true, beforeSide: "10", afterSide: "", img: "", time:""},
            {id: 11, status: true, beforeSide: "18", afterSide: "", img: "", time:""},
            {id: 12, status: true, beforeSide: "16", afterSide: "", img: "", time:""},
            {id: 13, status: true, beforeSide: "13", afterSide: "", img: "", time:""},
            {id: 14, status: true, beforeSide: "4", afterSide: "", img: "", time:""},
            {id: 15, status: true, beforeSide: "21", afterSide: "", img: "", time:""},
            {id: 16, status: true, beforeSide: "3", afterSide: "", img: "", time:""},
            {id: 17, status: true, beforeSide: "23", afterSide: "", img: "", time:""},
            {id: 18, status: true, beforeSide: "9", afterSide: "", img: "", time:""},
            {id: 19, status: true, beforeSide: "15", afterSide: "", img: "", time:""},
            {id: 20, status: true, beforeSide: "22", afterSide: "", img: "", time:""},
            {id: 21, status: true, beforeSide: "2", afterSide: "", img: "", time:""},
            {id: 22, status: true, beforeSide: "14", afterSide: "", img: "", time:""},
            {id: 23, status: true, beforeSide: "8", afterSide: "", img: "", time:""}
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
