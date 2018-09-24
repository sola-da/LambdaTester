/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = {"126":4.004414865435563e+307,"1.2706381240278778e+308":"","ye":""};
var argument2 = function (results) {
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
var argument3 = null;
var argument4 = function (containers) {
 callbackArguments.push(arguments) 

    return _this.setupContainers(containers);
};
var argument5 = function () {
 callbackArguments.push(arguments) 

    var dbInfo = self._dbInfo;
    var store = dbInfo.db.transaction(dbInfo.storeName, 'readonly').objectStore(dbInfo.storeName);
    var req = store.get(key);
    req.onsuccess = function () {
        var value = req.result;
        if (value === undefined) {
            value = null;
        }
        resolve(value);
    };
    req.onerror = function () {
        reject(req.error);
    };
};
var argument6 = ["w","C"];
var argument7 = null;
var argument8 = null;
var argument9 = function (qRequire) {
 callbackArguments.push(arguments) 

    qRequire.inject('q', Promise);
    if ('autoPackage' in params) {
        mrRequire.injectPackageDescription(applicationLocation, {});
    }
    return mrRequire.loadPackage({
        location: applicationLocation,
        hash: params.applicationHash
    }).invoke('async', moduleId);
};
var base_0 = p2
var r_0= undefined
try {
r_0 = base_0.then(argument1,argument2)
}
catch(e) {
r_0= e.message
}
var base_1 = p2
var r_1= undefined
try {
r_1 = base_1.then(argument3,argument4)
}
catch(e) {
r_1= e.message
}
var base_2 = p1
var r_2= undefined
try {
r_2 = base_2.then(argument5,argument6,argument7)
}
catch(e) {
r_2= e.message
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.then(argument8,argument9)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test909.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)