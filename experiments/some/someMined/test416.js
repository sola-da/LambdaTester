





var callbackArguments = [];
var argument1 = function (r) {
 callbackArguments.push(arguments) 

    return comparePoints(r.start, start) <= 0 && comparePoints(r.end, end) >= 0;
};
var argument2 = ["D","cX]o_",":","a","r5","<","=","^z|1","_"];
var argument3 = function (t) {
 callbackArguments.push(arguments) 

    return typeof t === 'object';
};
var argument4 = null;
var argument5 = function cb_some(pair) {
 callbackArguments.push(arguments) 

    return pair[0] === 'Framework' && pair[1] === 'express';
};
var argument6 = function (db) {
 callbackArguments.push(arguments) 

    return db.id === doc.id;
};
var base_0 = [100,969,0,893,823,893]
var r_0= undefined
try {
r_0 = base_0.some(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [100,969,0,893,823,893]
var r_1= undefined
try {
r_1 = base_1.some(argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [100,969,0,893,823,893]
var r_2= undefined
try {
r_2 = base_2.some(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = [100,969,0,893,823,893]
var r_3= undefined
try {
r_3 = base_3.some(argument6)
}
catch(e) {
r_3= "Error"
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
require("fs").writeFileSync("./experiments/some/someMined/test416.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)