/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function (file) {
 callbackArguments.push(arguments) 

    return Windows.Storage.FileIO.readTextAsync(file);
};
var argument2 = function (results) {
 callbackArguments.push(arguments) 

    try {
        assertOccurrences(results, [
            {
                start: 8,
                end: 9
            },
            {
                start: 20,
                end: 21
            },
            {
                start: 57,
                end: 58
            }
        ]);
    } finally {
        tearDown();
    }
};
var argument3 = true;
var argument4 = true;
var argument5 = function (results) {
 callbackArguments.push(arguments) 

    try {
        assertOccurrences(results, [
            {
                start: 48,
                end: 49
            },
            {
                start: 78,
                end: 79
            },
            {
                start: 88,
                end: 89
            },
            {
                start: 100,
                end: 101
            }
        ]);
    } finally {
        tearDown();
    }
};
var argument6 = {"":9.502910530014696e+307,"hc":627};
var argument7 = function (error) {
 callbackArguments.push(arguments) 

    done();
};
var base_0 = p1
var r_0= undefined
try {
r_0 = base_0.then(argument1)
}
catch(e) {
r_0= e.message
}
var base_1 = p2
var r_1= undefined
try {
r_1 = base_1.then(argument2,argument3)
}
catch(e) {
r_1= e.message
}
var base_2 = p1
var r_2= undefined
try {
r_2 = base_2.then(argument4,argument5,argument6)
}
catch(e) {
r_2= e.message
}
var base_3 = r_0
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test272.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)