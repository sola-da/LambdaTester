/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = false;
var argument2 = function (status, _body, _mimeType, revision) {
 callbackArguments.push(arguments) 

    if (status === 200 || status === 201) {
        return revision;
    } else {
        throw 'Request (PUT ' + self.makePath(path) + ') failed with status: ' + status;
    }
};
var argument3 = r_0;
var argument4 = {"59":242,"969":"sqn","1.3112379873591054e+308":",","z*`H>Pbz":2.272134136695333e+307};
var argument5 = function (results) {
 callbackArguments.push(arguments) 

    try {
        assertOccurrences(results, [
            {
                start: 15,
                end: 19
            },
            {
                start: 42,
                end: 46
            },
            {
                start: 58,
                end: 62
            }
        ]);
    } finally {
        tearDown();
    }
};
var argument6 = function (e) {
 callbackArguments.push(arguments) 

    deferred.reject(e);
};
var argument7 = true;
var argument8 = false;
var argument9 = true;
var argument10 = function (results) {
 callbackArguments.push(arguments) 

    try {
        assertOccurrences(results, [
            {
                start: 16,
                end: 21
            },
            {
                start: 70,
                end: 75
            }
        ]);
    } finally {
        tearDown();
    }
};
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
var base_2 = p1
var r_2= undefined
try {
r_2 = base_2.catch(argument6,argument7,argument8)
}
catch(e) {
r_2= e.message
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.then(argument9,argument10)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test823.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)