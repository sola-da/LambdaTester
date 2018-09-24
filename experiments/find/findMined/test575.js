





var callbackArguments = [];
var argument1 = function (doc) {
 callbackArguments.push(arguments) 

    return doc.a === 5;
};
var argument2 = null;
var argument3 = 100;
var argument4 = function (d) {
 callbackArguments.push(arguments) 

    return d._id === id3;
};
var argument5 = true;
var argument6 = true;
var argument7 = function (d) {
 callbackArguments.push(arguments) 

    return d.somedata === 'another';
};
var argument8 = r_2;
var argument9 = function (err, ids) {
 callbackArguments.push(arguments) 

    t.ok(!err, 'There was en error while finding the second time');
    t.same(ids, [], 'Remove did not remove the correct instance. Uh-Oh.... :D ');
    t.done();
};
var argument10 = r_0;
var base_0 = ["HD9 ","wj","zn4","*z","S",":Uw:lSM&","F8","Y","i"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["HD9 ","wj","zn4","*z","S",":Uw:lSM&","F8","Y","i"]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5,argument6)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["HD9 ","wj","zn4","*z","S",":Uw:lSM&","F8","Y","i"]
var r_2= undefined
try {
r_2 = base_2.find(argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["HD9 ","wj","zn4","*z","S",":Uw:lSM&","F8","Y","i"]
var r_3= undefined
try {
r_3 = base_3.find(argument9,argument10)
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
require("fs").writeFileSync("./experiments/find/findMined/test575.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)