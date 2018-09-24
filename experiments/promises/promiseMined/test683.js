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
                start: 15,
                end: 16
            },
            {
                start: 26,
                end: 27
            }
        ]);
    } finally {
        tearDown();
    }
};
var argument3 = function (error) {
 callbackArguments.push(arguments) 

    logError(common.unexpectedOutcome(error));
};
var argument4 = null;
var argument5 = function () {
 callbackArguments.push(arguments) 

    return runCommand(ember, 'generate', 'model', '--help', {
        onOutput: function (string) {
            output += string;
        }
    });
};
var argument6 = 460;
var argument7 = {"59":1.4222511071076676e+308,"126":"]","403":"V","714":"","1.4508715229753978e+308":"","1.558371262070275e+308":-100,"":"Kc","7.152180681931094e+307":"s'$","<":""};
var argument8 = function (value) {
 callbackArguments.push(arguments) 

    var deferred = defer();
    setTimeout(function () {
        deferred.resolve(value);
    }, timeout);
    return deferred.promise;
};
var base_0 = p2
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
r_1 = base_1.then(argument3)
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
var base_3 = p2
var r_3= undefined
try {
r_3 = base_3.then(argument7,argument8)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test683.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)