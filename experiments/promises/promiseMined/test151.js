/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function (supportResult) {
 callbackArguments.push(arguments) 

    driverSupport[driverName] = supportResult;
    CustomDrivers[driverName] = driverObject;
    resolve();
};
var argument2 = function (results) {
 callbackArguments.push(arguments) 

    try {
        assertOccurrences(results, [
            {
                start: 9,
                end: 14
            },
            {
                start: 20,
                end: 25
            },
            {
                start: 38,
                end: 43
            },
            {
                start: 49,
                end: 54
            }
        ]);
    } finally {
        tearDown();
    }
};
var argument3 = function (err) {
 callbackArguments.push(arguments) 

    done();
};
var argument4 = r_1;
var argument5 = p1;
var argument6 = function (res) {
 callbackArguments.push(arguments) 

    if (_.isFunction(options.onError))
        options.onError.call(_this, res);
    $q.reject(res);
};
var argument7 = [403,"&","o",655,"nTV",893,"uR"];
var base_0 = p1
var r_0= undefined
try {
r_0 = base_0.then(argument1)
}
catch(e) {
r_0= e.message
}
var base_1 = r_0
var r_1= undefined
try {
r_1 = base_1.then(argument2)
}
catch(e) {
r_1= e.message
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.catch(argument3,argument4,argument5)
}
catch(e) {
r_2= e.message
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.then(argument6,argument7)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test151.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)