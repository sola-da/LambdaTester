/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function () {
 callbackArguments.push(arguments) 

    foo = true;
};
var argument2 = function () {
 callbackArguments.push(arguments) 

    return false;
};
var argument3 = function (results) {
 callbackArguments.push(arguments) 

    try {
        assertOccurrences(results, [
            {
                start: 79,
                end: 80
            },
            {
                start: 86,
                end: 87
            },
            {
                start: 112,
                end: 113
            },
            {
                start: 125,
                end: 126
            }
        ]);
    } finally {
        tearDown();
    }
};
var argument4 = "uN";
var argument5 = function (err) {
 callbackArguments.push(arguments) 

    destination.requireDestinationTag = false;
    destination.balance = 0;
    return destination;
};
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
r_1 = base_1.catch(argument2)
}
catch(e) {
r_1= e.message
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.then(argument3,argument4)
}
catch(e) {
r_2= e.message
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.catch(argument5)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test74.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)