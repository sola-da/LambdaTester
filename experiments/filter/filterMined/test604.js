





var callbackArguments = [];
var argument1 = function (f) {
 callbackArguments.push(arguments) 

    return !!f;
};
var argument2 = null;
var argument3 = function (msg) {
 callbackArguments.push(arguments) 

    return msg;
};
var argument4 = true;
var argument5 = "m";
var argument6 = function (s) {
 callbackArguments.push(arguments) 

    return s[vars.id.value] == c[vars.id.value];
};
var argument7 = function (node) {
 callbackArguments.push(arguments) 

    if (node.nodeType !== 1) {
        node.parentNode.removeChild(node);
    } else {
        return true;
    }
};
var argument8 = r_3;
var base_0 = ["rY","b","2","sGm","gn"]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2)
}
catch(e) {
r_0= "Error"
}
var base_1 = ["rY","b","2","sGm","gn"]
var r_1= undefined
try {
r_1 = base_1.filter(argument3,argument4,argument5)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.filter(argument6)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.filter(argument7,argument8)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test604.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)