





var callbackArguments = [];
var argument1 = function (o) {
 callbackArguments.push(arguments) 

    return o != null;
};
var argument2 = 969;
var argument3 = true;
var argument4 = function (d) {
 callbackArguments.push(arguments) 

    return d[vars.id.value] == id;
};
var argument5 = function (b) {
 callbackArguments.push(arguments) 

    return checks.indexOf(b[vars.id.value]) >= 0;
};
var argument6 = function (d) {
 callbackArguments.push(arguments) 

    return d && isValue(d.value);
};
var argument7 = "";
var base_0 = [-1,"W",655,655,"V)",242,"-cGR",213,82]
var r_0= undefined
try {
r_0 = base_0.filter(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-1,"W",655,655,"V)",242,"-cGR",213,82]
var r_1= undefined
try {
r_1 = base_1.filter(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_0
var r_2= undefined
try {
r_2 = base_2.filter(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_0
var r_3= undefined
try {
r_3 = base_3.filter(argument6,argument7)
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
require("fs").writeFileSync("./experiments/filter/filterMined/test533.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)