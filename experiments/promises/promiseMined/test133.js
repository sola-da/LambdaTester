/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = "";
var argument2 = function () {
 callbackArguments.push(arguments) 

    var dbInfo = self._dbInfo;
    dbInfo.db.transaction(function (t) {
        t.executeSql('SELECT COUNT(key) as c FROM ' + dbInfo.storeName, [], function (t, results) {
            var result = results.rows.item(0).c;
            resolve(result);
        }, function (t, error) {
            reject(error);
        });
    });
};
var argument3 = function (results) {
 callbackArguments.push(arguments) 

    try {
        assertOccurrences(results, [
            {
                start: 41,
                end: 42
            },
            {
                start: 65,
                end: 66
            },
            {
                start: 73,
                end: 74
            }
        ]);
    } finally {
        tearDown();
    }
};
var argument4 = function (results) {
 callbackArguments.push(arguments) 

    try {
        assertOccurrences(results, [
            {
                start: 4,
                end: 9
            },
            {
                start: 42,
                end: 47
            }
        ]);
    } finally {
        tearDown();
    }
};
var argument5 = r_1;
var argument6 = function (err) {
 callbackArguments.push(arguments) 

    destination.currencyChoices = ['STR'];
    return destination;
};
var base_0 = p1
var r_0= undefined
try {
r_0 = base_0.then(argument1,argument2)
}
catch(e) {
r_0= e.message
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.then(argument3)
}
catch(e) {
r_1= e.message
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.then(argument4,argument5)
}
catch(e) {
r_2= e.message
}
var base_3 = p1
var r_3= undefined
try {
r_3 = base_3.catch(argument6)
}
catch(e) {
r_3= e.message
}
function serialize(array){
return array.map(function(a){
if (a === null || a == undefined) return a;
var name = a.constructor.name;
if (name==='Object' || name=='Boolean'|| name=='Array'||name=='Number'||name=='String')
return JSON.stringify(a);
return name;
 });
}
setTimeout(function(){
require("fs").writeFileSync("./experiments/promises/promiseMined/test133.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)