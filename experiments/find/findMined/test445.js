





var callbackArguments = [];
var argument1 = function (doc) {
 callbackArguments.push(arguments) 

    return doc._id === doc3._id;
};
var argument2 = false;
var argument3 = {"157":"Pb"};
var argument4 = function (err, ids) {
 callbackArguments.push(arguments) 

    t.same(0, ids.length, 'Searching for a nonexistant index did not return an empty array.');
    t.done();
};
var argument5 = false;
var argument6 = function (item, idx) {
 callbackArguments.push(arguments) 

    return idx === 0;
};
var argument7 = "d";
var argument8 = function (err, ids) {
 callbackArguments.push(arguments) 

    errLogger(err);
    t.ok(ids.length > 54, 'The limit: 0 option did not return more than 50 ids.');
    t.done();
};
var argument9 = null;
var base_0 = ["7jA","aQ9=","r2DO1","8r","%:J","q","5",";!C","Sl"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["7jA","aQ9=","r2DO1","8r","%:J","q","5",";!C","Sl"]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["7jA","aQ9=","r2DO1","8r","%:J","q","5",";!C","Sl"]
var r_2= undefined
try {
r_2 = base_2.find(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["7jA","aQ9=","r2DO1","8r","%:J","q","5",";!C","Sl"]
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
require("fs").writeFileSync("./experiments/find/findMined/test445.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)