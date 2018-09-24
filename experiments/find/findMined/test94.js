





var callbackArguments = [];
var argument1 = function (err, ids) {
 callbackArguments.push(arguments) 

    t.ok(!err, 'Unexpected finding error');
    t.same(ids, [saveObj.id], 'The found id did not match the id of the saved object.');
    t.done();
};
var argument2 = {"893":5.126874849159552e+307,"1.1541176978952858e+308":2.7691271501755113e+307,"1.4185457887051017e+308":714};
var argument3 = function (plugin) {
 callbackArguments.push(arguments) 

    return plugin.name === name;
};
var argument4 = {"0":"bo?U","705":"","":"]",";":25,"D":"","1.7100421441450405e+308":"","1.8621727116866405e+307":""};
var argument5 = true;
var argument6 = function (err, ids) {
 callbackArguments.push(arguments) 

    t.ok(!err, 'Unexpected redis error in custom query');
    t.same(ids, [
        3,
        8
    ], 'The found ids were incorrect.');
    t.done();
};
var argument7 = r_0;
var argument8 = function (doc) {
 callbackArguments.push(arguments) 

    return doc._id === doc3._id;
};
var argument9 = r_1;
var base_0 = [59,823,705,618,126]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = [59,823,705,618,126]
var r_1= undefined
try {
r_1 = base_1.find(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = [59,823,705,618,126]
var r_2= undefined
try {
r_2 = base_2.find(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = [59,823,705,618,126]
var r_3= undefined
try {
r_3 = base_3.find(argument8,argument9)
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
require("fs").writeFileSync("./experiments/find/findMined/test94.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)