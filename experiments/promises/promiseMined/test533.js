/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function (reason) {
 callbackArguments.push(arguments) 

    var promise2 = cb();
    if (typeof promise2.then === 'function') {
        return promise2.then(function () {
            throw reason;
        });
    }
    throw reason;
};
var argument2 = "8P";
var argument3 = ">=";
var argument4 = function () {
 callbackArguments.push(arguments) 

    var dbInfo = self._dbInfo;
    dbInfo.db.transaction(function (t) {
        t.executeSql('SELECT key FROM ' + dbInfo.storeName + ' WHERE id = ? LIMIT 1', [n + 1], function (t, results) {
            var result = results.rows.length ? results.rows.item(0).key : null;
            resolve(result);
        }, function (t, error) {
            reject(error);
        });
    });
};
var argument5 = function (err) {
 callbackArguments.push(arguments) 

    expect(err).to.exist;
    done();
};
var argument6 = "9";
var argument7 = p2;
var argument8 = function Promise_thenResolve_resolved() {
 callbackArguments.push(arguments) 

    return value;
};
var argument9 = 1.5165579155469832e+308;
var base_0 = p2
var r_0= undefined
try {
r_0 = base_0.then(argument1,argument2,argument3)
}
catch(e) {
r_0= e.message
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.then(argument4)
}
catch(e) {
r_1= e.message
}
var base_2 = p1
var r_2= undefined
try {
r_2 = base_2.catch(argument5,argument6)
}
catch(e) {
r_2= e.message
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.then(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test533.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)