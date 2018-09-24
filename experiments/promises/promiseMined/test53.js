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
                start: 22,
                end: 26
            },
            {
                start: 50,
                end: 54
            },
            {
                start: 78,
                end: 82
            }
        ]);
    } finally {
        tearDown();
    }
};
var argument3 = "ct";
var argument4 = function (err) {
 callbackArguments.push(arguments) 

    errors.logAndThrowError(err, 'Error exporting data', '');
};
var argument5 = 969;
var argument6 = p1;
var argument7 = function (results) {
 callbackArguments.push(arguments) 

    try {
        assertOccurrences(results, [{
                start: 44,
                end: 49
            }]);
    } finally {
        tearDown();
    }
};
var argument8 = p1;
var argument9 = "";
var argument10 = 5e-324;
var argument11 = function (results) {
 callbackArguments.push(arguments) 

    try {
        assertOccurrences(results, [
            {
                start: 31,
                end: 32
            },
            {
                start: 54,
                end: 55
            },
            {
                start: 79,
                end: 80
            },
            {
                start: 89,
                end: 90
            }
        ]);
    } finally {
        tearDown();
    }
};
var argument12 = false;
var base_0 = p1
var r_0= undefined
try {
r_0 = base_0.then(argument1,argument2,argument3)
}
catch(e) {
r_0= e.message
}
var base_1 = p2
var r_1= undefined
try {
r_1 = base_1.catch(argument4,argument5,argument6)
}
catch(e) {
r_1= e.message
}
var base_2 = p1
var r_2= undefined
try {
r_2 = base_2.then(argument7,argument8,argument9)
}
catch(e) {
r_2= e.message
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.then(argument10,argument11,argument12)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test53.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)