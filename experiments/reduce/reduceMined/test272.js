





var callbackArguments = [];
var argument1 = function (m, kvs) {
 callbackArguments.push(arguments) 

    var kv = kvs.split('=');
    m[decodeURIComponent(kv[0])] = decodeURIComponent(kv[1]);
    return m;
};
var argument2 = null;
var argument3 = false;
var argument4 = function (acc, e) {
 callbackArguments.push(arguments) 

    if (acc.indexOf("Error") === -1) {
        acc.push("Error");
    }
    return acc;
};
var argument5 = false;
var argument6 = function (acc, parent) {
 callbackArguments.push(arguments) 

    return util.mergeObjects(acc, parent.queryParams);
};
var argument7 = null;
var argument8 = function (a, b) {
 callbackArguments.push(arguments) 

    return a + b;
};
var argument9 = null;
var argument10 = r_1;
var base_0 = ["#","@","T","X|","l","]=G"]
var r_0= undefined
try {
r_0 = base_0.reduce(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["#","@","T","X|","l","]=G"]
var r_1= undefined
try {
r_1 = base_1.reduce(argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = ["#","@","T","X|","l","]=G"]
var r_2= undefined
try {
r_2 = base_2.reduce(argument6,argument7)
}
catch(e) {
r_2= "Error"
}
var base_3 = ["#","@","T","X|","l","]=G"]
var r_3= undefined
try {
r_3 = base_3.reduce(argument8,argument9,argument10)
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
require("fs").writeFileSync("./experiments/reduce/reduceMined/test272.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)