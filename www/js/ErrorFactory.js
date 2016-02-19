'user strict';
angular.module('app')
    .factory('ErrorFactory', function () {

        var errors = [
            {id: 0, message: "Zlobíš zlato! :-D"},
            {id: 1, message: "Ty nevíš co je dneska za den? :-P"},
            {id: 2, message: "Ale no tak, nepodváděj! :-("},
            {id: 3, message: "Copak nevíš, že se nemá předbíhat? :-|"},
            {id: 4, message: ""},
            {id: 5, message: ""},
            {id: 6, message: ""},
            {id: 7, message: ""},
            {id: 8, message: ""},
            {id: 9, message: ""}
        ];

        return {
            all: function () {
                return errors;
            },
            get: function (pos) {
                return errors[pos].message;
            }
        }

    });
