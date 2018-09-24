/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function () {
 callbackArguments.push(arguments) 

    featureSupported(featureName, false);
};
var argument2 = null;
var argument3 = p1;
var argument4 = 126;
var argument5 = function () {
 callbackArguments.push(arguments) 

    var dbInfo = self._dbInfo;
    var transaction = dbInfo.db.transaction(dbInfo.storeName, 'readwrite');
    var store = transaction.objectStore(dbInfo.storeName);
    var req = store.clear();
    transaction.oncomplete = function () {
        resolve();
    };
    transaction.onabort = transaction.onerror = function () {
        reject(req.error);
    };
};
var argument6 = 823;
var argument7 = function (error) {
 callbackArguments.push(arguments) 

    console.error(error);
};
var argument8 = r_2;
var argument9 = function (err) {
 callbackArguments.push(arguments) 

    errors.logAndThrowError(err, 'Error exporting data', '');
};
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
r_1 = base_1.then(argument4,argument5,argument6)
}
catch(e) {
r_1= e.message
}
var base_2 = p1
var r_2= undefined
try {
r_2 = base_2.catch(argument7,argument8)
}
catch(e) {
r_2= e.message
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.catch(argument9)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test234.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)