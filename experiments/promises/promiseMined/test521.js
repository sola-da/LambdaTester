/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = null;
var argument2 = function (results) {
 callbackArguments.push(arguments) 

    try {
        assertOccurrences(results, [
            {
                start: 4,
                end: 5
            },
            {
                start: 24,
                end: 25
            },
            {
                start: 32,
                end: 33
            }
        ]);
    } finally {
        tearDown();
    }
};
var argument3 = {"705":"I`<","":5.558667803641868e+307,"a":"Z`","1.1742661668290007e+308":"f","QMV":""};
var argument4 = {"893":1.5922502641735272e+308,"":1.5718390478624246e+308,"-100":618,"3.000277390297487e+307":1.5171480389601577e+308};
var argument5 = function success(value) {
 callbackArguments.push(arguments) 

    deferred.resolve(value);
    return value;
};
var argument6 = function (publication) {
 callbackArguments.push(arguments) 

    assert.isNull(publication);
    return done();
};
var argument7 = function () {
 callbackArguments.push(arguments) 

    return false;
};
var base_0 = p1
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
r_1 = base_1.then(argument4,argument5)
}
catch(e) {
r_1= e.message
}
var base_2 = p2
var r_2= undefined
try {
r_2 = base_2.then(argument6)
}
catch(e) {
r_2= e.message
}
var base_3 = p1
var r_3= undefined
try {
r_3 = base_3.catch(argument7)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test521.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)