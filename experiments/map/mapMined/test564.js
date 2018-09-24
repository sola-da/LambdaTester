





var callbackArguments = [];
var argument1 = function (id) {
 callbackArguments.push(arguments) 

    return attributes.as().find(id);
};
var argument2 = 969;
var argument3 = true;
var argument4 = function (v, k) {
 callbackArguments.push(arguments) 

    return k + '=' + v;
};
var argument5 = function (p) {
 callbackArguments.push(arguments) 

    return Math.abs(p - median);
};
var argument6 = function (c) {
 callbackArguments.push(arguments) 

    return c.toString();
};
var argument7 = "";
var base_0 = [-1,"W",655,655,"V)",242,"-cGR",213,82]
var r_0= undefined
try {
r_0 = base_0.map(argument1,argument2,argument3)
}
catch(e) {
r_0= "Error"
}
var base_1 = [-1,"W",655,655,"V)",242,"-cGR",213,82]
var r_1= undefined
try {
r_1 = base_1.map(argument4)
}
catch(e) {
r_1= "Error"
}
var base_2 = r_1
var r_2= undefined
try {
r_2 = base_2.map(argument5)
}
catch(e) {
r_2= "Error"
}
var base_3 = r_1
var r_3= undefined
try {
r_3 = base_3.map(argument6,argument7)
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
require("fs").writeFileSync("./experiments/map/mapMined/test564.json",JSON.stringify({"baseObjects":serialize([base_0,base_1,base_2,base_3]),"returnObjects":serialize([r_0,r_1,r_2,r_3]),"callbackArgs":callbackArguments}))
},300)