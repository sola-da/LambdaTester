/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function (results) {
 callbackArguments.push(arguments) 

    try {
        assertOccurrences(results, [{
                start: 60,
                end: 61
            }]);
    } finally {
        tearDown();
    }
};
var argument2 = function (results) {
 callbackArguments.push(arguments) 

    try {
        assertOccurrences(results, [
            {
                start: 4,
                end: 5
            },
            {
                start: 17,
                end: 18
            },
            {
                start: 29,
                end: 30
            }
        ]);
    } finally {
        tearDown();
    }
};
var argument3 = null;
var argument4 = function (files) {
 callbackArguments.push(arguments) 

    return util.map(files, function (filename) {
        return require('./' + filename.slice(0, -3)).then(function (module) {
            var name = filename.slice(0, -11);
            return {
                regexp: new RegExp('^/' + name.replace(/\//g, '\\/') + '(\\/.*)?$'),
                module: module
            };
        });
    });
};
var argument5 = null;
var argument6 = function (delegationResult) {
 callbackArguments.push(arguments) 

    return delegationResult.id_token;
};
var argument7 = {"25":655,"783":1.7696043233766397e+308,"O8":"","y":893,"":"","-1":-100,"&":"","^F":3.575309215254387e+307};
var base_0 = p1
var r_0= undefined
try {
r_0 = base_0.then(argument1)
}
catch(e) {
r_0= e.message
}
var base_1 = p1
var r_1= undefined
try {
r_1 = base_1.then(argument2)
}
catch(e) {
r_1= e.message
}
var base_2 = p1
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
r_3 = base_3.then(argument5,argument6,argument7)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test645.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)