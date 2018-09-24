





var callbackArguments = [];
var argument1 = function (o) {
 callbackArguments.push(arguments) 

    return o.ServerOrderId === order;
};
var argument2 = null;
var argument3 = [")%e2Q7",">","8Y","3","K","wm*","wE","Xdo(CM","?W","nw"];
var argument4 = function (doc) {
 callbackArguments.push(arguments) 

    return doc._id === _doc2._id;
};
var argument5 = r_0;
var argument6 = function (err, ids) {
 callbackArguments.push(arguments) 

    t.ok(!err, 'Unexpected redis error in custom query');
    t.same([1], ids, 'Defining an endpoint failed.');
    t.done();
};
var argument7 = null;
var argument8 = r_0;
var argument9 = function (plugin) {
 callbackArguments.push(arguments) 

    return plugin.name === name;
};
var argument10 = r_0;
var argument11 = false;
var base_0 = ["O","asw","c]09","J#(K","X9"]
var r_0= undefined
try {
r_0 = base_0.find(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["O","asw","c]09","J#(K","X9"]
var r_1= undefined
try {
r_1 = base_1.find(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["O","asw","c]09","J#(K","X9"]
var r_2= undefined
try {
r_2 = base_2.find(argument6,argument7,argument8)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["O","asw","c]09","J#(K","X9"]
var r_3= undefined
try {
r_3 = base_3.find(argument9,argument10,argument11)
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
require("fs").writeFileSync("./experiments/find/findMined/test242.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)