/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function (files) {
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
var argument2 = 1.4216129216091703e+308;
var argument3 = 1.3585281569266473e+308;
var argument4 = {"213":157,"<6-":"X%x","9.12287810829114e+307":""};
var argument5 = function (results) {
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
var argument6 = true;
var argument7 = function (results) {
 callbackArguments.push(arguments) 

    try {
        assertOccurrences(results, [
            {
                start: 28,
                end: 29
            },
            {
                start: 44,
                end: 45
            }
        ]);
    } finally {
        tearDown();
    }
};
var argument8 = 783;
var argument9 = function (err) {
 callbackArguments.push(arguments) 

    delete pending[rev];
    console.log(err);
    return BPromise.reject(err);
};
var argument10 = null;
var argument11 = false;
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
r_1 = base_1.then(argument4,argument5)
}
catch(e) {
r_1= e.message
}
var base_2 = p2
var r_2= undefined
try {
r_2 = base_2.then(argument6,argument7,argument8)
}
catch(e) {
r_2= e.message
}
var base_3 = r_2
var r_3= undefined
try {
r_3 = base_3.catch(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test153.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)