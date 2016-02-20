'user strict';
angular.module('app')
    .factory('MessageFactory', function () {
        /*
         var windows = [
         {id: 0,status: true,beforeSide: "1", afterSide: "Miluju tvůj smysl pro detail (systém v barvičkách). :-)", img: "./img/icon/colors.png", time:"Feb 28 2016"},
         {id: 1,status: true, beforeSide: "12", afterSide: "Miluju tě za tvoji trpělivost, kterou máš semnou (ve 3. a 6. pádě se píše MNĚ). :-D", img: "./img/icon/language.png", time:"Mar 10 2016"},
         {id: 2, status: true, beforeSide: "19", afterSide: "Miluju tě za pocit klidu, který díky tobě mám, když jsme spolu. :-*", img: "./img/icon/peace.png", time:"Mar 17 2016"},
         {id: 3, status: true, beforeSide: "11", afterSide: "Miluju tě za lásku k dětem a smysl pro rodinu. :-*", img: "./img/icon/family.png", time:"Mar 09 2016"},
         {id: 4, status: true, beforeSide: "7", afterSide: "Miluju tvojí „nakažlivou „chuť jít do všech soutěží. :-D", img: "./img/icon/competition.png", time:"Mar 05 2016"},
         {id: 5, status: true, beforeSide: "6", afterSide: "Miluju tě za to, že nejsi pro mě jenom přítelkyně, ale i nejlepší kamarádka, hvězda a sladkůstka. :-*", img: "./img/icon/star.png", time:"Mar 04 2016"},
         {id: 6, status: true, beforeSide: "20", afterSide: "Miluju tvůj zadek a pravý prso víc než to levý. :-D :-P", img: "./img/icon/sex.png", time:"Mar 18 2016"},
         {id: 7, status: true, beforeSide: "17", afterSide: "Miluju tě za to, že mě dokážeš vždy něčím překvapit. :-)", img: "./img/icon/surprise.png", time:"Mar 15 2016"},
         {id: 8, status: true, beforeSide: "5",  afterSide: "Miluju tvoje sbírání všemožných kartiček. :-D", img: "./img/icon/card.png", time:"Mar 03 2016"},
         {id: 9, status: true, beforeSide: "24", afterSide: "Díky tobě vím, co znamená opravdu MILOVAT UPŘÍMNOU LÁSKOU a to díky tomu, že si prošla jak krásnými tak i škaredými zážitky a všechno to překonala. Miluju Tě", img: "./img/icon/love.png", time:"Mar 22 2016"},
         {id: 10, status: true, beforeSide: "10", afterSide: "Miluju tě pro tvoji energii, kterou máš na rozdávání. Za to co vše zvládneš. :-)", img: "./img/icon/energy.png", time:"Mar 08 2016"},
         {id: 11, status: true, beforeSide: "18", afterSide: "Miluju tvoje mluvení ze spaní. :-D", img: "./img/icon/sleep.png", time:"Mar 16 2016"},
         {id: 12, status: true, beforeSide: "16", afterSide: "Miluju tě za dlouhodobé boje o ježíška, psa a mateřskou, na kterou stejně půjdu já. :-P :-D", img: "./img/icon/fight.png", time:"Mar 14 2016"},
         {id: 13, status: true, beforeSide: "13", afterSide: "Miluju tě za to, že jsi mi vždy ochotná pomoct. :-)", img: "./img/icon/help.png", time:"Mar 11 2016"},
         {id: 14, status: true, beforeSide: "4", afterSide: "Miluju tě za to, že dokážeš naplánovat jak krátký výlet tak i 2 měsíční dovolenou. :-)", img: "./img/icon/trip.png", time:"Mar 02 2016"},
         {id: 15, status: true, beforeSide: "21", afterSide: "Miluju tě za to, že jsi mi v Austrálii četla farmačku i přesto že víš, že mi to stejně nic neřekne a že si to stejně nejspíš nebudu pamatovat. :-D", img: "./img/icon/pharmacy.png", time:"Mar 19 2016"},
         {id: 16, status: true, beforeSide: "3", afterSide: "Miluju to, jak se dokážeš přitulit. Hlavně že vydržíš moje tulení. :-D", img: "./img/icon/hug.png", time:"Mar 01 2016"},
         {id: 17, status: true, beforeSide: "23", afterSide: "Pokud jsi poctivě otvírala okýnko každý den, tak ses dostala až k téhle zprávě. :-) Tahle zpráva ti pouze napoví, že to nejdůležitější okýnko si otevřeš až zítra. :-D :-*", img: "./img/icon/nothing.png", time:"Mar 21 2016"},
         {id: 18, status: true, beforeSide: "9", afterSide: "Miluju tě za to, že jsi ve mně probudila chuť plánovat budoucnost. :-*", img: "./img/icon/future.png", time:"Mar 07 2016"},
         {id: 19, status: true, beforeSide: "15", afterSide: "Miluju tě za tvoji chuť do vaření a pečení. :-D", img: "./img/icon/cook.png", time:"Mar 13 2016"},
         {id: 20, status: true, beforeSide: "22", afterSide: "Miluju tě za to, že jsi ve mně objevila lásku k vínu. :-)", img: "./img/icon/wine.png", time:"Mar 20 2016"},
         {id: 21, status: true, beforeSide: "2", afterSide: "Miluju tvoje šibalské oči. Čertíky co v nich máš. :-P", img: "./img/icon/eye.png", time:"Feb 29 2016"},
         {id: 22, status: true, beforeSide: "14", afterSide: "Miluju tě za to, že mě děláš lepším člověkem, přítelem. :-*", img: "./img/icon/better.png", time:"Mar 12 2016"},
         {id: 23, status: true, beforeSide: "8", afterSide: "Miluju tě za to, že ti můžu říct úplně všechno, svěřit se ti. :-)", img: "./img/icon/talk.png", time:"Mar 06 2016"}
         ];
         */
/*
        var windows = [
            {
                id: 0,
                status: false,
                beforeSide: "1",
                afterSide: "Miluju tvůj <span class='asd'>smysl</span> pro detail (systém v barvičkách). :-)",
                img: "./img/icon/colors.png",
                time: "Feb 28 2016"
            },
            {
                id: 1,
                status: false,
                beforeSide: "12",
                afterSide: "Miluju tě za tvoji trpělivost, kterou semnou máš (tumorouland). :-D",
                img: "./img/icon/language.png",
                time: "Mar 10 2016"
            },
            {
                id: 2,
                status: false,
                beforeSide: "19",
                afterSide: "Miluju tě za pocit klidu, který mám díky tobě, když jsme spolu. :-*",
                img: "./img/icon/peace.png",
                time: "Mar 17 2016"
            },
            {
                id: 3,
                status: false,
                beforeSide: "11",
                afterSide: "Miluju tě za lásku k dětem a smysl pro rodinu. :-*",
                img: "./img/icon/family.png",
                time: "Mar 09 2016"
            },
            {
                id: 4,
                status: false,
                beforeSide: "7",
                afterSide: "Miluju tvojí „nakažlivou„ chuť jít do všech soutěží. :-D",
                img: "./img/icon/competition.png",
                time: "Mar 05 2016"
            },
            {
                id: 5,
                status: false,
                beforeSide: "6",
                afterSide: "Miluju tě za to, že nejsi pro mě jenom přítelkyně, ale i nejlepší kamarádka, hvězda a sladkůstka. :-*",
                img: "./img/icon/star.png",
                time: "Mar 04 2016"
            },
            {
                id: 6,
                status: false,
                beforeSide: "20",
                afterSide: "Miluju tvůj zadek a pravý prso víc než to levý. :-D :-P",
                img: "./img/icon/sex.png",
                time: "Mar 18 2016"
            },
            {
                id: 7,
                status: false,
                beforeSide: "17",
                afterSide: "Miluju tě za to, že mě dokážeš vždy něčím překvapit. :-)",
                img: "./img/icon/surprise.png",
                time: "Mar 15 2016"
            },
            {
                id: 8,
                status: false,
                beforeSide: "5",
                afterSide: "Miluju tvoje sbírání všemožných kartiček. :-D",
                img: "./img/icon/card.png",
                time: "Mar 03 2016"
            },
            {
                id: 9,
                status: false,
                beforeSide: "24",
                afterSide: "Díky tobě vím, co znamená opravdu MILOVAT UPŘÍMNOU LÁSKOU a to díky tomu, že si prošla jak krásnými tak i škaredými zážitky a všechno to překonala. Miluju Tě",
                img: "./img/icon/love.png",
                time: "Mar 22 2016"
            },
            {
                id: 10,
                status: false,
                beforeSide: "10",
                afterSide: "Miluju tě pro tvoji energii, který máš na rozdávání. Za to co vše zvládneš. :-)",
                img: "./img/icon/energy.png",
                time: "Mar 08 2016"
            },
            {
                id: 11,
                status: false,
                beforeSide: "18",
                afterSide: "Miluju tvoje mluvení ze spaní. :-D",
                img: "./img/icon/sleep.png",
                time: "Mar 16 2016"
            },
            {
                id: 12,
                status: false,
                beforeSide: "16",
                afterSide: "Miluju tě za dlouhodobé boje o ježíška, psa a mateřskou, na kterou stejně půjdu já. :-P :-D",
                img: "./img/icon/fight.png",
                time: "Mar 14 2016"
            },
            {
                id: 13,
                status: false,
                beforeSide: "13",
                afterSide: "Miluju tě za to, že jsi mi vždy ochotná pomoct. :-)",
                img: "./img/icon/help.png",
                time: "Mar 11 2016"
            },
            {
                id: 14,
                status: false,
                beforeSide: "4",
                afterSide: "Miluju tě za to, že dokážeš naplánovat jak krátký výlet tak i 2 měsíční dovolenou. :-)",
                img: "./img/icon/trip.png",
                time: "Mar 02 2016"
            },
            {
                id: 15,
                status: false,
                beforeSide: "21",
                afterSide: "Miluju tě za to, že jsi mi v Austrálii četla farmačku i přesto že víš, že mi to stejně nic neřekne a že si to stejně nejspíš nebudu pamatovat. :-D",
                img: "./img/icon/pharmacy.png",
                time: "Mar 19 2016"
            },
            {
                id: 16,
                status: false,
                beforeSide: "3",
                afterSide: "Miluju to, jak se dokážeš přitulit. Hlavně že vydržíš moje tulení. :-D",
                img: "./img/icon/hug.png",
                time: "Mar 01 2016"
            },
            {
                id: 17,
                status: false,
                beforeSide: "23",
                afterSide: "Tahle zpráva ti pouze napoví, že to nejdůležitější okýnko si otevřeš až zítra. :-D :-*",
                img: "./img/icon/nothing.png",
                time: "Mar 21 2016"
            },
            {
                id: 18,
                status: false,
                beforeSide: "9",
                afterSide: "Miluju tě za to, že jsi ve mně probudila chuť plánovat budoucnost. :-*",
                img: "./img/icon/future.png",
                time: "Mar 07 2016"
            },
            {
                id: 19,
                status: false,
                beforeSide: "15",
                afterSide: "Miluju tě za tvoji chuť do vaření a pečení. :-D",
                img: "./img/icon/cook.png",
                time: "Mar 13 2016"
            },
            {
                id: 20,
                status: false,
                beforeSide: "22",
                afterSide: "Miluju tě za to, že jsi ve mně objevila lásku k vínu. :-)",
                img: "./img/icon/wine.png",
                time: "Mar 20 2016"
            },
            {
                id: 21,
                status: false,
                beforeSide: "2",
                afterSide: "Miluju tvoje šibalské oči. Čertíky co v nich máš. :-P",
                img: "./img/icon/eye.png",
                time: "Feb 29 2016"
            },
            {
                id: 22,
                status: false,
                beforeSide: "14",
                afterSide: "Miluju tě za to, že mě děláš lepším člověkem, přítelem. :-*",
                img: "./img/icon/better.png",
                time: "Mar 12 2016"
            },
            {
                id: 23,
                status: false,
                beforeSide: "8",
                afterSide: "Miluju tě za to, že ti můžu říct úplně všechno, svěřit se ti. :-)",
                img: "./img/icon/talk.png",
                time: "Mar 06 2016"
            }
        ];
        */
        var windows = [
            {
                id: 0,
                status: false,
                beforeSide: "1",
                afterSide: "Miluju tvůj <span class='asd'>smysl</span> pro detail (systém v barvičkách). :-)",
                img: "./img/icon/colors.png",
                time: "Feb 20 2016"
            },
            {
                id: 1,
                status: false,
                beforeSide: "12",
                afterSide: "Miluju tě za tvoji trpělivost, kterou semnou máš (tumorouland). :-D",
                img: "./img/icon/language.png",
                time: "Feb 20 2016"
            },
            {
                id: 2,
                status: false,
                beforeSide: "19",
                afterSide: "Miluju tě za pocit klidu, který mám díky tobě, když jsme spolu. :-*",
                img: "./img/icon/peace.png",
                time: "Mar 17 2016"
            },
            {
                id: 3,
                status: false,
                beforeSide: "11",
                afterSide: "Miluju tě za lásku k dětem a smysl pro rodinu. :-*",
                img: "./img/icon/family.png",
                time: "Mar 09 2016"
            },
            {
                id: 4,
                status: false,
                beforeSide: "7",
                afterSide: "Miluju tvojí „nakažlivou„ chuť jít do všech soutěží. :-D",
                img: "./img/icon/competition.png",
                time: "Mar 05 2016"
            },
            {
                id: 5,
                status: false,
                beforeSide: "6",
                afterSide: "Miluju tě za to, že nejsi pro mě jenom přítelkyně, ale i nejlepší kamarádka, hvězda a sladkůstka. :-*",
                img: "./img/icon/star.png",
                time: "Mar 04 2016"
            },
            {
                id: 6,
                status: false,
                beforeSide: "20",
                afterSide: "Miluju tvůj zadek a pravý prso víc než to levý. :-D :-P",
                img: "./img/icon/sex.png",
                time: "Mar 18 2016"
            },
            {
                id: 7,
                status: false,
                beforeSide: "17",
                afterSide: "Miluju tě za to, že mě dokážeš vždy něčím překvapit. :-)",
                img: "./img/icon/surprise.png",
                time: "Mar 15 2016"
            },
            {
                id: 8,
                status: false,
                beforeSide: "5",
                afterSide: "Miluju tvoje sbírání všemožných kartiček. :-D",
                img: "./img/icon/card.png",
                time: "Mar 03 2016"
            },
            {
                id: 9,
                status: false,
                beforeSide: "24",
                afterSide: "Díky tobě vím, co znamená opravdu MILOVAT UPŘÍMNOU LÁSKOU a to díky tomu, že si prošla jak krásnými tak i škaredými zážitky a všechno to překonala. Miluju Tě",
                img: "./img/icon/love.png",
                time: "Mar 22 2016"
            },
            {
                id: 10,
                status: false,
                beforeSide: "10",
                afterSide: "Miluju tě pro tvoji energii, který máš na rozdávání. Za to co vše zvládneš. :-)",
                img: "./img/icon/energy.png",
                time: "Mar 08 2016"
            },
            {
                id: 11,
                status: false,
                beforeSide: "18",
                afterSide: "Miluju tvoje mluvení ze spaní. :-D",
                img: "./img/icon/sleep.png",
                time: "Mar 16 2016"
            },
            {
                id: 12,
                status: false,
                beforeSide: "16",
                afterSide: "Miluju tě za dlouhodobé boje o ježíška, psa a mateřskou, na kterou stejně půjdu já. :-P :-D",
                img: "./img/icon/fight.png",
                time: "Mar 14 2016"
            },
            {
                id: 13,
                status: false,
                beforeSide: "13",
                afterSide: "Miluju tě za to, že jsi mi vždy ochotná pomoct. :-)",
                img: "./img/icon/help.png",
                time: "Mar 11 2016"
            },
            {
                id: 14,
                status: false,
                beforeSide: "4",
                afterSide: "Miluju tě za to, že dokážeš naplánovat jak krátký výlet tak i 2 měsíční dovolenou. :-)",
                img: "./img/icon/trip.png",
                time: "Mar 02 2016"
            },
            {
                id: 15,
                status: false,
                beforeSide: "21",
                afterSide: "Miluju tě za to, že jsi mi v Austrálii četla farmačku i přesto že víš, že mi to stejně nic neřekne a že si to stejně nejspíš nebudu pamatovat. :-D",
                img: "./img/icon/pharmacy.png",
                time: "Mar 19 2016"
            },
            {
                id: 16,
                status: false,
                beforeSide: "3",
                afterSide: "Miluju to, jak se dokážeš přitulit. Hlavně že vydržíš moje tulení. :-D",
                img: "./img/icon/hug.png",
                time: "Feb 20 2016"
            },
            {
                id: 17,
                status: false,
                beforeSide: "23",
                afterSide: "Tahle zpráva ti pouze napoví, že to nejdůležitější okýnko si otevřeš až zítra. :-D :-*",
                img: "./img/icon/nothing.png",
                time: "Mar 21 2016"
            },
            {
                id: 18,
                status: false,
                beforeSide: "9",
                afterSide: "Miluju tě za to, že jsi ve mně probudila chuť plánovat budoucnost. :-*",
                img: "./img/icon/future.png",
                time: "Mar 07 2016"
            },
            {
                id: 19,
                status: false,
                beforeSide: "15",
                afterSide: "Miluju tě za tvoji chuť do vaření a pečení. :-D",
                img: "./img/icon/cook.png",
                time: "Mar 13 2016"
            },
            {
                id: 20,
                status: false,
                beforeSide: "22",
                afterSide: "Miluju tě za to, že jsi ve mně objevila lásku k vínu. :-)",
                img: "./img/icon/wine.png",
                time: "Mar 20 2016"
            },
            {
                id: 21,
                status: false,
                beforeSide: "2",
                afterSide: "Miluju tvoje šibalské oči. Čertíky co v nich máš. :-P",
                img: "./img/icon/eye.png",
                time: "Feb 20 2016"
            },
            {
                id: 22,
                status: false,
                beforeSide: "14",
                afterSide: "Miluju tě za to, že mě děláš lepším člověkem, přítelem. :-*",
                img: "./img/icon/better.png",
                time: "Mar 12 2016"
            },
            {
                id: 23,
                status: false,
                beforeSide: "8",
                afterSide: "Miluju tě za to, že ti můžu říct úplně všechno, svěřit se ti. :-)",
                img: "./img/icon/talk.png",
                time: "Mar 06 2016"
            }
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
