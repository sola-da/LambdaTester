





var callbackArguments = [];
var argument1 = function (doc) {
 callbackArguments.push(arguments) 

    return doc._id === doc2._id;
};
var argument2 = function (doc) {
 callbackArguments.push(arguments) 

    return doc._id === doc1._id;
};
var argument3 = {"100":8.444544937135552e+307,"893":893,"":"","v":627,"6.891391170198053e+307":-1};
var argument4 = null;
var argument5 = function (err, ids) {
 callbackArguments.push(arguments) 

    t.ok(!err, 'Unexpected redis error in custom query');
    t.same(ids, [
        3,
        8
    ], 'The found ids were incorrect.');
    t.done();
};
var argument6 = "(]";
var argument7 = function (doc) {
 callbackArguments.push(arguments) 

    return doc.a === 42;
};
var argument8 = "f!BO";
var argument9 = null;
var base_0 = [893,"6",823,"Ad"]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [893,"6",823,"Ad"]
var r_1= undefined
try {
r_1 = base_1.find(argument2,argument3,argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = [893,"6",823,"Ad"]
var r_2= undefined
try {
r_2 = base_2.find(argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [893,"6",823,"Ad"]
var r_3= undefined
try {
r_3 = base_3.find(argument7,argument8,argument9)
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
require("fs").writeFileSync("./experiments/find/findMined/test333.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)