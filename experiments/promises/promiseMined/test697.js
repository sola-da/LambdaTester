/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function (userArray) {
 callbackArguments.push(arguments) 

    service.all = userArray;
    userArray.forEach(function (user) {
        if (user.username) {
            byUserName[user.username] = user;
        }
    });
};
var argument2 = 655;
var argument3 = function (err) {
 callbackArguments.push(arguments) 

    errors.logAndThrowError(err, 'Error exporting data', '');
};
var argument4 = p2;
var argument5 = null;
var argument6 = function (val) {
 callbackArguments.push(arguments) 

    promise.$$v = val;
};
var argument7 = {"":705,"T":"G"};
var argument8 = function (e) {
 callbackArguments.push(arguments) 

    deferred.reject(e);
};
var argument9 = p1;
var argument10 = null;
var base_0 = p1
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
r_1 = base_1.catch(argument3,argument4)
}
catch(e) {
r_1= e.message
}
var base_2 = p2
var r_2= undefined
try {
r_2 = base_2.then(argument5,argument6,argument7)
}
catch(e) {
r_2= e.message
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.catch(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test697.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)