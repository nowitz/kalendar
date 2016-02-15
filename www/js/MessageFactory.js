'user strict';
angular.module('app')
    .factory('MessageFactory', function () {

        var windows = [
            {id: 0, status: true, beforeSide: "1", afterSide: "test <strong>text</strong>  tesxtsda ", img: "./img/icon/test.png", time:"Feb 08 2016"},
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
/*
        var windows = [
            {id: 0, status: true, beforeSide: "1", afterSide: "Miluju tvůj smysl pro detail (systém v barvičkách). :-)", img: "./img/icon/test.png", time:"Feb 08 2016"},
            {id: 1, status: true, beforeSide: "12", afterSide: "Miluju tvoje šibalské oči. Čertíky co v nich máš. :-P", img: "./img/icon/test.png", time:"Feb 07 2016"},
            {id: 2, status: true, beforeSide: "19", afterSide: "Miluju to, jak se dokážeš přitulit. Hlavně že vydržíš moje tulení. :-D", img: "", time:""},
            {id: 3, status: true, beforeSide: "11", afterSide: "Miluju tě za to, že dokážeš naplánovat jak krátký výlet tak i 2 měsíční dovolenou. :-)", time:""},
            {id: 4, status: true, beforeSide: "7", afterSide: "Miluju tvoje sbírání všemožných kartiček. :-D", time:""},
            {id: 5, status: true, beforeSide: "6", afterSide: "Miluju tě za to, že nejsi pro mě jenom přítelkyně, ale i nejlepší kamarádka, hvězda a sladkůstka. :-*", img: "", time:""},
            {id: 6, status: true, beforeSide: "20", afterSide: "Miluju tvojí „nakažlivou „chuť jít do všech soutěží. :-D", img: "", time:""},
            {id: 7, status: true, beforeSide: "17", afterSide: "Miluju tě za to, že ti můžu říct úplně všechno, svěřit se ti. :-)", img: "", time:""},
            {id: 8, status: true, beforeSide: "5", afterSide: "Miluju tě za to, že jsi ve mně probudila chuť plánovat budoucnost. :-*", img: "", time:""},
            {id: 9, status: true, beforeSide: "24", afterSide: "Miluju tě pro tvoji energii, který máš na rozdávání. Za to co vše zvládneš. :-)", img: "", time:""},
            {id: 10, status: true, beforeSide: "10", afterSide: "Miluju tě za lásku k dětem a smysl pro rodinu. :-*", img: "", time:""},
            {id: 11, status: true, beforeSide: "18", afterSide: "Miluju tě za tvoji trpělivost, kterou máš semnou (ve 3. a 6. pádě se píše MNĚ). :-D", img: "", time:""},
            {id: 12, status: true, beforeSide: "16", afterSide: "Miluju tě za to, že jsi mi vždy ochotná pomoct. :-)", img: "", time:""},
            {id: 13, status: true, beforeSide: "13", afterSide: "Miluju tě za to, že mě děláš lepším člověkem, přítelem. :-*", img: "", time:""},
            {id: 14, status: true, beforeSide: "4", afterSide: "Miluju tě za tvoji chuť do vaření a pečení. :-D", img: "", time:""},
            {id: 15, status: true, beforeSide: "21", afterSide: "Miluju tě za dlouhodobé boje o ježíška, psa a mateřskou, na kterou stejně půjdu já. :-P :-D", img: "", time:""},
            {id: 16, status: true, beforeSide: "3", afterSide: "Miluju tě za to, že mě dokážeš vždy něčím překvapit. :-)", img: "", time:""},
            {id: 17, status: true, beforeSide: "23", afterSide: "Miluju tvoje mluvení ze spaní. :-D", img: "", time:""},
            {id: 18, status: true, beforeSide: "9", afterSide: "Miluju tě za pocit klidu, který díky tobě mám, když jsme spolu. :-*", img: "", time:""},
            {id: 19, status: true, beforeSide: "15", afterSide: "Miluju tvůj zadek a pravý prso víc než to levý. :-D :-P", img: "", time:""},
            {id: 20, status: true, beforeSide: "22", afterSide: "Miluju tě za to, že jsi mi v Austrálii četla farmačku i přesto že víš, že mi to stejně nic neřekne a že si to stejně nejspíš nebudu pamatovat. :-D", img: "", time:""},
            {id: 21, status: true, beforeSide: "2", afterSide: "Miluju tě za to, že jsi ve mně objevila lásku k vínu. :-)", img: "", time:""},
            {id: 22, status: true, beforeSide: "14", afterSide: "Pokud jsi poctivě otvírala okýnko každý den, tak ses dostala až k téhle zprávě. :-) Tahle zpráva ti pouze napoví, že to nejdůležitější okýnko si otevřeš až zítra. :-D :-*", img: "", time:""},
            {id: 23, status: true, beforeSide: "8", afterSide: "", img: "Díky tobě vím, co znamená opravdu MILOVAT UPŘÍMNOU LÁSKOU, na základě toho, že si prošla jak krásnými tak i škaredými zážitky a všechno to překonala. Miluju Tě", time:""}
        ];
*/
        return {
            all: function () {
                return windows;
            },
            get: function (pos) {
                return windows[pos];
            }
        }

    });
