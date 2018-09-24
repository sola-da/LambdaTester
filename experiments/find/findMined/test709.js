





var callbackArguments = [];
var argument1 = function (doc) {
 callbackArguments.push(arguments) 

    return doc.z === '1';
};
var argument2 = function (doc) {
 callbackArguments.push(arguments) 

    return doc._id === doc1._id;
};
var argument3 = true;
var argument4 = function (level) {
 callbackArguments.push(arguments) 

    return level.name == levelName;
};
var argument5 = {"82":":","403":"","627":25,"893":893,";":25,"":1.2571403592088237e+308,"3.934279746202561e+307":"Ov","V":"?","-1":"F"};
var argument6 = r_1;
var argument7 = function (err, ids) {
 callbackArguments.push(arguments) 

    if (err) {
        console.dir(err);
    }
    t.same(ids, [userUnique.id], 'The found id did not match the id of the saved object.');
    t.done();
};
var argument8 = "dHV";
var argument9 = 1.3123865407992378e+308;
var base_0 = [100,"h",-100,"U","?$5W",-1]
var r_0= undefined
try {
r_0 = base_0.find(argument1)
}
catch(e) {
r_0= "Error"
}
var base_1 = [100,"h",-100,"U","?$5W",-1]
var r_1= undefined
try {
r_1 = base_1.find(argument2,argument3)
}
catch(e) {
r_1= "Error"
}
var base_2 = [100,"h",-100,"U","?$5W",-1]
var r_2= undefined
try {
r_2 = base_2.find(argument4,argument5,argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = [100,"h",-100,"U","?$5W",-1]
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
require("fs").writeFileSync("./experiments/find/findMined/test709.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)