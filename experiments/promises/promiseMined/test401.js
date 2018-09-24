/**
 * Created by marija on 22.02.18.
 */



var p1 = Promise.resolve(18);
var p2 = Promise.reject(17);








var callbackArguments = [];
var argument1 = function (doc) {
 callbackArguments.push(arguments) 

    if (doc._rev !== rev) {
        throw errors.REV_CONFLICT;
    }
    return createAttachment(doc);
};
var argument2 = {"627":714,"5.52361067122452e+307":"","1.7756775979683735e+308":"","I":"","1.7976931348623157e+308":":"};
var argument3 = function (results) {
 callbackArguments.push(arguments) 

    try {
        assertOccurrences(results, [
            {
                start: 45,
                end: 47
            },
            {
                start: 59,
                end: 61
            }
        ]);
    } finally {
        tearDown();
    }
};
var argument4 = p1;
var argument5 = function () {
 callbackArguments.push(arguments) 

    return false;
};
var argument6 = null;
var argument7 = true;
var argument8 = function () {
 callbackArguments.push(arguments) 

    return mite;
};
var base_0 = p2
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
r_1 = base_1.then(argument2,argument3,argument4)
}
catch(e) {
r_1= e.message
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.catch(argument5,argument6,argument7)
}
catch(e) {
r_2= e.message
}
var base_3 = p2
var r_3= undefined
try {
r_3 = base_3.then(argument8)
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
require("fs").writeFileSync("./experiments/promises/promiseMined/test401.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)