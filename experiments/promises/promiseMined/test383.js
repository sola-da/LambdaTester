/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function () {
 callbackArguments.push(arguments) 

    var dbInfo = self._dbInfo;
    dbInfo.db.transaction(function (t) {
        t.executeSql('SELECT * FROM ' + dbInfo.storeName + ' WHERE key = ? LIMIT 1', [key], function (t, results) {
            var result = results.rows.length ? results.rows.item(0).value : null;
            if (result) {
                result = serializer.deserialize(result);
            }
            resolve(result);
        }, function (t, error) {
            reject(error);
        });
    });
};
var argument2 = p2;
var argument3 = false;
var argument4 = function (results) {
 callbackArguments.push(arguments) 

    try {
        assertOccurrences(results, [
            {
                start: 11,
                end: 13
            },
            {
                start: 26,
                end: 28
            },
            {
                start: 32,
                end: 34
            }
        ]);
    } finally {
        tearDown();
    }
};
var argument5 = function (err) {
 callbackArguments.push(arguments) 

    delete pending[rev];
    console.log(err);
    return BPromise.reject(err);
};
var argument6 = function () {
 callbackArguments.push(arguments) 

    throw new Error('No, this should not happen');
};
var argument7 = null;
var argument8 = "";
var base_0 = p2
var r_0= undefined
try {
r_0 = base_0.then(argument1,argument2)
}
catch(e) {
r_0= e.message
}
var base_1 = p1
var r_1= undefined
try {
r_1 = base_1.then(argument3,argument4)
}
catch(e) {
r_1= e.message
}
var base_2 = p2
var r_2= undefined
try {
r_2 = base_2.catch(argument5)
}
catch(e) {
r_2= e.message
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.then(argument6,argument7,argument8)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test383.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)