/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function () {
 callbackArguments.push(arguments) 

    deferred.reject.apply(deferred, arguments);
};
var argument2 = p2;
var argument3 = null;
var argument4 = function (results) {
 callbackArguments.push(arguments) 

    try {
        assertOccurrences(results, [
            {
                start: 4,
                end: 5
            },
            {
                start: 25,
                end: 26
            },
            {
                start: 36,
                end: 37
            }
        ]);
    } finally {
        tearDown();
    }
};
var argument5 = ["P","T^","_bko","0","0=1 ","cn"];
var argument6 = function (results) {
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
var argument7 = {"49":"3X","893":82,"1.7950494860643479e+307":1.7968443044183538e+308,"":"I","4.571770232811845e+307":4.807339303602806e+307};
var argument8 = false;
var argument9 = function () {
 callbackArguments.push(arguments) 

    return false;
};
var argument10 = 126;
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
r_1 = base_1.then(argument3,argument4,argument5)
}
catch(e) {
r_1= e.message
}
var base_2 = p1
var r_2= undefined
try {
r_2 = base_2.then(argument6,argument7,argument8)
}
catch(e) {
r_2= e.message
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.catch(argument9,argument10)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test785.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)